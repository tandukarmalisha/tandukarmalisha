const PORTFOLIO_DATA = {
    // 1. Personal Details (Used in Hero, About, and Contact sections)
    personal: {
        name: "Malisha Tandukar",
        role: "BSc.CSIT Graduate",
        degree: "BSc.CSIT",
        email: "tandukarmalisha728@gmail.com",
        location: "Kathmandu, Nepal",
        interests: "QA, Databases, Backend Auth",
        
        // Links for your social media
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        twitter: "https://twitter.com/",
        
        // Hero Section Content
        heroDescription: "Passionate about Software QA, Databases, and Python Development. I enjoy building robust systems with FastAPI and implementing efficient ETL pipelines.",
        
        // Add an image URL here, like: "./assets/my-profile.jpg". Empty means it will use a placeholder text.
        heroImage: "myphoto.jpeg", 
        logoText: "MT.",
        resumeURL: "./resume.pdf" // Leave this as "./resume.pdf", drop your actual resume file in the same folder named "resume.pdf"
    },

    // 2. About Me Section
    about: {
        // Each string represents a separate paragraph.
        paragraphs: [
            "I am a recent graduate with a Bachelor's in Science, Computer Science and Information Technology (BSc.CSIT). Throughout my academic and professional journey, I have developed a strong foundation in software engineering principles, with a particular focus on quality assurance, database management, and backend development using Python.",
            "My internship experience allowed me to bridge the gap between academic theory and industry practice, giving me hands-on exposure to real-world projects involving complex ETL processes and robust API development using FastAPI. I am eager to bring my analytical skills and passion for technology to a dynamic team."
        ]
    },

    // 3. Skills Section
    skills: [
        {
            icon: "fas fa-vial", // FontAwesome class for icons
            title: "Quality Assurance",
            description: "Test planning, manual testing, writing test cases, identifying edge cases, bug tracking, and ensuring software reliability."
        },
        {
            icon: "fas fa-database",
            title: "Databases",
            description: "SQL, PostgreSQL, database design, query optimization, indexing, and maintaining data integrity."
        },
        {
            icon: "fab fa-python",
            title: "Python Development",
            description: "Python 3.x scripting, object-oriented programming, data structures, and algorithms."
        },
        {
            icon: "fas fa-server",
            title: "FastAPI",
            description: "Building high-performance RESTful APIs, routing, dependency injection, and data validation using Pydantic."
        },
        {
            icon: "fas fa-project-diagram",
            title: "ETL Pipelines",
            description: "Extract, Transform, Load processes. Data cleaning, transformation logic, and migrating data between systems."
        },
        {
            icon: "fas fa-code-branch",
            title: "Tools & Tech",
            description: "Git, GitHub, Postman and agile methodologies."
        }
    ],

    // 4. Experience Section
    experience: [
        {
            period: "Nov 2025 - Feb 2026",
            role: "Database Management and Python Development Intern",
            company: "TechNova Solutions (Dummy)",
            tasks: [
                "Completed a 3 months internship in database management and python development.",
                "Worked with PostgreSQL for database management and data querying.",
                "Implemented CRUD operations using Python and FastAPI, interfacing with PostgreSQL databases.",
                "Built ETL pipelines and performed background processing task using Celery."
            ]
        },
        {
            period: "2021 - 2025",
            role: "BSc.CSIT Student",
            company: "Tribhuvan University Affiliated College",
            tasks: [
                "Completed foundational courses in Software Engineering, DBMS, and Network Security.",
                "Completed internship focusing on automated data extraction and reporting."
            ]
        }
    ],

    // 5. Featured Projects
    projects: [
        {
            imageText: "Celery", // Fallback text if no imageURL is provided
            imageURL: "https://images.unsplash.com/photo-1775119223367-03c12e0cbf27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",     // Add an image URL here, like: "./assets/etl-project.jpg" to replace the text
            title: "File Transfer Automation System",
            description: "A Python-based system that automates file transfers by scheduling tasks using Celery, monitors file changes through automated watchers, and manages worker queues efficiently with Redis for reliable and scalable processing.",
            techStack: ["Python", "PostgreSQL", "Redis"],
            link: "https://github.com/tandukarmalisha/file-transfer-automation"
        },
        {
            imageText: "ETL", 
            imageURL: "",
            title: "ETL Pipeline for Data migration",
            description: "A Python-based ETL script that efficiently processes and migrates datasets of over 10,000 records into PostgreSQL, incorporating data cleaning logic to handle inconsistencies and ensure data quality during transformation.",
            techStack: ["Python", "Excel", "PostgreSQL"],
            link: "https://github.com/tandukarmalisha/ETL-Extract-Transform-Load-Operation"
        },
        {
            imageText: "QA", 
            imageURL: "",
            title: "Automated Signup Workflow",
            description: "A Python-based web automation script that simulates user signup workflows using Selenium WebDriver, automates data input, and performs form validation checks to ensure accurate and reliable submission processes.",
            techStack: ["Python", "Jira", "Selenium"],
            link: "https://github.com/tandukarmalisha/signup-automation"
        }
    ]
};
