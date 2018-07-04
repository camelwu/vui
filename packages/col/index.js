/**
 * Created by yangjiali on 2018/1/26.
 */
import VuCol from './src/col';

VuCol.install = Vue => {
  Vue.component(VuCol.name, VuCol);
};

export default VuCol;
