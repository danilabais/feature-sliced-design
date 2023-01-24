<template>
  <div class="wrapper">
    <label v-if="label" :for="id" class="label">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      max="2030-12-31"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="input"
      :class="{ error: error }"
    />
    <div v-if="error" class="error-text">{{ error }}</div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
}
.input {
  max-width: 100%;
  width: 100%;
  border: 0;
  padding: 10px;
  background: var(--color-light-dark);
  border: 1px solid var(--color-border);
  border-radius: var(--fs-border-radius);
  color: var(--color-white);
  &.error {
    border: 1px solid var(--color-error);
  }
}
.label {
  color: var(--color-dark-white);
  margin-bottom: 10px;
  line-height: 150%;
}
.error-text {
  line-height: 150%;
  color: var(--color-error);
}
</style>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "Введите пароль",
  },
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  error: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>
