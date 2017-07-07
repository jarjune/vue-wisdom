<template>
  <div>
    <div>page2</div>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import menu from '@/components/menu/menu'
  export default {
    props: [],
    name: 'page2',
    components: {
      'v-menu': menu
    }
  }
</script>

<style>

</style>
