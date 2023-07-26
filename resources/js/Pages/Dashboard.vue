<template>
    <div class="flex flex-col md:flex-row bg-[rgb(247,248,248)] ">
        <div class="w-full md:w-[20%] p-2">
            <SideMenu />
        </div>
        <div class="w-[100%] md:w-[80%] md:p-2 bg-[rgb(247,248,248)] ">
            <div class=" h-screen rounded-xl  w-full">
                <div class="font-extrabold text-lg uppercase tracking-wide text-[#029DDC] p-2">
                    Climate Metrics Dashboard
                </div>
                <div class="grid grid-cols-1 gap-4 p-2">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Temperature />
                        <Sea />
                    </div>
                    <div class="">
                        <Co2 />
                    </div>
                </div>
            </div>
    </div>
</div>
</template>
<script>
import SideMenu from '../Components/sideMenu.vue'
import Temperature from '../Components/Temperature.vue'
import Sea from '../Components/Sea.vue'
import Co2 from '../Components/Co2.vue'


export default {
    components: {
        SideMenu, Temperature, Sea, Co2

    }
};
</script>
