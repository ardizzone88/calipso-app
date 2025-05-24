<template>
  <!-- Renderiza un campo de texto -->
  <v-text-field
    v-if="field.type === 'text'"
    :label="field.label"
    v-model="modelValue"
    :error="error"
    :error-messages="error ? 'Este campo es obligatorio' : ''"
    class="mb-4"
  />

  <!-- Renderiza un campo tipo textarea -->
  <v-textarea
    v-else-if="field.type === 'textarea'"
    :label="field.label"
    v-model="modelValue"
    :error="error"
    :error-messages="error ? 'Este campo es obligatorio' : ''"
    class="mb-4"
  />

  <!-- Renderiza un campo select con opciones -->
  <v-select
    v-else-if="field.type === 'select'"
    :label="field.label"
    :items="field.options || []"
    v-model="modelValue"
    :error="error"
    :error-messages="error ? 'Este campo es obligatorio' : ''"
    class="mb-4"
  />
</template>

<script lang="ts" setup>
/**
 * Este componente renderiza dinámicamente un campo de formulario según el tipo especificado en la prop `field`.
 * Admite campos de tipo: "text", "textarea" y "select".
 * La validación se indica mediante la prop `error`, mostrando un mensaje si es true.
 */

import { defineProps, defineModel } from 'vue'

// Definición de la estructura que debe tener cada campo
type Field = {
  name: string
  label: string
  type: string
  options?: (string | number)[]
}

// Props que recibe el componente desde el padre
defineProps<{
  field: Field          // Campo individual con configuración (nombre, tipo, etc.)
  error: boolean        // Indica si hay un error de validación para este campo
}>()

// Vincula el valor del campo (v-model) con el estado del formulario
const modelValue = defineModel<string | null>()
</script>
