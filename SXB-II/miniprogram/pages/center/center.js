Page({
  

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },

 
 



//点击头像跳转至userinfo页面
changeToUserinfo: function () {
  wx.navigateTo({
    url: '../userinfo/userinfo'
  })
},

//点击“常用收件地点”跳转至recievingloc页面
changeToRecievingloc: function() {
  wx.navigateTo({
    url: '../recievingloc/recievingloc'
  })
},
//点击“常用收件地点”跳转至history页面
changeTohistory: function () {
  wx.navigateTo({
    url: '../history/history'
  })
}
})