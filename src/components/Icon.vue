<template>
    <img
        class="category__icon"
        :src="'./icons/' + iconName + '.svg'"
        :alt="iconName + ' image'"
    >
</template>

<script>
export default {
    name: "Icon",
    props: [
        'iconName'
    ]
}
</script>

<style scoped>

</style>