<template>
    <div class="flex flex-col h-screen">
        <div class="flex flex-row">
            <div class="w-1/4">w-1/3</div>
            <div class="w-3/4">w-2/3</div>
        </div>
    </div>

    <div class="hidden flex-row h-screen bg-white">
        <div class="flex flex-col w-64">
            <div class="flex h-24 w-full items-center justify-center bg-slate-200">
                <div class="flex flex-row items-center justify-start py-3">
                    <Logo :width="50" :height="50" />
                    <span class="px-3 text-lg text-[#3A3535] font-bold">Dashboard Admin</span>
                </div>
            </div>
            <div class="flex flex-col h-full pt-10">
                <div class="flex flex-row items-center w-full mx-5">
                    <i class='bx bx-border-all text-[#3661EB] p-3'></i>
                    <span class="p-2 text-lg text-[#3661EB] font-semibold">Dashboard</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="hidden flex-row h-24 bg-slate-200">
                <svg class="" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_15_35)">
                            <path d="M10 19.375V15.625L0.625 15.625V19.375H10ZM15.625 11.875V8.125L0.625 8.125L0.625 11.875L15.625 11.875ZM21.25 4.375V0.625L0.625 0.625V4.375L21.25 4.375Z" fill="#3A3535"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_15_35">
                            <rect width="20" height="22" fill="white" transform="matrix(0 -1 -1 0 22 20)"/>
                            </clipPath>
                        </defs>
                    </svg>
            </div>
        </div>
    </div>
</template>