<template>
  <div class="about">
    <div>
      <button @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatPage',
  methods: {
    goBack () {
      this.$router.push({ name: 'home', query: { breed: 'private' } })
    }
  }
}
</script>