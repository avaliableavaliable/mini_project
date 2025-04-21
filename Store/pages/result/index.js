var goods = require('../../modules/goods.js');
var curPage = 3;
var results = []
var key = ''
var total = 0
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topFlag: false,
    pageLoading: false,
    buttonFlag:false,
    curId:0,
    defaultText:"+ 关注",
    list:[],
    finishFlag : false,
    value: '',
    resultFlag : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getResult()
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
    // console.log('用户刷新');
    setTimeout(()=>
      {
        this.onLoad();
        wx.stopPullDownRefresh();
      });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    curPage += 1;
    if (curPage < total){
      this.setData({
      list : this.data.list.concat(results[curPage])
    });
    console.log(curPage)
    }
    else{
      console.log("加载完毕");
      this.setData({
        finishFlag : true
      })
      console.log(curPage);
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  onbuttonTap(e) {
    var tem = e.currentTarget.dataset
    var flag = !tem.bean.isFous
    var id = tem.bean.id
    var item = "list[" + id + "].isFous"
    this.setData({
      [item] : flag
    })
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

  getResult:function(){
    results = []
    var page = getCurrentPages()
    var prePage = page[page.length-2]
    key = prePage.data.textValue
    var listData = goods.pastData.data
    for(var i = 0; i < listData.length; i++)
    {
      if(listData[i].good.includes(key)){
        results.push(listData[i])
        results[results.length - 1].id = results.length - 1
      }
    }
    if(results.length == 0){
      results = goods.pastData.data
      this.setData({
        resultFlag : true
      })
    }
    curPage = 3
    total = results.length
    this.setData({
      list : results.slice(0, curPage),
  },);
  },

  navToDetailPage: function(e){
    var sendData = e.currentTarget.dataset.bean
    var model = JSON.stringify(sendData);
    wx.navigateTo({
      url: '../detail/index?model=' + model,
    })
  },

});

