import { Crest } from './Brand';
import { getGrade } from '../data/students';
import type { Student, TermRecord } from '../types';

export function ReportCard({ id, student, record, session, term }: { id: string; student: Student; record: TermRecord; session: string; term: string }) {
  const total = record.subjects.reduce((sum, subject) => sum + subject.score, 0);
  const average = total / record.subjects.length;
  const overall = getGrade(average);
  const attendancePercent = (record.attendance[0] / record.attendance[1]) * 100;
  return <div className="report-card" id="report-card"><div className="report-heading"><Crest size={60}/><div><h2>Golden Crest Academy</h2><div className="muted">Inspiring Excellence. Building Tomorrow.</div><strong>Terminal Report Card</strong></div></div><div className="student-meta"><div><b>Name:</b> {student.name}</div><div><b>Student ID:</b> {id}</div><div><b>Class:</b> {student.className}</div><div><b>Session:</b> {session}</div><div><b>Term:</b> {term}</div></div><div className="table-wrap"><table><thead><tr><th>Subject</th><th>Score /100</th><th>Grade</th><th>Remark</th></tr></thead><tbody>{record.subjects.map((item) => { const grade = getGrade(item.score); return <tr key={item.subject}><td>{item.subject}</td><td>{item.score}</td><td><b>{grade.grade}</b></td><td>{grade.remark}</td></tr>; })}</tbody><tfoot><tr><th>Total ({record.subjects.length * 100})</th><th>{total}</th><th>{overall.grade}</th><th>Average: {average.toFixed(1)}%</th></tr></tfoot></table></div><p className="sans"><b>Attendance:</b> {record.attendance[0]} of {record.attendance[1]} days ({attendancePercent.toFixed(1)}%)</p><p><b>Teacher's comment:</b> {record.teacherComment}</p><p><b>Principal's comment:</b> {record.principalComment}</p><div className="signatures"><div>Class Teacher's signature</div><div>Principal's signature &amp; school stamp (placeholder)</div></div><p className="report-disclaimer"><b>DEMONSTRATION ONLY</b> — fictional student and sample results. Grading: A 70+, B 60–69, C 50–59, D 45–49, E 40–44, F below 40.</p></div>;
}
