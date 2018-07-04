<template>
  <div  class="demo-field">
    <h1>Picker选择器</h1>
    <div >
      <h2 class="vu-doc-demo-block-title demo-first-title">基础用法</h2>
      <vu-picker :columns="column1" @change="onChange1" />
    </div>

    <div >
      <h2 class="vu-doc-demo-block-title ">禁用选项</h2>
      <vu-picker :columns="column2" />
    </div>

    <div >
      <h2 class="vu-doc-demo-block-title ">展示顶部栏
</h2>
      <vu-picker
        show-toolbar
        :title="'标题'"
        :columns="column1"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </div>

    <div >
      <h2 class="vu-doc-demo-block-title ">多列联动</h2>
      <vu-picker :columns="columns" @change="onChange2" />
    </div>

    <div>
      <h2 class="vu-doc-demo-block-title ">加载状态
</h2>
      <vu-picker :columns="columns" loading />
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
        column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        column2: [
            { text: '杭州', disabled: true },
            { text: '宁波' },
            { text: '温州' }
        ],
        column3: {
            浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            福建: ['福州', '厦门', '莆田', '三明', '泉州']
        },
        toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`
    }
  },
  computed: {
    columns() {
      const column = this.column3;
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ];
    }
  },

  methods: {
    onChange1(picker, value, index) {
      Toast(this.toastContent(value, index));
    },
    onChange2(picker, values) {
      picker.setColumnValues(1, this.column3[values[0]]);
    },
    onConfirm(value, index) {
      Toast(this.toastContent(value, index));
    },
    onCancel() {
      Toast(this.cancel);
    }
  }
};
</script>

<style lang="scss">
.demo-field {
      padding: 0 0 30px 0;
      
    }
    .vu-doc-demo-block-title{
      margin: 0;
      font-weight: 400;
      font-size: 14px;
      color: rgba(69,90,100,.6);
      padding: 40px 15px 10px;
      text-align: left;
      
    }
    
    .demo-first-title{
      padding-top: 0px;
    }
    h1{
        margin: 0;
        padding: 15px;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;
        text-transform: capitalize;
        
    }
</style>

