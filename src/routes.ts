import Home from './Components/Pages/Home.svelte'
import NotFound from './Components/Pages/404.svelte'

export default {
    '/': Home,
    '*': NotFound,
}