import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import index from '../components/home/index'
import stores_information from '../components/home/store_management/stores_information'
import brand_information from '../components/home/store_management/brand_information'
import set_activity_content from '../components/home/event_management/set_activity_content'
import set_activity_content2 from '../components/home/event_management/set_activity_content2'
import add_activity_content2 from '../components/home/event_management/add_activity_content2'
import eidt_game from '../components/home/event_management/eidt_game'

export default new Router({
  routes: [
    {path: '/', name: 'stores_information', component: stores_information},
    {path:'/brand_information',name:'brand_information',component:brand_information},
    {path:"/set_activity_content",name:'set_activity_content',component:set_activity_content},
    {path:"/set_activity_content2",name:'set_activity_content2',component:set_activity_content2},
    {path:'/add_activity_content2',name:'add_activity_content2',component:add_activity_content2},
    {path:'/eidt_game',name:'eidt_game',component:eidt_game},
  ]
})
