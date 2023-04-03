<template>
    <div class="flex flex-row justify-between h-screen bg-[#EAEFFE]">
        <div class="hidden lg:flex bg-[#DAE4EE] w-1/2 rounded-tr-2xl rounded-br-2xl">
            <img class="p-8" src="~/assets/images/illustration_multitasking.svg" alt="multi tasking">
        </div>
        <div class="flex w-full lg:w-1/2 justify-center items-center">
            <div class="flex flex-col p-2 w-3/4 lg:w-2/5">
                <div class="flex flex-row items-center w-full justify-start py-3 mb-8">
                    <Logo :width="50" :height="50" />
                    <span class="px-3 text-lg text-[#3A3535] font-bold">Dashboard Admin</span>
                </div>
                <span class="hidden text-base text-[#3A3535] font-semibold my-3">Welcome back,</span>
                <label for="email" class="text-base text-[#3A3535] font-normal my-2">Email</label>
                <input type="email" name="email" class="rounded-xl text-base bg-[#F5F7F9] text-[#3A3535] placeholder:text-[#A0A4A8] focus:drop-shadow-md hover:scale-105 duration-200 outline-none p-2 h-14 my-3">
                <label for="password" class="text-base text-[#3A3535] font-normal my-2">Password</label>
                <input type="password" name="password" class="rounded-xl text-base bg-[#F5F7F9] text-[#3A3535] placeholder:text-[#A0A4A8] focus:drop-shadow-md hover:scale-105 duration-200 outline-none p-2 h-14 my-3">
                <button class="rounded-xl bg-[#3661EB] text-base text-white font-semibold p-2 h-14 my-3 drop-shadow-md hover:scale-105 hover:bg-[#1A42BF] duration-200">Sign In</button>
            </div>
        </div>
    </div>
</template>