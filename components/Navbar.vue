<template>
    <div
        class="w-full h-[56px] backdrop-filter backdrop-blur-sm backdrop-saturate-150 flex items-center content-between px-8 select-none sticky top-0 relative">
        <div class="fg-text mr-auto flex h-full items-center justify-center">
            <NuxtImg src="/strata_logo.png" width="40px"
                class="hover:scale-[1.2] transition ease-in-out duration-384 active:scale-[0.9]" />
        </div>
        <div class="ml-auto h-full flex items-center content-center">
            <div class="flex gap-3">
                <a href="https://stratawm.github.io/strata"
                    class="decoration-none fg-text hover:fg-red transition ease-in-out duration-300 font-roboto text-sm font-500">Get
                    Started</a>
                <a href="https://stratawm.github.io/strata/configuration/basics"
                    class="decoration-none fg-text hover:fg-red transition ease-in-out duration-300 font-roboto text-sm font-500">Configuration</a>
            </div>
            <div class="w-[1px] h-[24px] ml-3 bg-surface0 rounded-lg" />
            <div class="flex gap-3 ml-3 h-full items-center justify-center">
                <a href="https://github.com/stratawm/strata">
                    <Icon name="mdi:github"
                        class="fg-text text-2xl hover:fg-red transition ease-in-out duration-300 " />
                </a>
                <a href="https://discord.gg/tcb5cRW4ZQ">
                    <Icon name="ic:baseline-discord"
                        class="fg-text text-2xl hover:fg-red transition ease-in-out duration-300 " />
                </a>
            </div>
        </div>
    </div>
</template>