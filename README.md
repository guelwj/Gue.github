# Gue君爷的日常note

>记录日常项目中遇到的问题的解决方案与心得。

## 目录：
* [git基本操作](#git基本操作)
* [使用flexible实现手淘h5页面的终端适配](#使用flexible实现手淘h5页面的终端适配)
* [webpack](#webpack)
* [video搭配canvas的神奇效果](#video搭配canvas的神奇效果)
* [js控制输入框光标位置](#js控制输入框光标位置)
* [ios与android的new_date之坑](#ios与android的new_date之坑)
* [原生js实现瀑布流效果](#原生js实现瀑布流效果)
* [微信小程序rsa签名验签加密解密](#微信小程序rsa签名验签加密解密)
* [解决vs2017隐藏高级保存选项命令](#解决vs2017隐藏高级保存选项命令)
* [export_default和export的区别](#export_default和export的区别)
* [微信小程序授权的写法](#微信小程序授权的写法)
* [微信小程序获取和修改上一个页面的数据](#微信小程序获取和修改上一个页面的数据)
* [微信小程序解决富文本不支持的问题](#微信小程序解决富文本不支持的问题)
* [浏览器同源政策及其规避方法](#浏览器同源政策及其规避方法)
* [封装axios](#封装axios)
* [axios的三种post请求方式写法](#axios的三种post请求方式写法)
* [数组的一些操作](#数组的一些操作)
* [浅谈控制反转与依赖注入](#浅谈控制反转与依赖注入)
* [防抖与节流](#防抖与节流)
* [调用iframe的子iframe里的function](#调用iframe的子iframe里的function)
* [对象深克隆](#对象深克隆)
* [eventBus](#eventBus)
* [在vue中使用RSA加密解密加签解签](#在vue中使用RSA加密解密加签解签)
* [JSON数据中含有需要unescape字符串的处理](#JSON数据中含有需要unescape字符串的处理)
* [px2rem](#px2rem)
* [浏览器跨域请求处理方法](#浏览器跨域请求处理方法)
* [获取两个日期之间的日期数组](#获取两个日期之间的日期数组)
* [bootstrap_selectpicker搜索部分中文时不支持完整中文字符输入的bug](#bootstrap_selectpicker搜索部分中文时不支持完整中文字符输入的bug)
* [网站速度优化](#网站速度优化)
* [JS数字精度丢失的问题](#JS数字精度丢失的问题)
* [解决页面国际化问题](#解决页面国际化问题)
* [页面seo优化](#页面seo优化)
* [常见http状态码](#常见http状态码)
* [some的实现](#some的实现)
* [判断是否为数组的方法](#判断是否为数组的方法)
* [http缓存](#http缓存)
* [JS订阅模式](#JS订阅模式)
* [闭包](#闭包)
* [vue全局注册组件](#vue全局注册组件)
* [Promise_all的错误处理](#Promise_all的错误处理)
* [前端对图片的处理方式](#前端对图片的处理方式)
* [从输入网址到页面显示的全过程](#从输入网址到页面显示的全过程)
* [浏览器进程](#浏览器进程)
* [手写vue](#手写vue)
* [prototype和__proto__的区别](#prototype和__proto__的区别)
* [js作用域与作用域链](#js作用域与作用域链)
* [js垃圾回收机制](#js垃圾回收机制)
* [vue中computed和watch的区别](#vue中computed和watch的区别)
* [js的new操作符做了哪些事情](#js的new操作符做了哪些事情)
* [Set和Map](#Set和Map)
* [http与https](#http与https)
* [深度作用选择器](#深度作用选择器)
* [async/await优雅的错误处理方法](#async/await优雅的错误处理方法)




## git基本操作
```javascript
git init demo //初始化

git add fileName // 将修改过的文件add一下
git add . // 添加所有修改过的文件

git ls -la // 列出文件列表

git status // 查看状态

git commit -m "comment" 提交

// git push <远程主机名> <本地分支名>:<远程分支名>
git push origin master // 如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。
git push origin :master // 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支；等同于 git push origin --delete master
git push origin // 如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略
git push // 如果当前分支只有一个追踪分支，那么主机名都可以省略；远程已有remote_branch分支并且已经关联本地分支local_branch且本地已经切换到local_branch
git push -u origin master // 如果当前分支与多个主机存在追踪关系，则可以使用-u选项指定一个默认主机，这样后面就可以不加任何参数使用git push
git push origin local_branch:remote_branch // 远程没有remote_branch分支并，本地已经切换到local_branch

git branch branchName // 创建分支
git checkout branchName // 切换到对应分支
git checkout -b branchName origin/branchName // 取远程分支并分化一个新分支
git branch -d branchName // -d是--delete的缩写，在使用--delete删除分支时，该分支必须完全和它的上游分支merge完成，如果没有上游分支,必须要和HEAD完全merge
git branch -D branchName // -D是--delete --force的缩写，强制删除
git push origin --delete branchName // 删除远程分支

git fetch branchName // 拉取
git merge branchName // 合并
git pull branchName // 拉取并合并
git fetch origin // 从origin服务器抓取本地没有的数据，并且更新本地数据库，移动 origin/master 指针指向新的、更新后的位置

git clone repositoryAddress// 克隆仓库
----------------------
撤销操作：
git checkout .             //修改过某个文件，没有git add，想撤销这次修改

git reset                  //所有在暂存区的都撤销
git reset example.txt      //修改过某个文件，已经git add过，撤销这次修改 (暂存区目录树的重写)。
git reset --soft commitId  //如果已经修改某几个文件，但是想撤销到某个版本，但是当前暂存区、工作区不想撤销
git reset --hard commitId  //直接撤销回某个版本
----------------------
git stash     当前工作区暂停
git stash pop 继续当前工作
----------------------
比较差异：
git diff             //比较工作目录和临时修改区域（未git add加入到暂存区域）之间的差异
git diff branchName  //比较当前目录与某个分支的差异
git diff head        //显示工作版本和head的差别
----------------------
linux命令：
cd    //更换当前目录
mkdir //创建一个新目录
vim   //创建、修改文件
rm    //删除文件；一般的删除操作用rm即可
----------------------
```


## 使用flexible实现手淘H5页面的终端适配
参考：https://github.com/amfe/article/issues/17?utm_source=caibaojian.com


## webpack
```javascript
// 在终端中使用npm init命令可以自动创建这个package.json文件
npm init

// 安装Webpack
npm install webpack --save-dev

// 这时候使用 webpack -v 会出现’webpack’ 不是内部或外部命令，也不是可运行的程序或批处理文件。
// 要先全局安装 webpack 和webpack-cli 再局部安装 webpack 和webpack-cli 
// 继续安装
npm install –save-dev webpack-cli
npm install –global webpack
npm install –global webpack-cli

webpack demo.js demo.bundle.js
// 报错。这是为什么呢?原因是我的webpack版本过高,原来的命令已经不适用了
// 更换打包命令
webpack demo.js -o demo.bundle.js

// 使用webpack构建本地服务器
npm install --save-dev webpack-dev-server

// 配置package.json中的scripts对象，用以开启本地服务器：
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack",
  "server": "webpack-dev-server --open"
}

// 安装babel，npm一次性安装多个依赖模块，模块之间用空格隔开
// `babel-loader@8.x`是webpack用于`Babel 7.x`的一个整合loader模块，`Babel 7.x`已经把所有的相关的包从`babel-`迁移到了`@babel`的npm环境仓库。
// 所以通过使用`@babel/core`代替`babel-core`来安装：
// 总的来说，babel舍弃了以前的 babel-*-* 的命名方式，改成了@babel/*-*，修改依赖和.babelrc文件后就能正常启动项目了。
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/cli

// 使用React，记得先安装 React 和 React-DOM
npm install --save react react-dom

// presets里的参数也要改，presets: ["@babel/preset-env", "@babel/preset-react"]
module: {
  rules: [
    {
      test: /(\.jsx|\.js)$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      exclude: /node_modules/
    }
  ]
}

// 安装css的loader
npm install --save-dev style-loader css-loader

// 安装PostCSS
// PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。
npm install --save-dev postcss-loader autoprefixer

// 安装HtmlWebpackPlugin插件
npm install --save-dev html-webpack-plugin

// 避免缓存带来的影响，在输出文件名后加上哈希值
output: {
  path: __dirname + "/build", //打包后的文件存放的地方
  filename: "bundle-[hash].js" //打包后输出文件的文件名
}

// 去除build文件中的残余文件
// 安装clean-webpack-plugin插件
npm install --save-dev clean-webpack-plugin

// webpack.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build", //打包后的文件存放的地方
    filename: "bundle-[hash].js" //打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./build", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules
              localIdentName: "[name]__[local]--[hash:base64:5]" // 指定css的类名格式
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("This is text."),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
    }),
    new CleanWebpackPlugin()// 新版本不需传参数
  ]
};
```


## video搭配canvas的神奇效果
参考：http://html5doctor.com/video-canvas-magic/


## js控制输入框光标位置
```javascript
var inpObj = document.getElementById(inputId);
if (inpObj.setSelectionRange) {
    inpObj.setSelectionRange(0, inpObj.value.length);
}
```
参考：https://blog.csdn.net/foralienzhou/article/details/52437929


## ios与android的new_date之坑
```javascript
例如：
var date = '2016-02-28 16:42:54.0';

android:
new Date(date)
//Sun Feb 28 2016 16:42:54 GMT+0800 (中国标准时间)

ios:
new Date(date)
//Invalid Date = $1     不能将含有'－'的时间字符串转成时间。
//Invalid Date = $2     '.0'表示的毫秒不能转
new Date(date.replace(/\-/g,'/').replace('.0',''));
//The Feb 18 2016 16:42:54 GMT+0800 (CST)
```
参考：http://www.mamicode.com/info-detail-1392511.html


## 原生js实现瀑布流效果
参考：https://segmentfault.com/a/1190000012621936


## 微信小程序rsa签名验签加密解密
参考：https://github.com/zhangzhaopds/WeixinApp_RSA_Signature


## 解决vs2017隐藏高级保存选项命令
```javascript
（1）单击“工具”|“自定义”命令，弹出“自定义”对话框。
（2）单击“命令”标签，进入“命令”选项卡。
（3）在“菜单栏”下拉列表中，选择“文件”选项。
（4）单击“添加命令”按钮，弹出“添加命令”对话框。
（5）在“类别”列表中，选择“文件”选项；在“命令”列表中，选择“高级保存选项”选项。
（6）单击“确定”按钮，关闭“添加命令”对话框。
（7）选中“控件”列表中的“高级保存选项”选项，单击“上移”或者“下移”按钮，调整该命令的位置。
（8）单击“关闭”按钮，完成“高级保存选项”命令的添加操作。
```


## export_default和export的区别
```javascript
(1).export与export default均可用于导出常量、函数、文件、模块等
(2).你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
(3).在一个文件或模块中，export、import可以有多个，export default仅有一个
(4).通过export方式导出，在导入时要加{ }，export default则不需要


1.export
//a.js
export const str = "blablabla~";
export function log(sth) { 
  return sth;
}
对应的导入方式：
//b.js
import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号


2.export default
//a.js
const str = "blablabla~";
export default str;
对应的导入方式：
//b.js
import str from 'a'; //导入的时候没有花括号


使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名
//a.js
let person = "boy";
export default person（person不能加大括号）
//原本直接export person外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
其实此处相当于为person变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。

// b.js
本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import any from "./a.js"
import any12 from "./a.js" 
console.log(any,any12)   // boy,boy
```
参考：https://www.jianshu.com/p/edaf43e9384f


## 微信小程序授权的写法
```javascript
// utils.js
export const getCurrentLocation = () => {
  return new Promise((res, rej) => {
    // 调用需要授权的方法时，小程序会自动弹出授权窗
    wx.getLocation({
      type: 'wgs84',
      success: ({ latitude, longitude }) => {
        res({ lat: latitude, lng: longitude });
      },
      fail: rej
    });
  });
};

/**
 * 获取授权情况promisify封装
 * @param {String} keyName
 * @return {Promise}
 */
export const getSetting = keyName => {
  return new Promise((res, rej) => {
    wx.getSetting({
      success: ({ authSetting }) => {
        res(authSetting[keyName]);
      },
      fail: rej
    });
  });
};

/**
 * 获取重新授权过程
 * @param {Object} dataJson
 * @return {Promise}
 */
export const reauthenticate = (
  keyName = '',
  { askMessage = '检测到未授权，是否重新授权？' } = {}
) => {
  return new Promise((res, rej) => {
    getSetting(keyName).then(settingRs => {
      if (!settingRs) {
        showModal({
          title: '提示',
          content: askMessage,
          success: modalRs => {
            // 用户同意重新授权，跳转授权页面
            if (modalRs.confirm) {
              wx.openSetting({
                success: reSettingRs => {
                  // 用户成功重新授权，则重新获取授权信息并继续第一个授权时的resolve操作
                  if (reSettingRs.authSetting[keyName]) {
                    res();
                  } else {
                    // 这里是用户同意重新授权，但没点击授权
                    rej();
                  }
                }
              });
            } else {
              // 这里是用户不同意重新授权
              rej();
            }
          }
        });
      } else {
        res();
      }
    });
  });
};


// 调用
import * as utils from 'utils/util';

// example 1
getCurrentLocation() {
  utils.getCurrentLocation()
    .then(({ lat, lng }) => {
      // 用户确认授权
      console.log(lat)
      console.log(lng)
    })
    .catch(() => {
      // 用户取消授权，重新引导授权
      utils.reauthenticate('scope.userLocation', {
        askMessage: '检测到您拒绝了授权，将无法获取位置信息，是否重新授权'
      })
      .then(() => {
        // 重新授权
        this.getCurrentLocation()
      })
      .catch(() => {
        console.log('这里是用户同意重新授权，但没点击授权');
      });
    })
}

// example 2
getWxInvoice(noRetry) {
  // 调用需要授权的方法时，小程序会自动弹出授权窗
  wx.chooseInvoiceTitle({
    success: res => {
      this.setData({
        InvoiceHeaderType: String(res.type),
        InvoiceHeader: res.title,
        InvoiceTaxNo: res.taxNumber,
        InvoiceAddress: res.companyAddress,
        InvoicePhone: res.telephone,
        InvoiceBankName: res.bankName,
        InvoiceBankAcctID: res.bankAccount
      });
    },
    fail: () => {
      if (!noRetry) {
        utils
          .reauthenticate('scope.invoiceTitle')
          .then(() => {
            this.getWxInvoice(true);
          })
          .catch(() => {
            console.log('获取失败');
          });
      }
    }
  });
}
```


## 微信小程序获取和修改上一个页面的数据
```javascript
var pages = getCurrentPages();
var Page = pages[pages.length - 1];//当前页
var prevPage = pages[pages.length - 2];  //上一个页面
var info = prevPage.data // 获取数据
prevPage.setData({ 键: 值 })// 设置数据
```


## 微信小程序解决富文本不支持的问题
```javascript
使用wxParse插件

wxParse空格解析不生效的解决方案：
在wxDiscode.js文件的strcharacterDiscode方法中
把
str = str.replace(/&nbsp;/g, ' ');
修改为
str = str.replace(/&nbsp;/g, '\xa0');
```
参考：https://blog.csdn.net/milli236/article/details/79668162


## 在浏览器上安装Vue_Devtools工具
参考：https://www.cnblogs.com/feiyu159/p/8666865.html


## 浏览器同源政策及其规避方法
参考：http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html


## 封装axios
```javascript
import axios from 'axios'
const qs = require('qs')
export const api = {
  async post (url, data) {
    try {
      let res = await axios.post(url, qs.stringify(data))
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      alert('服务器出错')
      console.log(err)
    }
  }
}
```
参考：https://www.jianshu.com/p/4168efdc172b


## axios的三种post请求方式写法
参考：https://segmentfault.com/a/1190000015261229


## 数组的一些操作
```javascript
// 数组去重
let arr = [1, 2, 2, 3, 3, 3];
let set = new Set(arr);
let newArr = Array.from(set);
console.log(newArr); // [1, 2, 3]


// 数组降序
[1, 2, 3, 4, 5].sort((a, b) => b - a);


// 数组扁平化
// Array.flat(n) 是ES10扁平数组的api, n表示维度, n值为Infinity时维度为无限大
[1, [2, 3]].flat(2); // [1, 2, 3]
[1, [2, 3, [4, 5[...]]]].flat(Infinity); // [1,2,3,4...n]

function flatten(arr, result = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatten(item, result)
    } else {
      result.push(item)
    }
  }
  return result;
}


// 获取数组最大值
let arr = [1, 2, 3];
let max = Math.max(...arr);


// 让数组中的前项与后项做某种计算
let resultArr = [1, 2, 3, 4, 5].reduce((prev, next) => {
  return prev + next;
})
console.log(resultArr) // 15


// 数组合并
[1, 2].concat([3, 4]) // [1, 2, 3, 4]
[...[1, 2, 3], ...[3, 4, 5]] // [1, 2, 3, 3, 4, 5]


// 判断数组是否包含值
[1, 2, 3].includes(4) // false
[1, 2, 3].indexOf(4) // -1
[1, 2, 3, 4, 3].find(item => item === 3) // 3 获取数组中符合的第一个元素
[1, 2, 3].findIndex(item => item === 3) // 2


// 类数组转化
// 类数组：有length属性，但是不具备数组的方法
Array.prototype.slice.call(args)
Array.prototype.slice.apply(args)
Array.from(args)
[...args]


// 数组每一项设置值
// fill语法: array.fill(value, start, end)
// value: 必需。填充的值。
// start: 可选。开始填充位置。
// end: 	可选。停止填充位置 (默认为 array.length)
[1, 2, 3, 4, 5].fill(6, 2, 4) // [1, 2, 6, 6, 5]
[1, 2, 3].map(() => 4)


// 有一项满足条件
[1, 2, 3].some(item => item > 2) // true


// 每一项都满足条件
[1, 2, 3].every(item => item > 2) // false


// 过滤数组
[1, 2, 3].filter(item => item > 1) // [2, 3]


// 对象和数组转化
// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
// Object.fromEntries()方法把键值对列表转换为一个对象。
Object.keys({ name: 'Gue', age: 18}) // ['name', 'age']
Object.values({ name: 'Gue', age: 18}) // ['Gue', 18]
Object.entries({ name: 'Gue', age: 18}) // [['name', 'Gue'], ['age', 18]]
Object.fromEntries([['name', 'Gue'], ['age', 18]]) // { name: 'Gue', age: 18 }
```


## 浅谈控制反转与依赖注入
参考：https://zhuanlan.zhihu.com/p/33492169


## 防抖与节流
```javascript
// 防抖
let debounce = (fn, delayTime) => {
  let timer = null;
  return function() {// 这里注意不能用箭头函数，会报错：arguments is not defined
    if (timer) clearTimeout(timer);
    let _this = this;
    let args = arguments;
    timer = setTimeout(() => {
      fn.apply(_this, arguments)
    }, delayTime)
  }
}
input.onkeydown = debounce(function() { 
  // do something
}, 2000);

// 节流
let throttle = (fn, delayTime) => {
  let isFinished = true;
  return function() {// 这里注意不能用箭头函数，会报错：arguments is not defined
    if (!isFinished) return;
    isFinished = false;
    let _this = this;
    let args = arguments;
    setTimeout(() => {
      fn.apply(_this, args)
      isFinished = true;
    }, delayTime)
  }
}
page.onscroll = throttle(function() { 
  console.log('scroll')
}, 2000);

// 注：demo文件夹里有例子
```


## 调用iframe的子iframe里的function
```javascript
// 遇到的问题： 有时候 window.frames['iframeName'] 能获取到，但有时又是undefined
// 试过 iframe.contentWindow.document.getElementById ，也是undefined
// 下面调试均是在控制台里输入
// 例子一：
var iframe_1 = window.frames['iframe1'];
iframe_1// Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
var iframe_2 = iframe_1.frames['layui-layer-iframe1']// VM8981:1 Uncaught ReferenceError: iframe_1 is not defined at <anonymous>:1:16
iframe_1// Uncaught ReferenceError: iframe_1 is not defined at <anonymous>:1:1
window.name// iframe1


// 例子二：
window.name// ""
var iframe_1 = window.frames['iframe1']// undefined
iframe_1// undefined
window.name// iframe1


// 例子三：
window.name// ""
var iframe_1 = window.frames['iframe1']// undefined
iframe_1// Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
iframe_1// 这里再确认一遍 Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
var iframe_2 = iframe_1.frames['layui-layer-iframe1']// Uncaught ReferenceError: iframe_1 is not defined at <anonymous>:1:16
window.name// iframe1


// 现象：看上去很奇怪，iframe_1一时是有值的，一时缺变成了undefined
// 估计：难道与F12选中的当前窗口有关系？
// 总结：经过验证，就是与F12选中的当前页面有关。因为在找名称为 layui-layer-iframe1 的iframe时，用F12选择元素后，改变了当前的window。用 window.name 判断清楚当前的页面就一目了然了。


// 附上帮龙爷解决问题的代码：
// 浏览器为ie11
var frame_mainFrame = window.frames['mainFrame'];
var frame_main = frame_mainFrame.document.frames['main'];
var frame_page = frame_main.document.frames['page'];
frame_page.downloadData(1, 3000);
```


## 对象深克隆
```javascript
const deepClone = obj => JSON.parse(JSON.stringify(obj));

// 上述clone的方法会忽略function和undefined的字段，对date类型支持貌似也不友好。而且只能克隆原始对象自身的值
// 结论：对于纯数据的json对象的深克隆，可以使用JSON.parse()和JSON.stringify()方法


const deepClone = obj => {
    if(obj === null) return null;
    if(obj.constructor !== Object) return obj;
    if(obj.constructor === Date) return new Date(obj);
    if(obj.constructor === RegExp) return new RegExp(obj);
    let newObj = new obj.constructor(); //保持继承的原型
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            let val = obj[key];
            //newObj[key] = typeof val === 'object' ? arguments.callee(val) : val;
            newObj[key] = typeof val === 'object' ? deepClone(val) : val;// 避免使用aguments.callee
        }
    }
    return newObj;
}

// 上述方法能完美实现深拷贝
// 拓展：callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。
// 警告：在严格模式下，第5版 ECMAScript (ES5) 禁止使用 arguments.callee()。当一个函数必须调用自身的时候, 避免使用 arguments.callee(), 通过要么给函数表达式一个名字,要么使用一个函数声明.
```
参考：https://www.cnblogs.com/tangjiao/p/9313829.html


## eventBus
```javascript
// eventBus.js
import Vue from "vue";
export default new Vue();

// main.js
import bus from "./store/eventBus";
Vue.prototype.$bus = bus;

// App.vue
// 监听事件
created() {
  this.$bus.$on("eventName", e => {
    // do something
  });
}

// 触发事件
onMenuIconClick() {
  this.$bus.$emit("eventName");
}
```
参考：https://www.jianshu.com/p/af9cb05bfbaf


## 在vue中使用RSA加密解密加签解签
```javascript
// 首先引入jsencrypt
npm install jsencrypt --save

// 在main.js中引入
import JsEncrypt from 'jsencrypt'
Vue.prototype.$jsEncrypt = JsEncrypt

let publicKey = '这里是封装的公钥'
let privateKey = '这里是封装的私钥'

//加密方法
RSAencrypt(pas) {
  //实例化jsEncrypt对象
  let jse = new JSEncrypt();
  //设置公钥
  jse.setPublicKey(publicKey);
  // console.log('加密：'+jse.encrypt(pas))
  return jse.encrypt(pas);
}
  
//解密方法
RSAdecrypt(pas) {
  let jse = new JSEncrypt();
  // 私钥
  jse.setPrivateKey(privateKey)
  // console.log('解密：'+jse.decrypt(pas))
  return jse.decrypt(pas);
}
```
参考：https://juejin.im/post/5c27331be51d4535c9267fa9


## JSON数据中含有需要unescape字符串的处理
```javascript
// 登录后返回的数据需要经过以下处理（为了统一进行unescape处理）
JSON.parse(unescape(JSON.stringify(res.data)))

// 返回的结果
{"errcode":"0","errmsg":"","resultcode":"0","resultmsg":"","data":{"tableCount":"3","table1_rowCount":"1","table1":[{"UserID":"888840717208","UserCode":"13926112334","UserName":"伍永祺","IsAdmin":"0","JobName":"销售顾问","HeadImg":"hbb/UserHeadImg/888840717208_1491905224578_969.PNG","DepID":"680770339","Phone":"13926112334","GesturesPWD":"","EntID":"881000000001","EntCode":"hbb","EntName":"货宝宝网络科技有限公司","LogoImg":"881000000001/Other/888120596564_1523328944332_355.JPG","DepName":"厦门代理"}],"table2_rowCount":"1","table2":[{"CommunicationsSig":"{"IsSucc":1,"UserSig":{"TLS.Identifier":"888840717208","TLS.account_type":"1552","TLS.appid_at_3rd":"1400002796","TLS.expiry_after":"604800","TLS.sdk_appid":"1400002796","TLS.sig":"eJx1kE1PgzAAhu-8iqZXjJauH2CyAzN16XAuBBIXLw1CWapYEQqZGv*7C2rk4nt9nuRJ3g8PAADzm*y8KMuXwTrl3loNwSWAAaUYnv3xtjWVKpxadNU3J*g0zCM2s-SxNZ1WRe10N1kMkRChmWEqbZ2pzQ8PTyOIBxyjcGb11ZOaiv*nenOY4FakV1J00pLRHtaYJ9bdjT67j-OjkD3VOtv4i8FcvK4e9o1Yu9jEQb2JrV9ub5MikTTi0fXA6-24yx5Fk4g0blbSL98HyvN0uZwlnXn*-YZxRDhmBHqf3hd*tFZf","TLS.signed":"appid_at_3rd,account_type,identifier,sdk_appid,time,expire_after","TLS.time" : "2019/8/29 10:54:24"}}","accountID":"1200","accountType":"1552","env":"0","HWPushID":"161","XMPushID":"162"}],"table3_rowCount":"1","table3":[{"BankService":"http://service.hbbyun.com:8012/HBB_BankDataWebService/DataWebService.asmx","OssService":"http://service.hbbyun.com:8012/HBB_OssDataWebService/DataWebService.asmx","OssSystemDomain":"http://cdn-hbbsystem.hbbyun.com","OssCustomerDomain":"http://hbbcustomer-test.hbbyun.com","Bucket":"hbbcustomer-test","Endpoint":"http://oss-cn-shenzhen.aliyuncs.com","LogsService":"http://service.hbbyun.com:8012/HBB_LogsDataWebService/DataWebService.asmx","OpenService":"http://service.hbbyun.com:8012/HBB_OpenDataWebService/DataWebService.asmx"}]}}

// 由于table2中的CommunicationsSig字段内容的本来就含有escape了的字符串
// 所以在执行unescape时，把CommunicationsSig字段的内容也解析了
// 导致双引号的匹配错乱了，JSON.parse时报错

// 解决方法：
// 把CommunicationsSig字段内容的双引号（%22）替换为（%2522）
// 将%号转义为%25，再把回车%0D和换行%0A替换为空字符串
JSON.parse(unescape(JSON.stringify(res.data).replace(/%22/g, '%2522').replace(/%0D/g,'').replace(/%0A/g,'')))

// 最后就能得到一个JSON.parse后的正确的object
// 附：
// escape('"') 的结果为 "%22"
// escape('%') 的结果为 "%25"
```


## px2rem
```javascript
// 1.下载并引入lib-flexible
npm install --save lib-flexible
// 在main.js中 ：import 'lib-flexible/flexible'

// 2.引入px2rem-loader
npm install --save px2rem-loader

// 3.将px2rem-loader添加到cssLoaders
// 在build/utils.js中，添加如下配置
// 在generateLoaders方法中增加px2remLoader
var px2remLoader = {
  loader: "px2rem-loader",
  options: {
    remUnit: 75 // 设计稿宽度/10
  }
};

function generateLoaders(loader, loaderOptions) {
  // const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
  const loaders = [
    ...(options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]),
    px2remLoader
  ];
  if (loader) {
    loaders.push({
      loader: loader + "-loader",
      options: Object.assign({}, loaderOptions, {
        sourceMap: options.sourceMap
      })
    });
  }

  // Extract CSS when that option is specified
  // (which is the case during production build)
  if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: "vue-style-loader"
    });
  } else {
    return ["vue-style-loader"].concat(loaders);
  }
}

// vue 使用lib-flexable，px2rem 进行移动端适配 但是引入的第三方UI组件 vux 的样式缩小
// 解决方案:将vux组件中px转化为PX，避免被转成rem
// 在webpack.base.conf.js中 vuxLoader中配置以下代码
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
    "vux-ui",
    {
      name: "after-less-parser",
      fn: function(source) {
        if (
          this.resourcePath.replace(/\\/g, "/").indexOf("vux/src/components") >
          -1
        ) {
          source = source.replace(/px/g, "PX");
        }
        // 自定义的全局样式大部分不需要转换
        if (this.resourcePath.replace(/\\/g, "/").indexOf("App.vue") > -1) {
          source = source.replace(/px/g, "PX").replace(/-1PX/g, "-1px");
        }
        return source;
      }
    },
    {
      name: "style-parser",
      fn: function(source) {
        if (
          this.resourcePath.replace(/\\/g, "/").indexOf("vux/src/components") >
          -1
        ) {
          source = source.replace(/px/g, "PX");
        }
        // 避免转换1PX.less文件路径
        if (source.indexOf("1PX.less") > -1) {
          source = source.replace(/1PX.less/g, "1px.less");
        }
        return source;
      }
    },
    "progress-bar",
    {
      name: "duplicate-style",
      options: {
        cssProcessorOptions: {
          safe: true,
          zindex: false,
          autoprefixer: {
            add: true,
            browsers: ["iOS >= 7", "Android >= 4.1"]
          }
        }
      }
    }
  ]
});
```


## 浏览器跨域请求处理方法
```javascript
// 1.document.domain + iframe

// 2.location.hash + iframe

// 3.window.name + iframe

// 4.动态创建script，因为script标签不受同源策略的限制。

// 5.JSONP

// 6.postMessage

// 7.web sockets

// 8.CORS；CORS背后的思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败。


// 总结：
// 最直接了当的方式是：
// 1.在程序中添加HTTP头，如： Response.Headers.Add("Access-Control-Allow-Origin", "*");
// JSON
{
  'Access-Control-Allow-Origin': '*',
}

// HTML
// <meta http-equiv="Access-Control-Allow-Origin" content="*">

// PHP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// 2.在被请求的网站上，设置HTTP头
"Access-Control-Allow-Origin:*" //值为*或指定的域名
```
参考：https://www.cnblogs.com/PheonixHkbxoic/p/5760838.html


## 获取两个日期之间的日期数组
```javascript
function(beginDate, endDate) {
    let arr = [];
    let dates = [];

    // 设置两个日期UTC时间
　　let db = new Date(beginDate);
　　let de = new Date(endDate);

    // 获取两个日期GTM时间
　　let s = db.getTime() - 24 * 60 * 60 * 1000;
　　let d = de.getTime() - 24 * 60 * 60 * 1000;

    // 获取到两个日期之间的每一天的毫秒数
　　for (let i = s; i <= d;) {
　　　　i = i + 24 * 60 * 60 * 1000;
        arr.push(parseInt(i))
　　}
    
    // 获取每一天的时间  YY-MM-DD
    for( let j in arr ){
        let time = new Date(arr[j]);
        let year = time.getFullYear(time);
        let mouth = (time.getMonth() + 1)>=10?(time.getMonth() + 1):('0'+(time.getMonth() + 1));
        let day = time.getDate()>=10?time.getDate():('0'+time.getDate());
        let YYMMDD = year + '-' + mouth + '-' + day;
        dates.unshift(YYMMDD)
    }

    return dates;
}
```


## bootstrap_selectpicker搜索部分中文时不支持完整中文字符输入的bug
```javascript
bug情况为: 
当我们使用bootstrap-select的动态搜索下拉框时，例如在搜索框输入da，中文输入法应该是出现: 1.打 2.大 3.达 ... 这样的内容。
但实际情况是，搜索框直接键入了d，然后中文搜索为a，输入法输出: 1.啊 2.阿 3.吖 ...
这是由于bootstrap-select的部分js，让部分中文字符，在输入法输入还没有完成时，就打断了中文键入，导致不能完整地在输入框内输入字符。

以bootstrap.select 1.11.2版本为例；解决方法如下：
1、修改bootstrap-select/1.11.2/js/bootstrap-select.js
在1477行:
        if (that.$searchbox.val()) that.$lis.not('.hidden, .divider, .dropdown-header').eq(0).addClass('active').children('a').focus();
        $(this).focus();
这2句话全部注释掉

2、修改bootstrap-select/1.11.2/js/bootstrap-select.min.js
先格式化该文件，将全部无空格的文件变成易于读写的格式，找到513行:
d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus()

将这句话改为:
d.$lis.filter(".active").removeClass("active")

其中，d.$searchbox.val()&&d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),a(this).focus()
这部分是要注释掉或者删掉的。

修改完成这两个文件后，注意清除浏览器缓存，再刷新该bootstrap-select动态搜索下拉框的页面，就可以不打断中文输入法输入，完整键入中文字符了。
```
参考：https://blog.csdn.net/moqiluoji/article/details/104608076


## 网站速度优化
```javascript
1.减少HTTP请求数
2.样式表放在网页Head部分
3.把JS文件放到网页底部
4.css sprite
5.压缩图片为webp格式
6.使用lazyload
7.使用CDN，把静态文件分发到CDN服务器
8.Expires与Cache-Control
// <meta http-equiv="Expires"  content="Wed, 26 Feb 1997 08:21:57 GMT">
// <meta http-equiv="Cache-Control" content="max-age=3600" />
```


## JS数字精度丢失的问题
```javascript
let num = 0.1 + 0.2;
console.log(num)// 0.30000000000000004

原因：
计算机的二进制实现和位数限制有些数无法有限表示。

比如：
0.1 >> 0.0001 1001 1001 1001…（1001无限循环）
此时只能模仿十进制进行四舍五入了，但是二进制只有 0 和 1 两个，于是变为 0 舍 1 入。这即是计算机中部分浮点数运算时出现误差，丢失精度的根本原因。

解决方案：
对于整数，前端出现问题的几率可能比较低，毕竟很少有业务需要需要用到超大整数，只要运算结果不超过 Math.pow(2, 53) 就不会丢失精度。
对于小数，把小数放大为整数（乘倍数），再缩小回原来倍数（除倍数）// (0.1*10 + 0.2*10) / 10 == 0.3
```


## 解决页面国际化问题
```javascript
// 1.写两套一模一样除了语种不同的页面。
// 这个是最好解决，技术含量最低的一种办法，那么弊端也就很明显了，占内存大，麻烦。

// 2.引入谷歌的插件。
// 最大的弊端就是翻译不可控。

// 3.使用translater.js实现翻译功能。
// 这是一个利用HTML注释的页面翻译解决方案。对于少量的静态页面，这种解决方案显得更简单。
// 安装：$ npm install translater.js
// 使用：
<div>
  这里是中文
  <!--{jp}ここは日本語です-->
  <!--{en}Here is English-->
</div>

let tran = new Translater({
  lang:"default"
});
tran.setLang('jp')

// 4.i18n实现国际化。
// 安装
npm install vue-i18n --save-dev

// 在main.js文件中引入
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 Vue.use() 使用插件const i18n = new VueI18n({
  locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./VueI18n/language-zh'),// 引入language-zh.js  language-en.js
    'en': require('./VueI18n/language-en')
  }
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

// 在src下新建文件夹（文件名字可自己定）VueI18n 然后再文件夹下将两个文件language-zh.js和language-en.js
// language-zh.js
{
　　"lang":{
　　　　"home": "首页",
　　　　"name": '中文'
　　}
}
// language-en.js
{
　　"lang":{
　　　　"home": "HomePage",
　　　　"name": 'Chinese'
　　}
}

// 在组件中使用
<template>
  <div class="content">
    <span>{{ $t('lang.home')}}</span>
    <span>{{ $t('lang.name')}}</span>
    <span @click="changeLaguages()">切换语言</span>
    <!-- <span v-if="lang==='zh'"  @click="changezh" style="display:block" class="color">中文</span> -->
    <!-- <span v-else ="lang==='en'" @click="changeen" style="display:block">english</span> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: 'zh'
    }
  },
  methods: {
    changeLaguages () {
      console.log(this.$i18n.locale)
      let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang
    }
    // changezh () {
    //   this.lang = '中文'
    //   this.$i18n.locale = 'zh'
    // },
    // changeen () {
    //   this.lang = 'english'
    //   this.$i18n.locale = 'en'
    // }
  }
}
</script>
```


## 页面seo优化
```javascript
1.标题的设置
2.元描述// <meta name="description" content="This is content.">
3.设置H1标签
4.图片添加alt文本
5.标签中如果有“title”、“description”、“keywords”等属性，尽量都填上
6.高质量的网站内容
7.设置好404页面
8.清理网站死链接
9.精简代码
10.网址简短，关键字丰富
```


## 常见http状态码
```javascript
// 1** 信息，服务器收到请求，需要请求者继续执行操作
// 2** 成功，操作被成功接收并处理
// 3** 重定向，需要进一步的操作以完成请求
// 4** 客户端错误，请求包含语法错误或无法完成请求
// 5** 服务器错误，服务器在处理请求的过程中发生了错误

// 200 OK 请求成功。一般用于GET与POST请求
// 301 Moved Permanently 永久移动
// 302 Found 临时移动
// 403 Forbidden 服务器理解客户端的请求，但是拒绝执行此请求
// 404 Not Found 服务器无法根据客户端的请求找到资源
// 405 Method Not Allowed 客户端请求中的方法被禁止
// 500 Internal Server Error 服务器内部错误，无法完成请求
// 502 Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
// 503 Service Unavailable 由于超载或系统维护，服务器暂时的无法处理客户端的请求
```


## some的实现
```javascript
Array.prototype.some = function(fn, thisValue) {// thisValue可选参数。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
  if (type of fn !== 'function') return false;
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(thisValue, arr[i], i, arr);
    if (result) return true;
  }
  return false;
}
// 注意：some函数不能用箭头函数，不然 let arr = this 语句中的this指向会有问题

// 在some的基础上稍微改动一下，就可以实现every
Array.prototype.every = function(fn, thisValue) {
  if (type of fn !== 'function') return false;
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(thisValue, arr[i], i, arr);
    if (!result) return false;
  }
  return true;
}
```


## 判断是否为数组的方法
```javascript
// 1.instance of
let a = [];
a instanceof Array; //true
let b = {};
b instanceof Array; //false

// 2.constructor
let a = [1,3,4];
a.constructor === Array;//true

// 3.Object.prototype.toString.call()
let a = [1,2,3]
Object.prototype.toString.call(a) === '[object Array]';//true

// 4.Array.isArray()
let a = [1,2,3]
Array.isArray(a);//true
```


## http缓存
```javascript
浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识。
浏览器每次拿到服务器返回的请求结果，都会将该结果和缓存标识存入浏览器缓存中。

缓存的资源存哪里？
1.memory cache// 内存，退出进程时数据会被清除，一般存脚本、字体、图片
2.disk cache// 硬盘，退出进程时数据不会被清除，一般存非脚本，如css等

强制缓存：
向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程。主要有三种情况：
1.不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求。
2.存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果。
3.存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存。

控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高。
// <meta http-equiv="Expires"  content="Wed, 26 Feb 1997 08:21:57 GMT">
// <meta http-equiv="Cache-Control" content="max-age=3600" />

协商缓存：
强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。主要有两种情况：
1.协商缓存生效，返回304。// 使用浏览器缓存的结果
2.协商缓存失效，返回200和请求结果。

协商缓存的标识也是在响应报文的HTTP头中和请求结果一起返回给浏览器的，控制协商缓存的字段分别有：Last-Modified / If-Modified-Since和Etag / If-None-Match；其中Etag / If-None-Match的优先级比Last-Modified / If-Modified-Since高。

Last-Modified是服务器响应请求时，返回该资源文件在服务器最后被修改的时间。
If-Modified-Since则是客户端再次发起该请求时，携带上次请求返回的Last-Modified值，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有If-Modified-Since字段，则会根据If-Modified-Since的字段值与该资源在服务器的最后被修改时间做对比，若服务器的资源最后被修改时间大于If-Modified-Since的字段值，则重新返回资源，状态码为200；否则则返回304，代表资源无更新，可继续使用缓存文件。

Etag / If-None-Match 同理。

总结：
强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存。
```
参考：https://juejin.cn/post/6844903593275817998


## JS订阅模式
```javascript
// 用发布-订阅模式，模拟购房者与售楼处的故事
let event = {
  clientList: [],
  listen(key, fn) {
    if (!this.clientList[key]) this.clientList[key] = [];
    this.clientList[key].push(fn);
  },
  trigger(key, money) {
    let fns = this.clientList[key];
    if (!fns || fns.length == 0) return;
    fns.forEach(fn => {
      fn.apply(this, [money])
    })
  }
}

// 再定义一个installEvent函数，用于给所有对象动态安装发布-订阅功能
// 如：另一家售楼处也想要这个功能，就可以调用这个注册了，不同再写多一次这段代码
let installEvent = obj => {
    for (let i in event) {
        obj[i] = event[i]
    }
}

// 给售楼处对象salesOffices动态增加发布-订阅功能
let salesOffices = {}
installEvent(salesOffices)
// 小明订阅信息
salesOffices.listen('squareMeter88', price => {
    console.log('小明，你看中的88平方的房子，价格=' + price)
})
// 小光订阅信息
salesOffices.listen('squareMeter88', price => {
    console.log('小光，你看中的88平方的房子，价格=' + price)
})
// 小红订阅信息
salesOffices.listen('squareMeter100', price => {
    console.log('小红，你看中的100平方的房子，价格=' + price)
})
salesOffices.trigger('squareMeter88', 10000)
salesOffices.trigger('squareMeter100', 50000)

// 运行结果：
// 小明，你看中的88平方的房子，价格=10000
// 小光，你看中的88平方的房子，价格=10000
// 小红，你看中的100平方的房子，价格=50000
```
参考：https://www.jianshu.com/p/0aacfec05046


## 闭包
```javascript
闭包：能够读取其他函数内部变量的函数。

特点：
1.让外部访问函数内部变量成为可能；
2.可以避免使用全局变量，防止全局变量污染；
3.局部变量会常驻在内存中；
4.会造成内存泄漏（有一块内存空间被长期占用，而不被释放）// 解决办法：用完以后赋值null

每次外部函数执行的时候，外部函数的引用地址不同，都会重新创建一个新的地址。

// 例子：
function outerFn(){
  let i = 0; 
  function innerFn(){
      i++;
      console.log(i);
  }
  return innerFn;
}
let inner = outerFn();  //每次外部函数执行的时候,都会开辟一块内存空间,外部函数的地址不同，都会重新创建一个新的地址
inner();
inner();
inner();
let inner2 = outerFn();
inner2();
inner2();
inner2();

// 输出：1 2 3 1 2 3
```


## vue全局注册组件
```javascript
// components/index.js
const getComponents = file => {
  let componentList = [];
  file.keys().forEach(path => {
    const component = file(path).default;
    componentList.push({
      name: component.name
      component
    })
  })

  return componentList;
}

let file1 = require.context('.file1', true, /.vue$/);
let file2 = require.context('.file2', true, /.vue$/);
let file3 = require.context('.file3', true, /.vue$/);

const file1Components = getComponents(file1);
const file2Components = getComponents(file2);
const file3Components = getComponents(file3);

const componentList = [...file1Components, ...file2Components, ...file2Components];

export default {
  install: Vue => {
    componentList.forEach({ name, component } => {
      Vue.component(name, component)
    })
  }
}

// main.js
import globalComponents from "@/components/index";
Vue.use(globalComponents)

// ps：
// 这里用到require.context
// require.context(directory, useSubdirectories, regExp)
// directory: 要查找的文件路径 useSubdirectories: 是否查找子目录 regExp: 要匹配文件的正则
// require.context执行后，返回一个方法webpackContext，这个方法又返回一个__webpack_require__，这个__webpack_require__就相当于require或者import。同时webpackContext还有二个静态方法keys与resolve，一个id属性。
// keys: 返回匹配成功模块的名字组成的数组
// resolve: 接受一个参数request，request为test文件夹下面匹配文件的相对路径，返回这个匹配文件相对于整个工程的相对路径
// id: 执行环境的id，返回的是一个字符串，主要用在module.hot.accept

// const ctx = require.context('./components/', true, /\.js$/)
// console.log(ctx.keys())
// ["./A.js", "./B.js", "./C.js", "./D.js"]

// 相当于
// let map = {
//   "./A.js": "./src/components/test/components/A.js",
//   "./B.js": "./src/components/test/components/B.js",
//   "./C.js": "./src/components/test/components/C.js",
//   "./D.js": "./src/components/test/components/D.js"
// };
// Object.keys(map)
```


## Promise_all的错误处理
```javascript
// Promise.all()方法
// 如果其中任何一个被拒绝，主Promise.all([..])就会立即被拒绝，并丢弃其他所有promise的全部结果
// 因此要记住为每个promise关联一个错误的处理函数
let p1 = Promise.resolve(1).catch(err => {
  return err;
});
let p2 = Promise.reject('error').catch(err => {
  return err;
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "test");
}).catch(err => {
  return err;
}); 

Promise.all([p1, p2, p3]).then(res => {
  // 如果不p1 p2 p3加上catch函数，则永远不会走到这里，因为p2 reject了
  console.log(res); // [1, "error", "test"]
  
  res.map((v, index) => {
    if(v == 'error'){
      console.log('第' + (index + 1) + '个请求失败')
    }else{
      console.log(v)
    }
  })
}).catch(err => {
  console.log('不会走到这里'); // 加上catch函数之后，就不会走到这里
});
```


## 前端对图片的处理方式
图片在前端显示有三种方式：url、base64、blob

url: 一般来说，图片的显示还是建议使用url的方式比较好。如果后端传过来的字段是图片路径的话。

base64：如果图片较大，图片的色彩层次比较丰富，则不适合使用这种方式，因为其Base64编码后的字符串非常大，会明显增大HTML页面，影响加载速度。如果图片像loading或者表格线这样的，大小极小，但又占据了一次HTTP请求，而且很多地方都会使用的场景，则非常适用base64进行优化。
优点：
1.减少了http请求；
2.某些文件可以避免跨域问题；
3.没有图片更新要重新上传，还要清理缓存的问题。
缺点：
1.IE6/IE7以下的浏览器不支持；
2.增加了CSS文件的尺寸；
3.图片完成后还需要base64编码，增加了一定的工作量。

blob: 当后端返回特定的图片二进制流的时候。

```javascript
// 1.url转base64
urlToBase64(url) {
  return new Promise ((resolve,reject) => {
    let image = new Image();
    image.onload = function() {
      let canvas = document.createElement('canvas');
      canvas.width = width ? width : img.width;
      canvas.height = height ? height : img.height;

      // 将图片插入画布并开始绘制
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);

      // result
      let result = canvas.toDataURL('image/png');
      resolve(result);
    };

    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute("crossOrigin",'Anonymous');
    image.src = url;

    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('图片流异常'));
  });
}

// base64转blob
// 原理：利用URL.createObjectURL为blob对象创建临时的URL
base64ToBlob ({b64data = '', contentType = '', sliceSize = 512} = {}) {
  return new Promise((resolve, reject) => {
    // 使用 atob() 方法将数据解码
    let byteCharacters = atob(b64data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
      let byteNumbers = [];
      for (let i = 0; i < slice.length; i++) {
          byteNumbers.push(slice.charCodeAt(i));
      }
      // 8 位无符号整数值的类型化数组。内容将初始化为 0。
      // 如果无法分配请求数目的字节，则将引发异常。
      byteArrays.push(new Uint8Array(byteNumbers));
    }
    let result = new Blob(byteArrays, {
      type: contentType
    })
    result = Object.assign(result,{
      // jartto: 这里一定要处理一下 URL.createObjectURL
      preview: URL.createObjectURL(result),
      name: `图片示例.png`
    });
    resolve(result)
  })
}

// blob转base64
// 原理：利用fileReader的readAsDataURL，将blob转为base64
blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      resolve(e.target.result);
    };
    fileReader.readAsDataURL(blob);
    fileReader.onerror = () => {
      reject(new Error('文件流异常'));
    };
  });
}

// axios里面，responseType默认返回数据类型是json，可将其改为返回数据类型blob
export function getBlobImg (params) {
  return axios.post(
    env.URL + '/XXXX/XXX/XXXX',
    params,
    // 将responseType的默认json改为blob
    {
      responseType: 'blob',
      emulateJSON: true
    }
  ).then(res => {
    if (res.data) {
      return Promise.resolve(res.data)
    } else {
      throw res
    }
  }).catch(err => {
    return Promise.reject(err)
  })
}
```
参考：https://www.jianshu.com/p/64d240292814


## 从输入网址到页面显示的全过程
```javascript
1.浏览器中输入网址URL。

2.DNS解析获取域名对应的IP地址。

3.建立TCP连接。// TCP，Transmission Control Protocol
// TCP三次握手
// (1) 建立连接时，客户端发送SYN包（SYN=i）到服务器，并进入到SYN-SEND状态，等待服务器确认。
// (2) 服务器收到SYN包，必须确认客户的SYN（ack=i+1）,同时自己也发送一个SYN包（SYN=k）,即SYN+ACK包，此时服务器进入SYN-RECV状态。
// (3) 客户端收到服务器的SYN+ACK包，向服务器发送确认报ACK（ack=k+1）,此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手，客户端与服务器开始传送数据。

// TCP四次挥手
// (1) 第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。
// (2) 第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。
// (3) 第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。
// (4) 第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手。

// 为什么建立连接是三次握手，而关闭连接却是四次挥手呢？
// 这是因为服务端在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。而关闭连接时，当收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，己方也未必全部数据都发送给对方了。所以己方可以立即close或者发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，己方ACK和FIN一般都会分开发送。

4.浏览器向服务器发送HTTP请求。

5.服务器响应请求。// 如果设定重定向，则重定向到新的URL地址。

6.浏览器下载数据，解析HTML源文件。
// 解析HTML以构建DOM Tree -> 构建CSSOM -> 构建Render Tree -> 布局Render Tree -> 绘制Render Tree

7.浏览器发送请求获取其他嵌入在HTML中的资源。// 图片、音频、视频、CSS、JS等等

8.关闭TCP连接。
```


## 浏览器进程
```javascript
浏览器是多进程的，包含了Browser进程（浏览器的主进程）、第三方插件进程和GPU进程（浏览器渲染进程），其中GPU进程（多线程）和Web前端密切相关，包含以下线程：
(1) GUI渲染线程
(2) JS引擎线程
(3) 事件触发线程（和EventLoop密切相关）
(4) 定时触发器线程
(5) 异步HTTP请求线程

浏览器页面初次渲染完毕后，JS引擎线程和事件触发线程的工作流程如下：
(1) 同步任务在JS引擎线程（主线程）上执行，形成执行栈（Execution Context Stack）。
(2) 主线程之外，事件触发线程管理着一个任务队列（Task Queue）。只要异步任务有了运行结果，就在任务队列之中放置一个事件。
(3) 执行栈中的同步任务执行完毕，系统就会读取任务队列，如果有异步任务需要执行，将其加到主线程的执行栈并执行相应的异步任务。

事件循环机制（Event Loop）
事件触发线程管理的任务队列是如何产生的呢？事实上这些任务就是从JS引擎线程本身产生的，主线程在运行时会产生执行栈，栈中的代码调用某些异步API时会在任务队列中添加事件，栈中的代码执行完毕后，就会读取任务队列中的事件，去执行事件对应的回调函数，如此循环往复，形成事件循环机制。

JS中有两种任务类型：微任务（microtask）和宏任务（macrotask），在ES6中，microtask称为 jobs，macrotask称为 task。
宏任务： script （主代码块）、setTimeout 、setInterval 、setImmediate 、I/O 、UI rendering
微任务：process.nextTick（Nodejs）、promise 、Object.observe 、MutationObserver

事件循环机制流程：
(1) 执行一个宏任务（首次执行的主代码块或者任务队列中的回调函数）
(2) 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
(3) 宏任务执行完毕后，立即执行当前微任务队列中的所有任务（依次执行）
(4) JS引擎线程挂起，GUI线程执行渲染
(5) GUI线程渲染完毕后挂起，JS引擎线程执行任务队列中的下一个宏任务

ps：
进程（process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。
线程（thread）是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。
```
参考：https://juejin.cn/post/6844903843197616136


## 手写vue
路径：demo/MVue
参考：https://www.bilibili.com/video/av80611222/


## prototype和__proto__的区别
javascript中所有的对象都是Object的实例，并继承Object.prototype的属性和方法。
在对象创建时，就会有一些预定义的属性，其中定义函数的时候，这个预定义属性就是prototype，这个prototype是一个普通的对象。
而定义普通的对象的时候，就会生成一个__proto__，这个__proto__指向的是这个对象的构造函数的prototype。
```javascript
// example
function A(a) {
  this.a = a;
}
let a = new A('test');

// 如上面所说，函数在被定义的时候就拥有了一个prototype对象。可以打印看一下
console.log(A.prototype)

// 这个__proto__指向的就是他的构造函数的prototype，而这个函数a的prototype对象的构造函数是谁呢？ 没错就是开头说到的Object.prototype
console.log(A.prototype.__proto__ === Object.prototype)// true

// 当我们声明一个函数A时就自动创建了prototype对象。
// 而a是构造函数的A的实例，这是候a是一个对象，没有prototype属性，只有__proto__属性。
// 而__proto__这个属性是指向他的构造函数A的prototype属性

// 那么什么是原型链呢？
// 我们都知道对象都有一个toString方法，上述的实例化对象a也可以toString，而实例化对象b本身并没有toString的方法，那他就会沿着它的__proto__向他的构造函数A的prototype对象去找，而这里也没有，那他就会继续沿着A.prototype.__proto__向上找。
// 而A.prototype.__proto__指向的就是Object.prototype。
// 这就是原型链查找，而则一层一层的链接关系就是原型链。
```


## js作用域与作用域链
作用域：作用域就是代码的执行环境，全局执行环境就是全局作用域，函数的执行环境就是私有作用域，它们都是栈内存。

作用域链：一般情况下，变量取值会到创建这个变量的函数的作用域中取值。但是如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域为止，这么一个查找过程形成的链条就叫做作用域链。
```javascript
var scope = 'global';
function test(){
  console.log(scope)
  var scope = 'local';
  console.log(scope)
}
test()
// undefined
// local

// 为什么第一句不会输出"global"？
// 因为javascript没有块级作用域，而是函数作用域
// 函数作用域：变量在声明它们的函数体以及这个函数体嵌套的任意函数体内都是有定义的。
// 上述代码可重写为：
var scope = 'global';
function test(){
  var scope;
  console.log(scope)
  var scope = 'local';
  console.log(scope)
}
test()
// 由于函数作用域的特性，我们可以将变量声明“提前”到函数体顶部，同时变量的调用还在原来位置。

// js没有块级作用域
var name="global";
if(true){
    var name="local";
    console.log(name)
}
console.log(name);
// local
// local

// 都输出是“local"，如果有块级作用域，明显if语句里创建局部变量name，并不会修改全局name，可是没有这样，所以js没有块级作用域
```


## js垃圾回收机制
```javascript
垃圾回收的必要性：每当创建一个实体时，都要动态分配内存，如果不释放，就会消耗完系统中所有可用的内存，造成系统崩溃。
各大浏览器通常用采用的垃圾回收有两种方法：标记清除、引用计数。

// 标记清除
就像它的名字一样，此算法分为 标记 和 清除 两个阶段，标记阶段即为所有活动对象做上标记，清除阶段则把没有标记（也就是非活动对象）销毁。
// 优点：
实现比较简单，打标记也无非打与不打两种情况，这使得一位二进制位（0和1）就可以为其标记。
// 缺点：
标记清除算法有一个很大的缺点，就是在清除之后，剩余的对象内存位置是不变的，也会导致空闲内存空间是不连续的，出现了 内存碎片，这就会牵扯出了内存分配的问题。

// 引用计数
如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。
// 优点：
看起来更清晰，引用计数在引用值为 0 时，也就是在变成垃圾的那一刻就会被回收，所以它可以立即回收垃圾。
而标记清除算法需要每隔一段时间进行一次，在应用程序（JS脚本）运行过程中线程就必须要暂停去执行一段时间的 GC。
// 缺点：
首先它需要一个计数器，而此计数器需要占很大的位置，因为我们也不知道被引用数量的上限，还有就是无法解决循环引用导致无法回收的问题，这也是最严重的。

// 尽量减少JavaScript中的垃圾回收（尽量多的重用已经创建好的对象）
// 1.对象object优化
cr.wipe = function (obj) {
    for (var p in obj) {
         if (obj.hasOwnProperty(p))
            delete obj[p];
    }
}; 
// 有些时候，可以使用cr.wipe(obj)方法删除obj对象的所有属性，再为obj添加新的属性，就可以达到重复利用对象的目的。虽然通过清空一个对象来获取“新对象”的做法，比简单的通过{}来创建对象要耗时一些，但是在实时性要求很高的代码中，这一点短暂的时间消耗，将会有效的减少垃圾堆积，并且最终避免垃圾回收暂停，这是非常值得的。

// 2.数组array优化
arr.length = 0;
// 将[]赋值给一个数组对象，是清空数组的捷径（例如： arr = [];），但是需要注意的是，这种方式又创建了一个新的空对象，并且将原来的数组对象变成了一小片内存垃圾！实际上，将数组长度赋值为0（arr.length = 0）也能达到清空数组的目的，并且同时能实现数组重用，减少内存垃圾的产生。
```
参考：https://juejin.cn/post/6981588276356317214


## vue中computed和watch的区别
```javascript
1.computed会产生新的属性，产生的新的属性与data中原有的属性功能没有区别，用法一样；watch不会产生新的属性。
2.从属性名上，computed是计算属性，也就是依赖其它的属性计算所得出最后的值。watch是去监听一个值的变化，然后执行相对应的函数。
3.从实现上，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算。watch在每次监听的值变化时，都会执行回调。其实从这一点来看，都是在依赖的值变化之后，去执行回调。如果一个值依赖多个属性（多对一），用computed肯定是更加方便的。如果一个值变化后会引起一系列操作，或者一个值变化会引起一系列值的变化（一对多），用watch更加方便一些。
4.watch的回调里面会传入监听属性的新旧值，通过这两个值可以做一些特定的操作。computed通常就是简单的计算。
5.watch和computed并没有哪个更底层，watch内部调用的是vm.$watch，它们的共同之处就是每个定义的属性都单独建立了一个Watcher对象。
```


## js的new操作符做了哪些事情
```javascript
// 1、创建一个空对象
let obj = new Object();

// 2、设置原型链（当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象）
obj.__proto__= Fn.prototype;

// 3、绑定this指向，执行构造函数
let result = Fn.call(obj);// Fn为构造函数

// 4、判断返回值类型
return result instanceof Object ? result: obj;
```


## Set和Map
```javascript
// Set
1.Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
2.向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
3.Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===）。
4.另外，NaN和undefined都可以被存储在Set 中， NaN之间被视为相同的值（尽管 NaN !== NaN）。

// WeakSet
1.WeakSet 对象允许你将弱保持对象存储在一个集合中。
2.WeakSet 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。
3.和 Set 对象的区别有两点:
  (1)与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值。
  (2)WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致（被垃圾回收了）。WeakSet 对象是无法被遍历的，也没有办法拿到它包含的所有元素。
4.WeakSet比Set更适合（和执行）跟踪对象引用，尤其是在涉及大量对象时。

// Map
1.本质上是键值对的集合，类似集合。
2.一个 Map的键可以是任意值，包括函数、对象或任意基本类型。
3.Map 中的 key 是有序的。
4.Map 的键值对个数可以通过size 属性获取。

// WeakMap
1.WeakMap 对象是一组键值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
2.键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的。
3.由于弱引用，WeakMap 的 key 是不可枚举的。如果key 是可枚举的话，其列表将会受垃圾回收机制的影响，从而得到不确定的结果。

// 总结
WeakSet 的对象值与 WeakMap 的键都是弱引用的，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 或 WeakMap 中）。用于解决内存泄漏，提高性能。
```


## http与https
```javascript
// 主要区别
1.http是超文本传输协议，信息是明文传输；https则是在http的基础上加入了安全性的SSL/TLS加密传输协议，比http协议安全。
2.http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
3.https协议需要到CA申请证书，一般免费证书较少，因而需要一定费用。

// 客户端使用https方式与web服务器通信的步骤
1.客户使用https的URL访问web服务器，要求与web服务器建立SSL连接。
2.web服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送给客户端。
3.客户端浏览器会根据与web服务器协商的SSL/TLS连接的安全等级，建立会话密钥，然后利用web服务器的公钥将会话密钥加密，再传送给web服务器。
4.web服务器利用自己的私钥解密出会话密钥。
5.web服务器利用会话密钥加密与客户端之间的通信。

// ps
公钥和私钥是通过一种算法得到的一个密钥对，用公钥加密的数据必须用私钥解密。
会话密钥又称对称密钥，因为同一密钥用于加密和解密。
```


## 深度作用选择器
```javascript
当 <style> 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素。
vue组件编译后，默认只会对组件的最外层标签加入[data-v-xxxx]属性，但第二层开始就没有效果了。

// 以下样式修改没有效果
<style scoped>
    .test .weui-cells {
        // ...
    }
</style>

// 因为有scoped属性的css最终编译出来都会变成这样
.test[data-v-xxxx] .weui-cells[data-v-xxxx]

// 解决方法一：
移除 scoped 属性，或者新建一个没有 scoped 属性的 style 标签（一个.vue文件允许多个style）。

// 解决方法二：
// 深度作用选择器
<style scoped>
    .test >>> .weui-cells {
        // ...
    }
</style>

// 上述代码将会编译成
.test[data-v-xxxx] .weui-cells {
    // ...
}

// 而对于less或者sass等预编译，是不支持 >>> 操作符的，可以使用 /deep/ 来替换 >>> 操作符
<style lang="scss" scoped>
.test {
  width: 100px;

  /deep/ .el-input__inner {
    border: 0;
    color: #000;
  }

  /* 或者 */
  /deep/ {
    .el-input__inner {
      border: 0;
      color: #000;
    }
  }
}
</style>
```


## async/await优雅的错误处理方法
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fetch data')
    }, 0)
  })
}

// 抽离成公共方法
const awaitWrap = (promise) => {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null])
}

const [err, data] = await awaitWrap(fetchData())
```
参考：https://www.jb51.net/article/155700.htm