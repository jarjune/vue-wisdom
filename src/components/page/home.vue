<template>
  <div>
    <v-header></v-header>
    <v-box></v-box>
    <v-title text="热门图书"></v-title>
    <v-content></v-content>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import header from '@/components/header/header'
  import box from '@/components/box/box'
  import content from '@/components/content/content'
  import menu from '@/components/menu/menu'
  import title from '@/components/title/title'
  export default {
    name: 'home',
    components: {
      'v-header': header,
      'v-box': box,
      'v-content': content,
      'v-menu': menu,
      'v-title': title
    },
    data () {
      return {
        headerInfo: {}
      }
    }
  }
</script>

<style>
</style>
