const compileUtil = {
  getVal(expr, vm) {
    // 用reduce解决了深层级的属性值获取问题
    // 假设expr的值为person.name，split后为[person, name]
    // reduce的第一次循环返回的值为vm.$data[person]，第二次返回的值为vm.$data[person][name]
    return expr.split('.').reduce((data, currentVal) => {
      return data[currentVal];
    }, vm.$data);
  },
  setVal(expr, vm, inputVal) {// 此处封装可能有问题
    expr.split('.').reduce((data, currentVal) => {
      return data[currentVal] = inputVal;
    }, vm.$data);
  },
  getContentVal(expr, vm) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(args[1], vm);
    })
  },
  text(node, expr, vm) {
    let value;

    // 判断带有双括号的表达式
    if(expr.indexOf('{{') !== -1) {
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        // 绑定观察者，将来数据发生变化时，触发这里的回调，进行更新
        new Watcher(vm, args[1], () => {
          // 这里不用newVal，因为可能会把expr的格式改变
          // 例如，有时expr的格式为 {{ person.name }} - {{ person.job }}
          // 修改了一个值后，全部替换了，又要对expr进行重新的处理
          this.updater.textUpdater(node, this.getContentVal(expr, vm));
        })
        return this.getVal(args[1], vm);
      })
    } else {
      value = this.getVal(expr, vm);
    }

    this.updater.textUpdater(node, value);
  },
  html(node, expr, vm) {
    const value = this.getVal(expr, vm);
    new Watcher(vm, expr, (newVal) => {
      this.updater.htmlUpdater(node, newVal);
    })
    this.updater.htmlUpdater(node, value);
  },
  model(node, expr, vm) {
    const value = this.getVal(expr, vm);

    // 绑定更新函数 数据=>视图
    new Watcher(vm, expr, (newVal) => {
      this.updater.modelUpdater(node, newVal);
    })

    // 视图=>数据=>视图
    node.addEventListener('input', (e) => {
      // 设置值
      this.setVal(expr, vm, e.target.value);
    })

    this.updater.modelUpdater(node, value);
  },
  on(node, expr, vm, eventName) {
    let fn = vm.$options.methods && vm.$options.methods[expr];
    node.addEventListener(eventName, fn.bind(vm), false);
  },
  updater: {
    textUpdater(node, value) {
      node.textContent = value;
    },
    htmlUpdater(node, value) {
      node.innerHTML = value;
    },
    modelUpdater(node, value) {
      node.value = value;
    }
  }
}

class Compile {
  constructor(el, vm) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // console.log(this.$el)

    // 用文档碎片，减少页面的回流和重绘
    const fragment = this.node2Fragment(this.$el);
    // console.log(fragment)

    // 编译模板
    this.compile(fragment);

    this.$el.appendChild(fragment);
  }

  node2Fragment(el) {
    let f = document.createDocumentFragment();
    let firstChild;
    while(firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    return f;
  }

  compile(fragment) {
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child => {
      if (this.isElementNode(child)) {
        // 元素节点
        // console.log('元素节点', child)
        this.compileElement(child);
      } else {
        // 文本节点
        // console.log('文本节点', child)
        this.compileText(child);
      }

      if (child.childNodes && child.childNodes.length) {
        this.compile(child)
      }
    })
  }

  compileElement(node) {
    const attributes = node.attributes;
    [...attributes].forEach(attr => {
      // console.log(attr)
      const { name, value } = attr;

      // 判断是否为指令
      if (this.isDirective(name)) {
        const [, directive] = name.split('-');// text html on:click
        const [directiveName, eventName] = directive.split(':');

        // 更新数据，数据驱动视图
        compileUtil[directiveName](node, value, this.vm, eventName);

        // 删除指令属性
        node.removeAttribute('v-' + directive);
      } else if (this.isEventName(name)) {
        // 判断语法糖为@的事件
        const [, eventName] = name.split('@');
        compileUtil['on'](node, value, this.vm, eventName);
      }
    })
  }

  compileText(node) {
    const content = node.textContent;
    if(/\{\{(.+?)\}\}/.test(content)) {
      compileUtil['text'](node, content, this.vm)
    }
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }

  isDirective(attrName) {
    return attrName.startsWith('v-');
  }

  isEventName(attrName) {
    return attrName.startsWith('@');
  }
}

class MVue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;

    if (this.$el) {
      // 实现数据观察者
      new Observer(this.$data);

      // 实现指令解析器
      new Compile(this.$el, this);

      // 代理
      this.proxyData(this.$data);
    }
  }

  proxyData(data) {
    for (const key in data) {
      Object.defineProperty(this, key, {
        get() {
          return data[key];
        },
        set(newVal) {
          data[key] = newVal;
        }
      })
    }
  }
}