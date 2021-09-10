<script>
    import Viewer from '../components/Viewer.svelte';
    import CodeMirror from '../components/Editor.svelte';
    const options = {
        mode: "javascript",
        lineNumbers: true,
        keyMap: "vim",
    }

    let text = "# Heading";
    let editor;
</script>

<main class="w-full h-full flex flex-row">
    <CodeMirror bind:editor {options} bind:value={text} />
    <Viewer content={text} />
</main>
