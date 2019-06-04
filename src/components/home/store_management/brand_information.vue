<template>
  <div class="brand">
    <div style="text-align: center">编辑门店信息</div>
    <el-form ref="form" :model="brand"  label-width="100px">
      <el-form-item
        label="门店名称：" prop="stores_name">
        <el-input v-model="brand.stores_name"></el-input>
      </el-form-item>
      <el-form-item
        label="品牌信息：" prop="stores_introduce">
        <el-input v-model="brand.stores_introduce"></el-input>
      </el-form-item>
      <el-form-item label="门店图片：" prop="stores_img">
        <label for="img1" class="img1">
          <img :src="'http://mq.soratech.cn/stores/public/static/stores_img/'+brand.stores_img" id="showimg1" alt="" style="width: 100%">
        </label>
        <input type="file" id="img1" @click="changeimg" accept="image/gif,image/jpeg,image/jpg,image/png" style="display: none"></input>
      </el-form-item>
      <el-form-item label="logn图片：" prop="stores_logo">
        <label for="img2" class="img1">
          <img :src="'http://mq.soratech.cn/stores/public/static/stores_logo/'+brand.stores_logo" id="showimg2" alt="" style="width: 100%">
        </label>
        <input type="file" id="img2" @click="changeimg1" accept="image/gif,image/jpeg,image/jpg,image/png" style="display: none"></input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="set_stores">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "brand_information",
      data(){
          return {
            id:1,
            brand:{
              stores_name:'',
              stores_introduce:'',
              stores_logo:'',
              stores_img:'',
            }
          }
      },
      mounted() {
          let _this=this;
          axios.post('http://mq.soratech.cn/stores/public/index/index/stores_find',{
            id:1
          }).then((res)=>{
            let branddata=eval('('+res.request.response+')')
            console.log(branddata)
            _this.brand=branddata
          })
      },
      methods:{
          // 提交信息
        set_stores(){
          let _this=this
          var zipFormData = new FormData();
          zipFormData.append('id',_this.id)
          // 添加表单元素
          zipFormData.append('stores_name',_this.brand.stores_name);
          zipFormData.append('stores_introduce',_this.brand.stores_introduce);
          // 添加图片
          zipFormData.append('stores_logo',_this.$store.state.txshow);
          console.log(_this.$store.state.txshow)
          zipFormData.append('stores_img',_this.$store.state.txshow2);
          // 调用接口
          console.log(zipFormData)
          let config = {headers: {'Content-Type': 'multipart/form-data'}};
          axios.post('http://mq.soratech.cn/stores/public/index/index/stores_update',zipFormData)
            .then(function(res){
              console.log(res)
            })
        },
        // 添加头像
        changeimg(){
          let _this = this;
          var input = document.getElementById("img1");
          var txshow = document.getElementById("showimg1");
          if (typeof (FileReader) === 'undefined') {
            result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
            input.setAttribute('disabled', 'disabled');
          } else {
            input.addEventListener('change', readFile, false);
          }
          function readFile() {
            var file = this.files[0];
            _this.$store.state.txshow = file;
            var fileSize = this.files[0].size;
            //判断是否是图片类型
            if (!/image\/\w+/.test(file.type)) {
              alert("只能选择图片");
              return false;
            } else if (fileSize > 1024 * 1024 * 2) {
              alert('图片不能大于2M')
            } else {
              var reader = new FileReader();
              reader.readAsDataURL(file);
              // console.log(file)

              reader.onload = function (e) {
                txshow.src = this.result;
                // _this.$store.state.txshow = txshow.src;
                console.log('我的' + (txshow.src));
                console.log(_this.brand.stores_img);
              }
            }
          }
        },
        // 添加logo
        changeimg1(){
          let _this = this;
          var input = document.getElementById("img2");
          var txshow = document.getElementById("showimg2");
          if (typeof (FileReader) === 'undefined') {
            result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
            input.setAttribute('disabled', 'disabled');
          } else {
            input.addEventListener('change', readFile, false);
          }
          function readFile() {
            var file = this.files[0];
            console.log(file)
            _this.$store.state.txshow2 = file
            var fileSize = this.files[0].size;
            //判断是否是图片类型
            if (!/image\/\w+/.test(file.type)) {
              alert("只能选择图片");
              return false;
            } else if (fileSize > 1024 * 1024 * 2) {
              alert('图片不能大于2M')
            } else {
              var reader = new FileReader();
              reader.readAsDataURL(file);
              console.log(file)

              reader.onload = function (e) {
                txshow.src = this.result;
                // _this.$store.state.txshow2 = txshow.src;
                console.log('我的' + (txshow.src));
                console.log(_this.brand.stores_img);
              }
            }
          }
        }

      }

    }
</script>

<style scoped>
  .brand{
    /*margin-left: 200px;*/
    /*background: #71fff0;*/
  }
  .img1{
    width: 100px;
    height: 100px;
    display: inline-block;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .img1:hover{
    border-color: #409EFF;
  }
</style>
