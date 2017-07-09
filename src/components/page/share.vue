<template>
  <div>
    <v-title text="项目分享"></v-title>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import menu from '@/components/menu/menu'
  import title from '@/components/title/title'
  export default {
    props: [],
    name: 'page2',
    components: {
      'v-menu': menu,
      'v-title': title
    }
  }
</script>

<style>

</style>
