<template>
    <div class="flex flex-col fg-text w-full min-h-screen">
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
                <div class="circle5"></div>
                <div class="circle_interactive"></div>
            </div>
        </div>
    </div>
</template>