// 预获取：将来某些导航下可能需要的资源
// 这会生成 <link rel="prefetch" href="login-modal-chunk.js"> 并追加到页面头部，指示着浏览器在闲置时间预取 login-modal-chunk.js 文件。
// import(/* webpackPrefetch: true */ './path/to/LoginModal.js');

// 预加载：当前导航下可能需要资源
// import(/* webpackPreload: true */ './path/to/LoginModal.js');

// preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载


// import _ from 'lodash';

// import './style.css';
// // 若未在webpack.config.js中配置style-loader和css-loader，则需要这样引入
// // import 'style-loader!css-loader!./style.css';

// import Icon from './icon.png';
// import printMe from './print.js';

// function component() {
//   const element = document.createElement('div');

//   // lodash（目前通过一个 script 引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack', 'test'], ' ');
//   element.classList.add('hello');

//   // 将图像添加到我们已经存在的 div 中。
//   const icon = new Image();
//   icon.src = Icon;
//   element.appendChild(icon);

//   // 创建一个按钮
//   const btn = document.createElement('button');
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;
//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());


// 不使用 statically import(静态导入) lodash，而是通过 dynamic import(动态导入) 来分离出一个 chunk：
async function getComponent() {
  const element = document.createElement('div');

  // return import('lodash')
  //   .then(({ default: _ }) => {
  //     const element = document.createElement('div');

  //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //     return element;
  //   })
  //   .catch((error) => 'An error occurred while loading the component');

  // 使用async与await
  const { default: _ } = await import('lodash');
  // const { default: Print } = await import('./print');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');
  return element;
}

getComponent().then((component) => {
 document.body.appendChild(component);
});