<template>
  <div>
    <v-header></v-header>
    <div>{{ $store.state.count }}--{{ count }}</div>
    <button @click="$store.commit('add',10)">add</button>
    <button @click="jian">jian</button>
    <v-box></v-box>
    <v-title text="最新项目"></v-title>
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
  import { mapState, mapMutations } from 'vuex'
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
    },
    computed: mapState(['count']),
    methods: mapMutations(['add', 'jian'])
//    computed: mapState({
//      count: state => state.count
//    })
//    computed: {
//      count () {
//        return this.$store.state.count
//      }
//    }
  }
</script>

<style>
</style>
