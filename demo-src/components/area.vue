<template>
  <div class="demo-field">
    <h1>Area 省市县选择组件</h1>
    <div >
      <h2 class="vu-doc-demo-block-title demo-first-title">基础用法</h2>
      <vu-area :area-list="areaList" />
    </div>

    <div >
      <h2 class="vu-doc-demo-block-title ">选中省市县</h2>
      <vu-area :area-list="areaList" :value="value" />
    </div>

    <div >
      <h2 class="vu-doc-demo-block-title ">配置显示列
</h2>
      <vu-area :area-list="areaList" :columns-num="2" :title="'标题'" />
    </div>
  </div>
</template>

<script>
import AreaList from '../mock/area.json';
import AreaListEn from '../mock/areaEn.json';

export default {
  

  data() {
    return {
      value: '330302',
      areaList: AreaList,
      title: ''
    };
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
    .vu-ellipsis{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
