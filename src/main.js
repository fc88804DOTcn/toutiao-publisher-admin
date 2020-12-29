
/**
 * 入口
 */

// 加载 Vue
import Vue from 'vue'
//  加载项目根组件
import App from './App.vue'
//  加载路由配置
import router from './router'

//  关闭生产环境提示
Vue.config.productionTip = false
/**
 * 创建根实例
 * 把 router 配置文件加载到根势力构造方法中
 * 通过 render 方法把 App 根组件渲染到 #app 入口节点中。
 * render 是一个函数，然后 h 是一个箭头函数，h 实际上会是一个函数，createElement
 * 然后把 根组件 App 作为原型参数参数传递给 createElement 创建元素，然后把它挂在到
 * 程序入口节点 ==>> /public/index.html#app
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
