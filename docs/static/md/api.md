---
title: API
---

## API

<p class="danger">
  该文档内所有演示代码，均可在[这里](http://10.112.178.20:9000)找到。
</p>

## 组件


----------
### Area 省市县选择组件

#### 使用指南

```javascript
import { Area } from 'vui';

Vue.use(Area);
```

#### 代码演示

##### 基础用法

要初始化一个`Area`组件，你需要传入一个`area-list`属性，数据格式具体可看下面数据格式章节

```html
<vu-area :area-list="areaList" />
```

##### 选中省市县

如果想选中某个省市县，需要传入一个`value`属性，绑定对应的省市县`code`

```html
<vu-area :area-list="areaList" value="110101" />
```

##### 配置显示列

可以通过`columns-num`属性配置省市县显示的列数，默认情况下会显示省市县，当你设置为`2`，则只会显示省市选择

```html
<vu-area :area-list="areaList" :columns-num="2" title="标题" />
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 当前选中的省市区`code` | `String` | - | - |
| title | 顶部栏标题 | `String` | `''`   | - |
| area-list | 省市县数据，格式见下方 | `Object` | - | - |
| columns-num | 省市县显示列数，3-省市县，2-省市，1-省 | `String`,`Number` | `3` | - |
| loading | 是否显示加载状态 | `Boolean` | `false` | - |
| item-height | 选项高度 | `Number` | `44` | - |
| visible-item-count | 可见的选项个数 | `Number` | `5` | - |

#### Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击右上方完成按钮 | 一个数组参数，具体格式看下方数据格式章节 |
| cancel | 点击取消按钮时 | - |

#### 数据格式

##### 省市县列表数据格式

整体是一个 Object，包含 `province_list`, `city_list`, `county_list` 三个 key。

每项以省市区编码作为 key，省市区名字作为 value。编码为 6 位数字，前两位代表省份，中间两位代表城市，后两位代表区县，以 0 补足 6 位。如北京编码为 `11`，以零补足 6 位，为 `110000`。

`AreaList`具体格式如下：

```javascript
{
  province_list: {
    110000: '北京市',
    120000: '天津市'
  },
  city_list: {
    110100: '北京市',
    110200: '县',
    120100: '天津市',
    120200: '县'
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区'
    120101: '和平区',
    120102: '河东区',
    120103: '河西区',
    120104: '南开区',
    120105: '河北区',
    // ....
  }
}
```

完整数据见 [Area.json](https://github.com/youzan/vut/blob/dev/docs/demos/mock/area.json)

##### 点击完成时返回的数据格式

返回的数据整体为一个数组，数组内包含 `columnsNum` 个数据， 每个数据对应一列选项中被选中的数据。

`code` 代表被选中的地区编码， `name` 代表被选中的地区名称

```javascript
[
  {
    code: '110000',
    name: '北京市'
  },
  {
    code: '110100',
    name: '北京市'
  },
  {
    code: '110101',
    name: '东城区'
  }
];
```

### Badge 徽章

#### 使用指南
``` javascript
import { Badge } from 'vui';

Vue.use(Badge);
```

#### 代码演示

##### 基础用法

通过在`vu-badge-group`上设置`active-key`属性来控制选中的`badge`

```html
<vu-badge-group :active-key="activeKey">
  <vu-badge title="热销榜" @click="onClick" />
  <vu-badge title="花式寿司" @click="onClick" info="8" />
  <vu-badge title="火炽寿司" @click="onClick" info="99" />
  <vu-badge title="手握寿司" @click="onClick" info="199" />
</vu-badge-group>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
```

#### BadgeGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| active-key | 选中`badge`的索引 | `String | Number` | `0` | - |

#### Badge API
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 内容 | `String` | `''` | - |
| info | 提示消息 | `String` | `''` | - |
| url | 跳转链接 | `String` | - | - |

----------
### Button 按钮

#### 使用指南
``` javascript
import { Button } from 'vui';

Vue.use(Button);
```

#### 代码演示

##### 按钮类型
支持`default`、`primary`、`danger`三种类型，默认为`default`

```html
<vu-button type="default">默认按钮</vu-button>
<vu-button type="primary">主要按钮</vu-button>
<vu-button type="danger">危险按钮</vu-button>
```

##### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html
<vu-button size="large">大号按钮</vu-button>
<vu-button size="normal">普通按钮</vu-button>
<vu-button size="small">小型按钮</vu-button>
<vu-button size="mini">迷你按钮</vu-button>
```

##### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<vu-button disabled>禁用状态</vu-button>
```

##### 加载状态

```html
<vu-button loading />
<vu-button loading type="primary" />
```

##### 自定义按钮标签

按钮标签默认为`button`，可以使用`tag`属性来修改按钮标签

```html
<vu-button tag="a" href="http://code.ds.gome.com.cn/gitlab/meidian-crd/open/vui" target="_blank">
  按钮
</vu-button>
```

##### 页面底部操作按钮

```html
<vu-button type="primary" bottomAction>按钮</vu-button>
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `String` | `default` | `primary` `danger` |
| size | 按钮尺寸 | `String` | `normal` | `large` `small` `mini` |
| tag | 按钮标签 | `String` | `button` | 任意`HTML`标签 |
| nativeType | 按钮类型（原生） | `String` | `''` | - |
| diabled | 是否禁用 | `Boolean` |  `false` | - |
| loading | 是否显示为加载状态 | `Boolean` |  `false` | - |
| block | 是否为块级元素 | `Boolean` |   `false` | - |
| bottomAction | 是否为底部行动按钮 | `Boolean` | `false` | - |


> [演示](http://10.112.178.20:9000/#/button)

----------
#### CellGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| border | 是否显示外边框 | `Boolean` | `true` | - |

#### Cell API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | `String` | - | - |
| title | 左侧标题 | `String` | - | - |
| value | 右侧内容 | `String` | - | - |
| label | 标题下方的描述信息 | `String` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前 history | `String` | `false` | - |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| clickable | 是否开启点击反馈 | `Boolean` | `false` | - |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` | - |
| required | 是否显示表单必填符号 | `Boolean` | `false` | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |


> [演示](http://10.112.178.20:9000/#/cell)


----------
### Cell 单元格

#### 使用指南
``` javascript
import { Cell, CellGroup } from 'vui';

Vue.use(Cell);
Vue.use(CellGroup);
```

#### 代码演示

###### 基础用法

将`vu-cell-group`组件看成一个容器即可

```html
<vu-cell-group>
  <vu-cell title="单元格" value="内容" />
  <vu-cell title="单元格" value="内容" label="描述信息" />
</vu-cell-group>
```

###### 只设置value
只设置`value`时会向左对齐

```html
<vu-cell-group>
  <vu-cell value="内容" />
</vu-cell-group>
```

###### 展示图标
通过`icon`属性在标题左侧展示图标

```html
<vu-cell-group>
  <vu-cell title="单元格" icon="location" />
</vu-cell-group>
```


###### 展示箭头
传入`is-link`属性则会在右侧显示箭头

```html
<vu-cell-group>
  <vu-cell title="单元格" is-link />
  <vu-cell title="单元格" is-link value="内容" />
</vu-cell-group>
```

###### 高级用法
如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

```html
<vu-cell-group>
  <vu-cell value="内容" icon="shop" is-link>
    <template slot="title">
      <span class="vu-cell-text">单元格</span>
      <vu-tag type="danger">标签</vu-tag>
    </template>
  </vu-cell>
  <VuCell>
    <template slot="title">
      <span class="van-cell-text">{{ '标题' }}</span>
      <span class="van-cell-text">{{ '时间' }}</span>
    </template>
    <template slot="content">
      <span class="van-cell-text">{{ '内容:' }}</span><span class="van-cell-text" style="color: #FA1E8C;">{{ '国美币' }}</span>
    </template>
  </VuCell>

  <vu-cell title="单元格" icon="location" is-link />
  <vu-cell title="单元格">
    <vu-icon slot="right-icon" name="search" class="vu-cell__right-icon" />
  </vu-cell>
</vu-cell-group>
```

#### CellGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| border | 是否显示外边框 | `Boolean` | `true` | - |

#### Cell API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | `String` | - | - |
| title | 左侧标题 | `String` | - | - |
| value | 右侧内容 | `String` | - | - |
| label | 标题下方的描述信息 | `String` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前 history | `String` | `false` | - |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| clickable | 是否开启点击反馈 | `Boolean` | `false` | - |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` | - |
| required | 是否显示表单必填符号 | `Boolean` | `false` | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| content | 自定义`content` |
| right-icon | 自定义右侧按钮，默认是`arrow` |

----------
### Checkbox 复选框

#### 使用指南
``` javascript
import { Checkbox, CheckboxGroup } from 'vui';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
```

#### 代码演示

##### 基础用法
通过`v-model`绑定 checkbox 的勾选状态

```html
<vu-checkbox v-model="checked">复选框 1</vu-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

##### 禁用状态

```html
<vu-checkbox v-model="checked" disabled>复选框 2</vu-checkbox>
```

##### Checkbox 组

需要与`vu-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`vu-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<vu-checkbox-group v-model="result">
  <vu-checkbox
    v-for="(item, index) in list"
    :key="index"
    :name="item"
  >
    复选框 {{ item }}
  </vu-checkbox>
</vu-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

##### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件

```html
<vu-checkbox-group v-model="result">
  <vu-cell-group>
    <vu-cell v-for="(item, index) in list" :key="index">
      <vu-checkbox :name="item">复选框 {{ item }}</vu-checkbox>
    </vu-cell>
  </vu-cell-group>
</vu-checkbox-group>
```

##### Checkbox API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 标识 Checkbox 名称 | `Boolean` | `false` | - |
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |
| shape | 形状 | `String` | `round` | `square` |

##### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

##### Checkbox Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

##### CheckboxGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |


> [演示](http://10.112.178.20:9000/#/checkbox)

--------

### Dialog 弹出框

#### 使用指南

```js
import { Dialog } from 'vant';
```

#### 代码演示

##### 消息提示
用于提示一些消息，只包含一个确认按钮

```javascript
Dialog.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容'
}).then(() => {
  // on close
});
```

##### 消息确认
用于确认消息，包含取消和确认按钮

```javascript
Dialog.confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on confirm 点击右按钮后执行
}).catch(() => {
  // on cancel 点击左按钮后执行
});
```

##### 组件内调用
引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容'
    });
  }
}
```

#### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Dialog.alert | options | `Promise` | 展示消息提示弹窗 |
| Dialog.confirm | options | `Promise` | 展示消息确认弹窗 |
| Dialog.close | - | `void` | 关闭弹窗 |

#### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String` | - | - |
| message | 内容 | `String` | - | - |
| showConfirmButton | 是否展示确认按钮 | `Boolean` |  `true` | - |
| showCancelButton | 是否展示取消按钮 | `Boolean` |  `false` | - |
| confirmButtonText | 确认按钮的文案 | `String` |  `确认` | - |
| cancelButtonText | 取消按钮的文案 | `String` | `取消` | - |
| confirmButtonStyle | 确认按钮的自定义样式 | `Object` | `样式对象` | - |
| cancelButtonStyle | 取消按钮的自定义样式 | `Object` | `样式对象` | - |
| overlay | 是否展示蒙层 | `Boolean` | `true` | - |
| closeOnClickOverlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` | - |
| lockOnScroll | 是否禁用背景滚动 | `Boolean` | `true` | - |

----------

### Field 输入框

`input`或`textarea`的输入框。

#### 使用指南
``` javascript
import { Field } from 'vui';

Vue.use(Field);
```

#### 代码演示

##### 基础用法
通过 v-model 绑定输入框的值

```html
<vu-cell-group>
  <vu-field v-model="value" placeholder="请输入用户名" />
