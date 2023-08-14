<script lang="ts">
    import Fa from 'svelte-fa'
    import { faRocket } from '@fortawesome/free-solid-svg-icons'
    import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="w-screen h-screen flex flex-col">
    <div class="first_page w-screen h-screen overflow-y-auto overflow-x-hidden px-16 flex flex-col items-center">
        <div class="w-full h-full overflow-hidden flex flex-col items-center justify-center">
            <img src="./assets/strata_logo.png" alt="Strata Logo"/>
            <p class="text-[120px] font-extrabold logo_text -m-12">Strata</p>
            <div class="text-4xl font-light mt-8 mr-4 text-center text-[#c8d3f5] flex">
                <p class="mr-2">A</p>
                <p class="font-bold features">Cutting-Edge</p>
                <p class="mr-2">, </p>
                <p class="mr-2 font-bold features">Robust</p>
                <p class="mr-2"> and </p>
                <p class="mr-2 font-bold features">Sleek</p>
                <p class="">Wayland Compositor.</p>
            </div>
            <div class="w-full h-auto flex flex-row items-center justify-center mt-12">
                <ul class="menu menu-horizontal px-1">
                    <button class="btn btn-neutral rounded-xl normal-case w-64 h-20 mr-8 flex items-center justify-center">
                        <a href="https://github.com/stratawm/stratawm" target="_blank" class="w-full h-full font-semibold text-xl flex items-center justify-center">
                            <Fa 
                                icon={faGithub} 
                                scale={1.3}
                                class="m-4"
                                color="#c8d3f5"
                            />
                            <p>GitHub</p>
                        </a>
                    </button>
                    <button class="btn btn-neutral rounded-xl normal-case w-64 h-20 flex items-center justify-center">
                        <a href="https://stratawm.github.io/docs" target="_blank" class="w-full h-full font-semibold text-xl flex items-center justify-center">
                            <Fa 
                                icon={faRocket} 
                                scale={1.3}
                                class="m-4"
                                color="#c8d3f5"
                            />
                            <p>Get Started</p>
                        </a>
                    </button>
                </ul>
            </div>
        </div>
    </div>
</div>


<style>
    .logo_text {
        background: -webkit-linear-gradient(45deg, #C099FF, #2196F3);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .features {
        background: -webkit-linear-gradient(45deg, #C099FF, #2196F3);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .btn-icon {
        margin-right: 128px;
    }

</style>