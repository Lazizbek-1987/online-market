<template>
    <div class="shadow-sm mb-6">
        <div class="flex justify-between container mx-auto items-center py-6">
            <the-category/>
            <navbar-footer/>
        </div>
    </div>

</template>

<script>
import TheCategory from "./TheCategory.vue";
import NavbarFooter from "./NavbarFooter.vue";

export default {
    name: "TheNavbar",
    components: {NavbarFooter, TheCategory}
}
</script>

<style scoped>

</style>