</vu-cell-group>
```

##### 自定义类型
根据`type`属性定义不同类型的输入框

```html
<vu-cell-group>
  <vu-field
    v-model="username"
    label="用户名"
    icon="clear"
    placeholder="请输入用户名"
    required
    @click-icon="username = ''"
  />

  <vu-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</vu-cell-group>
```

##### 禁用输入框

```html
<vu-cell-group>
  <vu-field
    value="输入框已禁用"
    label="用户名"
    disabled
  />
</vu-cell-group>
```

##### 错误提示
通过`error`或者`error-message`属性增加对应的错误提示

```html
<vu-cell-group>
  <vu-field
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <vu-field
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</vu-cell-group>
```

##### 高度自适应
对于 textarea，可以通过`autosize`属性设置高度自适应

```html
<vu-cell-group>
  <vu-field
    v-model="message"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    rows="1"
    autosize
/>
</vu-cell-group>
```

#### API
Filed 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`readonly`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 输入框类型 | `String` | `text` | `number` `email` `textarea` `tel` `datetime` `date` `password` `url` |
| value | 输入框的值 | `String` | - | - |
| label | 输入框标签 | `String` | - | - |
| disabled | 是否禁用输入框 | `Boolean` | `false` | - |
| error | 输入框是否有错误 | `Boolean` | `false` | - |
| error-message | 输入框底部错误提示文案 | `String` | `''` | - |
| autosize | 高度自适应(仅支持textarea) | `Boolean` | `false` | - |
| icon | 输入框尾部图标 | `String` | - |  Icon 组件支持的类型 |

#### Event
Filed 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| click-icon | 点击尾部图标时触发 | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| icon | 自定义icon |

--------
### Infinite scroll

无限滚动指令

#### 引入

```javascript
import { InfiniteScroll } from 'vui';

