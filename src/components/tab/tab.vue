<template>
  <div class="tab">
    <div class="tab-item" v-for="tab in tabs "><router-link :to="{ path: tab.path }">{{ tab.text }}</router-link></div>
  </div>
</template>

<script>
  export default {
    props: [],
    name: 'tab',
    data () {
      return {
        tabs: [
          {
            path: '/tab/item1',
            text: '内容一'
          },
          {
            path: '/tab/item2',
            text: '内容二'
          },
          {
            path: '/tab/item3',
            text: '内容三'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .tab {
    display: flex;
  }
  .tab .tab-item {
    flex: 1;
    text-align: center;
  }
  a{
    text-decoration: none;
    display: block;
    line-height: 40px;
    background: #ccc;
    color: black;
  }
  a.active{
    color: #19f;
  }
</style>
