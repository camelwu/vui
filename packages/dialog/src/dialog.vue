<template>
  <transition name="vu-dialog-bounce">
    <div class="vu-dialog" v-show="value">
      <div class="vu-dialog__header" :class="{ 'vu-dialog__header--no-message': !message }" v-if="title" v-text="title" />
      <div class="vu-dialog__content vu-hairline" v-if="message" :class="{ 'vu-dialog__content--no-title': !title }">
        <slot>
          <div class="vu-dialog__message" v-if="message" :class="{ 'vu-dialog__message--withtitle': title }" v-html="message" />
        </slot>
      </div>
      <div class="vu-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
        <vu-button
          size="large"
          class="vu-dialog__cancel"
          v-show="showCancelButton"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText || '取消' }}
        </vu-button>
        <vu-button
          size="large"
          class="vu-dialog__confirm"
          :class="{ 'vu-hairline--left': showCancelButton && showConfirmButton }"
          :style="confirmButtonStyle"
          v-show="showConfirmButton"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText || '确认' }}
        </vu-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import VuButton from 'vui/packages/button';
  import Popup from 'vui/packages/popup';

  export default {
    name: 'VuDialog',

    components: {
      VuButton
    },

    mixins: [Popup],

    props: {
      title: String,
      message: String,
      callback: Function,
      confirmButtonText: String,
      confirmButtonStyle: Object,
      cancelButtonStyle: Object,
      cancelButtonText: String,
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: false
      },
      overlay: {
        type: Boolean,
        default: true
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: false
      },
      lockOnScroll: {
        type: Boolean,
        default: true
      }
    },

    methods: {
      handleAction (action) {
        this.$emit('input', false);
        this.$emit(action);
        this.callback && this.callback(action);
      }
    }
  };
</script>