Vue.use(InfiniteScroll);
```

#### 例子

为 HTML 元素添加 `v-infinite-scroll` 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 `infinite-scroll-distance` 设置）时，绑定到 `v-infinite-scroll` 指令的方法就会被触发。

```HTML
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list">{{ item }}</li>
</ul>
```

```javascript
loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
}
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| infinite-scroll-disabled | 若为真，则无限滚动不会被触发 | `Boolean` | `false` | - |
| infinite-scroll-distance | 触发加载方法的滚动距离阈值（像素） | `Number` | 0 | - |
| infinite-scroll-immediate-check | 若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。 | `Boolean` | `true` | - |
| infinite-scroll-listen-for-event | 一个 event，被执行时会立即检查是否需要执行加载方法。 | `Function` | - | - |
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

--------
### List 列表组件

#### 使用指南
``` javascript
import { List } from 'vui';
```

#### 代码演示

```html
<vu-list :list="this.data1">
  <div slot-scope="props">{{ props.listItem }}</div>
</vu-list>
```

```html
<vu-list :list="this.data1">
  <!-- vue 2.5.0 之前版本 -->
  <template slot-scope="props">{{ props.listItem }}</template>
</vu-list>
```
slot 进去的模板，需要有 `slot-scope` 属性，该属性的 `listItem` 为传入的props列表的每一项

vue 2.5.0 之前的版本，slot只能用`template`标签，之后的版本可以用任何标签

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| list | 传入的列表 | `Array` | - | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 列表模板 |
--------

### Loadmore 下拉刷新 上拉刷新

#### 使用指南
``` javascript
import { Loadmore } from 'vui';
```

#### 代码演示

```html
<vu-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</vu-loadmore>
```

以列表顶部的下拉刷新为例：按住列表，下拉一定距离（通过 `topDistance` 配置）后释放，被指定为 `top-method` 的方法就会执行

```javascript
loadTop() {
  ...// 加载更多数据
  this.$refs.loadmore.onTopLoaded();
}
```
注意在这个方法的最后需要手动调用 `loadmore` 的 `onTopLoaded` 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
列表底部的上拉刷新与之类似

```javascript
loadBottom() {
  ...// 加载更多数据
  this.allLoaded = true;// 若数据已全部获取完毕
  this.$refs.loadmore.onBottomLoaded();
}
```


唯一的区别是，当底部数据全部获取完毕时，可以将绑定到组件 `bottom-all-loaded` 属性的变量赋值为 `true`，这样 `bottom-method` 就不会再次执行了。
手指在屏幕上滑动的距离与组件实际移动的距离比值可以通过 `distance-index` 参数配置，默认值为 2。


#### 代码演示

可以为列表顶部和底部的加载提示区域提供自定义的 HTML 模板

```html
<template>
  <vu-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div slot="top" class="vu-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </vu-loadmore>
</template>
<script>
  export default {
    data() {
      return {
        topStatus: '',
        // ...
      };
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      // ...
    },
    // ...
  };
</script>
```

比如需要配置列表顶部的 HTML，则需要为自定义 HTML 模板的最外层标签设置 `slot` 属性为 `top`，类名为 `vu-loadmore-top`。当用户滑动组件时，组件会有以下几个状态：

* pull：组件已经被按下，但按下的距离未达到 topDistance，此时释放不会触发 top-method，列表会回到初始位置
* drop：按下的距离不小于 topDistance，此时释放会触发 top-method
* loading：组件已被释放，top-method 正在执行 每当组件的状态发生变化时，loadmore 都会触发 top-status-change 方法，参数为组件目前的状态。因此可以像本例一样，使用一个 handleTopChange 方法来处理组件状态的变化。


#### 配置加载提示区域的文字

