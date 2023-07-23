<template>
  <input type="checkbox" :checked="isChecked" :indeterminate="isIndeterminate" @change="check" />
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