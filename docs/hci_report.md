# HCI Research Report: EduSubmit Assignment Submission System
### Human-Computer Interaction Process Documentation

---

## 1. Problem Statement

Learning Management Systems (LMS) often create frustrating submission experiences that lead to failed submissions, missed deadlines, and student anxiety. This project applies Human-Computer Interaction (HCI) methodology to design **EduSubmit** — a task-centered, accessible, and transparent assignment submission system.

### Identified Pain Points

| Pain Point | Impact | HCI Category |
|---|---|---|
| Confusing deadline displays | Missed assignments | Information Architecture |
| No file format validation before upload | Failed submissions | Error Prevention |
| Large file failures without feedback | Student confusion | Feedback |
| No submission confirmation | Anxiety, re-submissions | Visibility |
| Poor grade/feedback visibility | Learning disruption | Information Design |
| Overloaded dashboards | Cognitive overload | Hick's Law |
| No keyboard navigation | Accessibility barrier | WCAG |

---

## 2. Stakeholder Analysis

| Role | Primary Goals | Key Tasks | Unique Pain Points |
|---|---|---|---|
| **Student** | Submit assignments, track grades | Upload files, check deadlines, view feedback | Submission anxiety, format confusion |
| **Instructor** | Grade efficiently, give feedback | Review submissions, grade, publish | Bulk download, plagiarism check needed |
| **Teaching Assistant** | Support grading workflow | Grade subset, flag issues | Limited permissions, unclear workflow |
| **System Administrator** | Maintain system integrity | Manage users, monitor storage, configure limits | Storage quotas, audit trails |

---

## 3. Persona Development

### Persona 1: Alex Johnson — The Multitasking Student
- **Age:** 20 | **Major:** Computer Science | **Tech Proficiency:** High
- **Goals:** Submit assignments on time; know immediately if submission succeeded; check grades quickly
- **Frustrations:**
  - Submitting wrong file format and not knowing until after deadline
  - No confirmation email → anxiety about whether submission registered
  - Grade posted but buried in 50 notifications
- **Behavioral Traits:** Submits 1–2 hours before deadline; checks LMS daily; uses mobile to browse, PC to submit
- **Accessibility Needs:** None noted; benefits from screen reader support in campus library computers
- **Quote:** *"I need to KNOW my submission went through. Not guess."*

### Persona 2: Dr. Sarah Chen — The Efficiency-Focused Instructor
- **Age:** 42 | **Role:** Lecturer, CS Dept. | **Tech Proficiency:** Moderate
- **Goals:** Grade 100+ submissions efficiently; give meaningful feedback; detect plagiarism early
- **Frustrations:**
  - Endless scrolling to find ungraded submissions
  - Downloading submissions one at a time
  - No rubric tools — must type scores manually every time
  - Students emailing asking if submission received (because no confirmation)
- **Behavioral Traits:** Grades in batches; prefers keyboard shortcuts; opens multiple tabs
- **Accessibility Needs:** Slight presbyopia — benefits from 14px+ font sizes, high contrast
- **Quote:** *"Bulk grading should take 20 minutes per class, not 2 hours."*

### Persona 3: Jamie Tan — The Accessibility-Dependent TA
- **Age:** 24 | **Role:** Graduate TA | **Tech Proficiency:** High
- **Goals:** Grade assigned students; escalate issues to instructor; avoid duplication
- **Frustrations:**
  - System doesn't work well with screen readers
  - No audit trail of who graded what
- **Behavioral Traits:** Uses keyboard navigation exclusively due to motor impairment
- **Accessibility Needs:** Full keyboard navigability, ARIA labels, high contrast, focus indicators
- **Quote:** *"If Tab doesn't move focus correctly, I literally can't use the system."*

### Persona 4: Mark Rivera — The System Administrator
- **Age:** 35 | **Role:** IT LMS Admin | **Tech Proficiency:** Expert
- **Goals:** Maintain uptime; enforce storage limits; generate reports
- **Frustrations:**
  - Students uploading 200MB video files causing storage overflow
  - No bulk user management tools
- **Quote:** *"File size limits need to be enforced at point of upload, not after."*

---

## 4. Task Analysis — Hierarchical Task Analysis (HTA)

