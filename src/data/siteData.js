export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    chips: ["C++", "C", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Technologies",
    chips: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Databases",
    chips: ["MongoDB", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    title: "AI / ML & GenAI",
    chips: [
      "Gen AI",
      "LLMs",
      "GPT",
      "OpenAI API",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "Transformers",
      "Embeddings",
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "Chatbots",
      "Ollama",
      "Hugging Face",
      "TensorFlow/Keras",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Gemini API",
      "Groq API",
      "LLM Function Calling",
      "AI Agents",
      "AWS Bedrock",
    ],
  },
  {
    title: "Developer Tools",
    chips: [
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "Postman",
      "VS Code",
      "Streamlit",
      "Hugging Face Spaces",
      "Render",
    ],
  },
  {
    title: "Core CS",
    chips: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Object-Oriented Programming",
      "Data Science",
      "Machine Learning",
      "Deep Learning",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "SDE Intern",
    company: "VRV Group Pvt. Ltd.",
    period: "Jul. 2026 – Oct. 2026",
    location: "Mathura-Vrindavan, UP",
    mode: "Remote",
    description: [
      "Developed the React.js frontend of a live portal (Real Estate, Car Rental, Tourism): 9 pages, 33 components.",
      "Engineered a multi-criteria property filter (7 types, 3 furnishing states) with per-gaj and per-month unit pricing.",
      "Designed responsive UI with Tailwind CSS, Framer Motion, GSAP; collaborated via Git feature branches.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Git",
      "JavaScript",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "DRB & Company (Chartered Accountants)",
    period: "Aug. 2026",
    location: "drbcompany.in",
    mode: "Freelance",
    link: "https://drbcompany.in",
    linkLabel: "drbcompany.in",
    description: [
      "Delivered a 14-page responsive React 18, Vite, Tailwind CSS site with 21 reusable components (53 commits).",
      "Integrated Google Sheets lead capture and WhatsApp links; added SEO metadata, Open Graph tags, sitemap.",
    ],
    tech: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Google Sheets API",
      "SEO",
      "Responsive Design",
    ],
  },
];

