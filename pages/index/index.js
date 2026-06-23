Page({
  data: {
    inputValue: '',
    todos: [],
    filter: 'all' // all, active, completed
  },

  onLoad: function() {
    // 从本地存储加载数据
    const savedTodos = wx.getStorageSync('todos')
    if (savedTodos) {
      this.setData({
        todos: savedTodos
      })
    }
  },

  // 输入框变化事件
  onInputChange: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  // 添加待办事项
  addTodo: function() {
    const { inputValue, todos } = this.data
    if (inputValue.trim() === '') {
      wx.showToast({
        title: '请输入待办事项',
        icon: 'none'
      })
      return
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    todos.push(newTodo)
    this.setData({
      todos: todos,
      inputValue: ''
    })
    this.saveTodos()
  },

  // 切换完成状态
  toggleTodo: function(e) {
    const { index } = e.currentTarget.dataset
    const { todos } = this.data
    todos[index].completed = !todos[index].completed
    this.setData({
      todos: todos
    })
    this.saveTodos()
  },

  // 删除待办事项
  deleteTodo: function(e) {
    const { index } = e.currentTarget.dataset
    const { todos } = this.data
    wx.showModal({
      title: '删除',
      content: '确定要删除这项吗？',
      success: (res) => {
        if (res.confirm) {
          todos.splice(index, 1)
          this.setData({
            todos: todos
          })
          this.saveTodos()
        }
      }
    })
  },

  // 清空已完成
  clearCompleted: function() {
    const { todos } = this.data
    const filtered = todos.filter(todo => !todo.completed)
    this.setData({
      todos: filtered
    })
    this.saveTodos()
  },

  // 保存到本地存储
  saveTodos: function() {
    wx.setStorage({
      key: 'todos',
      data: this.data.todos
    })
  },

  // 获取显示的待办事项列表
  getDisplayTodos: function() {
    const { todos, filter } = this.data
    if (filter === 'active') {
      return todos.filter(todo => !todo.completed)
    }
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed)
    }
    return todos
  },

  // 切换筛选条件
  setFilter: function(e) {
    this.setData({
      filter: e.currentTarget.dataset.filter
    })
  }
})