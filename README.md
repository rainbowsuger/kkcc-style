# ImgViewer 图片预览

## 安装
```javascript
npm install ImgViewer
```
## 引用
```javascript
import ImgViewer from 'ImgViewer'

Vue.use(ImgViewer)
```
### Prop
属性           | 类型          | 说明             | 默认值
------------  | ------------- | -------------   | -------------
images          | Array        | 图片数据         |  []
num  | number  |  默认显示图片个数（超出显示...）     | 1
width  | number  |  图片宽度   | 48
height  | number  |  图片高度   | 48
