<template>
  <b-container>
    <h1>Cat Browser</h1>
    <CatSelect />
  </b-container>
</template>

<script>
// @ is an alias to /src
import CatSelect from '@/components/CatSelect.vue'

export default {
  name: 'home',
  components: {
    CatSelect
  }
}
</script>
