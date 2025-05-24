<template>
  <v-container>
    <v-row>
      <!-- Formulario dinámico -->
      <v-col cols="12" md="6">
        <v-card class="h-100 d-flex flex-column">
          <v-card-title>Formulario dinámico</v-card-title>
          <v-card-text class="flex-grow-1">
            <DynamicField
              v-for="field in fields"
              :key="field.name"
              :field="field"
              v-model="formData[field.name]"
              :error="errors[field.name]"
            />
          </v-card-text>
        </v-card>
        <v-card-actions>
          <v-btn color="primary" variant="elevated" @click="handleSubmit">ENVIAR</v-btn>
          <v-btn color="info" @click="showDialog = true">VER REGISTROS ENVIADOS</v-btn>
        </v-card-actions>
      </v-col>

      <!-- Vista en tiempo real -->
      <v-col cols="12" md="6">
        <v-card class="h-100 d-flex flex-column">
          <v-card-title>Datos en tiempo real</v-card-title>
          <v-card-text class="flex-grow-1">
            <v-text-field label="Nombre" :model-value="formData.nombre" class="mb-4" readonly />
            <v-text-field label="Apellido" :model-value="formData.lastname" class="mb-4" readonly />
            <v-textarea label="Comentario" :model-value="formData.coment" class="mb-4" readonly />
            <v-text-field
              label="¿Primera vez en completar el formulario?"
              :model-value="formData.opcion"
              readonly
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Diálogo para registros enviados -->
    <SubmittedRecordsDialog
      :text="`X`"
      :show="showDialog"
      @update:show="showDialog = $event"
      :records="submittedRecords"
      :fields="fields"
      @delete-record="deleteRecord"
    />
  </v-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import DynamicField from '../components/DynamicField.vue'
import SubmittedRecordsDialog from '../components/SubmittedRecordsDialog.vue'

type Field = {
  name: string
  label: string
  type: string
  options?: (string | number)[]
}

const fields: Field[] = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'lastname', label: 'Apellido', type: 'text' },
  { name: 'coment', label: 'Comentario', type: 'textarea' },
  {
    name: 'opcion',
    label: '¿Primera vez en completar el formulario?',
    type: 'select',
    options: ['Sí', 'No'],
  },
]

// Estado del formulario
const formData = reactive<Record<string, string | null>>({
  nombre: null,
  lastname: null,
  coment: null,
  opcion: null,
})

// Errores de validación
const errors = reactive<Record<string, boolean>>({
  nombre: false,
  lastname: false,
  coment: false,
  opcion: false,
})

// Estado del diálogo
const showDialog = ref(false)
const submittedRecords = ref<Record<string, string | null>[]>([])

// Validación y envío del formulario
function handleSubmit() {
  let valid = true
  for (const field of fields) {
    const value = formData[field.name]
    errors[field.name] = !value
    if (!value) valid = false
  }

  if (valid) {
    submittedRecords.value.push({ ...formData })
    // Limpiar campos
    for (const field of fields) {
      formData[field.name] = null
    }
  }
}

// Eliminar un registro por índice
function deleteRecord(index: number) {
  submittedRecords.value.splice(index, 1)
}
</script>

<style scoped>
.v-card {
  min-height: 100%;
}
</style>
