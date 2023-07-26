<div class="w-screen h-[80px] bg-[#1b1d2b] bg-opacity-60 backdrop-blur-md navbar overflow-hidden sticky top-0">
    <div class="flex-1">
        <img src="../assets/strata_logo.png" class="w-16 h-16 ml-8 hover:scale-110 select-none logo" alt="" />
        <p class="ml-4 text-4xl font-bold title cursor-default select-none">Strata</p>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li class="w-32 h-12 mr-2">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="#" class="w-full h-full font-semibold text-xl flex items-center justify-center">Home</a>
            </li>
            <li class="w-32 h-12 mr-2">
                <a href="https://stratawm.github.io/docs" target="_blank" class="w-full h-full font-semibold text-xl flex items-center justify-center">Docs</a>
            </li>
            <li class="w-32 h-12">
                <a href="https://github.com/stratawm/stratawm" target="_blank" class="w-full h-full font-semibold text-xl flex items-center justify-center">GitHub</a>
            </li>
        </ul>
    </div>
</div>

<style>
    .logo {
        transition: 0.2s ease-in-out;
    }

    .title {
        background: -webkit-linear-gradient(45deg, #2196F3, #C099FF);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>