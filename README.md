# Gue君爷的日常note

>记录平时项目中遇到问题时的解决方案，附上能找到答案的网址、分享一些不错的资源。

## 目录：
1. [git基本操作](#git基本操作)
2. [微信公众平台文档](#微信公众平台文档)
3. [大白话讲解promise](#大白话讲解promise)
4. [前端布局神器flex](#前端布局神器flex)
5. [js模块化编程之彻底弄懂amd与cmd](#js模块化编程之彻底弄懂amd与cmd)
6. [git_push错误failed_to_push_some_refs_to](#git_push错误failed_to_push_some_refs_to)
7. [使用flexible实现手淘h5页面的终端适配](#使用flexible实现手淘h5页面的终端适配)
8. [webpack入门](#webpack入门)
9. [video搭配canvas的神奇效果](#video搭配canvas的神奇效果)
10. [video在安卓大部分浏览器包括微信最顶层的问题](#video在安卓大部分浏览器包括微信最顶层的问题)
11. [js控制输入框光标位置](#js控制输入框光标位置)
12. [jquery中attr和prop的区别介绍](#jquery中attr和prop的区别介绍)
13. [拖放排序插件sortable](#拖放排序插件sortable)
14. [ios与android的new_date之坑](#ios与android的new_date之坑)
15. [原生js实现瀑布流效果](#原生js实现瀑布流效果)
16. [微信小程序rsa签名验签加密解密](#微信小程序rsa签名验签加密解密)
17. [解决vs2017隐藏高级保存选项命令](#解决vs2017隐藏高级保存选项命令)
18. [airbnb_javascript标准](#airbnb_javascript标准)
19. [export_default和export的区别](#export_default和export的区别)
20. [微信小程序授权的写法](#微信小程序授权的写法)
21. [微信小程序获取和修改上一个页面的数据](#微信小程序获取和修改上一个页面的数据)
22. [微信小程序解决富文本不支持的问题](#微信小程序解决富文本不支持的问题)
23. [jQuery的deferred对象详解](#jQuery的deferred对象详解)
24. [不错的code练习网站](#不错的code练习网站)
25. [深入理解css中vertical_align属性](#深入理解css中vertical_align属性)
26. [JS订阅模式](#JS订阅模式)
27. [Vue用js触发input选取文件点击事件](#Vue用js触发input选取文件点击事件)
28. [浏览器同源政策及其规避方法](#浏览器同源政策及其规避方法)
29. [使用async&await封装axios](#使用async&await封装axios)
30. [微信小程序好友列表右侧字母导航功能](#微信小程序好友列表右侧字母导航功能)
31. [axios使用post方式传递参数后端接收不到](#axios使用post方式传递参数后端接收不到)
32. [axios_post提交数据的三种请求方式写法](#axios_post提交数据的三种请求方式写法)
33. [数组的一些操作](#数组的一些操作)



## git基本操作
```javascript
git init demo //初始化

git add 文件名 //将修改过的文件add一下
git add . //添加所有修改过的文件

git ls -la 列出
git ls -lat 列出  (两者结果一样，排列顺序不同)

git status 查看状态
git status -s 会出现M 第一列出现M含义：版本库和处理中间状态有差异
                      第二列出现M含义：工作区和当前文件有差异

git commit -m "comment" 提交
git commit -a -m "comment" 加了参数-a之后不需要git add就能git commit  (不推荐)

git push origin master //推送到远程仓库

git branch 分支名称 //创建分支
git checkout 分支名称 //切换到对应分支

git fetch 分支名 //拉取
git merge 分支名 //合并

git pull 分支名 //拉取并合并

使用Git下载指定分支命令为：git clone -b 分支名仓库地址
例如：使用Git下载 gue 分支代码，使用命令：git clone -b gue https://github.com/guelwj/Gue.github.git
----------------------
撤销操作：
git checkout .             //修改过某个文件，没有git add，想撤销这次修改

git reset                  //所有在暂存区的都撤销
git reset example.txt      //修改过某个文件，已经git add过，撤销这次修改 (暂存区目录树的重写)。
git reset --soft commitId  //如果已经修改某几个文件，但是想撤销到某个版本，但是当前暂存区、工作区不想撤销
git reset --hard commitId  //直接撤销回某个版本

git reflog                 //可显示版本号
git reset --hard HEAD@{0}
----------------------
git stash     当前工作区暂停
git stash pop 继续当前工作
----------------------
比较差异：
git diff             //比较工作目录和临时修改区域（未git add加入到暂存区域）之间的差异
git diff branchName  //比较当前目录与某个分支的差异
git diff head        //显示工作版本和head的差别
----------------------
git cat-file -p HEAD 可以查看当前版本的父版本parent，如果当前版本是由两个分支merge的话，会出现两个parent

printf git |sha1sum            //保证每次提交全球唯一
printf gitchina.org |sha1sum   //保证每次提交全球唯一
----------------------
linux命令：
cd    //更换当前目录
mkdir //创建一个新目录
vim   //创建、修改文件

rm    //删除文件；一般的删除操作用rm即可
-f, --force    忽略不存在的文件，从不给出提示。
-i, --interactive 进行交互式删除
-r, -R, --recursive   指示rm将参数中列出的全部目录和子目录均递归地删除。
-v, --verbose    详细显示进行的步骤
----------------------
```
git权威指南教程：http://www.icoolxue.com/album/show/41


## 微信公众平台文档
https://developers.weixin.qq.com/miniprogram/dev/


## 大白话讲解promise
https://www.cnblogs.com/lvdabao/p/es6-promise-1.html


## 前端布局神器flex
https://www.cnblogs.com/qingchunshiguang/p/8011103.html


## js模块化编程之彻底弄懂amd与cmd
https://www.cnblogs.com/chenguangliang/p/5856701.html


## git_push错误failed_to_push_some_refs_to
```javascript
在github库中对某个文件进行了在线的编辑，并且没有同步到本地库，之后我在本地库添加了文件test.txt，并想提交到github，出现以下错误：error：failed to push some refs to。
这个问题是因为远程库与本地库不一致造成的，那么我们把远程库同步到本地库就可以了。 
使用指令 git pull --rebase origin master
这条指令的意思是把远程库中的更新合并到本地库中，--rebase的作用是取消掉本地库中刚刚的commit，并把他们接到更新后的版本库之中。
```
https://blog.csdn.net/mbuger/article/details/70197532


## 使用flexible实现手淘H5页面的终端适配
https://github.com/amfe/article/issues/17?utm_source=caibaojian.com


## webpack入门
https://www.jianshu.com/p/42e11515c10f


## video搭配canvas的神奇效果
http://html5doctor.com/video-canvas-magic/


## video在安卓大部分浏览器包括微信最顶层的问题
解决不了。
https://segmentfault.com/q/1010000004436205/a-1020000004436328


## js控制输入框光标位置
```javascript
var inpObj = document.getElementById(inputId);
if (inpObj.setSelectionRange) {
    inpObj.setSelectionRange(0, inpObj.value.length);
}
```
https://blog.csdn.net/foralienzhou/article/details/52437929


## jquery中attr和prop的区别介绍
```javascript
对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。
```
https://www.jb51.net/article/88068.htm


## 拖放排序插件sortable
https://segmentfault.com/a/1190000008209715


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
http://www.mamicode.com/info-detail-1392511.html


## 原生js实现瀑布流效果
https://segmentfault.com/a/1190000012621936


## 微信小程序rsa签名验签加密解密
https://github.com/zhangzhaopds/WeixinApp_RSA_Signature


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

## airbnb_javascript标准
https://github.com/airbnb/javascript#table-of-contents


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
https://www.jianshu.com/p/edaf43e9384f


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
https://blog.csdn.net/milli236/article/details/79668162
https://blog.csdn.net/zhuming3834/article/details/74380079


## jQuery的deferred对象详解
http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html


## 不错的code练习网站
https://www.codewars.com/


## 深入理解css中vertical_align属性
https://www.cnblogs.com/starof/p/4512284.html?utm_source=tuicool&utm_medium=referral


## JS订阅模式
https://www.jianshu.com/p/0aacfec05046


## Vue用js触发input选取文件点击事件
```javascript
<input
  type="file"
  multiple
  name="file"
  accept=".pdf"
  ref="inputFile"
  class="upload_input"
  @click="inputFileOnClick"
  @change="inputFileOnChange"
>

// 调起文件选择弹窗
this.$refs.inputFile.click();

// 或者
this.$refs.inputFile.dispatchEvent(new MouseEvent('click'));
```
https://www.cnblogs.com/hzx-5/p/9957726.html


## 在浏览器上安装Vue_Devtools工具
https://www.cnblogs.com/feiyu159/p/8666865.html


## 浏览器同源政策及其规避方法
http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html


## 使用async&await封装axios
```javascript
import axios from 'axios'
const qs = require('qs')
const api = {
  async get (url, data) {
    try {
      let res = await axios.get(url, {params: data})
      res = res.data
      return new Promise((resolve) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    } catch (err) {
      alert('服务器出错')
      console.log(err)
    }
  },
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
      // return (e.message)
      alert('服务器出错')
      console.log(err)
    }
  },
}
export { api }
```
https://www.jianshu.com/p/4168efdc172b


## 微信小程序好友列表右侧字母导航功能
https://blog.csdn.net/qq_25252769/article/details/81116597


## axios使用post方式传递参数后端接收不到
https://segmentfault.com/a/1190000012635783


## axios_post提交数据的三种请求方式写法
https://segmentfault.com/a/1190000015261229


## 数组的一些操作
```javascript
// 数组去重
let arr = [1, 2, 2, 3 , 3, 3];
let set = new Set(arr);
let newArr = Array.from(set);
console.log(newArr); // [1, 2, 3]


// 数组降序
[1, 2, 3, 4, 5].sort((a, b) => b - a);


// 数组扁平化
// Array.flat(n) 是ES10扁平数组的api, n表示维度, n值为Infinity时维度为无限大
[1, [2, 3]].flat(2); // [1, 2, 3]
[1, [2, 3, [4, 5[...]]]].flat(Infinity); // [1,2,3,4...n]


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
[1, 2, 3].find(item => item === 3) // 2


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
Object.fromEntries([['name', 'Gue'], ['age', 18]]) // { name: 'Gue', age: 18}
```