# Content Inventory

_Created: 2026-09-07 — sourced from resume (canonical) and existing pratish.json_

## Career

### Qwalton Private Limited

- **Role**: Full Stack Engineer
- **Period**: September 2025 – Present
- **Location**: Bengaluru, Karnataka
- **Domain**: Fintech / AI-powered trading systems
- **Summary**: Maintaining and extending production-grade AI-powered trading systems with real-time users, strict uptime and latency requirements.
- **Responsibilities**:
    - Maintain and enhance production AI-powered trading systems serving real-time users under strict uptime and latency requirements
    - Optimize React component rendering, API communication, and data synchronization using TypeScript and Redux
    - Architect scalable, maintainable frontend component systems and enforce coding standards through peer code reviews
    - Contribute to backend and frontend stabilization efforts
- **Technologies**: React, TypeScript, Redux, Node.js, WebSockets, Real-Time Systems
- **Key Metrics**: 45% faster page loads on high-traffic user flows; up to 10× performance improvements post-release
- **Ownership**: Production system maintenance and enhancement

### Celstream Technologies

- **Role**: Software Engineer
- **Period**: November 2023 – September 2025
- **Location**: Bengaluru, Karnataka
- **Domain**: Data-intensive applications / enterprise software
- **Summary**: Built performance-focused full-stack features, real-time interfaces, RESTful APIs, and JWT authentication across production systems.
- **Responsibilities**:
    - Design real-time event-driven UIs using React and WebSockets
    - Improve frontend bundle performance through code splitting, caching, and async request tuning
    - Build and integrate RESTful APIs using Node.js (Express) and Flask
    - Implement JWT-based authentication flows for secure user sessions
    - Mentor 3 junior engineers and interns (clean code, Git, debugging)
    - Deliver major feature end-to-end recognized company-wide
- **Technologies**: React, TypeScript, Node.js (Express), Flask, WebSockets, JWT, PostgreSQL
- **Key Metrics**: 40% UI responsiveness improvement; 25% frontend bundle performance improvement
- **Ownership**: Feature delivery, mentoring, authentication implementation

---

## Technologies

### Backend

| Technology         | Evidence                                               | Notes                                 |
| ------------------ | ------------------------------------------------------ | ------------------------------------- |
| Node.js (Express)  | Celstream (REST APIs), Data Monitor Dashboard, QR Dine | Production use                        |
| Python (Flask)     | Celstream (API integration), MyAlgoAI (trade logic)    | Production use                        |
| REST APIs          | Celstream, all projects                                | Consistent evidence                   |
| WebSockets         | Celstream (real-time UIs), MyAlgoAI                    | Production real-time                  |
| JWT Authentication | Celstream, QR Dine                                     | Security implementation               |
| Microservices      | Listed as skill                                        | No specific project yet — placeholder |
| C#                 | Listed as skill                                        | No specific project yet — placeholder |
| .NET Core          | Listed as skill                                        | No specific project yet — placeholder |
| Go                 | Listed as skill                                        | No specific project yet — placeholder |

### Frontend

| Technology   | Evidence                         | Notes                 |
| ------------ | -------------------------------- | --------------------- |
| React        | Qwalton, Celstream, all projects | Primary frontend tech |
| TypeScript   | Qwalton, Celstream, all projects | Consistent across all |
| Redux        | Qwalton (trading system state)   | Production use        |
| Next.js      | QR Dine, this portfolio          | Production use        |
| HTML5 / CSS3 | All projects                     | Foundational          |

### Databases

| Technology | Evidence                          | Notes                   |
| ---------- | --------------------------------- | ----------------------- |
| PostgreSQL | Data Monitor Dashboard, Celstream | Backend latency work    |
| MongoDB    | QR Dine, MyAlgoAI                 | SaaS + trading          |
| MySQL      | Listed as skill                   | No specific project yet |

### Cloud & DevOps

| Technology             | Evidence                   | Notes                |
| ---------------------- | -------------------------- | -------------------- |
| AWS API Gateway        | Listed (resume skills)     | No detailed project  |
| AWS DynamoDB           | Listed (resume skills)     | No detailed project  |
| Docker                 | Listed as skill            | Deployment workflows |
| GitHub Actions (CI/CD) | This portfolio CI, QR Dine | Active use           |

### Azure

| Technology         | Evidence                 | Notes                     |
| ------------------ | ------------------------ | ------------------------- |
| Azure Fundamentals | Certification (May 2026) | Certified, no project yet |

---

## Projects

### MyAlgoAI — Automated Trading Platform

