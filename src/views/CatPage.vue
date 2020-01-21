<template>
  <div>
    <b-container class="px-4">
      <b-row cols="1">
        <b-card-header>
          <b-button @click="goBack" variant="primary">Back</b-button>
        </b-card-header>
        <b-card :img-src="cat.url" img-alt="Cat Image" img-top>
          <b-card-title class="font-weight-bold">{{ cat.breeds[0].name }}</b-card-title>
          <h5 class="font-weight-bold">Origin: {{ cat.breeds[0].origin }}</h5>
          <h6 class="font-weight-bold">{{ cat.breeds[0].temperament }}</h6>
          <p>{{ cat.breeds[0].description }}</p>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CatPage",
  data() {
    return {
      cat: {}
    };
  },
  methods: {
    goBack() {
      const breed = this.cat.breeds[0].id;
      this.$router.push({ name: "home", query: { breed: breed } });
    }
  },
  created() {
    const imageId = this.$route.params.imageId;
    axios
      .get(`https://api.thecatapi.com/v1/images/${imageId}`)
      .then(res => (this.cat = res.data))
      .catch();
  }
};
</script>

<style scoped>
</style>
