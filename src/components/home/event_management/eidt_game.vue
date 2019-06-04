<template>
    <div>
      <div style="text-align: center;font-size: 24px;color: #606266;">编辑游戏</div>
      <el-form ref="form" label-width="100px">
        <el-form-item label="游戏名称：">
          <span>{{game_name}}</span>
        </el-form-item>
        <el-form-item label="游戏介绍：">
          <el-input v-model="game_introduce" type="textarea"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="addGame">确认添加</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "eidt_game",
      data(){
          return {
            id:1,
            gid:'',
            game_name: '',
            game_introduce:''
          }
      },
      mounted() {
          this.gid=sessionStorage.getItem('gid');
          this.game_name=sessionStorage.getItem('game_name')
      },
      methods:{
          addGame(){
            let _this=this
            var zipFormData = new FormData();
            zipFormData.append('id',this.id);
            zipFormData.append('gid',this.gid);
            zipFormData.append('game_introduce',this.game_introduce);
            console.log(zipFormData)
            axios.post('http://mq.soratech.cn/stores/public/index/index/gameset_insert',zipFormData).then(
              function (res) {
                if(res.status==200){
                  _this.$message({
                    message: '恭喜你，添加成功',
                    type: 'success'
                  });
                  _this.$router.push('/set_activity_content2')
                }
              }
            )
          }
      }
    }
</script>

<style scoped>

</style>
