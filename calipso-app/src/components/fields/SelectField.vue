<template>
  <v-select
    :label="field.title"
    :items="field.options"
    item-title="name"
    item-value="id"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    :readonly="field.type.isOnlyRead"
    :required="field.type.isRequired"
  />
</template>

<script setup lang="ts">
defineProps<{ field: any; modelValue: string | number }>()
const emit = defineEmits(['update:modelValue'])
</script>
