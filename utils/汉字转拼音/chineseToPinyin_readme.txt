1）一个是将汉字翻译为拼音，其中每一个字的首字母大写；  
pinyinInstance.getFullChars(this.value);
2）一个是可以将每一个字的拼音的首字母提取出来，是大写的形式。
pinyinInstance.getCamelChars(this.value);


// 调用：
let pinyinInstance = pinyin.initPinyin();
let pinyinName = pinyinInstance.getCamelChars(value);