//index.js
//获取应用实例
var app = getApp()
import { formatNumber, formatPlaytime } from '../../utils/util.js'
Page({
  data: {
    song: {},
    motto: 'Hello World',
    userInfo: {},
    songList: [{
      id: "1597410",
      type: 3,
      url: "http://stream1.qqmusic.qq.com:0/1597410.wma",
      songName: "江南style",
      singerId: "13143",
      singerName: "Psy",
      albumId: "128191",
      albumName: "PSY 6甲 Part.1",
      albumLink: "/musicbox/shop/v3/album/91/album_128191.htm",
      playtime: "219"
    }, {
      id: "1539873",
      type: 3,
      url: "http://stream6.qqmusic.qq.com:0/1539873.wma",
      songName: "没有什么不同",
      singerId: "34703",
      singerName: "曲婉婷",
      albumId: "107526",
      albumName: "我的歌声里",
      albumLink: "/musicbox/shop/v3/album/26/album_107526.htm",
      playtime: "288"
    }, {
      id: "1913719",
      type: 3,
      url: "http://stream3.qqmusic.qq.com:0/1913719.wma",
      songName: "想你的夜",
      singerId: "12770",
      singerName: "关喆",
      albumId: "139643",
      albumName: "身边的故事",
      albumLink: "/musicbox/shop/v3/album/43/album_139643.htm",
      playtime: "268"
    }, {
      id: "1803555",
      type: 3,
      url: "http://stream10.qqmusic.qq.com:0/1803555.wma",
      songName: "怒放的生命",
      singerId: "4604",
      singerName: "汪峰",
      albumId: "140820",
      albumName: "北京青年 电视原声带",
      albumLink: "/musicbox/shop/v3/album/20/album_140820.htm",
      playtime: "275"
    }, {
      id: "1773989",
      type: 3,
      url: "http://stream3.qqmusic.qq.com:0/1773989.wma",
      songName: "如果分开我也爱你",
      singerId: "12770",
      singerName: "关喆",
      albumId: "139643",
      albumName: "身边的故事",
      albumLink: "/musicbox/shop/v3/album/43/album_139643.htm",
      playtime: "289"
    }, {
      id: "1641090",
      type: 3,
      url: "http://stream9.qqmusic.qq.com:0/1641090.wma",
      songName: "你并不懂我",
      singerId: "13578",
      singerName: "BY2",
      albumId: "123849",
      albumName: "2020爱你爱你",
      albumLink: "/musicbox/shop/v3/album/49/album_123849.htm",
      playtime: "235"
    }, {
      id: "1531817",
      type: 3,
      url: "http://stream9.qqmusic.qq.com:0/1531817.wma",
      songName: "幻听",
      singerId: "7221",
      singerName: "许嵩",
      albumId: "119459",
      albumName: "梦游计",
      albumLink: "/musicbox/shop/v3/album/59/album_119459.htm",
      playtime: "273"
    }, {
      id: "1439470",
      type: 3,
      url: "http://stream8.qqmusic.qq.com:0/1439470.wma",
      songName: "一吻天荒",
      singerId: "4357",
      singerName: "胡歌",
      albumId: "115748",
      albumName: "轩辕剑之天之痕",
      albumLink: "/musicbox/shop/v3/album/48/album_115748.htm",
      playtime: "250"
    }, {
      id: "1913708",
      type: 3,
      url: "http://stream2.qqmusic.qq.com:0/1913708.wma",
      songName: "淋雨一直走",
      singerId: "224",
      singerName: "张韶涵",
      albumId: "130382",
      albumName: "有形的翅膀",
      albumLink: "/musicbox/shop/v3/album/82/album_130382.htm",
      playtime: "205"
    }, {
      id: "1067125",
      type: 3,
      url: "http://stream2.qqmusic.qq.com:0/1067125.wma",
      songName: "父亲",
      singerId: "11761",
      singerName: "筷子兄弟",
      albumId: "90932",
      albumName: "父亲",
      albumLink: "/musicbox/shop/v3/album/32/album_90932.htm",
      playtime: "301"
    }, {
      id: "1078214",
      type: 3,
      url: "http://stream5.qqmusic.qq.com:0/1078214.wma",
      songName: "后会无期",
      singerId: "22704",
      singerName: "徐良",
      albumId: "91325",
      albumName: "不良少年",
      albumLink: "/musicbox/shop/v3/album/25/album_91325.htm",
      playtime: "211"
    }],
    bottom: '0rpx',
    status: 'stop'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  selectSong (e) {
    let i = e.currentTarget.dataset.songId
    this.setCurrentSong(i)
  },
  setCurrentSong (i) {
    let song = this.data.songList[i]
    console.log(song)
    let l = this.data.songList.length
    let imageUrl = `https://imgcache.qq.com/music/photo/album_300/${song.albumId % 100}/300_albumpic_${song.albumId}_0.jpg`
    let currentSong = {
      id: song.id,
      index: i,
      prev: i - 1 < 0 ? (l - 1) : (i - 1),
      next: i + 1 >= l ? 0 : (i + 1),
      name: song.songName,
      singer: song.singerName,
      image: imageUrl,
      state: 'stop',
      percent: 0,
      playtime: song.playtime,
      ctime: 0
    }
    this.setData({
      bottom: '150rpx',
      song: currentSong
    })
    this.playSong()
  },
  playSong () {
    wx.showLoading()
    let song = this.data.song
    this.setData({
      status: 'run'
    })
    wx.playBackgroundAudio({
      dataUrl: `http://ws.stream.qqmusic.qq.com/wsmusic/${song.id}.m4a?fromtag=46`,
      title: song.name,
      coverImgUrl: song.image,
      success: () => {
        wx.hideLoading()
      },
      fail: () => {
        this.next()
        wx.hideLoading()
      }
    })
  },
  play () {
    let status = this.data.status
    switch (status) {
      case 'run':
        wx.pauseBackgroundAudio()
        this.setData({
          status: 'stop'
        })
        break;
      case 'stop':
        wx.playBackgroundAudio()
        this.setData({
          status: 'run'
        })
        break;
    }
  },
  next () {
    let current = this.data.song
    this.setCurrentSong(current.next)
  },
  prev () {
    let current = this.data.song
    this.setCurrentSong(current.prev)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    let songList = this.data.songList
    songList = songList.map((song, i) => {
      song.no = formatNumber(i + 1)
      song.playtime = formatPlaytime(song.playtime)
      return song
    })
    this.setData({
      songList: songList
    })

  }
})
