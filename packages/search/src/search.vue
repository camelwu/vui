<template>
  <div
    class="vu-search"
    :class="{ 'vu-search--show-action': showAction }"
    :style="{ 'background-color': background }">
    <div class="vu-search__input-wrap" v-clickoutside="onClickoutside">
      <icon-button name="search" />
      <input
        v-bind="$attrs"
        v-on="listeners"
        v-refocus="focusStatus"
        type="search"
        class="vu-search__input"
        :value="value"
      >
      <icon-button name="clear" v-show="isFocus && value" @click="onClean" />
    </div>
    <div class="vu-search__action" v-if="showAction">
      <slot name="action">
        <div class="vu-search__action-text" @click="onBack">取消</div>
      </slot>
    </div>
  </div>
</template>

<script>
import Clickoutside from '../../utils/clickoutside';
import IconButton from 'vui/packages/icon-button';

export default {
  name: 'VuSearch',

  inheritAttrs: false,
  components: {
    IconButton
  },

  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
    }
  },

  data () {
    return {
      isFocus: false,
      focusStatus: false
    };
  },

  directives: {
    Clickoutside,
    refocus: {
      update: function (el, state) {
        if (state.value) {
          el.focus();
        }
      }
    }
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners,
        focus: this.onFocus,
        input: this.onInput,
        keypress: this.onKeypress
      };
    }
  },

  methods: {
    onFocus () {
      this.isFocus = true;
      this.$emit('focus');
    },

    onInput (event) {
      this.$emit('input', event.target.value);
    },

    onKeypress (event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },

    // refocus after click close icon
    onClean () {
      this.$emit('input', '');
      this.focusStatus = true;

      // ensure refocus can work after click clean icon
      this.$nextTick(() => {
        this.focusStatus = false;
      });
    },

    onBack () {
      this.$emit('input', '');
      this.$emit('cancel');
    },

    onClickoutside () {
      this.isFocus = false;
      this.focusStatus = false;
    }
  }
};
</script>
