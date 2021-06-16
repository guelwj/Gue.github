class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;

    // 先把旧值保存起来
    this.oldVal = this.getOldVal();
  }

  getOldVal() {
    Dep.target = this;// 把当前的watcher挂载到Dep的target属性上
    const oldVal = compileUtil.getVal(this.expr, this.vm);
    Dep.target = null;
    return oldVal;
  }

  update() {
    const newVal = compileUtil.getVal(this.expr, this.vm);
    if (newVal !== this.oldVal) {
      this.cb(newVal);
    }
  }
}

class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(watcher) {
    this.subs.push(watcher)
  }

  notify() {
    this.subs.forEach(w => w.update());
  }
}

class Observer {
  constructor(data) {
    this.observe(data);
  }

  observe(data) {
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
  }

  defineReactive(obj, key, value) {
    // 递归遍历
    this.observe(value);

    // 实例化一个依赖管理器，生成一个依赖管理数组dep
    const dep = new Dep();

    // 劫持并监听所有的属性
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: false,
      get() {
        // 订阅数据变化时，往Dep中添加观察者
        Dep.target && dep.addSub(Dep.target);// class Watcher的getOldVal方法中，把当前的watcher挂载到Dep的target属性上
        return value;
      },
      set: (newVal) => {
        this.observe(newVal);
        if (newVal !== value) {
          value = newVal;
        }

        // 通知依赖更新
        dep.notify();
      }
    })
  }
}