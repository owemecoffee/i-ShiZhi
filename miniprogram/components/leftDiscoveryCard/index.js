Page({
  /**
   * 页面的初始数据
   */
  properties: {
    cards: {
      type: Object,
      value: ""
    },
    txt:{type:String ,value:""}
  },
  data: {
    cards:[]
  },

  onLoad: function (options) {
    console.log('open')
    //向网页请求数据
    wx.request({
      //卡片信息接口, 存到cards内
      url: 'http://java.maozj.site:8080/api/main/qa',
      success:res=>{
        console.log('success!')
        this.setData({
          cards:res.data
        })
    }
    })
  
  },
  // 前往详情页
  gotoDetail(e){
   
    const detail= e.currentTarget.dataset.detail;
    /*将空图片替换 */
    if(detail.img1==null){detail.img1='/images/pic1.jpg'}
    if(detail.img2==null){detail.img2='/images/pic1.jpg'}
    if(detail.img3==null){detail.img3='/images/pic1.jpg'}
    if(detail.img4==null){detail.img4='/images/pic1.jpg'}
    if(detail.img5==null){detail.img5='/images/pic1.jpg'}
    if(detail.img6==null){detail.img6='/images/pic1.jpg'}
    if(detail.img7==null){detail.img7='/images/pic1.jpg'}
    if(detail.img8==null){detail.img8='/images/pic1.jpg'}
    if(detail.img9==null){detail.img9='/images/pic1.jpg'}
    /*编码，避免读取失败*/
    detail.img1=encodeURIComponent(detail.img1)
    detail.img2=encodeURIComponent(detail.img2)
    detail.img3=encodeURIComponent(detail.img3)
    detail.img4=encodeURIComponent(detail.img4)
    detail.img5=encodeURIComponent(detail.img5)
    detail.img6=encodeURIComponent(detail.img6)
    detail.img7=encodeURIComponent(detail.img7)
    detail.img8=encodeURIComponent(detail.img8)
    detail.img9=encodeURIComponent(detail.img9)
    
    wx.navigateTo({
      url: './detail/detail?openId='+detail.userId+'&id='+detail.id+'&authorAvatar='+detail.authorAvatar+'&authorName='+detail.authorName+'&collects='+detail.collects+'&comments='+detail.comments+'&likes='+detail.likes+'&content='+detail.content+'&title='+detail.title+'&img1='+detail.img1+'&img2='+detail.img2+'&img3='+detail.img3+'&img4='+detail.img4+'&img5='+detail.img5+'&img6='+detail.img6+'&img7='+detail.img7+'&img8='+detail.img8+'&img9='+detail.img9+''
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
    
  }
})