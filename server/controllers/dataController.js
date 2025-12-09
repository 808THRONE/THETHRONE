// --- REAL CV DATA ---

const BLOG_POSTS = [
    {
        id: 1,
        title: "CODEAI: BUILDING AN INTELLIGENT CODING ASSISTANT",
        date: "2025-09-15",
        content: "Leading development of CodeAi at 6NLG/Secnology - an intelligent coding assistant leveraging Large Language Models to enhance developer workflows. Focusing on optimizing inference for low-latency environments and integrating AI-assisted features into developer tools. The challenge lies in balancing model performance with resource constraints."
    },
    {
        id: 2,
        title: "FIRMWARE DEVELOPMENT ON TI AWR6843AOP",
        date: "2025-08-10",
        content: "Completed my internship at ACTIA Engineering Services where I developed firmware integrating a full radar processing chain on the Texas Instruments AWR6843AOP mmWave sensor. Implemented a compact classification model for real-time bicycle safety systems. Working with embedded C and Code Composer Studio taught me the importance of hardware-software integration at the lowest level."
    },
    {
        id: 3,
        title: "LANDMINE DETECTION: AI MEETS GPR",
        date: "2025-05-20",
        content: "Designed and simulated an AI-assisted ground-penetrating radar (GPR) system to detect buried landmines with improved accuracy using PyTorch and gprMax. The project combines electromagnetic simulation with deep learning to tackle a real humanitarian problem. The challenge of detecting buried objects through soil composition variations was fascinating."
    },
    {
        id: 4,
        title: "LINUX KERNEL INTERNALS EXPLORATION",
        date: "2025-03-12",
        content: "Diving deep into the Linux kernel source code as part of my self-learning journey. Understanding memory management, process scheduling, and device drivers at the lowest level. Building mini-projects in Rust and Assembly to grasp system internals. The kernel is a beautiful piece of engineering."
    }
];

const SKILLS = [
    {
        category: "LANGUAGES",
        items: ["C", "C++", "Rust", "Python", "Assembly", "MATLAB", "VHDL"]
    },
    {
        category: "AI_ML",
        items: ["PyTorch", "TensorFlow Lite", "Transformers", "LLMs"]
    },
    {
        category: "SYSTEMS",
        items: ["Linux Kernel", "Embedded C", "Firmware", "QEMU", "Docker"]
    },
    {
        category: "TOOLS",
        items: ["Git", "GDB", "Wireshark", "Bash", "CCS", "Simulink"]
    },
    {
        category: "HARDWARE",
        items: ["TI mmWave", "FPGA", "ARM", "x86", "GPR"]
    }
];

const EDUCATION = [
    {
        institution: "SUP'COM",
        degree: "Cybersecurity Engineering",
        location: "Tunis, Tunisia",
        period: "2023 - Present",
        details: "Focus on low-level programming, Linux Kernel internals, and firmware development"
    },
    {
        institution: "Faculty of Science Monastir (FSM)",
        degree: "Preparatory Cycle for Engineering Studies",
        location: "Monastir, Tunisia",
        period: "2021 - 2023",
        details: "Ranked top 10% nationally (168th out of 1800) in Tunisia's engineering school entrance exam"
    }
];

const CERTIFICATIONS = [
    {
        name: "CyberOps Associate",
        issuer: "Cisco",
        year: "2025"
    },
    {
        name: "CCNA1",
        issuer: "Cisco Networking Academy",
        year: "2024"
    }
];

const EXPERIENCE = [
    {
        company: "6NLG / Secnology",
        position: "R&D Engineering Intern",
        location: "Tunis, Tunisia",
        period: "Sept 2025 - Present",
        description: "Leading development of CodeAi, an intelligent coding assistant leveraging LLMs. Optimizing inference for low-latency environments and integrating AI features into developer tools."
    },
    {
        company: "ACTIA Engineering Services",
        position: "Firmware Developer Intern",
        location: "Ariana, Tunisia",
        period: "Jul 2025 - Aug 2025",
        description: "Developed firmware integrating radar processing chain on TI AWR6843AOP mmWave sensor. Implemented compact classification model for real-time bicycle safety system using Embedded C and CCS."
    },
    {
        company: "Tunisie Telecom",
        position: "Summer Intern",
        location: "Tunis, Tunisia",
        period: "Jul 2024 - Aug 2024",
        description: "Gained practical experience in fiber optic networks and telecommunications infrastructure. Assisted technical teams in network analysis and maintenance operations."
    }
];

