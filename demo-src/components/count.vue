<template>
  <div class="md-profit-details">
    <vu-tabs :active="active" @click="handleTabClick" type="card">

      <vu-tab  :title="getHtmlTitle(tab.title, tab.money)" v-for="(tab, index) in tabs" :key="index">

        <ul v-if="container.length">
          <li v-for="item in container">
            <VuCell :title="'2018-1-18'" :label="'订单号：34539'">
              <template slot="content">
                <span class="van-cell-text">{{ '返现' }}</span><span class="van-cell-text" style="color: #FA1E8C;">{{ '+20.28国美币' }}</span>
              </template>
            </VuCell>

          </li>
        </ul>

        <div v-else>
          <p>尚未赚到钱
            赚到的佣金会展示在这里，去分销商品赚取佣金吧！
          </p>

          <vu-button type="default" size="normal">去分销赚钱</vu-button>

        </div>
      </vu-tab>
    </vu-tabs>

    <div class="footer-tip">
      <span>已经是全部了</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      tabs: [
        {title: '待入账', money: 12},
        {title: '已入账', money: 1245}
      ],
      tabNow: 0,
      container: null,
      items1: [
        {id: 1, content: 'qqqqqqq'},
        {id: 2, content: 'bbbbbbbbbbbb'},
        {id: 3, content: 'ggggggg'},
        {id: 4, content: 'qqqqqqq'},
        {id: 5, content: 'fffffffff'},
        {id: 1, content: 'qqqqqqq'},
        {id: 2, content: 'bbbbbbbbbbbb'},
        {id: 3, content: 'ggggggg'},
        {id: 4, content: 'qqqqqqq'},
        {id: 5, content: 'fffffffff'},
        {id: 1, content: 'qqqqqqq'},
        {id: 2, content: 'bbbbbbbbbbbb'},
        {id: 3, content: 'ggggggg'},
        {id: 4, content: 'qqqqqqq'},
        {id: 5, content: 'fffffffff'}
        ],
      items2: [
        {id: 1, content: '222222'},
        {id: 2, content: '333333333'},
        {id: 3, content: '44444444444'},
        {id: 4, content: '5555555555'},
        {id: 5, content: '66666666666'}
      ]
    };
  },

  created () {

  	this.container = this.items1;
  },

  mounted() {
    setTimeout(() => {
      this.active = 3;
    }, 1000);
  },
  watch: {
    tabNow (newVal, oldVal) {
      console.log(newVal, '对比', oldVal)

      this.getListData(newVal);
    }
  },

  methods: {
  	getHtmlTitle (title, money) {
  		return `<span class="vu-tab--title">${title}</span>
          <span class="vu-tab--money">(${money})</span>`;
    },
    onClickDisabled() {
      this.$toast('Disabled!');
    },

    getListData (index) { // 快速切换tab时请求数据返回渲染顺序问题
    	index === 0 ? this.container = this.items1 : this.container = this.items2;
    },

    handleTabClick(index) {
    	console.log('index:', index);

    	this.tabNow = index;
    }
  }
};
</script>

<style lang="scss">

  .vu-tabs--card .vu-tabs__wrap {
    height: 64px;
    width: 214px;
    margin: 15px auto;
  }

  .md-profit-details {
    width: 100%;
    background-color: #F3F5F7;
  }
  .vu-tabs__nav--card .vu-tab.vu-tab--active {
    color: #fff;
    background-image: linear-gradient(-90deg, #FA1E8C 0%, #FC1E56 100%);

  }
  .vu-tabs__nav--card .vu-tab {
    border-right: none;
    font-size: 14px;
    line-height: 16px;
    color: #919599;
    padding: 5px 0;
  }


  .vu-tabs__nav--card,
  .vu-tabs__nav {
    background: #FFFFFF;
    border-radius: 21px;
    height: 100%;
    border: none;
    margin: 0;
    overflow: hidden;
  }

  .vu-tabs--card .vu-tabs__wrap {
    height: 42px;
  }

  .vu-tabs--card {
    padding-top: 72px;
  }

  .vu-tabs--card .vu-tab__pane {
    padding: 0;
  }

  .vu-cell {
    height: 48px;
    margin-bottom: 5px;
    padding: 0;
    font-size: 11px;
    color: #5A6066;
  }

  .vu-cell__title {
    display: table-cell;
    text-align: left;
  }

  .vu-cell__value {
    display: table-cell;
    vertical-align: top;
  }

  .footer-tip {
    height: 112px;
    width: 100%;

    span {
      text-align: center;
      font-size: 12px;
      color: #CACCCF;
      display: inline-block;
      margin-top: 27px;
    }
  }
</style>
