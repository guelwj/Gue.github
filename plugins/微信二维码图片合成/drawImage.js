import drawQrcode from '../../utils/weapp.qrcode.min.js';

// 获取二维码
const getQrCode = function(text,w,h){
  return new Promise((resolve, reject) => {
    drawQrcode({
      width: w,
      height: h,
      typeNumber:8,
      correctLevel: 2,/* L: 1, M: 0, Q: 3, H: 2  
                       * level L : 最大 7% 的错误能够被纠正；
                       * level M : 最大 15% 的错误能够被纠正；
                       * level Q : 最大 25% 的错误能够被纠正；
                       * level H : 最大 30% 的错误能够被纠正；
                       */
      canvasId: "canvas",
      text: text,
      callback(res) {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: w,
          height: h,
          destWidth: w,
          destHeight: h,
          quality:1,
          canvasId: "canvas",
          success: function (rs) {
            resolve(rs.tempFilePath)
          }
        })
      }
    })
  })
}

// 获取背景图
const getBackgroundImg = function(){
  return new Promise((resolve,reject)=>{
    wx.getImageInfo({
      src: "https://kinggen.oss-cn-hangzhou.aliyuncs.com/gdty%2Fvideo%2Fsharebg20180920.jpg",
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}

// 获取item图
const getItemImg = function (imgPath) {
  return new Promise((resolve, reject) => {
    wx.getImageInfo({
      src: imgPath.replace("http://file.kinggen.com.cn","https://kinggen.oss-cn-hangzhou.aliyuncs.com"),
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}

// 合成图片
// 需传入二维码内容 与 item图片
const drawImage = function(data){
  return new Promise((resolve, reject) => {
    Promise.all([getQrCode(data.text,200,200), getBackgroundImg(), getItemImg(data.cover)]).then(res=>{
      const path_qrCode = res[0];//二维码图片
      const path_background = res[1].path;//背景图片
      const path_item = res[2].path;//对应项目图片
      const ctx = wx.createCanvasContext("canvas")
      ctx.drawImage(path_background, 0, 0, 648, 1152)
      ctx.drawImage(path_item, 50, 170, 545, 380)
      ctx.drawImage(path_qrCode, 240, 945, 160, 170)
      ctx.setFontSize(28)
      ctx.setFillStyle("#000")

      //限制标题字数长度
      let title = data.title;
      if (title.length > 19) {
        title = title.slice(0, 20);
        title = `${title}...`;
      }
      ctx.fillText(title, 50, 593)
      ctx.draw(true, () => {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 1040,
          height: 1520,
          destWidth: 1040,
          destHeight: 1520,
          quality: 1,
          canvasId: "canvas",
          success: function (rs) {
            resolve(rs.tempFilePath)
          }
        })
      })
    })
  })
}