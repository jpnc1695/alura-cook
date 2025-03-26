<script lang="ts">
  import Tag from "./Tag.svelte";
  export let textoDaTag: String;
  export let href: string;
  export let desabilitada: boolean;
</script>

<a {href}>
  <Tag ativa={true} tamanho="lg" {desabilitada}>{textoDaTag}</Tag>
</a>

