import Vue from 'vue/dist/vue.js'

Vue.component('my-page',{
  created(){
    console.log('组件的created被执行了')
  },
  template:`
      <ul>
      <li>{{ prev }}</li>
      <li>[1]</li>
      <li>2</li>
      <li>[3]</li>
      <li @click="clk">{{next}}</li>
      </ul> `,
  
  data(){
    return {prev:'上一页',next:'下一页'}
  },
  methods:{
    clk(){
      console.log('进入下一页')
    }
  }
})

new Vue({
  el:'#app',
  data:{
    msg:'在webpack中使用'
  },
  components:{
    'my-login':{
      template:'<div>会员登录系统</div>'
    }
  }
})




