<template>
  <v-text-field
    :label="field.title"
    :readonly="field.type.isOnlyRead"
    :required="field.type.isRequired"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
defineProps<{ field: any; modelValue: string }>()
const emit = defineEmits(['update:modelValue'])
</script>
