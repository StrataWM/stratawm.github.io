import Home from './routes/Home.svelte'
import NotFound from './routes/404.svelte'

export default {
    '/': Home,
    '*': NotFound,
}