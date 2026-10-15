import { useEffect, useState } from 'react';
import { SiteFooter, SiteHeader, BackToTop } from './components/SiteLayout';
import { NewsModal } from './components/NewsModal';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { AcademicsPage } from './pages/Academics';
import { AdmissionsPage } from './pages/Admissions';
import { ResultsPage } from './pages/Results';
import { NewsPage } from './pages/News';
import { ContactPage } from './pages/Contact';
import type { NewsArticle } from './types';

const pages: Record<string, string> = { '/':'Home', '/about':'About Us', '/academics':'Academics', '/admissions':'Admissions', '/results':'Student Results', '/news':'News & Events', '/contact':'Contact' };
export default function App() {
  const [path,setPath]=useState(window.location.hash.slice(1)||'/');
  const [article,setArticle]=useState<NewsArticle|null>(null);
  useEffect(()=>{const update=()=>setPath(window.location.hash.slice(1)||'/');window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update);},[]);
  useEffect(()=>{document.title=`${pages[path]&&path!=='/'?`${pages[path]} · `:''}Golden Crest Academy`;window.scrollTo(0,0);document.getElementById('app')?.focus({preventScroll:true});},[path]);
  const onRead=(next:NewsArticle)=>setArticle(next);
  const page = path==='/'?<HomePage onRead={onRead}/>:path==='/about'?<AboutPage/>:path==='/academics'?<AcademicsPage/>:path==='/admissions'?<AdmissionsPage/>:path==='/results'?<ResultsPage/>:path==='/news'?<NewsPage onRead={onRead}/>:path==='/contact'?<ContactPage/>:<HomePage onRead={onRead}/>;
  return <><a className="skip-link" href="#app">Skip to content</a><SiteHeader path={path}/><main id="app" tabIndex={-1} key={path}>{page}</main><SiteFooter/><BackToTop/>{article&&<NewsModal article={article} onClose={()=>setArticle(null)}/>}</>;
}
