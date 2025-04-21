// app.js
App({
  onLaunch() {
    const windowInfo = wx.getWindowInfo()
    const statusBarHeight=windowInfo.statusBarHeight
    const screenWidth=windowInfo.screenWidth
    this.globalData.navBarHeight = statusBarHeight*750/screenWidth + 96;
    // console.log(statusBarHeight*750/screenWidth + 80);
    this.globalData.tabBarHeight=statusBarHeight*750/screenWidth + 80;
  },
  globalData: {
    navBarHeight: 0,
    tabBarHeight:0,
  }
});