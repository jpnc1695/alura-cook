<script lang="ts">
  import "../app.css";

  import Titulo from "$components/Titulo.svelte";
  import categorias from "$lib/json/categorias.json";
  import Categoria from "$components/Categoria.svelte";
  import TagLink from "$components/TagLink.svelte";

  import { minhaLista } from "$lib/stores/minhalista";
  import { beforeNavigate } from "$app/navigation";

  $: listaVazia = $minhaLista.length === 0;

  beforeNavigate((navigation) => {
    console.log(navigation);
    if (listaVazia && navigation.to?.route.id === "/receitas") {
      navigation.cancel();
    }
  });
</script>

<svelte:head>
  <title>Alura Cook</title>
</svelte:head>
<!-- 
{#if $minhaLista.length}
  <div class="minha-lista-container">
    <MinhaLista />

    <div class="divisoria"></div>
  </div>
{/if} -->

<main>
  <Titulo tag="h1">Ingredientes</Titulo>

  <div class="info">
    <p>Selecione abaixo os ingredientes que você deseja usar nesta refeição:</p>
    <p>*Atenção: consideramos que você tenha em casa sal, pimenta e água.</p>
  </div>

  <ul class="categorias">
    {#each categorias as categoria (categoria.nome)}
      <li>
        <Categoria {categoria} />
      </li>
    {/each}
  </ul>

  <div class="buscar-receitas">
    <TagLink
      textoDaTag={"Buscar Receitas"}
      href={"/receitas"}
      desabilitada={listaVazia}
    />
  </div>
</main>

<style>
  .info {
    margin-bottom: 3.375rem;
  }

  .info > p {
    line-height: 2rem;
  }

  .categorias {
    margin-bottom: 4.6875rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .buscar-receitas {
    display: flex;
    justify-content: center;
  }
</style>
