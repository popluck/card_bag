<template>
    <div class="stores">
      <div style="text-align: center;font-size: 24px;font-weight: 600;color: #b2b2b2;height: 40px;line-height: 40px">门店信息</div>
      <el-form ref="form" :model="stores" :rules="ruels1" label-width="100px">
        <el-form-item label="门店图片：" prop="stores_img">
          <el-image :src="'http://mq.soratech.cn/stores/public/static/stores_img/'+stores.stores_img" style="width: 100px;height: 100px;"></el-image>
        </el-form-item>
        <el-form-item
          label="门店名称：" prop="stores_name">
          <span>{{stores.stores_name}}</span>
        </el-form-item>
        <el-form-item label="logn图片：" prop="stores_logo">
          <el-image :src="'http://mq.soratech.cn/stores/public/static/stores_logo/'+stores.stores_logo" style="width: 100px;height: 100px;"></el-image>
        </el-form-item>
        <el-form-item
          label="品牌信息：" prop="stores_introduce">
          <span>{{stores.stores_introduce}}</span>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "stores_information",
      data(){
          return {
            mid:'',
            stores:{
              stores_name:'',
              stores_introduce:'',
              stores_logo:'',
              stores_img:''
            },
            ruels1:{
              // name:[{ required: true, message: '门店名称不能为空'},
              //   { type: 'number', message: '年龄必须为数字值'}],
              // user:[{ required: true, message: '不能为空'},
              //   { type: 'number', message: '年龄必须为数字值'}],
            }
          }
      },
      mounted() {
          let _this=this
        axios.post('http://192.168.8.102/stores/public/index/index/stores_find',{
          id:1
        }).then((res)=>{
          console.log(res)
          let storesdata=eval('('+res.request.response+')')
          console.log(storesdata)

          _this.stores=storesdata
        })
      }
    }
</script>

<style scoped>
  .stores{
    /*margin-left: 200px;*/
    /*background: salmon;*/
  }
</style>