在不使用自定义 HTML 模板的情况下，可以配置 `loadmore` 本身自带的加载提示区域的文字。以列表顶部为例，对应于 `status` 的三个状态，可配置的属性依次为 `topPullText`、`topDropText` 和 `topLoadingText`。与之对应的底部属性为 `bottomPullText`、`bottomDropText` 和 `bottomLoadingText`。

#### 自动检测

loadmore 在初始化时会自动检测它的高度是否能够撑满其容器，如果不能则会调用 `bottom-method`，直到撑满容器为止。如果不希望使用这一机制，可以将 `auto-fill` 设为 `false`。

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| autoFill | 若为真，loadmore 会自动检测并撑满其容器 | `Boolean` | `true` | - |
| distanceIndex | 手指移动与组件移动距离的比值	 | `Number` | 2 | - |
| maxDistance | 组件可移动的最大距离（像素），若为 0 则不限制 | `Number` | 0 | - |
| topPullText | topStatus 为 pull 时加载提示区域的文字	 | `String` | `下拉刷新` | - |
| topDropText | topStatus 为 drop 时加载提示区域的文字 | `String` | `释放更新` | - |
| topDropText | topStatus 为 drop 时加载提示区域的文字 | `String` | `释放更新` | - |
| topLoadingText | topStatus 为 loading 时加载提示区域的文字 | `String` | `加载中...` | - |
| topDistance | 触发 topMethod 的下拉距离阈值（像素） | `Number` | 70 | - |
| topMethod | 下拉刷新执行的方法		 | `Function` | - | - |
| bottomPullText | bottomStatus 为 pull 时加载提示区域的文字 | `String` | `上拉刷新` | - |
| bottomDropText | bottomStatus 为 drop 时加载提示区域的文字	 | `String` | `释放更新` | - |
| bottomLoadingText | bottomStatus 为 loading 时加载提示区域的文字 | `String` | `加载中...` | - |
| bottomDistance | 触发 bottomMethod 的上拉距离阈值（像素） | `Number` | 70 | - |
| bottomMethod | 上拉刷新执行的方法 | `Function` | - | - |
| bottomAllLoaded | 若为真，则 bottomMethod 不会被再次触发 | `Boolean` | `false` | - |


#### Events

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| top-status-change | 组件顶部状态发生变化时的回调函数 | 组件顶部的新状态名 |
| bottom-status-change | 组件底部状态发生变化时的回调函数 | 组件底部的新状态名 |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 数据列表 |
| top | 自定义顶部加载提示区域 HTML 模板 |
| bottom | 自定义底部加载提示区域 HTML 模板 |

----------
### NavBar 导航栏

#### 使用指南
``` javascript
import { NavBar } from 'vui';

Vue.use(NavBar);
```

#### 代码演示

##### 基础用法

```html
<vu-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
```

##### 高级用法
通过 slot 定制内容

```html
<vu-nav-bar title="标题" left-text="返回" left-arrow>
  <vu-icon name="search" slot="right" />
</vu-nav-bar>
```


#### API
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String` | `''` | - |
| left-text | 左侧文案 | `String` | `''` | - |
| right-text | 右侧文案 | `String` | `''` | - |
| left-arrow | 是否显示左侧箭头 | `Boolean` | `false` | - |
| left-arrow-size | 左侧箭头图标字体大小 | `String` | `14px, 14rem` | - |
| fixed | 是否固定在顶部 | `Boolean` | `false` | - |
| z-index | 元素 z-index | `Number` | `1` | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| title | 自定义标题 |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

#### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-left | 点击左侧按钮时触发 | - |
| click-right | 点击右侧按钮时触发 | - |

### NoticeBar 通告栏

#### 使用指南
``` javascript
import { NoticeBar } from 'vui';

Vue.use(NoticeBar);
```

#### 代码演示

##### 基础用法

```html
<vu-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="https://img.yzcdn.cn/1.png"
/>
```

##### 禁用滚动
文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

```html
<vu-notice-bar :scrollable="false">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</vu-notice-bar>
```

##### 通告栏模式
默认模式为空，支持`closeable`和`link`。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<vu-notice-bar mode="closeable">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</vu-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<vu-notice-bar mode="link">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</vu-notice-bar>
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| mode | 通告栏模式 | String | `''` | `closeable` `link` |
| delay | 动画延迟时间，单位秒 | Number | `1` | - |
| speed | 滚动速率，单位px | Number | `50` | - |
| scrollable | 是否滚动 | Boolean | `true` | - |
| left-icon | 左侧图标图片链接 | String | - | - |
| color | 文本颜色 | String | `#f60` | - |
| background | 滚动条背景 | String | `#fff7cc` | - |

#### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击事件回调 | - |

----------
### Picker 选择器

#### 使用指南
``` javascript
import { Picker } from 'vui';

Vue.use(Picker);
```

#### 代码演示


##### 基础用法

```html
<vu-picker :columns="columns" @change="onChange" />
```

```javascript
export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    };
  },
  onChange(picker, value, index) {
    Toast(`当前值：${value}, 当前索引：${index}`);
  }
};
```

##### 禁用选项
选项可以为对象结构，通过设置 disabled 来禁用该选项

```html
<vu-picker :columns="columns" />
```

```javascript
export default {
  data() {
    return {
      columns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ]
    };
  }
};
```

##### 展示顶部栏

```html
<vu-picker
  show-toolbar
  :title="标题"
  :columns="columns"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
```

```javascript
export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    }
  }
};
```

##### 多列联动

```html
<vu-picker :columns="columns" @change="onChange" />
```

```javascript
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
  data() {
    return {
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    };
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
  }
};
```

##### 加载状态
当 Picker 数据是通过异步获取时，可以通过 `loading` 属性显示加载提示

```html
<vu-picker :columns="columns" loading />
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| columns | 对象数组，配置每一列显示的数据 | `Array` | `[]` | - |
| show-toolbar | 是否显示顶部栏 | `Boolean` | `false` | - |
| title | 顶部栏标题 | `String` | `''` | - |
| loading | 是否显示加载状态 | `Boolean` | `false` | - |
| confirm-button-text | 确认按钮文字 | `String` | `完成` | - |
| cancel-button-text | 取消按钮文字 | `String` | `取消` | - |
| item-height | 选项高度 | `Number` | `44` | - |
| visible-item-count | 可见的选项个数 | `Number` | `5` | - |
| value-key | 选项对象中，文字对应的 key | `String` | `text` | - |

#### Event
Picker 组件的事件会根据 columns 是单列或多列返回不同的参数

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| change | 选项改变时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，当前列对应的索引 |


#### Columns 数据结构
当传入多列数据时，`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`

| key | 说明 |
|-----------|-----------|
| values | 列中对应的备选值 |
| defaultIndex | 初始选中项的索引，默认为 0 |
| className | 为对应列添加额外的`class` |

#### Picker 实例
在`change`事件中，可以获取到`picker`实例，通过实例方法可以灵活控制 Picker 内容

| 函数 | 说明 |
|-----------|-----------|
| getValues() | 获取所有列选中的值，返回一个数组 |
| setValues(values) | 设置所有列选中的值 |
| getIndexes() | 获取所有列选中值对应的索引，返回一个数组 |
| setIndexes(indexes) | 设置所有列选中值对应的索引 |
| getColumnValue(columnIndex) | 获取对应列选中的值 |
| setColumnValue(columnIndex, value) | 设置对应列选中的值 |
| getColumnIndex(columnIndex) | 获取对应列选中项的索引 |
| setColumnIndex(columnIndex, optionIndex) | 设置对应列选中项的索引 |
| getColumnValues(columnIndex) | 获取对应列中所有选项 |
| setColumnValues(columnIndex, values) | 设置对应列中所有选项 |

----------

### Progress 进度条

#### 使用指南
``` javascript
import { Progress } from 'vui';

Vue.use(Progress);
```

#### 代码演示

##### 基础用法

进度条默认为蓝色，使用`percentage`属性来设置当前进度

```html
<vu-progress :percentage="0" />
<vu-progress :percentage="46" />
<vu-progress :percentage="100" />
```


##### 进度条置灰

```html
<vu-progress inactive :percentage="0" />
<vu-progress inactive :percentage="46" />
<vu-progress inactive :percentage="100" />
```


##### 样式定制

可以使用`pivot-text`属性自定义文字，`color`属性自定义进度条颜色

```html
<vu-progress pivot-text="红色" color="#ed5050" :percentage="26" />
<vu-progress pivot-text="橙色" color="#f60" :percentage="46" />
<vu-progress pivot-text="黄色" color="#f09000" :percentage="66" />
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| inactive | 是否置灰 | `Boolean` | `false` | - |
| percentage | 进度百分比 | `Number` | `false` | `0-100` |
| show-pivot | 是否显示进度文字 | `Boolean` | `true` | - |
| pivot-text | 文字显示 | `String` | 百分比文字 | - |
| color | 进度条颜色 | `String` | `#38f` | hexvalue |
| text-color | 进度条文字颜色 | `String` | `#fff` | hexvalue |

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

