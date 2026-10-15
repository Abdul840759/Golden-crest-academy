# Golden Crest Academy

A demonstration website for a fictional school. It includes the main school pages, sample admission and contact forms, a student results portal, and a printable report card. All school details, people, messages and results on the site are examples; the forms do not contact a real school.

## Run it locally

You’ll need Node.js and npm installed. From the project folder, run:

```sh
npm install
npm run dev
```

Vite prints the local address in the terminal. Open that address in your browser. To make a production build, run:

```sh
npm run build
```

The built site is written to `dist/`. You can preview that build locally with `npm run preview`.

## Pages

- Home
- About Us
- Academics
- Admissions
- Student Results
- News & Events
- Contact

The admission and contact forms validate their fields and show a local demo confirmation. The results portal uses sample records stored in `src/data/students.ts`.

## Demo results

Use either of these accounts on the Student Results page:

| Student ID | PIN | Student |
| --- | --- | --- |
| `GCA2026001` | `1234` | Amara Okonkwo |
| `GCA2026002` | `5678` | Fatima Sani |

Both records have a result for 2025/2026, First Term. Subject totals, averages, grades and attendance percentages are calculated by the app. The report card can be printed from the results page.

## Project layout

```text
src/
  components/   Shared layout, forms, report card and article modal
  data/         Page content and fictional student records
  pages/        Page components
  types/        TypeScript data types
public/images/  Photos served with the site
```

## Deploy to Vercel

The repository includes `vercel.json`. Vercel should use the Vite framework preset, `npm run build` as the build command and `dist` as the output directory. The student data and forms are only for demonstration; this project has no server or real school database.
