<template>
  <b-row cols="1" cols-sm="2" cols-md="4">
    <div v-bind:key="cat.id" v-for="cat in cats" class="px-3">
      <b-card :img-src="cat.url" img-alt="Cat Image" img-top class="mb-3">
        <b-button class="w-100" v-on:click="toCatPage(cat.id)" variant="primary">View Details</b-button>
      </b-card>
    </div>
  </b-row>
</template>

<script>
export default {
  name: "CatCard",
  props: ["cats"],
  methods: {
    toCatPage(id) {
      this.$router.push({ name: "CatPage", params: { imageId: id } });
    }
  }
};
</script>

<style scoped>
</style>