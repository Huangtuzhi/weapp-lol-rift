//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: "Welcome to the Summoner’s Rift",
    icon: "",
    nickname: "titus"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../legends/legends'
    })
  },
  onLoad: function () {
    // 加载时更新数据域
    this.getAvatarData()
    this.getUserHotData()
  },

  // Ajax Request get data 
  getAvatarData: function () {
    var _this = this;
    wx.request({
      url: "http://lolapi.games-cube.com/GetUserIcon",
      data: {
        iconid: 4,
      },
      header: {
        'DAIWAN-API-TOKEN': '4006A-E1A71-6CDC6-C17AD'
      },
      success: function (res) {
        console.log(res.data['data'][0]['return'])
        _this.setData(
          {
            icon: res.data['data'][0]['return']
          }
        )
      },
      fail: function () {
        _this.showError();
      }
    })
  },

  getUserHotData: function () {
    var _this = this;
    wx.request({
      url: "http://lolapi.games-cube.com/UserHotInfo?&vaid=17",
      data: {
        qquin: "U14762379253352991681",
        vaid: 17,
      },
      header: {
        'DAIWAN-API-TOKEN': '4006A-E1A71-6CDC6-C17AD'
      },
      success: function (res) {
        console.log(res.data['data'])
        _this.setData(
          {
            nickname: res.data['data'][0]['name'],
            level: res.data['data'][0]['level']
          }
        )
      },
      fail: function () {
        _this.showError();
      }
    })
  },
})
