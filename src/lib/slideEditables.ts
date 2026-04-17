export interface Editable {
  id: string;
  label: string;
}

export const SLIDE_EDITABLES: Record<string, Editable[]> = {
  "exec-summary": [
    { id: "exec-summary:title",        label: "title heading" },
    { id: "exec-summary:subtitle",     label: "subtitle" },
    { id: "exec-summary:stat-num-0",   label: "stat — 800 units" },
    { id: "exec-summary:stat-num-1",   label: "stat — 2,000 residents" },
    { id: "exec-summary:stat-num-2",   label: "stat — target irr" },
    { id: "exec-summary:stat-num-3",   label: "stat — $300m return" },
    { id: "exec-summary:stat-label-0", label: "stat label — units" },
    { id: "exec-summary:stat-label-1", label: "stat label — residents" },
    { id: "exec-summary:stat-label-2", label: "stat label — irr" },
    { id: "exec-summary:stat-label-3", label: "stat label — return" },
    { id: "exec-summary:kicker",       label: "kicker" },
  ],
};
