import VuNoticeBar from './src/notice-bar';

VuNoticeBar.install = Vue => {
  Vue.component(VuNoticeBar.name, VuNoticeBar);
};

export default VuNoticeBar;