### Search 搜索

#### 使用指南
``` javascript
import { Search } from 'vui';

Vue.use(Search);
```

#### 代码演示

##### 基础用法
`vu-search` 中，v-model 用于控制搜索框中的文字。background 可以自定义搜索框外部背景色。

```html
<vu-search placeholder="请输入商品名称" v-model="value" />
```

##### 监听对应事件
`vu-search` 提供了 search 和 cancel 事件。search 事件在用户点击键盘上的 搜索/回车 按钮触发。cancel 事件在用户点击搜索框右侧取消按钮时触发

Tips: 在 `vu-search` 外层增加 form 标签，并且 action 不为空，即可在 IOS 弹出的输入法中显示搜索按钮

```html
<form action="/">
  <vu-search
    v-model="value"
    placeholder="请输入商品名称"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

##### 自定义行动按钮
`vu-search` 支持自定义右侧取消按钮，使用名字为 action 的 slot 即可。使用此 slot 以后，原有的 cancel 事件不再生效。

```html
<vu-search
  v-model="value"
  show-action
  @search="onSearch"
>
  <div slot="action" @click="onSearch">搜索</div>
</vu-search>
```

#### API
Search 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`readony`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| background | 搜索框背景色 | `String` | `#f2f2f2` |  所有浏览器支持的颜色描述 |
| show-action | 是否在搜索框右侧显示取消按钮 | `Boolean` | false | - |

#### Event
Search 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| cancel | 取消搜索 | - |
| search | 确定搜索 | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| action | 自定义搜索框右侧按钮，需要在`showAction`为 true 时才会显示 |

### Stepper 步进器

#### 使用指南
``` javascript
import { Stepper } from 'vui';

Vue.use(Stepper);
```

#### 代码演示

##### 基础用法

```html
<vu-stepper v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  }
}
```

##### 禁用状态
通过设置`disabled`属性来禁用 stepper

```html
<vu-stepper v-model="value" disabled />
```

#### 高级用法

默认是每次加减为1，可以对组件设置`step`、`min`、`max`、`default-value`属性

```html
<vu-stepper
  v-model="value"
  :min="5"
  :max="40"
  :step="2"
  :default-value="9"
/>
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| min | 最小值 | `String | Number` | `1` | - |
| max | 最大值 | `String | Number` | - | - |
| default-value | 默认值 | `String | Number` | `1` | - |
| step | 步数 | `String | Number` | `1` | - |
| disabled | 是否禁用 | `Boolean` | `false` | - |
| disable-input | 是否禁用input框 | `Boolean` | `false` | - |

#### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |

----------


### Swipe 轮播

#### 使用指南
``` javascript
import { Swipe, SwipeItem } from 'vui';

Vue.use(Swipe);
Vue.use(SwipeItem);
```

#### 代码演示

##### 基础用法
通过`autoplay`属性设置自动轮播间隔

```html
<vu-swipe :autoplay="3000">
  <vu-swipe-item>1</vu-swipe-item>
  <vu-swipe-item>2</vu-swipe-item>
  <vu-swipe-item>3</vu-swipe-item>
  <vu-swipe-item>4</vu-swipe-item>
</vu-swipe>
```

##### 图片懒加载
配合 [Lazyload](#/zh-CN/component/lazyload) 组件实现图片懒加载

```html
<vu-swipe :autoplay="3000">
  <vu-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </vu-swipe-item>
</vu-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

##### 滑动跳转
通过传入 `endFunction` 方法，滑动到最后一个图片后，会停止滑动并触发该方法

