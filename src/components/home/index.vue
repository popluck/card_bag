<template>
    <div style="width: 200px;position: absolute;left: 0;top: 0;padding:20px;box-sizing: border-box">
      <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
    export default {
        name: "index",
      data() {
        return {
          data: [{
            label: '门店管理',
            children: [{
              label: '查看门店信息',
              url:'/'
            },
              {label: '编辑门店信息',
                url:'/brand_information'
              }]
          },{label: '活动管理',
            children: [{
              label: '活动内容设置',
              children: [{
                label: '线上',
                url:'/set_activity_content'
              },{
                label: '线下',
                children:[{
                  label:'查看',
                  url:'/set_activity_content2'
                },{
                  label:'添加',
                  url:'/add_activity_content2'
                }]
              }]
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        handleNodeClick(data) {
          // console.log(data);
          if(data.url){
            this.$router.push(data.url)
            console.log(data.url);
          }
        }
      }
    }
</script>

<style scoped>
</style>
