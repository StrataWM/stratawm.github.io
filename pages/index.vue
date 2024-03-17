<template>
    <div class="w-full min-h-screen relative">
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
                <div
                    class="w-[284px] h-[284px] rounded-full logo-bkg absolute top-0 left-0 -translate-y-2/4 -translate-x-2/4" />
                <NuxtImg src="/strata_logo.png" width="236px"
                    class="logo transition ease-in-out duration-384 absolute top-0 left-0 -translate-y-2/4 -translate-x-2/4" />
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
        transform: translate(-50%, -60%);
    }

    100% {
        transform: translate(-50%, -50%);
    }
}

.logo-bkg {
    background-image: linear-gradient(35deg, #E384FF, 20%, #5800FF);
    filter: blur(150px);
    opacity: 0.5;
    transition: opacity 386ms ease-in-out;
}

.logo-cont:hover .logo-bkg {
    opacity: 1;
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
    animation: moveVertical 30s ease infinite;

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
    animation: moveInCircle 20s reverse infinite;

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
    animation: moveHorizontal 20s infinite;

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
    animation: moveInCircle 40s linear infinite;

    opacity: 1;
}
</style>