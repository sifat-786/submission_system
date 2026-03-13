// ─── Mock Data Layer ─────────────────────────────────────────────────────────

const USERS = {
  student: {
    id: "s001",
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    role: "student",
    avatar: "AJ",
    enrolledCourses: ["cs301", "math201", "eng102", "phys301"]
  },
  instructor: {
    id: "i001",
    name: "Dr. Sarah Chen",
    email: "s.chen@university.edu",
    role: "instructor",
    avatar: "SC",
    courses: ["cs301", "cs401"]
  }
};

const COURSES = {
  cs301: {
    id: "cs301",
    code: "CS 301",
    title: "Data Structures & Algorithms",
    instructor: "Dr. Sarah Chen",
    color: "#6366f1",
    assignments: ["a001", "a002", "a003"]
  },
  math201: {
    id: "math201",
    code: "MATH 201",
    title: "Linear Algebra",
    instructor: "Prof. James Wright",
    color: "#10b981",
    assignments: ["a004", "a005"]
  },
  eng102: {
    id: "eng102",
    code: "ENG 102",
    title: "Technical Writing",
    instructor: "Dr. Maria Santos",
    color: "#f59e0b",
    assignments: ["a006"]
  },
  phys301: {
    id: "phys301",
    code: "PHYS 301",
    title: "Quantum Mechanics",
    instructor: "Prof. Alan Turing",
    color: "#ef4444",
    assignments: ["a007", "a008"]
  }
};

const ASSIGNMENTS = {
  a001: {
    id: "a001",
    courseId: "cs301",
    title: "Binary Search Tree Implementation",
    description: "Implement a fully functional Binary Search Tree in Python or Java with insert, delete, search, and traversal operations. Include time complexity analysis in your report.",
    dueDate: "2026-03-05T23:59:00",
    maxFileSize: 10,
    allowedFormats: [".zip", ".py", ".java", ".pdf"],
    maxPoints: 100,
    submissionStatus: "submitted",
    submittedAt: "2026-02-24T15:32:00",
    submissionId: "SUB-20260224-001",
    grade: 88,
    feedback: "Excellent implementation of BST. Insert and delete operations are correct. Minor issue with the balancing logic in edge cases. Overall well-documented code.",
    resubmitAllowed: false
  },
  a002: {
    id: "a002",
    courseId: "cs301",
    title: "Graph Traversal Algorithms",
    description: "Implement BFS and DFS algorithms. Compare their time and space complexities. Include test cases for disconnected graphs and cyclic graphs.",
    dueDate: "2026-03-12T23:59:00",
    maxFileSize: 15,
    allowedFormats: [".zip", ".py", ".java", ".pdf"],
    maxPoints: 100,
    submissionStatus: "pending",
    submittedAt: null,
    submissionId: null,
    grade: null,
    feedback: null,
    resubmitAllowed: false
  },
  a003: {
    id: "a003",
    courseId: "cs301",
    title: "Dynamic Programming Problem Set",
    description: "Solve 5 dynamic programming problems from the provided problem set. Each solution must include the recurrence relation and time/space complexity.",
    dueDate: "2026-02-20T23:59:00",
    maxFileSize: 10,
    allowedFormats: [".pdf", ".docx"],
    maxPoints: 100,
    submissionStatus: "late",
    submittedAt: null,
    submissionId: null,
    grade: null,
    feedback: null,
    resubmitAllowed: false
  },
  a004: {
    id: "a004",
    courseId: "math201",
    title: "Eigenvalues & Eigenvectors",
    description: "Compute eigenvalues and eigenvectors for the given matrices. Show all working steps.",
    dueDate: "2026-03-08T23:59:00",
    maxFileSize: 5,
    allowedFormats: [".pdf", ".docx"],
    maxPoints: 50,
    submissionStatus: "submitted",
    submittedAt: "2026-02-25T10:15:00",
    submissionId: "SUB-20260225-002",
    grade: null,
    feedback: null,
    resubmitAllowed: true
  },
  a005: {
    id: "a005",
    courseId: "math201",
    title: "Matrix Transformations",
    description: "Demonstrate various matrix transformation operations with geometric interpretations.",
    dueDate: "2026-03-15T23:59:00",
    maxFileSize: 5,
    allowedFormats: [".pdf", ".docx"],
    maxPoints: 50,
    submissionStatus: "pending",
    submittedAt: null,
    submissionId: null,
    grade: null,
    feedback: null,
    resubmitAllowed: false
  },
  a006: {
    id: "a006",
    courseId: "eng102",
    title: "Technical Manual Draft",
    description: "Write a 2000-word technical manual for a hypothetical software product. Follow IEEE documentation standards.",
    dueDate: "2026-03-10T23:59:00",
    maxFileSize: 20,
    allowedFormats: [".pdf", ".docx"],
    maxPoints: 75,
    submissionStatus: "pending",
    submittedAt: null,
    submissionId: null,
    grade: null,
    feedback: null,
    resubmitAllowed: false
  },
  a007: {
    id: "a007",
    courseId: "phys301",
    title: "Wave Function Analysis",
    description: "Analyze wave functions for a particle in a 1D infinite potential well.",
    dueDate: "2026-03-20T23:59:00",
    maxFileSize: 10,
    allowedFormats: [".pdf"],
    maxPoints: 60,
    submissionStatus: "pending",
    submittedAt: null,
    submissionId: null,
    grade: null,
    feedback: null,
    resubmitAllowed: false
  },
  a008: {
    id: "a008",
    courseId: "phys301",
    title: "Schrödinger Equation Lab Report",
    description: "Lab report on the numerical solutions to the time-independent Schrödinger equation.",
    dueDate: "2026-03-25T23:59:00",
    maxFileSize: 15,
    allowedFormats: [".pdf", ".docx"],
    maxPoints: 80,
    submissionStatus: "pending",
    submittedAt: null,
    submissionId: null,
    grade: null,
    feedback: null,
    resubmitAllowed: false
  }
};

