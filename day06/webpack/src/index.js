// 通过jquery给项目设置隔行换色效果

// 通过模块化(commonjs标准)方式引入jquery
// 浏览器默认不识别require的模块化
// webpack可以处理成浏览器能够识别的样子
const $ = require('jquery')

$(function(){
  $('li:odd').css('background-color','blue')
})
// //ES6模块化默认导出
// import per from '../js/默认导出.js'
// console.log(per)

// //ES6模块化按需导出
// import {address,study} from '../js/按需导出.js'
// console.log(address);
// study()

//默认导出和按需导出同时存在
// import obj,{address,study} from '../js/默认导出和按需导出同时存在.js'
// console.log(obj,address,study)

//无导出
//import '../js/无导出.js'

import './css/1.css'
import './css/1.less'
