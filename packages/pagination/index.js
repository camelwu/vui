import VuPagination from './src/pagination';

VuPagination.install = Vue => {
  Vue.component(VuPagination.name, VuPagination);
};

export default VuPagination;
