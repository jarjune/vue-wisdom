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
  body{
    background: #eee;
    color: #707380;
  }
</style>