const PROJECTS = [
    {
        id: 1,
        name: "CodeAi",
        description: "Intelligent coding assistant leveraging LLMs to optimize developer workflows and support low-latency inference.",
        language: "Python/AI",
        stargazers_count: "PVT",
        html_url: "https://github.com/808THRONE"
    },
    {
        id: 2,
        name: "Landmine Detection GPR",
        description: "AI-assisted ground-penetrating radar system to detect buried landmines using PyTorch and gprMax.",
        language: "Python",
        stargazers_count: "R&D",
        html_url: "https://drive.google.com/drive/folders/1tB3_YDYOyVTmqkMN5UDVXcHDX93eHYwI?usp=sharing"
    },
    {
        id: 3,
        name: "GAMEX",
        description: "Real-time multiplayer gaming platform with authentication, friend invites, and interactive gameplay.",
        language: "Web",
        stargazers_count: "LIVE",
        html_url: "https://gamexwebsite.onrender.com/"
    },
    {
        id: 4,
        name: "DES & Triple DES VHDL",
        description: "FPGA-based implementation of DES/3DES using VHDL, FSMs, and testbench validation.",
        language: "VHDL",
        stargazers_count: "HW",
        html_url: "https://drive.google.com/drive/folders/1tB3_YDYOyVTmqkMN5UDVXcHDX93eHYwI?usp=sharing"
    },
    {
        id: 5,
        name: "Xpplore",
        description: "Travel companion mobile app to help users discover destinations, book activities, and navigate intuitively.",
        language: "Mobile",
        stargazers_count: "UX",
        html_url: "https://github.com/808THRONE"
    },
    {
        id: 6,
        name: "AI-Aided Drone Detection",
        description: "CNN model for drone detection using radar data, implementing concepts from Karlsson & Jansson.",
        language: "Python",
        stargazers_count: "AI",
        html_url: "https://drive.google.com/drive/folders/1tB3_YDYOyVTmqkMN5UDVXcHDX93eHYwI?usp=sharing"
    }
];

const AUTHOR_NAME = "IHEB BRAHMI";
const GITHUB_USERNAME = "808THRONE";
const CONTACT_INFO = {
    name: "Iheb Brahmi",
    title: "Cybersecurity Engineer | Linux Kernel & Firmware Enthusiast",
    email: "iheb.brahmi@supcom.tn",
    phone: "+216 50172623",
    location: "ElGhazela, Ariana, Tunisia",
    github: "https://github.com/808THRONE",
    linkedin: "https://www.linkedin.com/in/iheb-brahmi-9a4886366/",
    portfolio: "https://drive.google.com/drive/folders/1tB3_YDYOyVTmqkMN5UDVXcHDX93eHYwI?usp=sharing"
};

const BIO = "Third-year Cybersecurity Engineering student at SUP'COM focused on low-level programming, Linux Kernel internals, and firmware development. Proficient in programming, with hands-on experience optimizing AI models for resource-constrained devices. Passionate about bridging hardware and software to build secure, high-performance embedded systems.";

// --- CONTROLLERS ---

exports.getProfile = (req, res) => {
    res.json({
        author: AUTHOR_NAME,
        bio: BIO,
        contact: CONTACT_INFO,
        githubUsername: GITHUB_USERNAME,
        skills: SKILLS,
        education: EDUCATION,
        certifications: CERTIFICATIONS,
        experience: EXPERIENCE
    });
};

exports.getBlogPosts = (req, res) => {
    res.json(BLOG_POSTS);
};

exports.getProjects = async (req, res) => {
    try {
        // Fetch GitHub repositories
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        let githubRepos = [];

        if (response.ok) {
            githubRepos = await response.json();
        } else {
            console.error('Failed to fetch from GitHub');
        }

        // Map GitHub repos to match our project structure if needed, 
        // though the structure is already compatible.
        // We'll prioritize CV projects, then add GitHub repos.
        // We filter out any GitHub repos that might duplicate our CV projects by name.

        const cvProjectNames = PROJECTS.map(p => p.name.toLowerCase());

        const uniqueGithubRepos = githubRepos.filter(repo =>
            !cvProjectNames.includes(repo.name.toLowerCase())
        ).map(repo => ({
            id: `gh-${repo.id}`, // Ensure unique IDs
            name: repo.name,
            description: repo.description,
            language: repo.language || "Code",
            stargazers_count: repo.stargazers_count,
            html_url: repo.html_url
        }));

        // Combine: CV Projects first, then GitHub Repos
        const combinedProjects = [...PROJECTS, ...uniqueGithubRepos];

        res.json(combinedProjects);
    } catch (error) {
        console.error("Project fetch error:", error);
        // Fallback to just CV projects if GitHub fails
        res.json(PROJECTS);
    }
};
