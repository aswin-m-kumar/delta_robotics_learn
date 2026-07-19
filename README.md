# Delta Robotics Learn

Online robotics education platform — course enrollment, inventory tracking, workshop management, and student experiences.

## Architecture

- **Frontend:** Next.js 16 (App Router) — all client-side pages
- **Backend:** Django REST Framework at `/api/`
- **Auth:** JWT (access + refresh tokens) with auto-refresh

## Live Backend

API base URL: `https://delta-backend-ohze.onrender.com/api`

Set in `.env.local`:

```
NEXT_PUBLIC_API_URL=https://delta-backend-ohze.onrender.com/api
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Roles & Pages

| Role    | Pages |
|---------|-------|
| Student | Dashboard, Courses (catalog, detail, enrollment), Workshops, Experience, Profile |
| Intern  | Dashboard, Courses, Enrollments, Inventory, Workshops |
| Admin   | Dashboard, Students, Enrollments, Courses, Experiences, Inventory, Workshops, Gallery, Reports, Users, Settings |
| Public  | Landing page, Login, Signup |

## Tech Stack

Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Django REST Framework, Supabase (storage/auth)

## Project Structure

```
src/
├── app/           # Route pages (27 routes)
├── components/    # UI + layout components
├── lib/           # API client, types, auth context
└── hooks/         # (custom hooks — empty)
```
