// 元素可视监听
class IntersectionNode {
  constructor(options) {
    this.nodes = []
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 当元素50%进入视口时触发回调函数
      ...options
    }
    this.observer = null
    this.change = () => { }
    this.init()
  }

  create({ nodes, options, change }) {
    this.nodes = nodes
    this.options = { ...this.options, ...options }
    this.change = change

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // 进入可视区域
        this.change(entry.target)
        observer.unobserve(entry.target); // 只需要加载一次，加载完毕后解除监听
      }
    }, this.options)

    this.observer = observer
  }

  init() {
    if ("IntersectionObserver" in window) {
      // 单个node or 多个node 绑定IntersectionObserver
      if (typeof this.nodes[Symbol.iterator] === 'function') {
        for (let i = 0; i < this.nodes.length; i++) {
          this.observer.observe(this.nodes[i])
        }
      } else {
        this.observer.observe(this.nodes)
      }
    } else {
      console.log('Warning: 当前设备不支持IntersectionObserver')
    }
  }
}

export default IntersectionNode
