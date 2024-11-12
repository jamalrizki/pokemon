<script>
  import { battleStore, attack, damageStore } from "$lib/js/battle-store.js";
  import PokemonCard from "$lib/components/PokemonCard.svelte";

  let damage
  let isCritical 
  let recentDefender
  let winner;

  damageStore.subscribe((event) => {
    damage = event.damage;
    isCritical = event.isCritical;
    recentDefender = event.defender;
    winner = event.winner;
  });

  function handleAttack(event) {
    let attacker = event.detail.attacker;
    let defender = $battleStore.find((pokemon) => pokemon.dexNumber !== attacker.dexNumber);
    attack(attacker, defender); 
  }

</script>
<div class="pokemon-container">
  {#each $battleStore as pokemon (pokemon.dexNumber)}
  <PokemonCard 
      pokemon={pokemon} 
      damage={recentDefender === pokemon.dexNumber ? damage : null}
      isCritical={isCritical && recentDefender === pokemon.dexNumber} 
      winner={winner}
      recentDefender={recentDefender}
      on:attack={handleAttack} />
  {/each}
</div>

<style>
  .pokemon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 600px) {
    .pokemon-container {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
