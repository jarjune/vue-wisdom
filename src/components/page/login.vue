<template>
  <div class="login-register">
    <div class="login" @click="login('jarjune','123456')">登录</div>
    <div class="register">注册</div>
  </div>
</template>

<script>
  import { getUserInfo } from '@/util/getData'
  import { mapMutations } from 'vuex'
  export default {
    props: [],
    methods: {
      ...mapMutations(['saveUserInfo']),
      login (username, password) {
        this.saveUserInfo(getUserInfo(username, password))
      }
    }
  }
</script>

<style scoped>
.login-register{
  border-radius: 10px;
  color: #fff;
  text-align: center;
  position: absolute;
  left:50%;
  top:50%;
  margin-left: -35%;
  margin-top: -100px;
  background-color: #fff;
  height: 150px;
  width: 70%;
  line-height:60px;
  box-shadow: 0 0 10px #19f;
}
.login,.register{
  margin: 10px;
  background: #19f;
  border-radius: 10px;
}
</style>
