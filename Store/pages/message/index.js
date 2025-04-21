var items = require('../../modules/items.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topFlag: false,
    pageLoading: false,
    list:[],
    finishFlag : false,
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    // console.log(lists.pastData.data);
    this.setData({
      list:items.pastData.data.slice(0, 3),
  },);
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      const page = getCurrentPages().pop();
      this.getTabBar().setData({
        value: '/' + page.route
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log('用户刷新');
    this.setData({
      pageLoading: true,
    });
    setTimeout(()=>
      {
        this.setData({
        pageLoading: false,
      });
        this.onLoad();
        wx.stopPullDownRefresh();
      }, 500)
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

});



