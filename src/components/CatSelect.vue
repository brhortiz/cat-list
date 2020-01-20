<template>
    <div>
        <p>Breed</p>
        <select v-model="selected" v-on:change="selectCat(selected)">
            <option>Select Breed</option>
            <option v-bind:key="breed.id" v-for="breed in breeds" :value="breed.id">{{ breed.name }}</option>
        </select>
        <CatCard v-bind:cats="cats" />
    </div>
</template>

<script>
import CatCard from './CatCard.vue';
import axios from 'axios';

export default {
    name: 'CatSelect',
    components: {
        CatCard
    },
    data () {
        return {
            breeds: [],
            cats: [],
            selected: 'Select Breed'
        }
    },
    methods: {
        selectCat (breed) {
            axios.get(`https://api.thecatapi.com/v1/images/search?page=1&limit=10&breed_id=${breed}`)
                .then(res => this.cats = res.data)
                .catch();
        }
    },
    created () {
        const breed = this.$route.query.breed
        if (breed) {
            this.selected = breed
            this.selectCat(breed)
        }

        axios.get('https://api.thecatapi.com/v1/breeds')
            .then(res => this.breeds = res.data)
            .catch();
    }
}
</script>

<style scoped>

</style>