interface BrandProps { size?: number }
export function Crest({ size = 40 }: BrandProps) {
  return <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M24 3 42 9v14c0 11-8 18-18 22C14 41 6 34 6 23V9z" fill="#102544" stroke="#C7A34B" strokeWidth="2.5"/><path d="m14 27 4-9 6 6 6-6 4 9z" fill="#C7A34B"/><rect x="14" y="29" width="20" height="3" rx="1" fill="#C7A34B"/><path d="M24 11v5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>;
}
export function Brand({ size = 38 }: BrandProps) {
  return <a className="brand" href="#/" aria-label="Golden Crest Academy home"><Crest size={size}/><span><strong>Golden Crest Academy</strong><small>Inspiring Excellence</small></span></a>;
}
