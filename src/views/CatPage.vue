<template>
  <div class="about">
    <div>
      <button @click="goBack">Back</button>
      <img v-bind:src="cat.url" alt="Cat Image">
      <h3>{{ cat.breeds[0].name }}</h3>
      <h5>Origin: {{ cat.breeds[0].origin }}</h5>
      <h6>{{ cat.breeds[0].temperament }}</h6>
      <p>{{ cat.breeds[0].description }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CatPage',
  data () {
    return {
      cat: {}
    }
  },
  methods: {
    goBack () {
      const breed = this.cat.breeds[0].id
      this.$router.push({ name: 'home', query: { breed: breed } })
    }
  },
  created () {
        const imageId = this.$route.params.imageId;
        axios.get(`https://api.thecatapi.com/v1/images/${imageId}`)
            .then(res => this.cat = res.data)
            .catch();
    }
}
</script>

<style scoped>
    img {
        height: 50vh;
    }
</style>
