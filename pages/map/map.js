Page({
  data: {
    latitude:24.297,
    longitude: 109.446,
    markers: [{
      iconPath: '/images/navi.png',
      id: 0,
      latitude: 24.297,
      longitude: 109.446,
      width: 50,
      height: 50
    }]

  },
  markertap: function() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: 'XX大酒店',
      address: '北京市 海淀区 XX路'
    })
  }
})