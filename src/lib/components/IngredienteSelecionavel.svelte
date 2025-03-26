<script lang="ts">
  import { minhaLista } from "$lib/stores/minhalista";
  import Tag from "./Tag.svelte";

  export let ingrediente: string;
  $:selecionado = $minhaLista.includes(ingrediente);

  function clicado() {
    if (!selecionado) {
      minhaLista.adicionarIngrediente(ingrediente);
    } else {
      minhaLista.removerIngrediente(ingrediente);
    }
  }
</script>

<button on:click={clicado}>
  <Tag ativa={selecionado}>
    {ingrediente}
  </Tag>
</button>

<style>
  button {
    cursor: pointer;
  }
</style>
