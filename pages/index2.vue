<template>
    <div class="flex flex-col h-screen bg-white">
        <div class="flex flex-row h-20">
            <div class="w-1/4 p-2">
                <!-- begin logo -->
                <div class="flex flex-row items-center justify-start py-3">
                    <Logo :width="50" :height="50" />
                    <span class="px-3 text-lg text-[#3A3535] font-bold">Dashboard Admin</span>
                </div>
                <!-- end logo -->
            </div>
            <div class="w-3/4 p-2 flex flex-row items-center justify-between">
                <!-- begin drawer -->
                <div class="p-3 w-fit hover:bg-[#F5F7F9] hover:rounded-lg hover:scale-110 cursor-pointer">
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
                <!-- end drawer -->

                <!-- begin search bar -->
                <div class="flex flex-row items-center bg-[#F5F7F9] p-4 rounded-2xl lg:w-72 hover:scale-110 hover:bg-slate-200 duration-200">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="#3A3535"/>
                    </svg>
                    <input type="text" name="search" id="search" class="bg-transparent px-2 outline-none placeholder:text-[#A0A4A8] text-[#3A3535]" placeholder="Search...">
                </div>
                <!-- end search bar -->

                <!-- begin profile -->
                <div class="flex items-center justify-center p-3 bg-[#F5F7F9] rounded-lg hover:scale-110 cursor-pointer">
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6097 0.195129C10.4037 0.195129 9.22482 0.552745 8.22208 1.22275C7.21934 1.89276 6.4378 2.84507 5.97629 3.95925C5.51478 5.07344 5.39403 6.29945 5.62931 7.48227C5.86458 8.66508 6.44532 9.75156 7.29808 10.6043C8.15084 11.4571 9.23732 12.0378 10.4201 12.2731C11.6029 12.5084 12.829 12.3876 13.9431 11.9261C15.0573 11.4646 16.0096 10.6831 16.6796 9.68031C17.3496 8.67758 17.7073 7.49867 17.7073 6.29269C17.7073 4.67552 17.0648 3.12458 15.9213 1.98106C14.7778 0.837549 13.2269 0.195129 11.6097 0.195129ZM11.6097 9.95123C10.8861 9.95123 10.1788 9.73666 9.57713 9.33465C8.97549 8.93265 8.50656 8.36126 8.22966 7.69275C7.95275 7.02424 7.8803 6.28863 8.02146 5.57895C8.16263 4.86926 8.51107 4.21737 9.02273 3.70571C9.53438 3.19406 10.1863 2.84562 10.896 2.70445C11.6056 2.56329 12.3413 2.63574 13.0098 2.91264C13.6783 3.18955 14.2497 3.65847 14.6517 4.26012C15.0537 4.86176 15.2682 5.5691 15.2682 6.29269C15.2682 7.26299 14.8828 8.19356 14.1967 8.87967C13.5106 9.56578 12.58 9.95123 11.6097 9.95123ZM22.5853 23.3659V22.1463C22.5853 19.8823 21.6859 17.711 20.085 16.1101C18.4841 14.5092 16.3128 13.6098 14.0487 13.6098H9.17068C6.90664 13.6098 4.73532 14.5092 3.1344 16.1101C1.53348 17.711 0.634094 19.8823 0.634094 22.1463V23.3659H3.07312V22.1463C3.07312 20.5292 3.71554 18.9782 4.85905 17.8347C6.00257 16.6912 7.55351 16.0488 9.17068 16.0488H14.0487C15.6659 16.0488 17.2168 16.6912 18.3604 17.8347C19.5039 18.9782 20.1463 20.5292 20.1463 22.1463V23.3659H22.5853Z" fill="#3A3535"/>
                    </svg>
                </div>
                <!-- end profile -->

            </div>
        </div>
        <div class="flex flexx-row h-full">
            <!-- begin sidebar -->
            <div class="flex flex-col w-1/4">
                <ul>
                    <li>
                        <!-- begin icon -->
                        <section class="p-2">

                        </section>
                        <!-- end icon -->
                    </li>
                </ul>
            </div>
            <!-- end sidebar -->
            <div class="w-3/4 bg-slate-400">w-2/3</div>
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