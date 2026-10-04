export const NAV_LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    chips: ["C++", "Python", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frameworks & Technologies",
    chips: [
      "React.js",
      "Vite",
      "React Router",
      "Framer Motion",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT",
      "MongoDB",
      "Redis",
      "SQLite",
    ],
  },
  {
    title: "AI / ML & GenAI",
    chips: [
      "LangChain",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Deep Learning",
      "TensorFlow/Keras",
      "EfficientNetB0",
      "OpenCV",
      "Grad-CAM",
      "OpenAI API",
      "Gemini API",
    ],
  },
  {
    title: "Developer Tools",
    chips: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Gradio",
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
      "Object-Oriented Programming",
      "Database Management Systems",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "VRV Group Pvt. Ltd.",
    period: "July 2026 – Present",
    location: "Mathura–Vrindavan, UP",
    mode: "Remote Paid Internship",
    description: [
      "Independently built the production frontend of a corporate web portal using React.js and Tailwind CSS.",
      "Covered Real Estate, Hotel Booking, Car Rental, and Darshan concierge services.",
      "Built an interactive Property Details page with dynamic price-per-sq.ft calculation, image carousels, and sticky lead-capture forms.",
      "Benchmarked the property experience against platforms such as 99acres and Housing.com.",
      "Created a modular component library with design tokens to reduce code duplication and improve cross-device page performance.",
      "Added routing and Framer Motion animations.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Framer Motion",
      "JavaScript",
    ],
  },
];

export const PROJECTS = [
  {
    index: "01 — FLAGSHIP",
    cat: "ai",
    wide: true,
    title: "CA Agent – Multi-Tool AI Financial Assistant",
    desc: "Built an autonomous agentic financial assistant using LangChain and LangGraph that automates multi-step decision workflows for taxation, GST/TDS computation, and corporate accounting queries. Implemented a Retrieval-Augmented Generation (RAG) pipeline with semantic document retrieval over statutory tax acts to eliminate hallucinations and deliver grounded answers. Integrated OCR parsing for PDF/Excel financial records, dynamic tax calculation tools, and SQLite-backed conversation memory in a Streamlit interface.",
    stack: ["LangChain", "LangGraph", "RAG", "Streamlit", "Python", "SQLite"],
    links: [
      { label: "Live demo ↗", href: "https://ca-agent-f6r2jr4wgfdzktzzc7q8mt.streamlit.app/" },
      { label: "Source ↗", href: "https://github.com/7471ashish" },
    ],
  },
  {
    index: "02",
    cat: "ai",
    title: "AI Multi-Disease Medical Diagnostic System",
    desc: "Trained deep learning classification models for brain tumor, pneumonia, and skin disease detection using Kaggle medical imaging datasets. Fine-tuned EfficientNetB0 to achieve ~95% accuracy on 4-class brain tumor classification and 98.18% validation accuracy on pneumonia classification with data augmentation, EarlyStopping, and ReduceLROnPlateau. Implemented Grad-CAM explainability heatmaps and automated PDF diagnostic reports, deployed live on Hugging Face Spaces via Gradio.",
    stack: [
      "Python",
      "TensorFlow/Keras",
      "EfficientNetB0",
      "OpenCV",
      "Grad-CAM",
      "Gradio",
      "Hugging Face Spaces",
    ],
    links: [
      { label: "Live demo ↗", href: "https://huggingface.co/spaces/Ashish7471/ai-medical-diagnosis" },
      { label: "Source ↗", href: "https://github.com/7471ashish" },
    ],
  },
  {
    index: "03",
    cat: "web",
    title: "DRB Business Website",
    desc: "Developed and deployed a responsive, professional business website for DRB, engineering the complete site structure, modular layouts, and branding to deliver an optimal cross-device user experience.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Web Design"],
    links: [
      { label: "Live website ↗", href: "https://drbcompany.in" },
    ],
  },
  {
    index: "04",
    cat: "ai",
    title: "AI Virtual Assistant",
    desc: "Built a voice-enabled conversational assistant in React.js powered by Google's Gemini API for context-aware natural language understanding. Implemented continuous hands-free speech-to-text and text-to-speech interaction loops using the Web Speech API with real-time UI feedback. Deployed on Render.",
    stack: ["React.js", "Gemini API", "Web Speech API", "Render"],
    links: [
      { label: "Live demo ↗", href: "https://assistant-qr2q.onrender.com" },
      { label: "Source ↗", href: "https://github.com/7471ashish" },
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    place: "Top 416 / 105,000 Teams",
    event: "Adobe Hackathon 2026",
    year: "2026",
    project: "Brand AI Readiness Audit Agent",
    desc: "Team ranked among the top 416 out of 1.05 lakh (105,000) teams across India. Built an AI agent using Python and LangGraph that audits websites and generates structured SEO and brand AI-readiness reports.",
  },
  {
    place: "500+ Problems Solved",
    event: "LeetCode & Competitive Programming",
    year: "2024 – Present",
    desc: "Solved 500+ data structures and algorithms problems on LeetCode. Actively practicing on CodeChef, Codeforces, and GeeksforGeeks.",
  },
  {
    place: "1st Place",
    event: "Bug Bash, Aavesh Techfest",
    year: "2026",
    desc: "Won 1st place in the debugging and code optimization competition at IIIT Una's annual technical fest.",
  },
  {
    place: "3rd Place (Top 30+ Teams)",
    event: "RoboTrace, Aavesh Techfest",
    year: "2026",
    desc: "Built an autonomous line-following robot using Arduino and IR sensors that navigated complex track layouts.",
  },
  {
    place: "3rd Runner-Up",
    event: "RoboDrive, Aavesh Techfest",
    year: "2026",
    desc: "Developed an Arduino-based RC racing car controlled via smartphone over Bluetooth.",
  },
  {
    place: "Core Technical Member",
    event: "Aavesh – Technical Club of IIIT Una",
    year: "Aug 2024 – May 2025",
    desc: "Mentored peers and led robotics and technical workshops for the institute's technical club.",
  },
];

export const EDUCATION = [
  {
    year: "2024 — 2028",
    score: "8.53",
    scoreLabel: "CGPA",
    school: "Bachelor of Technology in Information Technology",
    sub: "Indian Institute of Information Technology (IIIT), Una",
    extra: "Himachal Pradesh, India · Core CS: Data Structures & Algorithms, Operating Systems, Computer Networks, OOP, DBMS",
  },
  {
    year: "2024",
    score: "89.6%",
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
];
