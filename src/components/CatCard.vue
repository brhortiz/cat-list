<template>
    <div>
        <div v-bind:key="cat.id" v-for="cat in cats">
            <img v-bind:src="cat.url" alt="Cat Image">
            <button v-on:click="toCatPage(cat.id)">View Details</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatCard',
    props: ['cats'],
    methods: {
        toCatPage (id) {
            this.$router.push({ name: 'CatPage', params: { imageId: id } })
        }
    }
}
</script>

<style scoped>
    img {
        width: 30%;
    }
</style>