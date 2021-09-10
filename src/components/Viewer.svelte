<script lang="ts">
    import { onMount } from 'svelte';
    export let content;
    import marked from 'marked';
    /* import Asciidoctor from '@asciidoctor/core'; */
    /* const processor = Asciidoctor(); */
    
    let rendered: HTMLElement;

    function convert(text){
        /* fetch('http://localhost:8000/', */
        /*     { */
        /*         method: 'POST', */
        /*         headers: { */
        /*             'Content-Type': 'application/json' */
        /*         }, */
        /*         body: JSON.stringify({ */
        /*             raw: text, */
        /*         }) */
        /*     }) */
        /* .then(response => response.text()) */
        /* .then(data => rendered.innerHTML = data) */
        if (rendered){
            rendered.innerHTML = marked(text);
        }
    }

    onMount(() => {
        rendered.innerHTML = marked(content);
    })

    $: convert(content)
</script>

<main class="flex-1 h-full w-full md:w-1/2 p-4 md:block hidden">
    <div bind:this={rendered} class="h-full w-full"></div>
</main>
