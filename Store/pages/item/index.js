var items = require('../../modules/items.js');
var curPage = 3;
var total = items.pastData.data.length;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topFlag: false,
    pageLoading: false,
    status:['全部','待付款','待发货','待收货','待评价','已完成'],
    list:[],
    finishFlag : false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getData: function(){

  },

  onLoad: function (options) {
    // console.log(lists.pastData.data);
    this.setData({
      list:items.pastData.data.slice(0, curPage),
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
    curPage += 1;
    console.log(total)
    if (curPage < total){
      this.setData({
      list : this.data.list.concat(items.pastData.data[curPage])
    });
    console.log(curPage)
    }
    else{
      console.log("加载完毕");
      this.setData({
        finishFlag : true
      })
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  navToDetailPage: function(e){
    var sendData = e.currentTarget.dataset.bean
    var model = JSON.stringify(sendData);
    wx.navigateTo({
      url: '../detail/index?model=' + model,
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

onTabsClick: function(e){
  var label = e.detail.label
  this.getResult(label)
},

getResult: function(value){
  var tem = []
  var totalData = items.pastData.data
  if(value == "全部"){
    tem = totalData
  }
  else{
    for(var i = 0;i < totalData.length;i++){
      if(totalData[i].status == value){
        tem.push(totalData[i])
        tem[tem.length - 1].id = tem.length - 1
      }
    }
  }
  curPage = 3;
  total = tem.length;
  this.setData({
    list : tem
  })
  if(total < 3){
    this.setData({
      finishFlag :true
    })
  }
}

});



