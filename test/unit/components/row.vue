<template>
  <vu-row gutter="5px">
    <vu-col span="8">
      <div class="gray">span: 8</div>
    </vu-col>
    <vu-col span="8">
      <div class="gray">span: 8</div>
    </vu-col>
    <vu-col span="8">
      <div class="gray">span: 8</div>
    </vu-col>
  </vu-row>
</template>

<script>
import Row from 'packages/row';
import Col from 'packages/col';

export default {
  components: {
    'vu-row': Row,
    'vu-col': Col
  }
};
</script>