### Student Task Flow

```
1. AUTHENTICATE
   1.1 Navigate to login page
   1.2 Select role (Student)
   1.3 Enter credentials
   1.4 Handle errors → retry or use forgot password
   1.5 → Student Dashboard

2. VIEW ASSIGNMENTS
   2.1 Browse course cards
   2.2 Filter by upcoming deadline
   2.3 Click assignment → Detail page
   2.4 Read description, requirements, deadline

3. UPLOAD SUBMISSION
   3.1 Select file (drag & drop OR browse)
   3.2 [SYSTEM] Validate format → Error if invalid → goto 3.1
   3.3 [SYSTEM] Validate size → Error if too large → goto 3.1
   3.4 [SYSTEM] Check deadline → Error if past → block submission
   3.5 Review confirmation modal
   3.6 Confirm → Upload begins
   3.7 [SYSTEM] Show progress bar
   3.8 [SYSTEM] On complete → redirect to Confirmation page

4. RECEIVE CONFIRMATION
   4.1 View success message + unique Submission ID
   4.2 Save/print confirmation
   4.3 Navigate to Dashboard or Grades

5. TRACK & VIEW GRADES
   5.1 Navigate to Grades
   5.2 Filter by course
   5.3 Expand feedback panel per assignment
   5.4 If resubmit allowed → return to step 3
```

**Decision Points & Error Paths:**
- Wrong format → inline error with specific message and allowed format list
- File too large → error with exact sizes shown
- Deadline passed → upload blocked; contact instructor message shown
- Network error mid-upload → error with retry button
- Duplicate submission → warning with option to overwrite if allowed

### Instructor Task Flow

```
1. AUTHENTICATE → Instructor Dashboard
2. VIEW SUBMISSIONS
   2.1 View submissions table (status: Pending/Graded/Missing)
   2.2 Filter/sort by name, date, status
   2.3 Bulk download → ZIP export
3. GRADE
   3.1 Click student in list → load submission viewer
   3.2 Open file in viewer
   3.3 Enter rubric scores (sum → total)
   3.4 Adjust slider or type manual grade
   3.5 Write feedback
   3.6 Save draft
   3.7 Publish → student notified
4. PUBLISH GRADES
   4.1 Individual publish or batch publish all
   4.2 Students receive notification
```

---

## 5. HCI Principles Application

### A. Nielsen's 10 Usability Heuristics

| # | Heuristic | Implementation in EduSubmit |
|---|---|---|
| H1 | **Visibility of System Status** | Upload progress bar (0–100%), step indicator (Review→Upload→Confirm), submission ID confirmation, real-time checklist |
| H2 | **Match Between System & Real World** | Uses terms: "Assignment", "Due Date", "Grade", "Submission ID" — familiar academic vocabulary. No technical jargon. |
| H3 | **User Control & Freedom** | Cancel upload button, "Remove File" before submitting, Save Draft, edit before confirm. Resubmit if instructor allows. |
| H4 | **Consistency & Standards** | Uniform sidebar navigation on all pages. Same card component, badge colors, and button hierarchy site-wide. |
| H5 | **Error Prevention** | File format validation BEFORE upload starts. Deadline check before form enables. Confirmation modal before irreversible action. |
| H6 | **Recognition Rather Than Recall** | Course list always visible. Allowed file formats shown on upload zone. Deadline displayed prominently. No menus to memorize. |
| H7 | **Flexibility & Efficiency of Use** | Keyboard shortcuts (Tab, Enter, Space). Drag-and-drop upload. Instructor bulk download. Navigation arrows for quick student switching. |
| H8 | **Aesthetic & Minimalist Design** | Max 3 primary actions per page. Clean card layout. Icons supplement but don't replace labels. No decorative clutter. |
| H9 | **Help Recognize, Diagnose & Recover from Errors** | Specific error messages: "This .txt format is not accepted. Allowed: .zip, .py, .java" with exact allowed types listed. |
| H10 | **Help & Documentation** | Tooltips on format fields. Tips sidebar on upload page. Breadcrumb navigation. FAQ links. |

### B. Norman's Design Principles

