// components/NewsList/NewsList.js
Component({
  /**
   * 组件的属性列表
   */

  //  引用公共样式 app.wxss
  options: {
    addGlobalClass: true
  },
  properties: {
    newsList:{
      type:Array,
      value:[
        {
          id:"001",
          title:"2020-2021年度中加学者交换项目遴选通知",
          time:"2021/01/21",
          img:"/static/image/new_img1.png"
        },
        {
          id:"002",
          title:"加拿大成功参与为期一周的中国国际进口博览会，签署协议总金额超85亿人民币",
          time:"2021/01/21",
          img:"/static/image/new_img1.png"
        },
        {
          id:"003",
          title:"加拿大与中国加强气候和环境合作",
          time:"2021/01/21",
          img:"/static/image/new_img1.png"
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
