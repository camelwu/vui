----------

### Range

#### 使用指南
``` javascript
import { Range } from 'vui';

Vue.use(Range);
```

#### 代码演示

##### 基本功能

支持预设value 左右设置文字
```html
<vu-range></vu-range>
<vu-range :value="10"></vu-range>
<vu-range>
	<span slot="start">0</span>
	<span slot="end">100</span>
</vu-range>
```

##### 自定义功能
支持自定义步长、区间、 线宽等 

```html
<vu-range :step="10"></vu-range>
<vu-range :min="10" :max="90"></vu-range>
<vu-range :bar-height="2"></vu-range>
```

##### 禁用状态
通过`disabled`属性来禁用Range，此时Range不可滑动

```html
<vu-range :disabled="true"></vu-range>
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| value | 按钮类型 | `String` | `default` | `primary` `danger` |
| min | 自定义区间的最小值 | `String` | `0` | `任意数字` |
| max | 自定义区间的最大值 | `String` | `100` | `任意数字` |
| step | 每次滑动移动的距离 | `String` | `1` | `在min与max之间的数字` |
| diabled | 是否禁用 | `Boolean` |  `false` | - |
| bar-height | 线条的高度 | `String` |  `1` | `任意正整数` |

#### Event


| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| input | 滑动过程中触发 | 当前value |
| change |  滑动停止时触发 | 当前value |

#### Slot

| name | 描述 |
|-----------|-----------|
| start | range左侧内容 |
| end | range右侧内容 |


> [演示](http://10.112.178.20:9000/#/range)
