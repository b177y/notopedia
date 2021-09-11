<script lang="ts">
    import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
    import { oneDark } from "@codemirror/theme-one-dark";
    import {markdown} from "@b177y/codemirror-lang-asciidoc";
    import { onMount } from 'svelte';

    export let value;
    let editor: EditorView;
    let timer;
    let editContainer: HTMLElement;

    const svelteListen = EditorView.updateListener.of((v) => {
        if (v.docChanged){
            if(timer) clearTimeout(timer);
              timer = setTimeout(() => {
                value = editor.state.doc.toString();
              }, 100 );
        }
    })

    const fixedHeightEditor = EditorView.theme({
      "&": {height: "100%"},
      ".cm-scroller": {overflow: "auto"}
    })

    onMount(() => {
        editor = new EditorView({
            state: EditorState.create({
                    extensions: [basicSetup, markdown(), oneDark, svelteListen, fixedHeightEditor]
                }),
            parent: editContainer,
            })
    })
</script>

<main id="editor" class="editor flex-1 w-full h-full md:w-1/2" bind:this={editContainer} >
</main>
