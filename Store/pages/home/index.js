var lists = require('../../modules/list.js');
var curPage = 3;
var total = lists.pastData.data[0].length;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topFlag: false,
    pageLoading: false,
    buttonFlag:false,
    defaultText:"+ 关注",
    cates:['全部','蔬菜','水果','主食','饮料','零食'],
    list:[],
    finishFlag : false,
    curId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(lists.pastData.data[0]);
    this.setData({
      list:lists.pastData.data[0].slice(0, curPage),
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
    if (curPage < total){
      this.setData({
      list : this.data.list.concat(lists.pastData.data[this.data.curId][curPage])
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

  navToSearchPage: function(){
    wx.navigateTo({
      url: '../search/index',
    })
  },

  navToDetailPage: function(e){
    var sendData = e.currentTarget.dataset.bean
    var model = JSON.stringify(sendData);
    wx.navigateTo({
      url: '../detail/index?model=' + model,
    })
  },

onPanelsChange(e) {
  var id = e.detail.value;
  curPage = 3,
  this.setData({
      list:lists.pastData.data[id].slice(0, curPage),
      curId : id,
      finishFlag : false
    });
  total = lists.pastData.data[id].length;
  // console.log(total);
  },
  onbuttonTap(e) {
    var tem = e.currentTarget.dataset;
    var flag = !tem.bean.isFous;
    var id = tem.bean.id
    var item = "list["+ id +"].isFous"
    this.setData({
      [item] : flag,
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
  }

});

