var key = ''
var total = 0
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pics: [
      'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
      'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    ],
    icon1 : "houses",
    icon2 : "star",
    icon3 : "task",
    topFlag: false,
    color: "#2B2B2B",
    good: {},
    current: 2,
    autoplay: true,
    duration: 500,
    interval: 5000,
    paginationPosition: 'bottom-right',
    swiperList: [],
    navigation: { type: 'fraction' },
  },

  /**
   * 生命周期函数--监听页面加载   */

onLoad: function (options) {
    var data = JSON.parse(options.model);
    var imgData = [data.src1,data.src2,data.src3]
    this.setData({
      good: data,
      swiperList: imgData
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

  onToTop(e) {
    console.log("回到顶部");
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 3000,
    });
  },

onPageScroll: function (e) {
  if(e.scrollTop > 366)
  {
    this.setData({
      topFlag : true
    });
  }
  else{
    this.setData({
      topFlag : false
    });
  }
  },

toHomePage: function(e){
  wx.navigateTo({
    url: '../home/index',
  })
},
toItemPage: function(e){
  wx.navigateTo({
    url: '../item/index',
  })
},
changeLike: function(e){
  var a = "star"
  var b = "star-filled"
  var ac = "#2B2B2B"
  var bc = "#FCD53F"
  var icon = e.currentTarget.dataset.bean
  if (icon == a) {
    this.setData({
      icon2 : b,
      color : bc
    });
  }
  else{
    this.setData({
      icon2 : a,
      color : ac
    });
  }
  }

});

