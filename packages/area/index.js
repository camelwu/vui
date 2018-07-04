import VuArea from './src/area';

/* istanbul ignore next */
VuArea.install = Vue => {
  Vue.component(VuArea.name, VuArea);
};

export default VuArea;
