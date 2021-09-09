<script lang="ts">
    import { Router, Route } from 'svelte-routing';
    import HomePage from './views/Home.svelte';
    import Editor from './components/editor.svelte';
    import { Settings } from './store.js';

    let dark: boolean;
    Settings.subscribe(value => {
        dark = value.darkMode;
    })
    export let url: string = "";
</script>

<main class="h-full { dark ? 'dark' : '' }">
    <div class="bg-white dark:bg-blue-gray-400 h-full">
<Router url="{url}">
  <Route path="/" component="{HomePage}" />
  <Route path="/edit" component="{Editor}" />

</Router>
    </div>
</main>
