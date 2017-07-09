<template>
  <div class="menu">
    <router-link to="/home"><span class="icon-home"></span></router-link>
    <router-link to="/share"><span class="icon-bubble"></span></router-link>
    <router-link to="/page3"><span class="icon-list"></span></router-link>
    <router-link to="/personal"><span class="icon-user"></span></router-link>
  </div>
</template>

<script>
  import '@/style/style.css'
  export default {
    name: 'menu'
  }
</script>

<style scoped>
  .menu{
    height:50px;
    line-height: 50px;
    vertical-align: middle;
    width: 100%;
    display: flex;
    text-align: center;
    background: #f1f1f1;
    position: fixed;
    left: 0;
    bottom: 0;
  }
a{
  font-size: 24px;
  color: #999;
  text-decoration: none;
  flex: 0 0 25%;
}
  a.active{
    color: #19f;
  }
</style>
