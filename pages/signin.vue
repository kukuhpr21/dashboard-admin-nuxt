<template>
    <div class="flex h-screen items-center justify-center">
        <div class="flex flex-col w-full lg:w-1/3 items-start justify-center bg-gradient-to-tr from-slate-100 to-slate-50 border-2 border-slate-200 drop-shadow-xl rounded-xl mx-4">
            <div class="flex flex-row w-full rounded-sm items-center justify-center gap-2 py-4 bg-slate-100 border-b-2">
                <Logo :width="30" :height="30"/>
                <span class="text-black font-semibold text-sm">Dashboard Admin</span>
            </div>
            <div class="flex flex-col w-full p-4">
                <span class="text-black text-lg font-bold py-4">Welcome back,</span>
                <FormLabel :name="'email'" :value="'Email'"/>
                <FormInput :type="'email'" :id="'email'" :name="'email'"/>
                <FormLabel :name="'password'" :value="'Password'"/>
                <FormInput :type="'password'" :id="'password'" :name="'password'"/>
                <button type="submit" class="bg-black w-full rounded-lg p-4 my-6 text-white drop-shadow-lg hover:bg-slate-700">Sign In</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>