<template>
  <div class="home">
    <CatSelect />
  </div>
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
