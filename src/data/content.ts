import type { LearningStage, NavItem, NewsArticle } from '../types';

export const navItems: NavItem[] = [
  { path: '/', label: 'Home' }, { path: '/about', label: 'About Us' }, { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' }, { path: '/results', label: 'Student Results' },
  { path: '/news', label: 'News & Events' }, { path: '/contact', label: 'Contact' },
];
export const learningStages: LearningStage[] = [
  { name: 'Early Years', icon: '🧸', description: 'Play-based learning that builds language, numeracy, curiosity and social confidence.', subjects: ['Phonics & early literacy', 'Number sense', 'Creative play', 'Social skills'] },
  { name: 'Primary Education', icon: '📚', description: 'A strong foundation in core subjects with reading, projects and values education.', subjects: ['English & Mathematics', 'Basic Science', 'Social Studies', 'ICT basics', 'Music & Art'] },
  { name: 'Junior Secondary', icon: '🔬', description: 'Broad subject exposure with growing independence and practical skills.', subjects: ['Mathematics & English', 'Basic Science & Technology', 'Civic Education', 'Computer Studies', 'French'] },
  { name: 'Senior Secondary', icon: '🎓', description: 'Focused pathways in Science, Arts and Commercial subjects with career guidance.', subjects: ['Sciences', 'Arts & Humanities', 'Commercial subjects', 'Exam preparation', 'Career guidance'] },
];
export const highlights = [
  ['🏆', 'Academic Excellence', 'Structured teaching, regular assessment and supportive feedback.'],
  ['🌱', 'Character Development', 'Integrity, respect and responsibility woven into daily school life.'],
  ['💻', 'Digital Learning', 'Technology used thoughtfully to enrich classroom learning.'],
  ['⚽', 'Sports and Creativity', 'Clubs, sports and the arts for well-rounded growth.'],
];
export const reasons = ['🎯 Student-focused learning', '👩🏽‍🏫 Qualified and supportive teachers', '🛡️ Safe learning environment', '🖥️ Technology-supported education', '🎨 Extracurricular development', '💬 Parent-school communication'];
export const articles: NewsArticle[] = [
  { id: 1, date: '2026-11-14', category: 'Event', icon: '🎭', title: 'Sample Cultural Day Celebration', summary: 'A demo announcement about a day of music, dance and food.', body: 'This is fictional demo content. A real school would describe the programme, time and venue here, plus any instructions for parents.' },
  { id: 2, date: '2026-10-28', category: 'Academics', icon: '🔬', title: 'Sample Science Fair Invitation', summary: "A fictional invitation to students' science projects.", body: 'Demo article. Students could present experiments and models to teachers and parents. Replace with real event details.' },
  { id: 3, date: '2026-09-21', category: 'Admissions', icon: '📝', title: 'Sample Admissions Open Notice', summary: 'A placeholder notice for the next academic session.', body: 'Demo notice. Use this space to announce admission windows, entrance assessment dates and required documents once confirmed with the school.' },
];
export const testimonials = [
  ['The sample teachers feel approachable and the portal makes checking results simple.', 'Sample Parent A'],
  ['My child enjoys the clubs and the classroom projects in this demo.', 'Sample Parent B'],
  ['Admissions steps looked clear and easy to follow.', 'Sample Guardian C'],
];
