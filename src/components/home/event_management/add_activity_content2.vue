<template>
    <div>
      <div style="text-align: center;font-size: 24px;color: #606266;">添加游戏</div>
          <el-row v-for="(item,index) in showGame" :key="index">
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="4"  class="gadd">
              <span @click="addGame(item.gid,item.game_name)">{{item.game_name}}</span>
            </el-col>
          </el-row>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "add_activity_content2",
      data(){
          return {
            id:1,
            showGame:{
              gid:'',
              game_name:''
            }
          }
      },
      mounted(){
          axios.post('http://mq.soratech.cn/stores/public/index/index/game_sel')
            .then((res)=>{
              let info = eval('('+res.request.response+')')
              this.showGame=info
              console.log(this.showGame)
            })

      },
      methods:{
          addGame(gid,game_name){
            sessionStorage.setItem('gid',gid)
            sessionStorage.setItem('game_name',game_name)
            console.log('sad')
            this.$router.push('/eidt_game')
          }
          }
      }

</script>

<style scoped>
  .gadd{
    cursor: pointer;
  }
</style>
