<script>
    import hljs from 'highlight.js/lib/core';
    import 'highlight.js/styles/atom-one-dark.css';
    import adoc from 'highlight.js/lib/languages/asciidoc.js';
    import { onMount } from 'svelte';
    let text = "= Heading";
    let codeblock;
    hljs.registerLanguage("adoc", adoc)

    function handleUpdate(_){
        console.log("TEXT CHANGED", text)
        codeblock.innerHTML = text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");
        hljs.highlightElement(codeblock);
    }
    onMount(() => {
        console.log('initial highlight')
        hljs.highlightAll();
    })
</script>

<main class="w-100 h-200">
    <textarea id="editing" class="absolute top-0 left-0 w-full h-full z-1 bg-transparent color-transparent caret-gray-500" type="text" bind:value={text} on:input={handleUpdate} />
    <pre id="highlighting" class="absolute top-0 left-0 w-full h-full z-0" aria-hidden="true">
      <code class="language-adoc" bind:this={codeblock}>{text}</code>
    </pre>
</main>

<style>
        .color-transparent {
            color: transparent;
        }
        #editing, #highlighting {
      /* Both elements need the same text and space styling so they are directly on top of each other */
      margin: 10px;
      padding: 10px;
      border: 0;
      width: calc(100% - 32px);
      height: 150px;
    }
    #editing, #highlighting, #highlighting * {
      /* Also add text styles to highlighing tokens */
      font-size: 15pt;
      font-family: monospace;
      line-height: 20pt;
    }


    #editing, #highlighting {
      /* In the same place */
      position: absolute;
      top: 0;
      left: 0;
    }


    /* Move the textarea in front of the result */

    #editing {
      z-index: 1;
    }
    #highlighting {
      z-index: 0;
    }


    /* Make textarea almost completely transparent */

    #editing {
      color: transparent;
      background: transparent;
      caret-color: white; /* Or choose your favourite color */
    }

    /* Can be scrolled */
    #editing, #highlighting {
      overflow: auto;
      white-space: nowrap; /* Allows textarea to scroll horizontally */
    }

    /* No resize on textarea */
    #editing {
      resize: none;
    }
</style>
