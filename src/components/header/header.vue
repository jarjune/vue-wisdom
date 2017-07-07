<template>
  <div class="header"><!--
    --><span>杭州</span><!--
    --><input type="text" placeholder="请输入项目名称..."/>
  </div>
</template>

<script>
  export default {
    props: {
      headerInfo: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .header{
    background: rgb(233,32,60);
    line-height:50px;
  }
  .header span{
    margin: 0 10px;
    vertical-align: middle;
  }
  .header input{
    vertical-align: middle;
    height: 34px;
    width:70%;
    border:none;
    padding: 0 10px;
    border-radius: 10px;
    outline:none;
  }
</style>
