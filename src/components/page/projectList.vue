<template>
  <div>
    <v-title text="我的项目"></v-title>
    <v-content></v-content>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import title from '@/components/title/title'
  import content from '@/components/content/content'
  import menu from '@/components/menu/menu'
  export default {
    name: 'projectList',
    props: [],
    components: {
      'v-title': title,
      'v-menu': menu,
      'v-content': content
    }
  }
</script>

<style>

</style>
