<template>
	<div class="vu-range">
		<slot name="start"></slot>
		<div class="vu-range__content" ref="content">
			<div class="vu-range__runway" :style="{'border-top-width':barHeight + 'px'}"></div>
			<div class="vu-range__progress" :style="{width: progress +'%',height: barHeight +'px'}"></div>
			<div class="vu-range__thumb" ref="thumb" :style="{left: progress + '%'}"></div>
		</div>
		<slot name="end"></slot>
	</div>
</template>
<script>
  import draggable from './draggable';
  export default {
    name: 'VuRange',
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Number
      },
      barHeight: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        rangeValue: this.value
      };
    },
    computed: {
      progress () {
        const value = this.rangeValue;
        if (typeof value === 'undefined' || value === null) return 0;
        return Math.floor((value - this.min) / (this.max - this.min) * 100);
      }
    },

    mounted () {
      const thumb = this.$refs.thumb;
      const content = this.$refs.content;

      const getThumbPosition = () => {
        const contentBox = content.getBoundingClientRect();
        const thumbBox = thumb.getBoundingClientRect();
        return {
          left: thumbBox.left - contentBox.left,
          top: thumbBox.top - contentBox.top,
          thumbBoxLeft: thumbBox.left
        };
      };

      let dragState = {};
      draggable(thumb, {
        start: (event) => {
          if (this.disabled) return;
          const position = getThumbPosition();
          const thumbClickDetalX = event.clientX - position.thumbBoxLeft;
          dragState = {
            thumbStartLeft: position.left,
            thumbStartTop: position.top,
            thumbClickDetalX: thumbClickDetalX
          };
        },
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect();
          const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft - dragState.thumbClickDetalX;
          const stepCount = Math.ceil((this.max - this.min) / this.step);
          const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);

          let newProgress = newPosition / contentBox.width;

          if (newProgress < 0) {
            newProgress = 0;
          } else if (newProgress > 1) {
            newProgress = 1;
          }
          this.rangeValue = Math.round(this.min + newProgress * (this.max - this.min));
          this.$emit('input', this.rangeValue);
        },
        end: () => {
          if (this.disabled) return;
          this.$emit('change', this.rangeValue);
          dragState = {};
        }
      });
    }
  };
</script>