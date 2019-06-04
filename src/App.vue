<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <index></index>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import index from './components/home/index'
export default {
  name: 'App',
  components:{
    "index":index
  }
}
</script>
<style>
</style>
