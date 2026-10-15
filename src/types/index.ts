export interface NavItem { path: string; label: string }
export interface LearningStage { name: string; icon: string; description: string; subjects: string[] }
export interface NewsArticle { id: number; date: string; category: string; icon: string; title: string; summary: string; body: string }
export interface SubjectScore { subject: string; score: number }
export interface TermRecord { subjects: SubjectScore[]; teacherComment: string; principalComment: string; attendance: [number, number] }
export interface Student { pin: string; name: string; className: string; records: Record<string, TermRecord> }
