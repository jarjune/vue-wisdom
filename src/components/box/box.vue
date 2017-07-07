<template>
  <div class="box">
    <router-link to="" v-for="image in images" :key="image.id"><img :src="image.name"/></router-link>
  </div>
</template>

<script>
  import java from '@/assets/books/java.jpg'
  import php from '@/assets/books/php.jpg'
  import vue from '@/assets/books/vue.jpg'
  import react from '@/assets/books/react.png'
  import es6 from '@/assets/books/es6.png'
  export default {
    props: [],
    name: 'box',
    data () {
      return {
        images: [
          {name: java},
          {name: php},
          {name: vue},
          {name: react},
          {name: es6}
        ]
      }
    }
  }
</script>

<style scoped>
  .box{
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    border-bottom: 1px solid #f1f1f1;
    background-color: #fff;
  }
  .box a{
    box-sizing: border-box;
    flex: 0 0 20%;
  }
  .box a img{
    border-radius: 50%;
    width: 50px;
    height:50px;
    margin: 10px 0;
    vertical-align: middle;
  }
</style>
