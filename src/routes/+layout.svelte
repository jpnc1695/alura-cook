<script>
  import "../app.css";

  import Cabecalho from "$components/Cabecalho.svelte";
  import MinhaLista from "$components/MinhaLista.svelte";
  import Rodape from "$components/Rodape.svelte";
  import { minhaLista } from "$lib/stores/minhalista";
</script>

<div class="container-principal">
  <Cabecalho />

  <div class="estilo-principal">
    {#if $minhaLista.length}
      <div class="minha-lista-container">
        <MinhaLista />
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <div class="divisoria" />
      </div>
    {/if}

    <slot />
  </div>

  <Rodape />
</div>

<style>
  .estilo-principal {
    text-align: center;
    padding: 0 5vw 3.375rem;
    flex: 1;
  }
  .container-principal {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .minha-lista-container {
    margin-bottom: 2rem;
  }

  .divisoria {
    width: 40vw;
    height: 2px;
    background-color: var(--verde);
    margin: 0 auto;
  }
</style>
