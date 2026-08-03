export const NAV_LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const SKILL_GROUPS = [
  {
    title: "Languages & Frontend",
    chips: ["C++", "Python", "JavaScript", "React.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & Data",
    chips: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "AI / ML",
    chips: ["TensorFlow/Keras", "OpenCV", "Grad-CAM", "Generative AI", "Deep Learning"],
  },
  {
    title: "Core CS",
    chips: ["DSA", "OOP", "Operating Systems", "Computer Networks", "DBMS"],
  },
];

export const PROJECTS = [
  {
    index: "01 — FLAGSHIP",
    cat: "ai",
    wide: true,
    title: "AI-Powered Medical Diagnosis System",
    desc: "A CNN-based diagnosis pipeline covering four conditions — brain tumors, pneumonia, skin diseases, and Alzheimer's disease. Every prediction ships with a Grad-CAM heatmap showing exactly which regions the model relied on, plus a downloadable PDF report with diagnosis, confidence score, and overlay. Deployed as a live Gradio app on Hugging Face Spaces.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "Gradio", "Hugging Face", "Grad-CAM"],
    links: [
      { label: "Live demo ↗", href: "https://huggingface.co/spaces/Ashish7471/ai-medical-diagnosis" },
      { label: "Source ↗", href: "https://github.com/7471ashish" },
    ],
  },
  {
    index: "02",
    cat: "fullstack",
    title: "StudyNotion",
    desc: "Full-stack EdTech platform where instructors publish courses and students discover, purchase, and complete them. JWT-based auth with role-based permissions for Student/Instructor/Admin, Razorpay checkout with real-time payment verification, and a course player built for smooth viewing.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    links: [{ label: "Source ↗", href: "https://github.com/7471ashish" }],
  },
  {
    index: "03",
    cat: "ai",
    title: "Cancer Detection System",
    desc: "A focused, single-condition counterpart to the broader diagnosis system — a CNN trained to classify cancer from medical imaging data, paired with Grad-CAM overlays so the reasoning is visible, not just the label. Wrapped in a Gradio interface for real-time browser predictions.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "Gradio", "Grad-CAM"],
    links: [{ label: "Source ↗", href: "https://github.com/7471ashish" }],
  },
  {
    index: "04",
    cat: "ai",
    title: "AI Virtual Assistant",
    desc: "A voice-first assistant built on React.js, using Google's Gemini API to understand queries and generate natural, conversational responses. Speech goes in and out through the Web Speech API — hands-free rather than typed. Publicly deployed on Render.",
    stack: ["React.js", "Gemini API", "Web Speech API"],
    links: [{ label: "Source ↗", href: "https://github.com/7471ashish" }],
  },
  {
    index: "05",
    cat: "fullstack",
    title: "To-Do App — Task Management REST API",
    desc: "A REST API for task management covering full CRUD, backed by a deliberately lean MongoDB schema. API responses follow a consistent structure, with middleware handling errors centrally instead of scattering try/catch logic across routes.",
    stack: ["Node.js", "Express.js", "MongoDB"],
    links: [{ label: "Source ↗", href: "https://github.com/7471ashish" }],
  },
];

export const ACHIEVEMENTS = [
  {
    place: "2nd Place",
    event: "RoboSmash, Aavesh Techfest",
    year: "2026",
    desc: "Built a smartphone-controlled car for a soccer-style event, pushing a ball into the opponent's goal.",
  },
  {
    place: "3rd Place",
    event: "RoboTrace, Aavesh Techfest",
    year: "2026",
    desc: "Built a line-following robot using Arduino and IR sensors that autonomously follows a black line track.",
  },
  {
    place: "3rd Runner-Up",
    event: "RoboDrive, Aavesh Techfest",
    year: "2026",
    desc: "Developed an Arduino-based RC car controlled via smartphone over Bluetooth; competed in a racing event.",
  },
];

export const EDUCATION = [
  {
    year: "2024 — Present",
    score: "8.43",
    scoreLabel: "CGPA",
    school: "B.Tech, Information Technology",
    sub: "Indian Institute of Information Technology, Una",
  },
  { year: "2024", score: "89.6%", school: "Senior Secondary", sub: "CBSE Board" },
  { year: "2022", score: "96.6%", school: "Secondary", sub: "CBSE Board" },
];

export const CONTACT_ITEMS = [
  { k: "Email", v: "bansalashish346@gmail.com", href: "mailto:bansalashish346@gmail.com" },
  { k: "Phone", v: "+91 74560 31337", href: "tel:+917456031337" },
  { k: "GitHub", v: "7471ashish", href: "https://github.com/7471ashish" },
  { k: "LinkedIn", v: "ashish-bansal", href: "https://linkedin.com/in/ashish-bansal" },
];
