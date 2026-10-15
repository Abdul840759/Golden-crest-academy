import { useState, type FormEvent, type ReactNode } from 'react';

export type Values = Record<string, string>;
interface FieldProps { name: string; label: string; type?: 'text' | 'email' | 'tel' | 'password' | 'select' | 'textarea'; options?: string[]; attributes?: Record<string, string>; value: string; error?: string; onChange: (name: string, value: string) => void }
export function Field({ name, label, type = 'text', options = [], attributes = {}, value, error, onChange }: FieldProps) {
  const id = `field-${name}`;
  const common = { id, name, value, onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => onChange(name, event.target.value), 'aria-invalid': Boolean(error), 'aria-describedby': error ? `${id}-error` : undefined };
  return <div className="field"><label htmlFor={id}>{label}</label>{type === 'select' ? <select {...common}><option value="">Select…</option>{options.map((option) => <option key={option}>{option}</option>)}</select> : type === 'textarea' ? <textarea {...common} rows={4}/> : <input {...common} type={type} {...attributes}/ >}{error && <span className="field-error" id={`${id}-error`} role="alert">{error}</span>}</div>;
}
export function FormCard({ title, children }: { title: string; children: ReactNode }) { return <div className="card form-card"><h2>{title}</h2>{children}</div>; }
export function useDemoForm() {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Values>({});
  const [submitted, setSubmitted] = useState(false);
  const update = (name: string, value: string) => { setValues((old) => ({ ...old, [name]: value })); setErrors((old) => ({ ...old, [name]: '' })); };
  const validate = (rules: Record<string, (value: string) => string>) => {
    const next: Values = {};
    Object.entries(rules).forEach(([name, rule]) => { const error = rule(values[name] ?? ''); if (error) next[name] = error; });
    setErrors(next);
    if (Object.keys(next).length) { document.getElementById(`field-${Object.keys(next)[0]}`)?.focus(); return false; }
    return true;
  };
  const submit = (event: FormEvent, rules: Record<string, (value: string) => string>, action?: (values: Values) => void) => { event.preventDefault(); if (!validate(rules)) return; action?.(values); setSubmitted(true); };
  return { values, errors, update, validate, submit, submitted };
}
export const rules = {
  required: (label: string, min = 1) => (value: string) => value.trim().length < min ? `Enter ${label}${min > 1 ? ` (at least ${min} characters)` : ''}.` : '',
  email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? '' : 'Enter a valid email address.',
  phone: (value: string) => /^\+?[0-9\s-]{10,15}$/.test(value.trim()) ? '' : 'Enter a valid phone number (10–15 digits).',
  choice: (label: string) => (value: string) => value ? '' : `Please choose ${label}.`,
};
export function DemoSuccess({ title, children }: { title: string; children: ReactNode }) { return <div className="success-box" role="status"><h3>{title}</h3><p>{children}</p><p className="muted">Demonstration only. Nothing was delivered to any school or inbox.</p></div>; }
