<template>
  <ul class="list">
    <li v-for="book in books" :key="book.id">
      <img :src="book.url"/>
      <div>
        <div>{{ book.name }}</div>
        <div>12.5</div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: [],
    name: 'content',
    data () {
      return {
        books: {}
      }
    },
    created () {
      this.books = [{
        name: '深入浅出MyBatis技术原理与实战',
        url: 'https://images-cn.ssl-images-amazon.com/images/I/51WG8mcKcpL._AA218_.jpg'
      },
      {
        name: '快学Scala',
        url: 'https://images-cn.ssl-images-amazon.com/images/I/513R3sWzvDL._AA218_.jpg'
      },
      {
        name: 'Maven实战',
        url: 'https://images-cn.ssl-images-amazon.com/images/I/416GiUXb+PL._AA218_.jpg'
      },
      {
        name: 'Hibernate实战(第2版)',
        url: 'https://images-cn.ssl-images-amazon.com/images/I/519pyZ2ol6L._AA218_.jpg'
      },
      {
        name: '青少年科技创新丛书:Java与乐高机器人',
        url: 'https://images-cn.ssl-images-amazon.com/images/I/51q4dvfy+BL._AA218_.jpg'
      },
      {
        name: '自己动手写网络爬虫(修订版)(附CD-ROM光盘)',
        url: 'https://images-cn.ssl-images-amazon.com/images/I/51FPUAe-ulL._AA218_.jpg'
      }]
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  .list{
    margin-top: 10px;
    margin-bottom: 52px;
    background-color: #fff;
  }
  .list li{
    display: flex;
    padding: 10px;
    border-top: 1px solid #f1f1f1;
  }
  .list img{
    width: 80px;
    height:80px;
  }
</style>
