<template>
  <div class="vu-stepper" :class="{ 'vu-stepper--disabled': disabled }">
    <button
      class="vu-stepper__stepper vu-stepper__minus"
      :class="{ 'vu-stepper__minus--disabled': isMinusDisabled }"
      @click="onChange('minus')"
    />
    <input
      type="number"
      class="vu-stepper__input"
      :value="currentValue"
      :disabled="disabled || disableInput"
      @input="onInput"
    >
    <button
      class="vu-stepper__stepper vu-stepper__plus"
      :class="{ 'vu-stepper__plus--disabled': isPlusDisabled }"
      @click="onChange('plus')"
    />
  </div>
</template>

<script>
export default {
  name: 'VuStepper',

  props: {
    value: {},
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data () {
    let value = this.value ? +this.value : +this.defaultValue;
    const correctedValue = this.correctValue(value);
    if (value !== correctedValue) {
      value = correctedValue;
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },

  computed: {
    isMinusDisabled () {
      const min = +this.min;
      const step = +this.step;
      const currentValue = +this.currentValue;
      return min === currentValue || (currentValue - step) < min || this.disabled;
    },
    isPlusDisabled () {
      const max = +this.max;
      const step = +this.step;
      const currentValue = +this.currentValue;
      return max === currentValue || (currentValue + step) > max || this.disabled;
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },

    value (val) {
      val = this.correctValue(+val);
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    }
  },

  methods: {
    correctValue (value) {
      if (Number.isNaN(value)) {
        value = this.min;
      } else {
        value = Math.max(this.min, value);
        value = Math.min(this.max, value);
      }

      return value;
    },

    onInput (event) {
      const val = +event.target.value;
      this.currentValue = this.correctValue(val);
    },

    onChange (type) {
      if ((this.isMinusDisabled && type === 'minus') || (this.isPlusDisabled && type === 'plus')) {
        this.$emit('overlimit', type);
        return;
      }

      const step = +this.step;
      const currentValue = +this.currentValue;
      this.currentValue = type === 'minus' ? (currentValue - step) : (currentValue + step);
      this.$emit(type);
    }
  }
};
</script>