- **Problem**: Production trading platform needed real-time broker integrations and reliable monitoring interfaces
- **Context**: AI-powered algorithmic trading system serving live financial users with strict latency requirements
- **My Role**: Full Stack Engineer (frontend interfaces + Python backend services)
- **Responsibilities**: Maintained and extended broker integrations; built real-time data visualization; contributed Python-based trade logic services
- **Technologies**: React, TypeScript, WebSockets, Python (Flask), Node.js
- **Architecture**: Real-time WebSocket streams from broker APIs → Python trade logic services → React visualization dashboard
- **Challenges**: Strict latency requirements; real-time data synchronization across multiple broker feeds
- **Outcome**: Platform reliably serving production financial users with real-time monitoring
- **Metrics**: Part of 10× performance improvements post-stabilization
- **Evidence**: Production system at Qwalton; no public link (financial system)

### Data Monitor Dashboard — Real-Time Metrics Dashboard

- **Problem**: Engineering teams needed a live view into distributed service performance metrics
- **Context**: Monitoring dashboard for operational metrics across distributed services at Celstream
- **My Role**: Builder (designed and implemented the full dashboard)
- **Responsibilities**: Built streaming React dashboard; redesigned API call patterns; optimized component rendering
- **Technologies**: React, Node.js, PostgreSQL, WebSockets
- **Architecture**: Distributed services emit metrics → Node.js aggregation layer → PostgreSQL persistence → React streaming dashboard
- **Challenges**: 90% backend latency reduction required redesigning the API call patterns entirely
- **Decisions**: Moved from polling to WebSocket streaming for live data; redesigned Node.js/PostgreSQL query structure
- **Outcome**: Real-time operational visibility for distributed system health
- **Metrics**: 50% page load time reduction; 90% backend latency reduction
- **Evidence**: Internal production system at Celstream

### QR Dine — Multi-Branch Restaurant SaaS

- **Problem**: Restaurant chains needed a unified platform to manage QR-code-based ordering across multiple branches
- **Context**: Multi-tenant SaaS serving restaurant administrators and end customers
- **My Role**: Sole developer (full-stack)
- **Responsibilities**: Built multi-tenant platform with JWT auth and RBAC; optimized for high-concurrency scenarios
- **Technologies**: React, Next.js, Node.js, MongoDB, JWT, Role-Based Access Control
- **Architecture**: Multi-tenant Next.js frontend → Node.js API layer → MongoDB → JWT-secured admin and client interfaces
- **Decisions**: JWT + RBAC for multi-role access (admin vs. customer); Next.js for SSR and SEO on restaurant menus
- **Challenges**: High-concurrency ordering flows across multiple branches with shared data layer
- **Outcome**: Live, publicly accessible SaaS platform
- **Evidence**: Live at qr-dine.vercel.app; GitHub: github.com/Pratish10/qr-dine

---

## Open Source Contributions

### rsvp.kim — Team Shiksha

- **Project**: Event management platform
- **Organization**: Team Shiksha
- **Contribution**: Full card and email customization, step validation, mobile previews, and UI improvements to the event creation flow
- **URL**: rsvp.kim
- **Evidence**: Changelog entry with collaborator PARTHARORA383

---

## Certifications

| Title                                   | Issuer    | Date     | URL                        |
| --------------------------------------- | --------- | -------- | -------------------------- |
| React - The Complete Guide 2023         | Udemy     | Nov 2023 | udemy.com cert link        |
| Frontend Development                    | —         | Feb 2022 | Google Drive cert link     |
| Microsoft Certified: Azure Fundamentals | Microsoft | May 2026 | Microsoft credentials page |

---

## Education

- **Degree**: Bachelor of Technology, Information Technology
- **Institution**: Shri Shankaracharya Technical Campus, India
- **Period**: 2019 – 2023
- **Score**: 8.3 CGPA

---

## Recognition

- Recognized at Celstream Technologies for delivering a major feature implementation, showcasing innovation and systematic problem-solving

---

## Impact Metrics (verified from resume)

| Metric                | Value         | Context                                                                     |
| --------------------- | ------------- | --------------------------------------------------------------------------- |
| Page load improvement | 45%           | Qwalton — high-traffic React/TypeScript optimization                        |
| Performance gains     | 10×           | Qwalton — post-stabilization                                                |
| UI responsiveness     | 40%           | Celstream — WebSocket-driven event interfaces                               |
| Dashboard load time   | 50%           | Celstream — component-level optimization                                    |
| Backend latency       | 90% reduction | Celstream — API pattern redesign with Node.js/PostgreSQL                    |
| API speedup           | 95%+          | Neonflake internship — Redis-backed JWT API (not on resume, do not include) |
| Team mentoring        | 3 engineers   | Celstream — production-ready in 4 weeks                                     |