| Principle | Application |
|---|---|
| **Affordances** | Upload zone's dashed border + icon signals "drag files here". Large primary button signals clickability. |
| **Signifiers** | Chevron (▼) on grade rows signals expandability. Badge colors signal submission state. Breadcrumbs signal location. |
| **Constraints** | File input `accept` attribute limits selectable formats. Submit button disables if deadline passed. File removed if validation fails. |
| **Mapping** | Grade slider maps directly to displayed score. Rubric scores sum to total. Checklist maps submission readiness. |
| **Feedback** | Progress bar during upload. Success bounce animation on confirmation. Grade saved alert on instructor panel. Live checklist updating as files are selected. |

### C. Fitts' Law

- Submit button spans full card width (≥400px) — minimizes targeting time
- Primary action buttons are at least 48px tall (mobile-compliant)
- Navigation sidebar uses consistent 44px+ height link targets
- Instructor grade slider fills full panel width for easy adjustment
- Role switch tabs take equal space — equal Fitts distance for both options

### D. Hick's Law

- Login: Only 2 role choices visible (Student / Instructor)
- Dashboard quick actions: Exactly 3 options
- Navigation sidebar: Max 4 main items + 2 account items
- Grading: Rubric rows reduce scoring to categorized subtasks, not a single blank field
- Instructor: Submissions filtered to 1 active assignment at a time

### E. WCAG 2.1 AA Compliance

| Requirement | Implementation |
|---|---|
| Color Contrast (4.5:1) | Brand indigo (#6366f1) on white = 4.8:1. All text meets AA minimum. |
| Keyboard Navigation | All interactive elements reachable via Tab. Modal traps focus. Enter/Space activates buttons. |
| Screen Reader Labels | ARIA `role`, `aria-label`, `aria-live`, `aria-describedby` on all key elements |
| Color-Blind Palette | All status indicators use icon + text + color (never color alone) |
| Focus Indicators | `focus-visible` outline: 3px solid brand color with 2px offset on all elements |
| Form Labels | Every `<input>` has an associated `<label>`. Required fields marked with `aria-required`. |
| Error Identification | Errors announced via `role="alert"` + `aria-live="polite"`. Field errors linked via `aria-describedby`. |

---

## 6. Information Architecture

```
EduSubmit
│
├── PUBLIC
│   └── Login (index.html)
│       ├── Student login → Student Portal
│       └── Instructor login → Instructor Portal
│
├── STUDENT PORTAL
│   ├── Dashboard (student-dashboard.html)
│   │   ├── Course cards
│   │   ├── Upcoming assignments
│   │   ├── Notifications
│   │   └── Quick actions
│   │
│   ├── Assignment Detail + Upload (assignment-detail.html)
│   │   ├── Assignment info
│   │   ├── Upload zone (with validation)
│   │   └── Confirmation modal
│   │
│   ├── Confirmation (confirmation.html)
│   │   └── Submission ID + details + next steps
│   │
│   └── Grades (grades.html)
│       ├── GPA overview
│       ├── Assignment list with grades
│       └── Expandable feedback panels
│
└── INSTRUCTOR PORTAL
    ├── Dashboard (instructor-dashboard.html)
    │   ├── Submission stats
    │   ├── Submissions table
    │   ├── Plagiarism overview
    │   ├── Bulk download
    │   └── Course overview
    │
    └── Grading (grading.html)
        ├── Student list navigation
        ├── Submission viewer
        └── Grade panel (slider + rubric + feedback)
```

**Navigation Justification:**
- Maximum 2-click depth from any page to core action (follows 3-click rule)
- Sidebar provides persistent global navigation (recognition, not recall)
- Breadcrumbs show location in hierarchy
- Step progress indicator shows position within multi-step processes

---

## 7. Design System Decisions

- **8px Grid:** All spacing is multiples of 8px — prevents visual inconsistency
- **Color Palette:** Indigo brand (#6366f1) chosen for WCAG compliance + academic authority feel
- **Typography:** Inter — high x-height, excellent screen legibility, widely accessible
- **Card Pattern:** Consistent card structure reduces learning curve across pages
- **Dark Mode:** Full CSS variable system enables zero-override theme switching
- **Micro-animations:** Subtle transitions (200ms base, 350ms slow) provide feedback without distraction
