<template>
  <v-dialog v-model="internalShow" max-width="800">
    <v-card>
      <v-card-title class="text-h6">Registros Enviados</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          label="Buscar..."
          append-inner-icon="mdi-magnify"
          clearable
        />

        <v-table>
          <thead>
            <tr>
              <th v-for="field in fields" :key="field.name">{{ field.label }}</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in filteredRecords" :key="index">
              <td v-for="field in fields" :key="field.name">
                <!-- Mostrar "Sí/No" si es un select de opciones -->
                {{
                  field.type === 'select'
                    ? getOptionLabel(field, record[field.name])
                    : record[field.name]
                }}
              </td>
              <td>
                <v-btn
                  icon="mdi-delete"
                  color="error"
                  class="cursor-pointer"
                  @click="$emit('delete-record', index)"
                >
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="internalShow = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

type Field = {
  name: string
  label: string
  type: string
  options?: (string | number)[]
}

const props = defineProps<{
  show: boolean
  records: Record<string, string | null>[]
  fields: Field[]
}>()

const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
  (e: 'delete-record', index: number): void
}>()

const internalShow = ref(props.show)
watch(
  () => props.show,
  (val) => (internalShow.value = val),
)
watch(internalShow, (val) => emit('update:show', val))

const search = ref('')

const filteredRecords = computed(() => {
  if (!search.value) return props.records

  return props.records.filter((record) =>
    Object.values(record).some((value) =>
      (value ?? '').toString().toLowerCase().includes(search.value.toLowerCase()),
    ),
  )
})

function getOptionLabel(field: Field, value: string | null): string {
  if (!value) return ''
  // Muestra la etiqueta correspondiente si existe en el array de opciones
  const found = field.options?.find((opt) => String(opt) === value)
  return found !== undefined ? String(found) : value
}
</script>
