<template>
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col-8 box border">
      <Header title='Task Tracker' @add='doAdd'> Add Task </Header>
      <router-view :show='show'></router-view>
    </div>

    
    <div class="col" v-if="show"></div>
  </div>

  <div class="row">
    <div class="col">
      <Footer></Footer>
    </div>
  </div>
</div>
 
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  props: [],
  data() {
    return {
    
       show: true
    }
   
  },
  methods: {
    doAdd() {
      console.log('show')
      this.show = !this.show
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
}

.box {
  border-radius: 5%;
  padding: 10px;
}
</style>
