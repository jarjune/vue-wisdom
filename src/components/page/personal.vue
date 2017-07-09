<template>
  <div v-if="userInfo">
    <div class="head">
      <div class="user">
        <img :src="head"/>
      </div>
    </div>
    <router-link to="/a" tag="div" class="item">修改个人资料</router-link>
    <router-link to="/projectList" tag="div" class="item">我的项目</router-link>
    <router-link to="/notes" tag="div" class="item">我的笔记</router-link>
    <router-link to="/logout" tag="div" class="item">退出登录</router-link>
    <v-menu></v-menu>
  </div>
  <div v-else>
    <v-login></v-login>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import menu from '@/components/menu/menu'
  import content from '@/components/content/content'
  import login from '@/components/page/login'
  import head from '@/assets/head.jpeg'
  import { mapState } from 'vuex'
  export default {
    props: [],
    name: 'personal',
    components: {
      'v-menu': menu,
      'v-content': content,
      'v-login': login
    },
    data () {
      return {
        head
      }
    },
    computed: {
      ...mapState(['userInfo'])
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
