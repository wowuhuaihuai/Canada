### image与view之间有空隙

```
原因：
图片文字等inline元素默许是跟父级元素的baseline对齐，而baseline又和父级底边有必定间距

解决方案：
将图片转换为块级对象即，设置img为 display:block;
```



### tabBar底部按钮配置

app.json

```json
"tabBar": {
    "color": "#94969C",
    "selectedColor": "#F74172",
    "backgroundColor": "#FFF",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/icon/tab-home.png",
        "selectedIconPath": "/static/icon/tab-home-active.png"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/icon/tab-trading.png",
        "selectedIconPath": "/static/icon/tab-home-active.png"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/icon/tab-education.png",
        "selectedIconPath": "/static/icon/tab-home-active.png"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/icon/tab-activity.png",
        "selectedIconPath": "/static/icon/tab-home-active.png"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "static/icon/tab-mine.png",
        "selectedIconPath": "/static/icon/tab-home-active.png"
      }
    ]
  }
```

### 盒子模型

```
W3C标准盒子：box-sizing:content-box
IE盒子：box-sizing:border-box
```

### 顶部标题

​	全局 /app.json

```json
 {
    "window": {
    "navigationBarBackgroundColor": "#d43c33",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "风起云音乐"
  },
  ...
 }
```

​	局部 ...page/page.json

```
{
  "navigationBarBackgroundColor": "#4a4a4a",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "资讯动态", 
  ...
}
```

PS: "navigationStyle": "custom", 就是不显示顶部标题