<template>
  <div class="user-text">welcome {{ name }}</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['name'])
  }
}
</script>
<style scoped>
.user-text {
  font-size: 30px;
  line-height: 46px;
}
</style>
