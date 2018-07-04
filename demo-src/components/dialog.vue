<template>
  <div>
    <h1 class="demo-section__title">dialog弹出框</h1>

    <div>
      <h2 class="demo-block__title">{{title1}}</h2>

      <vu-button @click="onClickAlert">有标题Alert</vu-button>
      <vu-button @click="onClickAlert2">{{ alert2 }}</vu-button>
      <vu-button @click="onClickAlert3">{{ alert3 }}</vu-button>
    </div>

    <div>
      <h2 class="demo-block__title">{{title2}}</h2>

      <vu-button @click="onClickConfirm">Confirm</vu-button>
    </div>

    <div>
      <h2 class="demo-block__title">message为html</h2>

      <vu-button @click="onClickHtml">复制/取消</vu-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
  	return {
      title1: '消息提示',
      title2: '消息确认',
      alert2: '无标题 Alert',
      alert3: '无内容 Alert',
      title: '标题',
      content: '内容',
      htmlContent: `<span style="display: block; text-align: center">复制链接在客户端打开</span>
                   <a style="display: block;  text-align: center; color: #39a9ed;">https://baidu.com</a>`
    }
  },
  methods: {
    onClickAlert() {
      Dialog.alert({
        title: this.title,
        message: this.content
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message: this.content
      });
    },

    onClickAlert3() {
      Dialog.alert({
        title: this.title
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: this.title,
        message: this.content
      });
    },

    onClickHtml () {
      Dialog.confirm({
        title: '如何体现',
        message: this.htmlContent,
        confirmButtonText: '知道了',
        cancelButtonText: '复制',
        confirmButtonStyle: {
        	color: '#39a9ed'
        }
      }).then ( () => {
      	alert('点击了知道了')
      })
        .catch (() => {
        alert('点击了取消了')
    });
    }
  }
};
</script>

<style lang="postcss">
  /*.vu-button {*/
    /*margin: 15px;*/
  /*}*/
</style>
