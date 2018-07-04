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
