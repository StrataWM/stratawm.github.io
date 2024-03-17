<template>
    <div class="w-full min-h-screen relative select-none">
        <div class="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="_svg-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="_svg-filter" />
                        <feBlend in="SourceGraphic" in2="_svg-filter" />
                    </filter>
                </defs>
            </svg>
            <div class="gradients-cont">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center w-screen h-screen absolute top-0 left-0 ">
            <div class="relative bg-red logo-cont">
                <NuxtImg src="/strata_logo.png" width="236px"
                    class="logo transition ease-in-out duration-384 absolute top-0 left-0 -translate-y-2/4 -translate-x-2/4" />
            </div>
            <div class="flex flex-col items-center justify-center mt-26 z-300 select-none">
                <span class="fg-text text-4xl font-inter font-500 text-wrap w-[70%] text-center line-height-[3rem]">
                    <span class="fg-red font-bold">Cutting-Edge</span>,
                    <span class="fg-red font-bold">Robust</span> and
                    <span class="fg-red font-bold">Sleek</span>
                    Wayland
                    compositor</span>
            </div>
            <div class="flex items-center justify-center mt-8 z-300 select-none">
                <div
                    class="bg-crust h-[56px] flex items-center transition ease-in-out duration-350 justify-center rounded-xl border-solid border-2 border-[#f38ba8] hover:bg-red w-[220px] mr-4">
                    <a href="https://stratawm.github.io/strata"
                        class="w-full h-full decoration-none fg-red transition ease-in-out duration-350 font-inter text-lg font-500 flex items-center justify-center rounded-xl hover:fg-crust">
                        <Icon name="ic:baseline-rocket-launch" size="32px" class="mr-2"></Icon>Get
                        Started
                    </a>
                </div>
                <div
                    class="bg-crust h-[56px] flex items-center transition ease-in-out duration-350 justify-center rounded-xl border-solid border-2 border-[#cba6f7] hover:bg-mauve w-[220px] mr-4">
                    <a href="https://stratawm.github.io/strata"
                        class="w-full h-full decoration-none fg-mauve transition ease-in-out duration-350 font-inter text-lg font-500 flex items-center justify-center rounded-xl hover:fg-crust">
                        <Icon name="material-symbols:book-2" size="32px" class="mr-2"></Icon>Documentation
                    </a>
                </div>
                <div
                    class="bg-crust h-[56px] flex items-center transition ease-in-out duration-350 justify-center rounded-xl border-solid border-2 border-[#cdd6f4] hover:bg-text w-[220px]">
                    <a href="https://stratawm.github.io/strata"
                        class="w-full h-full decoration-none fg-text transition ease-in-out duration-350 font-inter text-lg font-500 flex items-center justify-center rounded-xl hover:fg-crust">
                        <Icon name="mdi:github" size="32px" class="mr-2"></Icon>GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes logo {
    0% {
        transform: translate(-50%, -50%);
    }

    50% {
        transform: translate(-50%, -55%);
    }

    100% {
        transform: translate(-50%, -50%);
    }
}

.logo {
    animation: logo 5s ease-in infinite;
}

:root {
    --circle-size: 60%;
    --blending: hard-light;
}

@keyframes moveInCircle {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes moveVertical {
    0% {
        transform: translateY(-50%);
    }

    50% {
        transform: translateY(50%);
    }

    100% {
        transform: translateY(-50%);
    }
}

@keyframes moveHorizontal {
    0% {
        transform: translateX(-50%) translateY(-30%);
    }

    50% {
        transform: translateX(50%) translateY(30%);
    }

    100% {
        transform: translateX(-50%) translateY(-30%);
    }
}

.gradient-bg {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: rgba(17, 17, 27, 1);
    top: 0;
    left: 0;
}

.gradient-bg svg {
    display: none;
}

.gradients-cont {
    filter: url(#_svg-filter) blur(144px);
    width: 100%;
    height: 100%;
}

.circle1 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(88, 0, 255, 0.8) 0, rgba(88, 0, 255, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: center center;
    animation: moveVertical 15s ease infinite;

    opacity: 1;
}

.circle2 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(88, 0, 255, 0.8) 0, rgba(88, 0, 255, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 400px);
    animation: moveInCircle 10s reverse infinite;

    opacity: 1;
}

.circle3 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(88, 0, 255, 0.8) 0, rgba(88, 0, 255, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: moveHorizontal 10s infinite;

    opacity: 1;
}

.circle4 {
    position: absolute;
    background: radial-gradient(circle at center, rgba(88, 0, 255, 0.8) 0, rgba(88, 0, 255, 0) 50%) no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% + 400px);
    animation: moveInCircle 20s linear infinite;

    opacity: 1;
}
</style>