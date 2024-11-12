<script>
  import { createEventDispatcher } from "svelte";
  export let pokemon;
  export let damage;
  export let isCritical;
  export let winner;
  export let recentDefender;

  const dispatch = createEventDispatcher();

  function handleAttack() {
    dispatch("attack", { attacker: pokemon });
  }
</script>

<div
  class="pokemon-card"
  class:won={winner === pokemon.dexNumber}
  class:lost={recentDefender === pokemon.dexNumber && pokemon.hp === 0}
>
  {#if winner === pokemon.dexNumber}
    <img src="/king.png" class="pokemon-image-win fade-in" alt="king" />
  {/if}
  <img
    src={pokemon.imageUrl}
    class:opacity={winner === pokemon.dexNumber}
    class:img-effect={damage}
    alt={pokemon.name}
    class="pokemon-image"
  />
  <div class="pokemon-info">
    {#if winner === pokemon.dexNumber}
      <h2 class="fade-in">{pokemon.name} Won!!!</h2>
    {:else}
      <h2>{pokemon.name}</h2>
    {/if}

    <div class="hp-bar" class:borderEffect={damage}>
      <div
        class:hp-bar-fill={pokemon.hp / pokemon.maxHp >= 0.2}
        class:hp-bar-fill-low={pokemon.hp / pokemon.maxHp < 0.2}
        style="width: {(pokemon.hp / pokemon.maxHp) * 100}%;"
      ></div>
    </div>
    <p class:hp-low={pokemon.hp / pokemon.maxHp < 0.2}>
      HP: {pokemon.hp} / {pokemon.maxHp}
    </p>
    {#if damage}
      <div class="damage-indicator" class:critical={isCritical}>
        - {damage}
        {isCritical ? "Critical Hit!" : ""}
      </div>
    {/if}
    <button class="btn" on:click={handleAttack} disabled={!pokemon.canAttack}> ATTACK! </button>
  </div>
</div>

<style>
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes lost {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.1;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes imgEffect {
    0% {
      transform: rotate(0deg) scale(1);
      border-radius: 0;
    }
    50% {
      transform: rotate(90deg) scale(0.5);
      border-radius: 50%;
    }
    100% {
      transform: rotate(0deg) scale(1);
      border-radius: 0;
    }
  }

  @keyframes floatUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }

  @keyframes box-shadow {
    from {
      box-shadow:
        rgba(255, 255, 255, 0.3) 0px 19px 38px,
        rgba(255, 255, 255, 0.22) 0px 15px 12px;
    }
    to {
      box-shadow:
        rgba(255, 255, 255, 0.6) 0px 159px 338px,
        rgba(255, 255, 255, 0.6) 0px 15px 312px;
    }
  }

  h2 {
    color: var(--gold);
    font-size: 28px;
    padding: 8px 0;
    text-shadow: 1px 3px 130px white;
  }

  p {
    color: white;
    padding: 10px 0 5px 0;
    font-size: 16px;
  }

  .hp-low {
    color: var(--gold);
    animation: blink 1s infinite;
  }
  .lost {
    animation: lost 3s ease-out forwards;
    transform: scale(0.8);
  }

  .fade-in {
    animation: fade-in 3s ease-out forwards;
  }
  .opacity {
    opacity: 80%;
  }
  .pokemon-card {
    margin-top: 30px;
    border-radius: 8px 8px 8px;
    padding: 0 0 10px 0;
    width: 300px;
    text-align: center;
    background-color: var(--midBlue);
    border: 1px solid var(--gold);
    box-shadow:
      rgba(255, 255, 255, 0.3) 0px 19px 38px,
      rgba(255, 255, 255, 0.22) 0px 15px 12px;
    position: relative;
    overflow: hidden;
    transition-duration: 3s;
    transition-property: transform;
  }
  .won {
    animation: box-shadow 5s ease-out forwards;
  }

  @media (max-width: 600px) {
    .pokemon-card {
      width: 80%;
    }
  }

  .hp-bar {
    background-color: var(--white);
    border-radius: 40px;
    overflow: hidden;
    height: 25px;
    width: 90%;
    margin: auto;
    border: 2px solid var(--darkBlue);
    transition: border-color 0.5s ease-out forwards; /* Animate border color */
  }

  .borderEffect {
    animation: borderEffect 0.5s ease-out forwards;
  }

  @keyframes borderEffect {
    0% {
      border-color: var(--darkBlue);
    }
    50% {
      border-color: white;
    }
    100% {
      border-color: var(--darkBlue);
    }
  }

  .hp-bar-fill {
    background-color: var(--lightBlue);
    height: 100%;
    border-radius: 0 40px 40px 0;
    transition: width 0.5s ease-out;
  }

  .hp-bar-fill-low {
    background-color: var(--gold);
    height: 100%;
    border-radius: 0 40px 40px 0;
    animation: blink 1s infinite;
    transition: width 0.5s ease-out;
  }

  .img-effect {
    animation: imgEffect 0.7s ease-out forwards;
  }

  .pokemon-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
    background-color: var(--gold);
  }

  .pokemon-image-win {
    position: absolute;
    right: 10px;
    top: 0%;
    background-color: var(--darkBlue);
    border-radius: 10px;
    z-index: 10;
    display: block;
    animation: blink 1s infinite;
  }

  .pokemon-info {
    padding-top: 8px;
    background-color: var(--darkBlue);
    position: relative;
  }

  .btn {
    background-color: var(--gold);
    color: var(--black);
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    width: 80px;
    height: 30px;
  }

  .btn:hover {
    background-color: var(--darkBlue);
    color: var(--gold);
    border: 1px solid var(--gold);
    transform: scale(1.1);
  }

  .btn:disabled {
    background-color: white;
    cursor: not-allowed;
  }

  .btn:focus {
    outline: none;
    border: 2px solid white;
  }

  .btn:active {
    background-color: var(--darkBlue);
    color: var(--gold);
  }

  .damage-indicator {
    position: absolute;
    right: 10px;
    top: 30%;
    font-size: 18px;
    color: white;
    animation: floatUp 1.2s ease-in-out forwards;
    z-index: 10;
    display: block;
  }

  .damage-indicator.critical {
    color: var(--gold) !important;
    font-weight: bold;
  }
</style>
