<div class="w-screen h-screen flex flex-col">
    <div class="first_page w-screen h-[calc(100%-80px)] overflow-y-auto overflow-x-hidden px-16 flex flex-col items-center">
        <div class="w-full h-full overflow-hidden flex flex-col items-center justify-center">
            <img src="./assets/strata_logo.png" alt="Strata Logo" class="logo"/>
            <p class="text-[120px] font-extrabold logo_text -m-12">Strata</p>
            <p class="text-4xl font-bold mt-8 mr-4 text-center text-[#c8d3f5]">A Modular, Dynamic and Sleek Wayland Compositor</p>
            <div class="w-full h-auto flex flex-row items-center justify-center mt-12">
                <ul class="menu menu-horizontal px-1">
                    <button class="btn btn-neutral rounded-xl normal-case w-64 h-20 mr-8">
                        <a href="https://github.com/stratawm/stratawm" target="_blank" class="w-full h-full font-semibold text-xl flex items-center justify-center">
                            <p>GitHub</p>
                        </a>
                    </button>
                    <button class="btn btn-neutral rounded-xl normal-case w-64 h-20">
                        <a href="#/Docs" class="w-full h-full font-semibold text-xl flex items-center justify-center">
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
        background: -webkit-linear-gradient(45deg, #2196F3, #C099FF);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .logo {
        animation: bounce 2.50s ease-in-out infinite;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-60px);
        }
    }

    .initial_btn {
        width: 240px;
        height: 56px;
        border: 1px solid #c099ff;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: all 0.15s;
    }

    .initial_btn:hover {
        background-color: rgba(255, 255, 255, 0.15);
        color: #222436;
    }

    .initial_btn:active {
        scale: 0.9;
    }

    .btn_icon {
        filter: invert(82%) sepia(6%) saturate(1225%) hue-rotate(191deg) brightness(103%) contrast(92%);
    }

    .initial_btn:hover > .btn_icon {
        filter: invert(9%) sepia(4%) saturate(6322%) hue-rotate(197deg) brightness(100%) contrast(87%);

    }

    .initial_btn:hover > p {
        color: #c8d3f5;
    }
</style>