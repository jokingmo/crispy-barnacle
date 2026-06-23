# 待办事项小程序

一个简单而功能完整的微信小程序示例，用于管理日常待办事项。

## 功能特性

- ✅ **添加任务** - 快速添加新的待办事项
- ✅ **标记完成** - 点击任务来标记为完成/未完成
- ✅ **删除任务** - 移除不需要的待办事项
- ✅ **筛选视图** - 按状态筛选显示（全部、进行中、已完成）
- ✅ **数据持久化** - 使用本地存储保存数据
- ✅ **统计信息** - 显示任务总数和完成情况
- ✅ **清空已完成** - 一键清除所有已完成的任务

## 项目结构

```
crispy-barnacle/
├── app.js              # 小程序主文件
├── app.json            # 小程序配置
├── app.wxss            # 全局样式
├── pages/
│   ├── index/          # 待办事项主页面
│   │   ├── index.js
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── about/          # 关于页面
│       ├── about.js
│       ├── about.wxml
│       └── about.wxss
└── README.md
```

## 技术栈

- **语言**: WXScript (JavaScript)
- **标记**: WXML (微信小程序XML)
- **样式**: WXSS (微信小程序CSS)
- **存储**: wx.storage (小程序本地存储)

## 使用说明

### 1. 克隆项目
```bash
git clone https://github.com/jokingmo/crispy-barnacle.git
cd crispy-barnacle
```

### 2. 导入微信开发者工具
- 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 打开微信开发者工具
- 选择"导入项目"
- 选择项目文件夹
- 输入 AppID（测试可用 `wx1234567890abcdef`）
- 点击"导入"

### 3. 预览运行
- 点击工具栏的"预览"按钮查看效果
- 点击"编译"按钮编译项目
- 使用调试工具查看控制台日志

### 4. 真机测试
- 点击"预览"生成二维码
- 用微信扫描二维码
- 在真实手机上体验小程序

## 核心功能说明

### 添加任务
- 在输入框中输入任务内容
- 点击"添加"按钮或按回车键
- 任务会自动保存到本地存储

### 完成任务
- 点击任务项会切换完成状态
- 已完成的任务会显示删除线并改变颜色

### 筛选显示
- **全部** - 显示所有任务
- **进行中** - 只显示未完成的任务
- **已完成** - 只显示已完成的任务

### 数据持久化
- 所有任务数据保存在本地存储中
- 关闭小程序后重新打开数据仍然存在

## 文件说明

### app.json
小程序全局配置文件，包含：
- 页面路径配置
- 窗口样式设置
- 底部导航栏配置

### app.js
小程序主文件，处理：
- 小程序生命周期
- 全局数据管理

### pages/index/
待办事项主页面，包含：
- 任务列表管理
- 本地存储操作
- 事件处理逻辑

### pages/about/
关于页面，展示：
- 应用信息
- 版本号
- 功能特性列表

## 小程序接口说明

### wx.setStorage(Object)
用于保存数据到本地存储

### wx.getStorageSync(string)
用于从本地存储读取数据

### wx.showToast(Object)
用于显示消息提示框

### wx.showModal(Object)
用于显示模态对话框

## 开发建议

- 建议使用最新版本的微信开发者工具
- 测试时可以在真机上验证数据持久化功能
- 可以扩展功能：如添加任务分类、优先级、截止日期等
- 可以美化UI：如添加动画、主题切换、深色模式等

## 学习资源

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [WXML 文档](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/)
- [WXSS 文档](https://developers.weixin.qq.com/miniprogram/dev/reference/wxss/)
- [小程序 API 文档](https://developers.weixin.qq.com/miniprogram/dev/api/)

## 许可证

MIT License

## 作者

Todo App Team

---

祝你使用愉快！如有问题或建议，欢迎提交 Issue 或 Pull Request。