<template>
    <div class="set-activity2">
      <el-container>
        <el-header>
          <div style="text-align: center;font-size: 24px;color: #606266;line-height: 60px">线下信息</div>
        </el-header>
        <el-main>
          <el-form ref="form" :model="gameData" label-width="100px">
            <el-form-item label="游戏名称：">
              <span>{{gameData.game_name}}</span>
            </el-form-item>
            <el-form-item label="游戏logo：">
              <img :src="'http://mq.soratech.cn/stores/public/static/stores_logo/'+gameData.game_logo" style="width: 100px;height:100px;">
            </el-form-item>
            <el-form-item label="游戏介绍：">
              <span>{{gameData.game_introduce}}</span>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "set_activity_content2",
      data(){
        return {
          id:1,
          gameData:{
            gid:'',
            sgid:'',
            game_name:'',
            game_logo:'',
            game_introduce: ''
          }

        }
      },
      mounted(){
          var zipFormData = new FormData()
          zipFormData.append('id',this.id)
          axios.post('http://mq.soratech.cn/stores/public/index/index/gameset_find',zipFormData).then((res)=>{
            let info = eval('('+res.request.response+')')
            console.log(res);
            console.log(info);
            this.gameData=info
          })
      },
      methods:{
          addGame(){
          }
      }
    }
</script>

<style scoped>
  .xadd{
    float: right;
    cursor: pointer;
    color: red;
  }
</style>
