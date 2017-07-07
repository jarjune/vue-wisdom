<template>
  <div>
    <div class="head">
      <div class="user">
        <img :src="head"/>
      </div>
    </div>
    <router-link to="/a" tag="div" class="item">修改个人资料</router-link>
    <router-link to="/projectList" tag="div" class="item">我的项目</router-link>
    <router-link to="/c" tag="div" class="item">浏览历史</router-link>
    <router-link to="/d" tag="div" class="item">退出登录</router-link>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import menu from '@/components/menu/menu'
  import content from '@/components/content/content'
  import head from '@/assets/head.jpeg'
  export default {
    props: [],
    name: 'personal',
    components: {
      'v-menu': menu,
      'v-content': content
    },
    data () {
      return {
        head
      }
    }
  }
</script>

<style scoped>

  .head{
    width: 100%;
    background: azure;
    height: 160px;
  }
  .head .user{
    font-size: 0;
    line-height: 160px;
    text-align: center;
  }
  .head .user img{
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    width:70px;
    height:70px;
  }
  .item{
    padding-left: 15px;
    height:50px;
    line-height: 50px;
    background: #fff;
    color: #999;
    margin-top:15px;
  }
</style>
