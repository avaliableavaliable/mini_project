Component({
  //  组件的属性列表
  properties: { },
  //  组件的初始数据
  data: {
    value: '/pages/home/index',
    tabBar: [{
      value: '/pages/home/index',
      icon: 'houses',
      label: '首页',
      prop:{}
    }, {
      value: '/pages/item/index',
      icon: 'task',
      label: '订单',
      prop:{}
    },
    {
      value: '/pages/message/index',
      icon: 'chat-double',
      label: '消息',
      prop:{count: 3, offset: [3, 0]}
    },
    {
      value: '/pages/person/index',
      icon: 'user-1',
      label: '我的',
      prop:{}
    }]
  },
  methods: {
    onChange(e) {
      wx.switchTab({
        url: e.detail.value,
      });
    },
  }
})
