// src/types/FormTypes.ts

export interface FieldType {
  id: string;
  name: 'text' | 'textarea' | 'combo'; // Puedes ampliar aquí si agregas más tipos
  isVisible: boolean;
  isRequired: boolean;
  isOnlyRead: boolean;
}

export interface Option {
  id: string;
  name: string;
}

export interface FormField {
  id: string;
  name: string;
  title: string;
  order: string; // Podríamos convertirlo a number si se desea ordenar
  type: FieldType;
  options?: Option[]; // Solo para combos
}

export interface FieldConfig {
  id: string
  name: string
  title: string
  order: string
  type: {
    id: string
    name: 'text' | 'textarea' | 'combo'
    isVisible: boolean
    isRequired: boolean
    isOnlyRead: boolean
  }
  options?: {
    id: string
    name: string
  }[]
}

export type FormRecord = {
  [key: string]: any
}
