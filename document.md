# UgSL Platform — Improvements & TODOs

A running list of things we've deliberately deferred or simplified while
building the frontend, so nothing gets forgotten once the backend and
real content pipeline exist. Add to this as we go.

---

## Backend / Data

- [ ] **Replace `src/data/lessons.js` with a real API call.**
  Currently a hardcoded array of 3 lessons for frontend development only.
  Once Django backend exists, `Lesson.jsx` should fetch from
  `GET /api/lessons/{id}` instead of searching the local array. See the
  `useEffect` + `fetch` pattern discussed for this swap.

- [ ] **Wire up `CreateLesson.jsx` (Teacher form) to the real API.**
  Currently just `console.log`s the submitted lesson. Needs:
  `POST /api/lessons` (create draft) → `POST /api/lessons/{id}/submit`
  (send for review), matching the Teacher → Admin approval workflow.

- [ ] **Video upload → cloud storage.**
  `CreateLesson.jsx` currently captures the raw file object only. Needs
  to actually upload to S3/Cloudflare R2 and store the resulting URL on
  the Lesson record (`video_id` → `Video.storage_url`).

- [ ] **Auth forms (`Auth.jsx` / login, signup) → real API.**
  Currently placeholder `console.log` + fake delay. Needs
  `POST /api/auth/login` and `POST /api/auth/register`.

- [ ] **Onboarding preferences (`About.jsx`) aren't persisted anywhere yet.**
  Level/language/location are captured but not stored. Decide: save to
  localStorage until account creation, or pass via React context, so
  they carry over into the eventual signup step.

- [ ] **Admin approval queue UI doesn't exist yet.**
  Need a page for Admins to view `pending_approval` lessons and
  approve/reject with a reason (matches `GET /api/admin/lessons/pending`,
  `POST /api/admin/lessons/{id}/approve`, `.../reject`).

---

## Schema

- [ ] `Lesson` entity was extended with `overview` (text), `signs`
  (array), `phrases` (array) — confirm these are reflected in the actual
  Django models once backend work starts.

---

## Pages still placeholders (not built yet)

- [ ] Browse / Courses page
- [ ] Quiz page (`/lesson/:id/quiz`)
- [ ] Learner dashboard (`learner-dash.jsx`)
- [ ] Admin dashboard
- [ ] Teacher dashboard (list of own lessons + status)
- [ ] Community pages
- [ ] Progress / badges / certificates pages

---

## Known design debt

- [ ] Decide on a real signing video for the onboarding page
  (`About.jsx`) — currently uses `hero.jpg` as a poster image with no
  actual video source.
- [ ] Footer component doesn't exist yet — `home.jsx` currently has no
  footer at all (deliberate, for now).
- [ ] Animated hero background was attempted multiple times (sparkles,
  blobs, gradient haze, geometric morph) without success — replaced with
  a static soft circle + wave SVG. Could revisit with a simpler approach
  or a design tool export later.

---

## Process note

Several rounds of file mix-ups happened where `App.jsx` (routing) and
page files (like `home.jsx`) had their contents accidentally swapped or
merged. Quick sanity check going forward: **`App.jsx` should always
contain the words `Router`/`Routes`/`Route` and nothing else visual;
page files should never contain those words.** If a file has both kinds
of imports, something's in the wrong place.