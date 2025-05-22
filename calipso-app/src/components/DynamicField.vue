<template>
  <div>
    <!-- Campo de texto -->
    <v-text-field
      v-if="field.type === 'text' || field.type === 'textarea'"
      :label="field.label"
      v-model="internalValue"
      :error="error"
      :error-messages="error ? 'Este campo es requerido' : ''"
      :rows="field.type === 'textarea' ? 3 : undefined"
      :auto-grow="field.type === 'textarea'"
      :outlined="true"
    />

    <!-- Campo de selección -->
    <v-select
      v-else-if="field.type === 'select'"
      :label="field.label"
      v-model="internalValue"
      :items="field.options?.map(String) || []"
      :error="error"
      :error-messages="error ? 'Este campo es requerido' : ''"
      outlined
    />

    <!-- Tipo no soportado -->
    <p v-else>
      <i>Tipo de campo no soportado: {{ field.type }}</i>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  field: {
    name: string
    label: string
    type: string
    options?: (string | number)[]
  }
  modelValue: string | null
  error: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

// Sincroniza modelValue con el campo interno
const internalValue = computed({
  get: () => props.modelValue,
  set: (val: string | null) => emit('update:modelValue', val),
})
</script>
