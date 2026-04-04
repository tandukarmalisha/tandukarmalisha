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
        heroImage: "malisha.jpeg", 
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
            imageText: "ETL", // Fallback text if no imageURL is provided
            imageURL: "https://images.unsplash.com/photo-1775119223367-03c12e0cbf27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",     // Add an image URL here, like: "./assets/etl-project.jpg" to replace the text
            title: "Automated Sales ETL Pipeline",
            description: "A Python-based script that extracts daily sales data from multiple CSV files, transforms the data to handle missing values, and loads it into a PostgreSQL database.",
            techStack: ["Python", "PostgreSQL", "Pandas"],
            link: "#"
        },
        {
            imageText: "API", 
            imageURL: "",
            title: "Library Management API",
            description: "A high-performance REST API built with FastAPI to manage library inventory, user accounts, and book borrowing systems with robust validation.",
            techStack: ["FastAPI", "SQLAlchemy", "Pydantic"],
            link: "#"
        },
        {
            imageText: "QA", 
            imageURL: "",
            title: "E-Commerce Testing Suite",
            description: "A comprehensive test plan and manual test case repository designed for an e-commerce platform, covering functional, usability, and edge cases.",
            techStack: ["TestRail", "Jira", "Postman"],
            link: "#"
        }
    ]
};
