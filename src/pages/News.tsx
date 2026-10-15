import { DemoBanner, NewsCard, PageHeading, Section } from '../components/Shared';
import { articles } from '../data/content';
import type { NewsArticle } from '../types';

export function NewsPage({ onRead }: { onRead: (article: NewsArticle) => void }) { return <><PageHeading title="News & Events" subtitle="Sample announcements for demonstration."/><Section><DemoBanner>All articles are fictional demo material.</DemoBanner><div className="card-grid">{articles.map((article)=><NewsCard key={article.id} article={article} onRead={onRead}/>)}</div></Section></>; }
