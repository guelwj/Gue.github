/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName�󶨵�������(����)
* 2.type����Ϊhtml����md(����)
* 3.dataΪ����ľ�������(����)
* 4.targetΪPage����,һ��Ϊthis(����)
* 5.imagePaddingΪ��ͼƬ����Ӧ�����ҵĵ�һpadding(Ĭ��Ϊ0,��ѡ)
*/

// �������ӣ�
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