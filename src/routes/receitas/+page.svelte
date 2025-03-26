<script lang="ts">
  import Titulo from "$components/Titulo.svelte";
  import Receitas from "$components/Receitas.svelte";
  import receitas from "$lib/json/receitas.json";
  import TagLink from "$components/TagLink.svelte";

  import type IReceita from "$lib/Interface/IReceitas";
  import { minhaLista } from "$lib/stores/minhalista";

  let receitasFiltradas: IReceita[];

  $: receitasFiltradas = receitas.filter((receita) =>
    receita.ingredientes.every((ingrediente) =>
      $minhaLista.includes(ingrediente)
    )
  );
</script>

<svelte:head>
  <title>Receitas!!!</title>
</svelte:head>

<main>
  <Titulo tag="h1"></Titulo>

  <div class="info">
    <p class="verde">Resultados encontrados: {receitasFiltradas.length}</p>

    {#if receitasFiltradas.length}
      <p>
        Veja as opções de receitas que encontramos com os ingredientes
        selecionados!!!
      </p>
    {:else}
      <p>Não encontramos receitas com o(s) ingrediente(s) selecionados.</p>
    {/if}

    {#if receitasFiltradas.length}
      <ul class="receitas">
        {#each receitasFiltradas as receita (receita.nome)}
          <li>
            <Receitas {receita} />
          </li>
        {/each}
      </ul>
    {/if}

    <div class="editar-lista">
      <TagLink
        href={"/"}
        textoDaTag={"Editar lista de ingredientes "}
        desabilitada={false}
      />
    </div>
  </div>
</main>

<style>
  .info {
    margin-bottom: 3.375rem;
  }

  .info > p {
    line-height: 2rem;
  }

  .info > p.verde {
    color: var(--verde);
  }

  .receitas {
    text-align: start;
    margin-bottom: 3.75rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .editar-lista {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style-type: none;
  }
</style>
