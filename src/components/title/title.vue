<template>
  <div class="title">
    {{ text }}
  </div>
</template>

<script>
  export default {
    props: ['text'],
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.title{
  border-left: 5px solid #19f;
  background: #fff;
  padding: 8px;
  margin: 5px 0;
}
</style>
