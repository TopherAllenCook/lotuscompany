export interface Editable {
  id: string;
  label: string;
}

// Slides self-register via EditableText — this file is no longer used.
export const SLIDE_EDITABLES: Record<string, Editable[]> = {};
