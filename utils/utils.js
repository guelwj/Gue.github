import { Message, MessageBox } from "element-ui";

// 日期格式化
Date.prototype.Format = function (fmt) {
	let o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (let k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

// 设置cookie
export const setCookie = (cookieName, value) => {
	document.cookie = cookieName + "=" + escape(value) + ";path=/";
}

// 读取cookie
export const getCookie = cookieName => {
	if(document.cookie){
		let arr, reg = new RegExp("(^| )" + cookieName + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			return unescape(arr[2]);
		}
		else {
			return "";
		}
	}
}

// 删除cookie
export const delCookie = cookieName => {
	let expire = new Date();
  expire.setTime(expire.getTime() - 1);
	document.cookie = cookieName + "=" + '' + ";expires=" + expire.toGMTString() + ";path=/";
}

// 格式化size
export const formatSize = value => {
  if (null == value || value == "") {
    return "0 Bytes";
  }
  let unitArr = new Array(
    "Bytes",
    "KB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
  );
  let index = 0;
  let srcsize = parseFloat(value);
  index = Math.floor(Math.log(srcsize) / Math.log(1024));
  let size = srcsize / Math.pow(1024, index);
  size = size.toFixed(2); //保留的小数位数
  return size + unitArr[index];
};

// 获取业务随机字符串
export const getRandomStr = () => {
	//获取业务流水号
	let len = 6;
	let $chars = 'ABCDEFGHJKMNOPQRSTWXYZabcdefhijkmnoprstwxyz1234567890';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	let maxPos = $chars.length;
	let pwd = '';
	for (let i = 0; i < len; i++) {
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	let Datetime = new Date().Format("yyyyMMddhhmmss");
	return Datetime + pwd;
};

// 时间格式化
export const formatDateTime = val => {   //解析日期字段调用此函数即可。
	if (val == "" || val == null || val == undefined) return "";
	if (typeof (val) == "object") {
			return val.format("yyyy/MM/dd hh:mm:ss");
	}
	if (!isNaN(val)) {
			let d = new Date(parseInt(val));
			return d.format("yyyy/MM/dd hh:mm:ss");
	}
	if (val.indexOf("T") > -1) {
			val = val.replace("T", " ");
			if (val.indexOf(".") > -1) {
					val = val.substr(0, val.indexOf("."));
			}
			return val;
	}

	let re = /-?\d+/;
	let m = re.exec(val);
	let d = new Date(parseInt(m[0]));
	
	return d.format("yyyy/MM/dd hh:mm:ss");
};

// openTips
export const openTips = ({
	type = 'warning',
	msg = ''
}) => {
	Message({
		message: msg,
		type: type
	});
}

// openConfirm
export const openConfirm = ({
  title = '提示',
  msg = '是否确认删除？',
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  type = 'warning',
	success = () => {},
	fail = () => {}
} = {}) => {
  MessageBox.confirm(msg, title, {
		confirmButtonText: confirmButtonText,
		cancelButtonText: cancelButtonText,
		type: type
	})
		.then(() => {
			success();
		})
		.catch(() => {
			fail();
		});
};

// 下载文件方法1
export const downloadFileFromUrl = (url, filename) => {
  const xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.responseType = 'blob'
  xhr.send()
  xhr.onload = function() {
    if (this.status === 200 || this.status === 304) {
      const objUrl = URL.createObjectURL(this.response)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = objUrl
      if (filename) {
        a.setAttribute('download', filename + getExtNameFromUrl(url))
      } else {
        try {
          a.setAttribute('download', getUploadFileName(url))
        } catch (e) {
          a.setAttribute('download', '文件名')
        }
      }
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
}

// 下载文件方法2
export const downloadFile = (fileName, content, blobOptions = {}) => {
	// blobOptions = {
	//     type: 'text/csv',
	//     endings: 'native' // or transparent
	// };

	let blob = new Blob([content], blobOptions);

	// create a标签
	let a = document.createElement('a');
	a.innerHTML = fileName;
	a.download = fileName;// 指定生成的文件名
	a.href = URL.createObjectURL(blob);
	document.body.appendChild(a);
  
	// create事件
	let evt = document.createEvent("MouseEvents");
	evt.initEvent("click", false, false);
	a.dispatchEvent(evt);

	// remove a标签
	document.body.removeChild(a);
}