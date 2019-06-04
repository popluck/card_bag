<template>
    <div class="set-activity">
      <el-container>
        <el-header>
          <p style="text-align: center;font-size: 24px;color: #999;">线上</p>
        </el-header>
        <el-main>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="4">
              <div style="background: #71fff0;margin: 10px;">
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="4">
              <div style="background: #71fff0;height: 200px;margin: 10px;">
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "set_activity_content"
    }
</script>

<style scoped>
  .set-activity{
    /*margin-left: 200px;*/
    /*background: #71fff0;*/
  }

</style>
