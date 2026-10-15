import type { Student, TermRecord } from '../types';

export const gradeBands = [
  { minimum: 70, grade: 'A', remark: 'Excellent' },
  { minimum: 60, grade: 'B', remark: 'Very Good' },
  { minimum: 50, grade: 'C', remark: 'Good' },
  { minimum: 45, grade: 'D', remark: 'Fair' },
  { minimum: 40, grade: 'E', remark: 'Pass' },
  { minimum: 0, grade: 'F', remark: 'Fail' },
] as const;

export const getGrade = (score: number) => gradeBands.find((band) => score >= band.minimum) ?? gradeBands.at(-1)!;
export const recordKey = (session: string, term: string) => `${session}|${term}`;

const firstAmara: TermRecord = {
  subjects: [
    { subject: 'Mathematics', score: 78 }, { subject: 'English Language', score: 72 },
    { subject: 'Basic Science', score: 81 }, { subject: 'Basic Technology', score: 68 },
    { subject: 'Civic Education', score: 74 }, { subject: 'Social Studies', score: 70 },
    { subject: 'Computer Studies', score: 88 }, { subject: 'Agricultural Science', score: 65 },
    { subject: 'French', score: 61 }, { subject: 'Christian Religious Studies', score: 79 },
  ],
  teacherComment: 'Amara is diligent and curious. Her strength in ICT and science is clear; more practice in French will help.',
  principalComment: 'A commendable performance. Keep up the good work.', attendance: [58, 62],
};
const firstFatima: TermRecord = {
  subjects: [
    { subject: 'Mathematics', score: 55 }, { subject: 'English Language', score: 63 },
    { subject: 'Physics', score: 48 }, { subject: 'Chemistry', score: 52 }, { subject: 'Biology', score: 67 },
    { subject: 'Economics', score: 71 }, { subject: 'Government', score: 58 },
    { subject: 'Civic Education', score: 60 }, { subject: 'Computer Studies', score: 74 },
  ],
  teacherComment: 'Fatima participates well and excels in Economics. She should give extra time to Physics practice.',
  principalComment: 'A steady term. We encourage consistent revision.', attendance: [55, 62],
};

export const students: Record<string, Student> = {
  GCA2026001: { pin: '1234', name: 'Amara Okonkwo', className: 'JSS 2', records: { [recordKey('2025/2026', 'First Term')]: firstAmara } },
  GCA2026002: { pin: '5678', name: 'Fatima Sani', className: 'SS 1', records: { [recordKey('2025/2026', 'First Term')]: firstFatima } },
};
