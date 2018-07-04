import VuSearch from './src/search';

VuSearch.install = Vue => {
  Vue.component(VuSearch.name, VuSearch);
};

export default VuSearch;
