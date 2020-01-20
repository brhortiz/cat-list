<template>
  <div>
    <p>Breed</p>
    <select v-model="selected" v-on:change="selectCat(selected)">
      <option selected>Select Breed</option>
      <option v-bind:key="breed.id" v-for="breed in breeds" :value="breed.id">{{ breed.name }}</option>
    </select>
    <div v-if="cats.length === 0">No cats available.</div>
    <CatCard v-bind:cats="cats" />
    <button v-if="cats.length !== 0 && !isHidden" v-on:click="loadMoreCats($event, selected)">Load more</button>
  </div>
</template>

<script>
import CatCard from "./CatCard.vue";
import axios from "axios";

export default {
  name: "CatSelect",
  components: {
    CatCard
  },
  data() {
    return {
      breeds: [],
      cats: [],
      selected: "Select Breed",
      page: 1,
      isHidden: false,
    };
  },
  methods: {
    selectCat (breed) {
      axios
        .get(
          `https://api.thecatapi.com/v1/images/search?page=1&limit=10&breed_id=${breed}`
        )
        .then(res => {
          this.cats = res.data;
          this.page = 1;
          this.isHidden = false;
          if (this.cats.length === 0) {
            this.selected = "Select Breed";
          } else {
            this.selected = breed;
          }
        })
        .catch();
    },
    loadMoreCats (event, breed) {
      event.target.textContent = 'Loading cats...';
      this.page += 1;

      axios.get(`https://api.thecatapi.com/v1/images/search?page=${this.page}&limit=10&breed_id=${breed}`)
        .then(res => {
          event.target.textContent = 'Load more';
          
          const tempCats = res.data.filter((el) => {
            return !this.cats.some((cat) => {
              return cat.id === el.id;
            });
          });

          if (tempCats.length !== 0) {
            this.cats = [...this.cats, ...tempCats];
          } else {
            this.isHidden = true;
          }
        })
        .catch();
    }
  },
  created () {
    const breed = this.$route.query.breed;
    if (breed) {
      this.selectCat(breed);
    }
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then(res => this.breeds = res.data)
      .catch();
  }
};
</script>

<style scoped>
</style>