```html
<vu-swipe :endFunction="endFunction">
  <vu-swipeItem>1</vu-swipeItem>
  <vu-swipeItem>2</vu-swipeItem>
  <vu-swipeItem>3</vu-swipeItem>
  <vu-swipeItem>4</vu-swipeItem>
</vu-swipe>
```
可以通过 `endOffset` 参数控制触发方法的offset阈值

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | - | - |
| duration | 动画时长，单位为 ms | `Number` | `500` | - |
| showIndicators | 是否显示指示器 | `Boolean` | `true` | - |
| initialSwipe | 初始位置，从 0 开始算 | `Number` | `0` | - |
| endFunction | 滑动到最后一个图片之后继续滑动触发方法 | `Function` | - | - |
| endOffset | 触发`endFunction`的阈值 | `Number` | `100` | - |

#### 事件

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

----------


### Tabs 标签页

### 使用指南
``` javascript
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
```

### 代码演示

#### 基础用法

默认情况下启用第一个 tab，可以通过`active`属性激活对应特定索引的 tab

```html
<vu-tabs :active="active">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

#### 横向滚动

默认情况下多于4个tab时，可以横向滚动tab。可以通过设置`swipe-threshold`这个阙值，多于这个阙值时，tab就会支持横向滚动。

```html
<vu-tabs>
  <vu-tab v-for="index in 8" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

#### 禁用标签

在对应的`vu-tab`上设置`disabled`属性即可。如果需要监听禁用事件，可以在`vu-tabs`上监听`disabled`事件。

```html
<vu-tabs @disabled="onClickDisabled">
  <vu-tab v-for="index in 4" :title="'选项 ' + index" :disabled="index === 2">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled() {
      Toast('Disabled!')
    }
  }
};
```

#### 样式风格

`Tabs`目前有两种样式：`line`和`card`，默认为`line`样式，也就上面基础用法中的样式，你可以在`vu-tabs`上设置`type`为`card`改为card样式。

```html
<vu-tabs type="card">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

#### 点击事件

可以在`vu-tabs`上绑定一个`click`事件，事件处理函数有一个参数，参数为对应`tab`在`tabs`中的索引。

```html
<vu-tabs @click="handleTabClick">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```javascript
export default {
  methods: {
    handleTabClick(index) {
      Toast(index);
    }
  }
};
```

#### 粘性布局
通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<vu-tabs :active="active" sticky>
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

### Tabs API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| type | Tab 样式类型 | `String` | `line` | `card` |
| active | 默认激活的 tab | `String` `Number` | `0` | - |
| duration | 切换 tab 的动画时间 | `Number` | `0.2` | - |
| swipe-threshold | 滚动阀值，设置 Tab 超过多少个可滚动 | `Number` | `4` | - |
| sticky | 是否使用粘性定位布局 | `Boolean` | `false` | - |
| color | 设置active下的文字和下划线颜色 | `String` | - | - |
| height | 设置tab的高度，需要自带参数 | `String` | - | - |

### Tab API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| title | tab的标题 | `String``html String` | - | - |
| disabled | 是否禁用这个tab | `Boolean` | `false` | - |

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 某个tab点击事件 | index：点击的`tab`的索引 |
| disabled | 某个tab禁用时点击事件 | index：点击的`tab`的索引 |



--------

### Toast 轻提示

#### 使用指南

```javascript
import { Toast } from 'vui';
```

#### 代码演示

##### 文字提示

```javascript
Toast('我是提示文案，建议不超过十五字~');
```


##### 加载提示

```javascript
Toast.loading({ mask: true });
```


##### 成功/失败提示

```javascript
Toast.success('成功文案');
Toast.fail('失败文案');
```


##### 高级用法

```javascript
const toast = Toast.loading({
  duration: 0,       // 持续展示 toast
  forbidClick: true, // 禁用背景点击
  message: '倒计时 3 秒'
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
```

##### 组件内调用
引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$toast('提示文案');
  }
}
```



#### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Toast | `options | message` | toast 实例 | 展示提示 |
| Toast.loading | `options | message` | toast 实例 | 展示加载提示 |
| Toast.success | `options | message` | toast 实例 | 展示成功提示 |
| Toast.fail | `options | message` | toast 实例 | 展示失败提示 |
| Toast.clear | - | `void` | 关闭提示 |

#### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 提示类型 | `String` | `text` | `loading` `success` `fail` `html` |
| message | 内容 | `String` | `''` | - |
| position | 位置 | `String` | `middle` | `top` `bottom` |
| mask | 是否显示背景蒙层 | `Boolean` | `false` | - |
| forbidClick | 禁止背景点击 | `Boolean` | `false` | - |
| duration | 时长(ms) | `Number` | `3000` | 值为 0 时，toast 不会消失 |
