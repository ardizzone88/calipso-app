// src/stores/formStore.ts
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    fields: [
      {
        id: 1,
        name: 'nombre',
        title: 'Nombre',
        order: 1,
        type: {
          name: 'text',
          isVisible: true,
          isRequired: true,
          isOnlyRead: false,
        },
      },
      {
        id: 2,
        name: 'lastname',
        title: 'Apellido',
        order: 2,
        type: {
          name: 'text',
          isVisible: true,
          isRequired: false,
          isOnlyRead: false,
        },
      },
      {
        id: 3,
        name: 'opcion',
        title: '¿Primera vez en completar el formulario?',
        order: 3,
        type: {
          name: 'select',
          isVisible: true,
          isRequired: true,
          isOnlyRead: false,
        },
        options: [
          { label: 'Sí', value: 1 },
          { label: 'No', value: 0 },
        ],
      },
         {
        id: 4,
        name: 'coment',
        title: 'Comentarios',
        order: 4,
        type: {
          name: 'textarea',
          isVisible: true,
          isRequired: true,
          isOnlyRead: false,
        },
      },

    ],
    submittedRecords: [] as Record<string, string | number | null>[],
  }),

  actions: {
    addRecord(record: Record<string, string | number | null>) {
      this.submittedRecords.push({ ...record });
    },
    deleteRecord(index: number) {
      this.submittedRecords.splice(index, 1);
    },
  },
});
