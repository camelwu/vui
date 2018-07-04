--------
### Layout 布局

提供了`vu-row`和`vu-col`两个组件来进行行列布局

#### 使用指南
``` javascript
import { Row, Col } from 'vui';

Vue.use(Row);
Vue.use(Col);
```

#### 代码演示

##### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<vu-row>
  <vu-col span="8">span: 8</vu-col>
  <vu-col span="8">span: 8</vu-col>
  <vu-col span="8">span: 8</vu-col>
</vu-row>

<vu-row>
  <vu-col span="4">span: 4</vu-col>
  <vu-col span="10" offset="4">offset: 4, span: 10</vu-col>
</vu-row>

<vu-row>
  <vu-col offset="12" span="12">offset: 12, span: 12</vu-col>
</vu-row>
```

##### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0,值为列元素间距的1/2,单位自定义px、rem等

```html
<vu-row gutter="20px">
  <vu-col span="8">span: 8</vu-col>
  <vu-col span="8">span: 8</vu-col>
  <vu-col span="8">span: 8</vu-col>
</vu-row>
```

#### API

##### Row
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| gutter | 列元素之间的间距1/2（需要自定义单位，为px、rem等） | `String` | - | - |

##### Column
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| span | 列元素宽度 | `String | Number` | - | - |
| offset | 列元素偏移距离 | `String | Number` | - | - |
