<script lang="ts">
  import Navbar from './Components/Navbar.svelte'
  import Router from 'svelte-spa-router'
  import routes from './Components/routes'
</script>
 
<main data-theme="tokyoNight">
  <div class="h-screen w-screen bg-base-100 overflow-x-hidden overflow-y-auto">
    <Navbar></Navbar>
    <Router {routes} />
  </div>
</main>

<style>
</style>
