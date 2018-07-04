import VuBadgeGroup from './src/badge-group';

/* istanbul ignore next */
VuBadgeGroup.install = Vue => {
  Vue.component(VuBadgeGroup.name, VuBadgeGroup);
};

export default VuBadgeGroup;
