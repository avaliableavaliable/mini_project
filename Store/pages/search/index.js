Page({

  /**
   * 页面的初始数据
   */
  data: {
    textValue:'',
    plaeceHolder:"现货速抢 冰脆牛心包菜",
    history:['苹果','萝卜','新鲜蔬菜','草莓','零食','水果']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      plaeceHolder:"现货速抢 冰脆牛心包菜"
    })
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
  handleChange: function(e){
    this.setData({
      textValue: e.detail.value,
    })
  },

  handleSubmit: function(){
    wx.navigateTo({
      url: '../result/index',
    })
  },

  setTextValue: function(e){
    this.setData({
      plaeceHolder:e.currentTarget.dataset.bean,
      textValue: e.currentTarget.dataset.bean,
    })
    this.handleSubmit();
    this.onLoad();
  }

})