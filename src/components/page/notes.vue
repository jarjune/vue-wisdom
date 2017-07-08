<template>
  <div>
    <v-title text="我的笔记"></v-title>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import title from '@/components/title/title'
  import menu from '@/components/menu/menu'
  export default {
    props: [],
    components: {
      'v-title': title,
      'v-menu': menu
    }
  }
</script>

<style>

</style>
