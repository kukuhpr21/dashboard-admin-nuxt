<template>
    <div class="flex w-full h-auto lg:h-screen bg-gray-200">
        <div class="flex flex-row w-full m-3 bg-white drop-shadow-xl rounded-xl gap-2">
            <!-- sidebar -->
            <div :class="{ hidden: !openDrawer, 'flex w-full lg:w-1/3': openDrawer}" class="flex-col rounded-tl-xl rounded-bl-xl duration-500 z-10">
                <div class="flex p-6 h-36 items-start lg:rounded-xl">
                    <div class="flex flex-row items-center gap-3">
                        <Logo :width="40" :height="40"/>
                        <span class="text-black font-semibold text-xl">Dashboard Admin</span>
                    </div>
                </div>

                <!-- menu -->
                <div class="flex flex-col h-screen sticky top-0 overflow-auto p-2">
                    <div class="active p-3 m-2 flex items-center rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <i class='bx bxs-dashboard' ></i>
                        <span class="text-base ml-4 text-black">Dashboard</span>
                    </div>
                    <div @click="openDropDownMenuSidebar('management')" class="p-3 m-2 flex flex-col rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <div class="flex flex-row items-center">
                            <i class='bx bxs-chevron-right'></i>
                            <div class="flex justify-between w-full items-center">
                                <span class="text-base ml-4 text-black">Management</span>
                                <span :class="{ 'rotate-0': !rotateDropDown('management'), 'rotate-180': rotateDropDown('management')}">
                                    <i class='bx bxs-chevron-up'></i>
                                </span>
                            </div>
                        </div>
                        <template v-if="itemDropDownMenuSidebar == 'management'">
                            <div :class="{ 'hidden': !dropDownMenuSidebar, '': dropDownMenuSidebar}" class="mt-4 mr-2 mb-2 ml-3 pl-2">
                                <h1 class="p-3 rounded-md text-base m-3 text-black cursor-pointer bg-slate-200 hover:drop-shadow-md">User</h1>
                                <h1 class="p-3 rounded-md text-base m-3 text-black cursor-pointer bg-slate-200 hover:drop-shadow-md">Role</h1>
                                <h1 class="p-3 rounded-md text-base m-3 text-black cursor-pointer bg-slate-200 hover:drop-shadow-md">Permission</h1>
                            </div>
                        </template>
                    </div>
                    <div @click="openDropDownMenuSidebar('system')" class="p-3 m-2 flex flex-col rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <div class="flex flex-row items-center">
                            <i class='bx bxs-chevron-right'></i>
                            <div class="flex justify-between w-full items-center">
                                <span class="text-base ml-4 text-black">System</span>
                                <span :class="{ 'rotate-0': !rotateDropDown('system'), 'rotate-180': rotateDropDown('system')}">
                                    <i class='bx bxs-chevron-up'></i>
                                </span>
                            </div>
                        </div>
                        <template v-if="itemDropDownMenuSidebar == 'system'">
                            <div :class="{ 'hidden': !dropDownMenuSidebar, '': dropDownMenuSidebar}" class="mt-4 mr-2 mb-2 ml-3 pl-2">
                                <h1 class="p-3 rounded-md text-base m-3 text-black cursor-pointer bg-slate-200 hover:drop-shadow-md">User</h1>
                                <h1 class="p-3 rounded-md text-base m-3 text-black cursor-pointer bg-slate-200 hover:drop-shadow-md">Role</h1>
                                <h1 class="p-3 rounded-md text-base m-3 text-black cursor-pointer bg-slate-200 hover:drop-shadow-md">Permission</h1>
                            </div>
                        </template>
                    </div>
                    <div class="p-3 m-2 flex items-center rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <i class='bx bxs-chevron-right'></i>
                        <span class="text-base ml-4 text-black">Menu A</span>
                    </div>
                    <div class="p-3 m-2 flex items-center rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <i class='bx bxs-chevron-right'></i>
                        <span class="text-base ml-4 text-black">Menu B</span>
                    </div>
                    <div class="p-3 m-2 flex items-center rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <i class='bx bxs-chevron-right'></i>
                        <span class="text-base ml-4 text-black">Menu C</span>
                    </div>
                    <div class="p-3 m-2 flex items-center rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <i class='bx bxs-chevron-right'></i>
                        <span class="text-base ml-4 text-black">Menu D</span>
                    </div>
                    <div class="p-3 m-2 flex items-center rounded-md duration-300 cursor-pointer bg-slate-100 hover:drop-shadow-md">
                        <i class='bx bxs-chevron-right'></i>
                        <span class="text-base ml-4 text-black">Menu E</span>
                    </div>
                </div>
                <!-- menu -->

                <!-- sidebar -->
            </div>
            <div :class="{'rounded-xl w-full': !openDrawer, 'w-fit lg:w-full lg:rounded-tr-xl lg:rounded-br-xl': openDrawer}" class="flex flex-col h-auto bg-slate-100 p-6">
                <!-- navbar -->
                <div class="flex flex-row h-11 items-center justify-between">
                    <div @click="openDrawer = !openDrawer" class="cursor-pointer flex h-full items-center px-2 hover:rounded-md hover:drop-shadow-xl hover:bg-slate-200">
                        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 10H3"></path>
                            <path d="M21 6H3"></path>
                            <path d="M21 14H3"></path>
                            <path d="M17 18H3"></path>
                        </svg>
                    </div>
                    <div :class="{'hidden lg:flex': openDrawer, 'flex': !openDrawer}" class="flex relative h-full items-center">
                        <div @click="openDropdownMenuNavbar = !openDropdownMenuNavbar" class="cursor-pointer flex h-10 w-10 rounded-full border-2 border-slate-200 bg-white items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                            </svg>
                        </div>
                        <div v-if="openDropdownMenuNavbar" class="absolute w-56 mt-12 right-0 top-0 bg-white rounded-lg shadow-2xl z-20 p-4">
                            <div class="flex w-full py-2 items-center justify-end">
                                <div @click="openDropdownMenuNavbar = false" class="cursor-pointer hover:rounded-full hover:drop-shadow-md hover:bg-slate-100 p-2">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            <a href="#" class="block px-4 py-2 text-sm text-black hover:rounded-lg hover:bg-slate-100">Profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-red-500 hover:rounded-lg hover:bg-slate-100">Sign Out</a>
                        </div>
                    </div>
                </div>
                <!-- navbar -->

                <!-- body -->
                <div :class="{'hidden lg:flex': openDrawer, 'flex': !openDrawer}" class="flex flex-col p-4 my-3 h-auto lg:h-screen rounded-xl bg-white overflow-auto">
                    <div class="flex px-3 py-4">
                        <span class="text-black text-lg font-semibold">Dashboard</span>
                    </div>
                    <div class="flex flex-wrap gap-11">
                        <div v-for="n in 5" class="flex flex-col w-full lg:w-40 h-40 p-3 bg-slate-100 rounded-xl justify-between hover:bg-slate-200 hover:drop-shadow-lg">
                            <div class="flex flex-row justify-between">
                                <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                    <path d="M9 19h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm0 0h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-1.414.586"></path>
                                    <path d="M15.414 15.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828Z"></path>
                                </svg>
                                <svg width="26" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                                </svg>
                            </div>
                            <div class="flex">
                                <span class="text-bg-black text-lg text-center font-bold w-full">Rp 2.000.000</span>
                            </div>
                            <div class="flex">
                                <span class="text-bg-black text-base w-full text-right px-3">Saldo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- body -->
            </div>
        </div>
    </div>
</template>

<script setup>
const openDrawer = ref(true)
const openDropdownMenuNavbar = ref(false)
let itemDropDownMenuSidebar = ref('no')
let dropDownMenuSidebar = ref(false)

const openDropDownMenuSidebar = (item) => {
    if (itemDropDownMenuSidebar.value == item) {
        dropDownMenuSidebar.value = !dropDownMenuSidebar.value
    } else {
        itemDropDownMenuSidebar.value = item
        dropDownMenuSidebar.value = true
    }
}

const rotateDropDown = (item) => {
    if (itemDropDownMenuSidebar.value == item) {
        return dropDownMenuSidebar.value
    } else {
        return false
    }
}
</script>

<style scoped>
.active {
    @apply bg-slate-300
}
</style>