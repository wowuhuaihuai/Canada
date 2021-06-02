// components/CardHeader/CardHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lightTitle:{
      type:String,
      value:"title高亮默认值"
    },
    title:{
      type:String,
      value:"专题"
    },
    more:{
      type:String,
      value:"查看更多"
    },
    hasArrow:{
      type:Boolean,
      value:true
    },
    padding:{
      type:String,
      value:"0rpx"
    }, 
    descString:{
      type:String,
      value:""
    } , 
    hasClose:{
      type:Boolean,
      value:false
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
