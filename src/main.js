import Vue from 'vue'
import App from './App.vue'
//路由导入进来
import router from './router/index'
//导入ElementUI
import ElementUI from 'element-ui'
//导入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css';

//使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router, //将路由挂载在实例中
  render: h => h(App),
}).$mount('#app')
