<template>
  <div
    class="checkbox"
    :class="{'checkbox_checked': isChecked, 'checkbox_indeterminate': isIndeterminate}"
  >
    <input 
      type="checkbox" 
      :checked="isChecked" 
      :indeterminate="isIndeterminate" 
      @change="check"
      @change.stop.prevent="check"
      @click.stop
      class="checkbox__input" 
    />
  </div>
</template>

<script>
export default {
  props: ['isChecked', 'isIndeterminate'],
  emits: ['check'],
  methods: {
    check(event) {
      this.$emit('check', event.target.checked);
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  width: 1em;
  height: 1em;

  &__input{
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid black;
    border-radius: 0.3em;
  }
  &_checked:after {
    content: '';
    position: absolute;
    top: 0.1em;
    left: 0.1em;
    right: 0.1em;
    bottom: 0.1em;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' viewBox='0 0 17.837 17.837' xml:space='preserve'%3E%3Cg%3E%3Cpath style='fill:%23030104;' d='M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z'/%3E%3C/g%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &_indeterminate:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 20 20'%3E%3Cpath d='M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
