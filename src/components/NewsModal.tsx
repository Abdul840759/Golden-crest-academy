import { useEffect, useRef } from 'react';
import type { NewsArticle } from '../types';

export function NewsModal({ article, onClose }: { article: NewsArticle; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { closeButton.current?.focus(); const close = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [onClose]);
  return <div className="modal" role="dialog" aria-modal="true" aria-labelledby="article-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="modal-box"><div className="photo-frame modal-photo"><img src="/images/classroom.jpg" alt="Students learning together in a classroom"/><span className="photo-icon" aria-hidden="true">{article.icon}</span></div><div className="news-meta"><span className="tag">{article.category}</span><time className="muted">{new Date(`${article.date}T00:00:00`).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</time></div><h2 id="article-title">{article.title}</h2><p>{article.body}</p><p className="muted">Demo material. Fictional content.</p><button ref={closeButton} className="button button-navy" onClick={onClose}>Close</button></div></div>;
}
