// pages/authored/author.js
var app = getApp();  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userImg: '/images/users.png',
    nickName: '未登录',
    showButton: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  onGotUserInfo: function (e) {
    wx.getUserInfo({
      success: res => {
        console.log('已授权')
        app.globalData.userInfo = res.userInfo
        wx.switchTab({
          url: '/pages/circle/circle'
        })
      },
      fail: res => {
        console.log('无授权')
        this.globalData.userInfo = null
      }
    })
  }
})