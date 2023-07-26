<template>
    <div class="p-2 md:h-screen rounded-xl bg-white w-full" >
            <div class="justify-center items-center my-4 hidden md:flex">
                <img src="../assets/images/Logo.png" alt="Logo" class="w-[50%]" />
            </div>
            <div class="md:hidden flex justify-between items-center">
                <div class="w-24">
                    <img src="../assets/images/Logo.png" alt="Logo"  />
                </div>
                <div class="w-8 cursor-pointer" @click="toggleMenu" >
                    <img src="../assets/icons/menu.svg">
                </div>
            </div>
        <div class="m-2 md:hidden" v-if="isMenuOpen">
            <div class="flex justify-center gap-4 hover:bg-[#029DDC] hover:text-white text-sm rounded-xl font-semibold p-2 cursor-pointer"
                v-for="(m, i) in menu" :key="i">
                {{ m.name }}
            </div>
        </div>
        <div class="m-2 hidden md:block" >
            <div class="flex justify-center gap-4 hover:bg-[#029DDC] hover:text-white rounded-xl font-semibold text-md p-3 cursor-pointer"
                v-for="(m, i) in menu" :key="i">
                {{ m.name }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu: [
                { name: "Dashbord", url: "#" },
                { name: "Events Log", url: "#" }
            ],
            isMenuOpen: false,
        }
    },
    methods:{
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
}
</script>
