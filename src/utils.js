import replatformImg from "./assets/replatform.png";

export const experienceDetails = [
    {
        headingText: "2023 - Present",
        positionName: "Senior Engineering Manager - Infra Platform",
        companyName: "Pine Labs, Bengaluru, India",
        companyLink: "https://www.pinelabs.com/",
        workDescription:
        "Managed infrastructure platform tooling including Kong API Gateway, Kafka, HA PostgreSQL, Redis cluster, Observability stack(3 TB daily logs ingestion), and Kubernetes at scale(600 Microservices) & infra handling 5-6 million card transactions daily. Led initiatives to reduce infrastructure costs by 30%. Architected the Active-Active Disaster Recovery (DR) infrastructure for multi-country deployment.",
        technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "PostgreSQL", "Redis", "Kafka", "Prometheus", "Grafana", "Ruby on Rails", "Golang", "CI/CD"]
    },
    {
        headingText: "2022 - 2024",
        positionName: "Principal Engineer, Payments",
        companyName: "Finaxar, Bengaluru, India",
        companyLink: "https://www.finaxar.com/",
        workDescription:
        "Overseeing backend development, infrastructure, and business stakeholder management. Developed payments critical workflows for payment reconciliation, automated infrastructure with Terraform, GitLab CI/CD, established system observability and built automation to dynamically scale infra up and down based on traffic patterns to save 10% AWS infra cost. Worked on Ruby On Rails, PostgreSQL, Redis, Sidekiq, Kafka and AWS managed services.",
        technologies: ["Ruby On Rails", "PostgreSQL", "Redis", "Sidekiq", "Kafka", "AWS", "Terraform", "GitLab CI/CD"]
    },
    {
        headingText: "2021 - 2022",
        positionName: "Engineering Manager, Engineering Platform(SRE)",
        companyName: "Vedantu, Bengaluru, India",
        companyLink: "https://www.vedantu.com/",
        workDescription:
        "Managed internal platform engineering(12 members team), overseeing activities, prioritizing projects, and providing guidance to enhance developer productivity, improve system reliability, and ensure observability across engineering product groups. Achieved a 30-40% infra cost reduction, built unit economics breakdown dashboard for the business team, streamlined deployments and application configuration management(Golang Service with basic UI). 80% infra support ticket reduction through automation and self-service solutions, reduction in public APIs response time by 30% by tweaking network params, conducted a comprehensive system health survey focusing on aspects such as code quality (measuring code coverage and implementing automated CI/CD with Helm & ArgoCD for K8s workload), security (system firewall and public accessibility), and overall system health assessment. Improved Adhoc/BAU tasks TAT from 14 days to 1 day by setting up a prioritization process.",
        technologies: ["Golang", "Kubernetes", "Helm", "ArgoCD", "CI/CD"]
    },
    {
        headingText: "2020 - 2021",
        positionName: "Senior Software Engineer, Payments",
        companyName: "Gojek Tech, Bengaluru, India",
        companyLink: "https://www.gojek.io/",
        workDescription:
        "Developed a rules-based engine in GoPay's payment system to effectively combat fraud and prevent promotions abuse for 10 Million transactions a day. The engine was designed with a user-friendly interface, enabling self-served Business Analyst team to create new rules without requiring developer involvement. Migrated Redis instance to Redis cluster for HA and Fault tolerance. Backend system was built in Clojure with PostgreSQL & Redis as data store, with Kafka for async pipeline.",
        technologies: ["Clojure", "PostgreSQL", "Redis", "Kafka"]
    },
    {
        headingText: "2018 - 2020",
        positionName: "Tech Lead Observability",
        companyName: "Gojek, Bengaluru, India",
        companyLink: "https://www.gojek.io/",
        workDescription:
        "Built a Prometheus based central monitoring and alerting platform for the entire organization with the goal to replace the existing Influx based monitoring system with horizontally scalable Cortex setup which handles ~4 Million data points per second and saves 10X cost as compared to any managed SAAS monitoring solutions. Built an inhouse service in Golang for authentication and authorization of monitoring agents handles 300K RPM data ingestion requests & Service inventory application. Used Golang, Redis, Postgres, Grafana Cortex, Grafana, Terraform, Helm, Kubernetes, ArgoCD.",
        technologies: ["Golang", "Redis", "PostgreSQL", "Grafana Cortex", "Grafana", "Terraform", "Helm", "Kubernetes", "ArgoCD"]
    },
    {
        headingText: "2016 - 2018",
        positionName: "Product Engineer, SRE",
        companyName: "Gojek, Bengaluru, India",
        companyLink: "https://www.gojek.io/",
        workDescription:
        "Handled day to day operations, managing logging/monitoring and existing infra, handling upgrades, adding newer services, R&D for newer infrastructure, participating in on-call rotations to maintain uptime of our systems. Automated Kubernetes cluster. Built an RCA platform where Devs can file an RCA with timelines. Actively participated on on-call production support for uptime of more than 400 microservices. Built a ticketing system for developers to streamline the support tasks which involves networking debugging, app infrastructure provisioning.",
        technologies: ["Kubernetes"]
    },
    {
        headingText: "2015 - 2016",
        positionName: "Product Engineer, Transport",
        companyName: "Gojek, Bengaluru, India",
        companyLink: "https://www.gojek.io/",
        workDescription:
        "Worked as a part of the team that migrated Gojek's core transport order management system from a monolith to microservices architecture. Gojek's transport order management system scaled from 10K customers to 45 million customers due to the team's effort. Also implemented the CI/CD, Infra Provisioning, Performance Testing.",
        technologies: ["CI/CD", "Infra Provisioning", "Performance Testing"]
    }
];
    

export const projectDetails = [
    {
        projectName: "Replatforn.dev", 
        projectLink: "https://replatform.dev",
        projectDescription: "RePlatform simplifies Kubernetes deployment, config management, and incident handling. Enjoy real-time monitoring, customizable alerts, and a user-friendly interface to streamline workflows and boost efficiency. Focus on building, we handle the rest.",

        projectImg: replatformImg,

        technologies: ["React", "SCSS", "Redux Toolkit", "Ruby on Rails", "REST Api", "Docker", "Kubernetes", "Helm Char", "Postgres", "AWS"]
    },
]