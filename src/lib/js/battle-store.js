import { writable } from "svelte/store";
import { pokedex } from "./pokedex.js";


export const battleStore = writable(getTwoRandomPokemon());
export const damageStore = writable({
  damage: null,
  isCritical: false,
  defender: null,
  winner: null,
});

/**
 * Performs an attack, from the given attacking pokemon to the given defending pokemon.
 *
 * @param {*} attacker The attacking pokemon
 * @param {*} defender The defending pokemon
 */
export function attack(attacker, defender) {
  console.log("from battle store Attacker:", attacker.name);
  console.log("from battle store Defender:", defender.name);
  if (!attacker.canAttack) return; // If the attacker can't actually attack, don't do anything.

  let damage = 0;  
  let isCritical = false;  
  let winner = null;

  function maxDamage(min = 10, max = 20) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function criticalHit() {
    let criticalHit = false;
    if (Math.floor(Math.random() * 100) < 10) {
      isCritical = true;
      criticalHit = true;
    }
    return criticalHit;
  }

  function actualDamage(maxDamage, currentHp) {
    return Math.min(maxDamage, currentHp);
  }

  function applyDamage() {
    if (criticalHit()) {
      damage = 40;
    } else {
      damage = maxDamage();
    }
    return actualDamage(damage, defender.hp);
  }

  defender.hp -= applyDamage();

  attacker.canAttack = false;
  if (defender.hp > 0) {
    defender.canAttack = true;
  } else {   
    winner = attacker.dexNumber
  }

  damageStore.set({
    damage: damage,
    isCritical: isCritical,
    defender: defender.dexNumber,
    winner: winner,
  });

  updateBattleStore(attacker, defender);
}

// Can be uncommented for debug purposes. Will log to the console everytime the store is updated.
// battleStore.subscribe(console.log);

/**
 * Gets two random pokemon. These pokemon will be copies of two different pokemon from the pokedex array, with two
 * additional properties:
 *
 * hp: The pokemon's current hp (as opposed to its maxHtp)
 * canAttack: True if the pokemon can currently attack, false otherwise.
 *
 * @returns an array of _copies_ of two random pokemon from the pokedex array.
 */
function getTwoRandomPokemon() {
  let index1 = 0;
  let index2 = 0;

  // Ensure that the two chosen pokemon are not the same.
  while (index1 === index2) {
    index1 = Math.floor(Math.random() * pokedex.length);
    index2 = Math.floor(Math.random() * pokedex.length);
  }

  return [
    { ...pokedex[index1], hp: pokedex[index1].maxHp, canAttack: true },
    { ...pokedex[index2], hp: pokedex[index2].maxHp, canAttack: false }
  ];
}

/**
 * Utility function that will cause the store to update as follows. The store will be
 * set to a copy of the existing battlers array, except:
 * - If the pokemon at that array index is the attacker, it will be set to a copy of the attacker
 * - If the pokemon at that array index is the defender, it will be set to a copy of the defender
 * - Otherwise, it will be kept as-is.
 *
 * @param {*} attacker the attacking pokemon
 * @param {*} defender the defending pokemon
 */
function updateBattleStore(attacker, defender) {
  battleStore.update((battlers) =>
    battlers.map((p) => {
      if (p.dexNumber === attacker.dexNumber) return { ...attacker };
      else if (p.dexNumber === defender.dexNumber) return { ...defender };
      else return p;
    })
  );
}