// Instructor's view: submissions for CS 301 assignment a002
const SUBMISSIONS = [
  { id: "SUB-001", student: "Emma Wilson", studentId: "s002", assignmentId: "a002", submittedAt: "2026-03-11T20:14:00", fileSize: "3.2 MB", fileName: "emma_bfs_dfs.zip", status: "graded", grade: 94, feedback: "Outstanding work." },
  { id: "SUB-002", student: "Liam Martinez", studentId: "s003", assignmentId: "a002", submittedAt: "2026-03-12T18:45:00", fileSize: "1.8 MB", fileName: "liam_graph_algo.zip", status: "graded", grade: 78, feedback: "BFS is correct. DFS has a bug." },
  { id: "SUB-003", student: "Sophia Lee", studentId: "s004", assignmentId: "a002", submittedAt: "2026-03-12T22:58:00", fileSize: "2.4 MB", fileName: "sophia_submission.zip", status: "pending", grade: null, feedback: null },
  { id: "SUB-004", student: "Noah Davis", studentId: "s005", assignmentId: "a002", submittedAt: "2026-03-10T09:30:00", fileSize: "4.1 MB", fileName: "noah_traversal.zip", status: "pending", grade: null, feedback: null },
  { id: "SUB-005", student: "Olivia Brown", studentId: "s006", assignmentId: "a002", submittedAt: "2026-03-12T23:45:00", fileSize: "2.0 MB", fileName: "olivia_graphs.zip", status: "pending", grade: null, feedback: null },
  { id: "SUB-006", student: "James Garcia", studentId: "s007", assignmentId: "a002", submittedAt: null, fileSize: null, fileName: null, status: "missing", grade: null, feedback: null },
  { id: "SUB-007", student: "Ava Thomas", studentId: "s008", assignmentId: "a002", submittedAt: "2026-03-11T14:20:00", fileSize: "3.5 MB", fileName: "ava_algorithms.zip", status: "graded", grade: 85, feedback: "Good work overall." },
  { id: "SUB-008", student: "William Johnson", studentId: "s009", assignmentId: "a002", submittedAt: "2026-03-12T21:10:00", fileSize: "1.5 MB", fileName: "will_bfs.zip", status: "pending", grade: null, feedback: null }
];

const NOTIFICATIONS = [
  { id: "n1", type: "deadline", title: "Assignment Due Tomorrow", message: "Graph Traversal Algorithms is due on Mar 12.", time: "2h ago", read: false },
  { id: "n2", type: "grade", title: "Grade Posted", message: "Your BST Implementation has been graded: 88/100", time: "1 day ago", read: false },
  { id: "n3", type: "info", title: "Submission Received", message: "Eigenvalues & Eigenvectors submission confirmed.", time: "2 days ago", read: true },
  { id: "n4", type: "warning", title: "Missed Deadline", message: "Dynamic Programming Problem Set was due Feb 20.", time: "6 days ago", read: true }
];

// Session management
const Session = {
  get() { try { return JSON.parse(sessionStorage.getItem("hci_user")) || null; } catch { return null; } },
  set(user) { sessionStorage.setItem("hci_user", JSON.stringify(user)); },
  clear() { sessionStorage.removeItem("hci_user"); },
  require(role) {
    const u = this.get();
    if (!u) { window.location.href = "index.html"; return null; }
    if (role && u.role !== role) { window.location.href = "index.html"; return null; }
    return u;
  }
};

// Utility helpers
function timeUntil(dateStr) {
  const diff = new Date(dateStr) - new Date();
  if (diff < 0) return { label: "Past due", urgent: true, overdue: true };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  if (days > 0) return { label: `${days}d ${hours}h remaining`, urgent: days <= 2, overdue: false };
  return { label: `${hours}h remaining`, urgent: true, overdue: false };
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function generateId() {
  return "SUB-" + new Date().toISOString().slice(0,10).replace(/-/g,"") + "-" + Math.floor(Math.random()*9000+1000);
}
