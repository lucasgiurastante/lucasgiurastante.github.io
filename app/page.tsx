import Image from "next/image";
import Link from "next/link";

const basePath = ""; // Mirror next.config.ts basePath ("/REPO" only for GitHub Pages project sites)

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            LUCAS_G
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">EXPERIENCE</Link>
            <Link href="#portfolio" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PORTFOLIO</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#education" className="hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)] transition-all">EDUCATION</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
              OPEN TO WORK — BUENOS AIRES, AR
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              LUCAS LEONEL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient-x">GIURASTANTE</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300/90 tracking-widest uppercase font-bold">
              SAP Data &amp; Analytics Analyst
            </p>
          </div>
          <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-fuchsia-500/50 pl-6">
            2+ years in SAP BW/4HANA, reporting and enterprise systems — across development, testing and production.
            From Service Desk leadership to SAP integration and data modeling. Now expanding into cloud, data analytics and AI-driven solutions.
          </p>
          <div className="pt-8 flex flex-wrap gap-6">
            <Link
              href="#contact"
              className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/50 text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET IN TOUCH <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
            <a
              href="https://www.linkedin.com/in/lucasgiurastante"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-fuchsia-500/50 text-fuchsia-300 font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-900/30 transition-all hover:shadow-[0_0_20px_rgba(232,121,249,0.4)]"
            >
              LINKEDIN
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // EXPERIENCE
            </h2>
            <span className="text-xs font-mono text-cyan-700">14+ years in IT, from support to SAP</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="SAP_FIORI_MIGRATION"
              description="Globant x Mondelez. Training & Change Analyst: end-user materials for SAP GUI to Fiori transition, VILT sessions, AI-accelerated content with NotebookLM, Gemini and Copilot."
              tags={["FIORI", "TRAINING", "VILT"]}
              color="cyan"
              href="#"
            />
            <ProjectCard
              title="SAP_BW4HANA"
              description="Globant x Vital. BW Analyst across DEV, QA and PROD: Advanced DSOs, Calculation Views, CompositeProviders and BEx Queries integrating BW with S/4HANA."
              tags={["BW/4HANA", "HANA", "ADSO"]}
              color="fuchsia"
              href="#"
            />
            <ProjectCard
              title="JDE_DEVELOPER"
              description="Globant x Cordis. Oracle JD Edwards developer: UBEs generating XML for bank payments, custom applications and reports, BI Publisher."
              tags={["JDE", "UBE", "BIPUBLISHER"]}
              color="purple"
              href="#"
            />
            <ProjectCard
              title="SERVICE_DESK_LEAD"
              description="Cognizant. Technical Lead: SAP R/3, SRM, AS400 and corporate apps administration, team-wide QA, knowledge base, Excel dashboards and action plans."
              tags={["SAP_R3", "LEADERSHIP", "QA"]}
              color="yellow"
              href="#"
            />
          </div>

          {/* Career log */}
          <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
            <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">CAREER_LOG</h3>
            <ul className="space-y-3 font-mono text-sm text-cyan-200/70">
              <CareerRow company="GLOBANT" role="SAP Training & Change / BW 4HANA / JDE Developer" period="2021 — PRESENT" />
              <CareerRow company="COGNIZANT" role="Service Desk Technical Lead / Analyst" period="2019 — 2021" />
              <CareerRow company="MEGATECH" role="Help Desk Analyst — enterprise clients" period="2013 — 2019" />
              <CareerRow company="MONITS" role="Java Developer Trainee — Scrum / Linux" period="2011" />
            </ul>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-20 space-y-12 border-t border-cyan-900/30">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              // PORTFOLIO
            </h2>
            <span className="text-xs font-mono text-cyan-700">ABAP Cloud + clásico + Datasphere, código + evidencia</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="ZRAP_SALES"
              description="RAP managed BO pedidos Z: behavior, validation importe>0, action aprobar, OData V4 + Fiori Elements."
              tags={["RAP", "ODATA", "FIORI"]}
              color="cyan"
              href="https://github.com/lucasgiurastante/sap-datasphere-portfolio/tree/main/01%20-%20sap-abap-portfolio/05-rap-ventas"
            />
            <ProjectCard
              title="ZCDS_COSTS"
              description="CDS cube + analytical query + virtual element + DCL por país."
              tags={["CDS", "ANALYTICS", "DCL"]}
              color="fuchsia"
              href="https://github.com/lucasgiurastante/sap-datasphere-portfolio/tree/main/01%20-%20sap-abap-portfolio/06-cds-costes"
            />
            <ProjectCard
              title="ZSD_ENHANCE"
              description="Validación crédito SD en exit/BADI + ALV OO hotspot + wrapper BAPI + log ZBAL."
              tags={["BADI", "ALV", "BAPI"]}
              color="purple"
              href="https://github.com/lucasgiurastante/sap-datasphere-portfolio/tree/main/01%20-%20sap-abap-portfolio/07-classic-sd-alv"
            />
            <ProjectCard
              title="DATASPHERE_TRIAL"
              description="4 objetos deployados tenant real: Replication Flow, Data Flow, Graphical View, SQL View."
              tags={["DATASPHERE", "HANA", "TRIAL"]}
              color="cyan"
              href="https://github.com/lucasgiurastante/sap-datasphere-portfolio/tree/main/04-datasphere-trial"
            />
            <ProjectCard
              title="BW_MIGRATION"
              description="Mapeo BW→BW/4HANA→Datasphere validado en tenant + PDF 2 páginas."
              tags={["BW", "ADSO", "PDF"]}
              color="yellow"
              href="https://github.com/lucasgiurastante/sap-datasphere-portfolio/tree/main/02-bw-migration"
            />
            <ProjectCard
              title="DATA_QUALITY"
              description="Controles drift Pandas+SQL con self-check, reporte reproducible."
              tags={["PYTHON", "SQL", "DQ"]}
              color="purple"
              href="https://github.com/lucasgiurastante/sap-datasphere-portfolio/tree/main/03-data-quality"
            />
          </div>
        </section>

        {/* About */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>

            <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />

              <Image
                src={`${basePath}/me.png`}
                alt="Lucas Leonel Giurastante"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <p>
              Enterprise systems specialist with a rare combo: <strong className="text-fuchsia-400 font-bold">deep SAP/JDE technical work plus Service Desk leadership.</strong> I
              translate between business and systems — training users on Fiori, modeling data in BW/4HANA, and keeping critical
              apps running. Trilingual: Spanish native, English and Portuguese advanced.
            </p>
            <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> SAP BW/4HANA, Fiori, Cloud ALM</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> SQL, Analysis for Office</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> JDE EnterpriseOne, BI Publisher</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> JavaScript / Node / React</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Agile / Scrum, Jira</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> AI tools: Gemini, Copilot</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Communication</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Teamwork</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Problem-solving</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Adaptability</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Analytical thinking</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Stakeholder collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20 space-y-12 border-t border-cyan-900/30">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
              // EDUCATION
            </h2>
            <span className="text-xs font-mono text-cyan-700">Always learning</span>
          </div>
          <ul className="space-y-3 font-mono text-sm text-cyan-200/70">
            <CareerRow company="CODO A CODO" role="Full Stack Programming — JavaScript / Node / React" period="2022" />
            <CareerRow company="UDEMY" role="Web Programming — HTML5, CSS3, JS, jQuery, Bootstrap, MySQL" period="2021" />
            <CareerRow company="EDUCACION IT" role="Web programming and development" period="2016" />
            <CareerRow company="CMD" role="Java Developer — 520h intensive, OOP, Hibernate" period="2011" />
            <CareerRow company="TRADE EMPLOYEE CENTER" role="Network Administrator Technician" period="2009" />
            <CareerRow company="TECHNICAL SCHOOL No.6" role="Organizational management technician" period="2005 — 2008" />
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">TALK?</span>
            </h2>
            <p className="text-cyan-200/60 text-lg">
              SAP Data &amp; Analytics, Fiori adoption, JDE development or Service Desk leadership — based in Buenos Aires, working worldwide.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:yurastantelucas@gmail.com"
                className="px-10 py-4 bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-sm hover:bg-fuchsia-500 transition-all hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] hover:scale-105 duration-300 clip-path-polygon"
              >
                yurastantelucas@gmail.com
              </a>
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://www.linkedin.com/in/lucasgiurastante" label="LINKEDIN" />
                <SocialLink href="mailto:yurastantelucas@gmail.com" label="EMAIL" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>LUCAS LEONEL GIURASTANTE — BUENOS AIRES, AR · Template by <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub for Beginners</a></p>
      </footer>
    </div>
  );
}

function CareerRow({ company, role, period }: { company: string, role: string, period: string }) {
  return (
    <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 border-l border-cyan-900/50 pl-4">
      <span className="text-fuchsia-400 font-bold tracking-widest">{company}</span>
      <span className="flex-1">{role}</span>
      <span className="text-cyan-700">{period}</span>
    </li>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;

  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
