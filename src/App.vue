<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
  html, body{
    width: 100%;
    height: 100%;
    background: #eee;
    color: #707380;
  }
</style>
