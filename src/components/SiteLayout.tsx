import { useEffect, useState } from 'react';
import { navItems } from '../data/content';
import { Brand, Crest } from './Brand';

export function SiteHeader({ path }: { path: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [path]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <header className="site-header"><div className="wrap"><div className="header-bar"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <a key={item.path} href={`#${item.path}`} className={path === item.path ? 'active' : ''} aria-current={path === item.path ? 'page' : undefined}>{item.label}</a>)}<a className="button nav-apply" href="#/admissions">Apply for Admission</a></nav><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button></div></div><nav id="mobile-nav" className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">{navItems.map((item) => <a key={item.path} href={`#${item.path}`} className={path === item.path ? 'active' : ''} aria-current={path === item.path ? 'page' : undefined}>{item.label}</a>)}<a className="button" href="#/admissions">Apply for Admission</a></nav></header>;
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap"><div className="footer-grid"><div><div className="footer-brand"><Crest size={34}/><strong>Golden Crest Academy</strong></div><p>Inspiring Excellence. Building Tomorrow.</p><p>Social: <a href="#/contact">Facebook</a> · <a href="#/contact">Instagram</a> · <a href="#/contact">YouTube</a> <span className="muted">(placeholders)</span></p></div><div><h3>Quick links</h3><div className="footer-links">{navItems.map((item) => <a key={item.path} href={`#${item.path}`}>{item.label}</a>)}</div></div><div><h3>Contact (sample)</h3><p>12 Sample Avenue, Your City<br/>+234 800 000 0000<br/>info@example-school.test</p></div><div><h3>Opening hours</h3><p>Mon – Fri: 7:30am – 4:30pm<br/>Sat: 9:00am – 1:00pm (admissions desk)<br/>Sun: Closed</p></div></div><p className="footer-note">© 2026 Golden Crest Academy · Website demonstration — fictional school, sample content only.</p></div></footer>;
}
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const update = () => setVisible(window.scrollY > 500); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  return visible ? <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button> : null;
}
