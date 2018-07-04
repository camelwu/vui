import VuPicker from './src/picker';

/* istanbul ignore next */
VuPicker.install = Vue => {
  Vue.component(VuPicker.name, VuPicker);
};

export default VuPicker;
