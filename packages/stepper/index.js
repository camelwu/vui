import VuStepper from './src/stepper';

/* istanbul ignore next */
VuStepper.install = Vue => {
  Vue.component(VuStepper.name, VuStepper);
};

export default VuStepper;
