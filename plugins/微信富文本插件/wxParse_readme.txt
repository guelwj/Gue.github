/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/

// 调用例子：
const WxParse = require('.wxParse/wxParse.js');

Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    wx.request({
        url: '', 
        method: 'POST',
        data: {
            'id':13
        },
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            var article = res.data[0].post;
            WxParse.wxParse('article', 'html', article, that,5);
        }
    })
  }
})