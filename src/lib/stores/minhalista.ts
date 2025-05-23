import { writable } from "svelte/store";

 const {set, subscribe, update} = writable<string[]>([])

 export const minhaLista = {
    subscribe,
    set,
    adicionarIngrediente(ingrediente:string){
        update(valorAtual => [...valorAtual, ingrediente])
    },

    removerIngrediente(ingrediente:string){
        update(valorAtual => valorAtual.filter(
            item => item !== ingrediente
        ))
    }
 };