export const PROJECTS = [
  {
    index: "01 — FLAGSHIP",
    cat: "ai",
    wide: true,
    title: "CA Agent: Multi-Tool AI Financial Assistant",
    desc: "Built a function-calling agent with 10 tools: PDF/Excel parsing, OCR, GST, TDS, income tax, search, memory. Implemented statutory GST (CGST/SGST/IGST), TDS (5 sections), and income tax (6 slabs); supports 7 file formats. Persisted client notes in SQLite; added an LLM fallback chain with RAG document grounding.",
    stack: [
      "Python",
      "Groq API",
      "Function Calling",
      "Tesseract OCR",
      "SQLite",
      "Streamlit",
      "LangChain",
      "RAG",
    ],
    links: [
      { label: "Live demo ↗", href: "https://ca-agent-f6r2jr4wgfdzktzzc7q8mt.streamlit.app/" },
      { label: "Source ↗", href: "https://github.com/7471ashish/CA-Agent" },
    ],
  },
  {
    index: "02",
    cat: "ai",
    title: "AI Multi-Disease Medical Diagnostic System",
    desc: "Fine-tuned 3 EfficientNetB0 models (brain tumor, pneumonia, skin disease) with augmentation, EarlyStopping, and ReduceLROnPlateau. Reached about 95% (brain tumor, 7,200 MRI images) and 98.18% (pneumonia) validation accuracy. Generated Grad-CAM heatmaps with TensorFlow GradientTape; deployed on Hugging Face Spaces.",
    stack: [
      "Python",
      "TensorFlow/Keras",
      "EfficientNetB0",
      "Grad-CAM",
      "Streamlit",
      "Gradio",
      "Hugging Face Spaces",
    ],
    links: [
      { label: "Live demo ↗", href: "https://huggingface.co/spaces/Ashish7471/ai-medical-diagnosis" },
      { label: "Source ↗", href: "https://github.com/7471ashish/Ai-medical-diagnosis" },
    ],
  },
  {
    index: "03",
    cat: "web",
    title: "StudyNotion: Full-Stack Ed-Tech Platform",
    desc: "Developed a MERN platform with 36 REST endpoints, 9 Mongoose schemas, and role-based access for 3 roles. Secured the platform with JWT authentication, bcrypt hashing, and OTP email verification (Nodemailer). Integrated Razorpay payments with HMAC-SHA256 signature verification and Cloudinary media uploads.",
    stack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],
    links: [
      { label: "Source ↗", href: "https://github.com/7471ashish/Study-notion-" },
    ],
  },
  {
    index: "04",
    cat: "web",
    title: "DRB Business Website",
    desc: "Delivered a 14-page responsive corporate web portal with 21 reusable components, Google Sheets lead capture, WhatsApp integration, and optimized Open Graph/SEO tags for chartered accountancy services.",
    stack: ["React 18", "Vite", "Tailwind CSS", "Google Sheets API", "SEO"],
    links: [
      { label: "Live website ↗", href: "https://drbcompany.in" },
    ],
  },
  {
    index: "05",
    cat: "ai",
    title: "AI Virtual Assistant",
    desc: "Built a voice-enabled conversational assistant in React.js powered by Google's Gemini API for context-aware natural language understanding. Implemented continuous hands-free speech-to-text and text-to-speech interaction loops using the Web Speech API with real-time UI feedback. Deployed on Render.",
    stack: ["React.js", "Gemini API", "Web Speech API", "Render"],
    links: [
      { label: "Live demo ↗", href: "https://assistant-qr2q.onrender.com" },
      { label: "Source ↗", href: "https://github.com/7471ashish/assistant" },
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    place: "Top 416 / 105,000 Teams (Top 0.4%)",
    event: "Adobe Hackathon 2026",
    year: "2026",
    project: "Brand AI Readiness Audit Agent",
    desc: "Ranked among the top 416 of 1.05 lakh teams (top 0.4%) nationwide. Built an autonomous AI agent with Python and LangGraph that audits websites for SEO, generative search readiness, and structured brand visibility.",
  },
  {
    place: "1000+ Problems Solved",
    event: "Competitive Programming & Problem Solving",
    year: "2024 – Present",
    desc: "Solved 1000+ data structures & algorithms problems across LeetCode (500+ solved), CodeChef, Codeforces, and GeeksforGeeks.",
    link: {
      label: "codolio.com/profile/Ash_Ban",
      href: "https://codolio.com/profile/Ash_Ban",
    },
  },
  {
    place: "1st Place",
    event: "Bug Bash, Aavesh Techfest",
    year: "2026",
    desc: "Won 1st place in the code debugging, optimization, and logic fixing competition at IIIT Una's annual technical fest.",
  },
  {
    place: "3rd Place",
    event: "RoboTrace, Aavesh Techfest",
    year: "2026",
    desc: "Engineered an autonomous high-speed line-following robot with Arduino and IR sensor array navigating complex tracks.",
  },
  {
    place: "3rd Runner-Up",
    event: "RoboDrive, Aavesh Techfest",
    year: "2026",
    desc: "Developed a custom RC vehicle controlled wirelessly over Bluetooth via a smartphone interface.",
  },
  {
    place: "Core Technical Member",
    event: "Aavesh – Technical Club of IIIT Una",
    year: "Aug 2024 – May 2025",
    desc: "Mentored peers and organized hands-on workshops in robotics, development, and competitive problem solving.",
  },
];

export const EDUCATION = [
  {
    year: "2024 — Present",
    score: "8.53",
    scoreLabel: "CGPA (current)",
    school: "Bachelor of Technology in Information Technology",
    sub: "Indian Institute of Information Technology (IIIT), Una",
    extra:
      "Himachal Pradesh, India · Core CS: Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, OOP, Data Science, Machine Learning, Deep Learning",
  },
  {
    year: "2024",
    score: "86.6%",
    school: "Senior Secondary (Class XII)",
    sub: "CBSE Board",
  },
  {
    year: "2022",
    score: "96.6%",
    school: "Secondary (Class X)",
    sub: "CBSE Board",
  },
];

export const CONTACT_ITEMS = [
  { k: "Email", v: "bansalashish346@gmail.com", href: "mailto:bansalashish346@gmail.com" },
  { k: "Phone", v: "+91 7456031337", href: "tel:+917456031337" },
  { k: "LinkedIn", v: "ashish-bansal", href: "https://www.linkedin.com/in/ashish-bansal-28147b2a4/" },
  { k: "GitHub", v: "7471ashish", href: "https://github.com/7471ashish" },
  { k: "Codolio", v: "Ash_Ban (1000+ DSA)", href: "https://codolio.com/profile/Ash_Ban" },
];
