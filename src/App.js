export default function JaganPortfolio() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const skills = [
    'C#',
    '.NET 8',
    'ASP.NET Core',
    'Web API',
    'MVC',
    'Blazor',
    'MudBlazor',
    'Angular 14',
    'TypeScript',
    'SQL Server',
    'Oracle',
    'MongoDB',
    'Cosmos DB',
    'Azure Functions',
    'Azure API Management',
    'Azure DevOps',
    'Azure Logic Apps',
    'Azure Data Factory',
    'Microservices',
    'OAuth2',
    'JWT',
    'WCF',
    'Entity Framework Core',
    'Docker',
    'Kubernetes',
    'RabbitMQ',
    'MassTransit',
  ];

  const highlights = [
    '6+ years building enterprise applications',
    'County and enterprise modernization experience',
    'Blazor, Angular, .NET, and Azure delivery',
    'Microservices, secure APIs, and CI/CD pipelines',
  ];

  const projects = [
    {
      title: 'AI Document Intelligence',
      description:
        'Built an API-driven platform that extracts entities, classifies document types, and generates summaries from unstructured documents, combining intelligent document handling with production-ready backend design.',
      tech: 'FastAPI, OpenAI, PostgreSQL, Docker',
      link: 'https://github.com/JaganAlleni/ai-document-intelligence',
    },
    {
      title: 'Real-Time Financial Dashboard',
      description:
        'Developed a live financial dashboard that streams market data with responsive charts, WebSocket updates, and real-time views designed for fast-moving analytical workflows.',
      tech: 'React, FastAPI, Redis, WebSockets, Docker',
      link: 'https://github.com/JaganAlleni/realtime-financial-dashboard',
    },
    {
      title: 'Property Information Management Modernization',
      description:
        'Contributed to modernizing county-scale property and document workflows by moving legacy modules into Blazor, .NET Core, Angular, and Azure-integrated services built for security, maintainability, and long-term scale.',
      tech: 'ASP.NET Core, Blazor, Angular 14, Azure Functions, SQL Server',
      link: 'https://github.com/JaganAlleni',
    },
  ];

  const experiences = [
    {
      company: 'San Bernardino County, CA',
      role: 'C# .NET Full Stack Developer / Angular Developer',
      period: 'Apr 2023 – Present',
      points: [
        'Migrated legacy MVC Framework modules and WinForms desktop components into modern Blazor applications using MudBlazor, improving maintainability, UI consistency, and long-term usability.',
        'Developed and enhanced the Property Information Management System using ASP.NET Core, MVC, Blazor, Angular 14, Entity Framework Core, and Azure Functions to support scalable and secure workflows.',
        'Built secure REST and WCF services for real-time integration between Laserfiche, SQL Server, Azure components, and internal county systems.',
        'Leveraged Azure Logic Apps, Azure Data Factory, and Azure Storage to automate ETL workflows, document processing, and cross-system synchronization.',
        'Managed Azure DevOps CI/CD pipelines across Development, QA, Staging, and Production environments while supporting documentation, deployment standards, and production stability.',
      ],
    },
    {
      company: 'Santa Clara County, CA',
      role: 'C# .NET Full Stack Developer',
      period: 'Feb 2022 – Mar 2023',
      points: [
        'Delivered full-stack solutions using .NET 8, .NET Framework 4.8, ASP.NET Core MVC, Web API, Entity Framework Core, Angular 14, Blazor, and Bootstrap.',
        'Built microservices and REST APIs exposed through Azure API Management for secure and scalable communication across distributed applications.',
        'Used Azure Service Bus, Azure Functions, App Service, and Key Vault to support reliable event-driven workflows and cloud orchestration.',
        'Implemented CQRS and Event Sourcing patterns to improve scalability and separate transactional command pipelines from query operations.',
        'Strengthened engineering quality using Jasmine, Karma, Cypress, Git branching strategy, pull request reviews, and Azure DevOps validations.',
      ],
    },
    {
      company: 'Genesis Infocom, Bangalore, India',
      role: 'C# .NET Full Stack Developer / Angular Developer',
      period: 'Aug 2019 – Dec 2021',
      points: [
        'Developed enterprise applications using ASP.NET, C#, MVC, Web API, Angular 9, JavaScript, HTML5, and CSS to deliver responsive and intuitive user experiences.',
        'Designed SQL Server and MongoDB database objects including stored procedures, aggregations, triggers, and schema components that improved performance and data reliability.',
        'Built microservices with ASP.NET Core, Docker, and Kubernetes to support scalable distributed deployments.',
        'Automated AWS deployments on EC2, S3, and RDS using PowerShell and CI/CD scripts, reducing manual effort and improving reliability.',
        'Implemented RabbitMQ and MassTransit for asynchronous service communication and supported production systems through performance fixes and system enhancements.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-400 selection:text-slate-950">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(12px) translateY(-8px); }
        }
        @keyframes shimmer {
          0% { opacity: 0.45; }
          50% { opacity: 0.8; }
          100% { opacity: 0.45; }
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" style={{ animation: 'shimmer 4s ease-in-out infinite' }} />
        <div className="absolute top-1/3 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" style={{ animation: 'drift 7s ease-in-out infinite' }} />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.07),transparent_28%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="text-2xl font-extrabold tracking-wide text-white transition hover:text-cyan-300 md:text-3xl">
            Jagan Mohan Rao
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:-translate-y-0.5 hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-16 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                .NET Full Stack Developer
              </p>
              <h1 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-tight text-white md:text-5xl xl:text-6xl">
                Building enterprise software that modernizes legacy systems and delivers real business impact.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                I am Jagan Mohan Rao, a full stack engineer with 6+ years of experience building secure, scalable, and high-performing applications using C#, ASP.NET Core, Web API, Blazor, Angular, SQL Server, and Azure. I focus on system modernization, API design, cloud integration, and enterprise delivery that helps organizations move faster with more reliable technology.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(34,211,238,0.45)]">
                  Explore Projects
                </a>
                <a href="#experience" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                  View Experience
                </a>
                <a
                  href="https://github.com/JaganAlleni"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                >
                  GitHub Profile
                </a>
                <a href="#contact" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                  Let’s Connect
                </a>
              </div>
            </div>

            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl" style={{ animation: 'float 6s ease-in-out infinite' }}>
              <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-cyan-400/20 via-transparent to-fuchsia-400/20 opacity-80 blur-sm" />
              <div className="relative rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <h2 className="text-4xl font-black text-white md:text-5xl">Jagan Mohan Rao</h2>
                <p className="mt-3 text-lg leading-8 text-cyan-200">Full Stack Engineer • .NET • Angular • Blazor • Azure</p>
                <div className="mt-6 grid gap-3">
                  {highlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition duration-300 hover:translate-x-1 hover:border-cyan-300/40 hover:bg-cyan-400/10">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-cyan-400/10 p-4">
                    <p className="text-sm text-slate-400">Focus</p>
                    <p className="mt-1 font-semibold text-white">Modernization & APIs</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-fuchsia-400/10 p-4">
                    <p className="text-sm text-slate-400">Cloud</p>
                    <p className="mt-1 font-semibold text-white">Azure & CI/CD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_18px_60px_rgba(34,211,238,0.08)]">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">About Me</p>
              <h2 className="mt-4 text-4xl font-bold text-white">I help organizations modernize software with confidence.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                My work sits at the intersection of engineering depth and business reliability. I build full stack applications, secure APIs, cloud-based integrations, and modernization solutions that improve maintainability, performance, and long-term scalability. I bring strong hands-on experience across county systems, enterprise workflows, and production environments where stability matters just as much as innovation.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_18px_60px_rgba(217,70,239,0.08)]">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">What I Bring</p>
              <div className="mt-6 space-y-5 text-slate-200">
                <div>
                  <h3 className="text-xl font-semibold text-white">Enterprise Development</h3>
                  <p className="mt-2 leading-7 text-slate-300">I build scalable applications using C#, ASP.NET Core, Web API, MVC, Blazor, Angular, and SQL Server for environments where reliability and maintainability are critical.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Architecture & Security</h3>
                  <p className="mt-2 leading-7 text-slate-300">I apply OOP, SOLID principles, design patterns, microservices, OAuth2, JWT, Azure AD, and RBAC to create secure, modular systems.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Cloud & Delivery</h3>
                  <p className="mt-2 leading-7 text-slate-300">I work with Azure Functions, API Management, Logic Apps, Data Factory, DevOps pipelines, and automated deployments to move software from concept to production smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Core Stack</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Technologies I use to build modern software</h2>
            </div>
            <a href="#projects" className="hidden text-sm text-slate-400 transition hover:text-cyan-300 md:block">See projects</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-[0_10px_30px_rgba(34,211,238,0.08)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Featured Work</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Projects that reflect how I solve real engineering problems</h2>
            </div>
            <a href="#home" className="hidden text-sm text-slate-400 transition hover:text-cyan-300 md:block">Back to top</a>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_18px_60px_rgba(34,211,238,0.15)]"
              >
                <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
                  Featured Project
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <p className="mt-5 text-sm text-slate-400">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-cyan-300 transition group-hover:translate-x-1 group-hover:text-white"
                >
                  Explore Project
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Experience</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Where I’ve delivered enterprise value</h2>
            </div>
            <a href="#contact" className="hidden text-sm text-slate-400 transition hover:text-cyan-300 md:block">Get in touch</a>
          </div>
          <div className="mt-10 space-y-8">
            {experiences.map((job) => (
              <div key={`${job.company}-${job.period}`} className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_18px_60px_rgba(34,211,238,0.08)]">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                    <p className="mt-1 text-lg text-slate-300">{job.role}</p>
                  </div>
                  <p className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-fuchsia-400/10 p-10 text-center backdrop-blur-xl md:p-14 hover:shadow-[0_18px_60px_rgba(217,70,239,0.08)] transition duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.14),transparent_35%)]" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Contact</p>
              <h2 className="mt-4 text-5xl font-black text-white md:text-6xl">Let’s build something meaningful.</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I’m open to opportunities where I can contribute as a .NET full stack developer, cloud-focused engineer, or modernization specialist helping teams ship secure, scalable, and maintainable software.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:JAGANALLENI20@gmail.com" className="rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_12px_40px_rgba(34,211,238,0.3)]">
                  Send Message
                </a>
                <a href="tel:9804992665" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                  Call
                </a>
                <a
                  href="https://github.com/JaganAlleni"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500 md:px-10">
        © 2026 Jagan Mohan Rao
      </footer>
    </div>
  );
}
