<template>
  <v-textarea
    :label="field.title"
    :readonly="field.type.isOnlyRead"
    :placeholder="field.type.placeholder"
    :rules="field.type.isRequired ? [(v) => !!v || 'Este campo es requerido'] : []"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  field: any
}>()

defineEmits(['update:modelValue'])
</script>
