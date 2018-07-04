import VuBadge from './src/badge';

/* istanbul ignore next */
VuBadge.install = Vue => {
  Vue.component(VuBadge.name, VuBadge);
};

export default VuBadge;
