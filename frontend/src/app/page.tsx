
"use client";
import Image from "next/image";

import { useState } from "react";

const skills = [
  { name: "AWS", group: "Cloud" },
  { name: "Kubernetes", group: "Platform" },
  { name: "Terraform", group: "Cloud" },
  { name: "Docker", group: "Platform" },
  { name: "Python", group: "Engineering" },
  { name: "Linux", group: "Engineering" },
  { name: "Prometheus", group: "Reliability" },
  { name: "Grafana", group: "Reliability" },
  { name: "Helm", group: "Platform" },
  { name: "Argo CD", group: "Platform" },
  { name: "GitOps", group: "Platform" },
  { name: "CI/CD", group: "Engineering" },
];

const projects = [
  {
    number: "01",
    name: "Kubernetes Cluster with kubeadm",
    type: "KUBERNETES ENGINEERING",
    status: "IMPLEMENTED",
    description:
      "A hands-on multi-node Kubernetes cluster built using kubeadm, containerd and Calico. Documenting cluster installation, networking, node configuration and core Kubernetes operations.",
    stack: ["Kubernetes", "kubeadm", "containerd", "Calico", "Linux"],
    link: "https://github.com/mhasif0786/InstallingK8s",
    symbol: "⌘",
  },
  {
    number: "02",
    name: "Reliability Engineering Platform",
    type: "OBSERVABILITY",
    status: "IN PROGRESS",
    description:
      "An engineering platform exploring service health, metrics, alerting, SLI/SLO design and operational visibility.",
    stack: ["Prometheus", "Grafana", "Python", "Kubernetes"],
    link: "",
    symbol: "⌁",
  },
  {
    number: "03",
    name: "SentinelOps",
    type: "AI + SRE",
    status: "CONCEPT",
    description:
      "An AI-assisted SRE control-plane concept for investigating incidents, correlating operational signals and supporting troubleshooting.",
    stack: ["Python", "AI agents", "OpenTelemetry"],
    link: "",
    symbol: "◈",
  },
];

const learning = [
  {
    title: "Database internals",
    description:
      "Storage engines, indexes, transactions, query execution and concurrency.",
    tag: "SYSTEMS",
  },
  {
    title: "Distributed systems",
    description:
      "Consistency, replication, fault tolerance, queues and system design.",
    tag: "ARCHITECTURE",
  },
  {
    title: "AI engineering",
    description:
      "LLMs, agent architectures, tool calling, orchestration and evaluation.",
    tag: "AI / LLM",
  },
  {
    title: "Forward Deployed Engineering",
    description:
      "Customer problem discovery, solution architecture and production delivery.",
    tag: "FDE JOURNEY",
  },
];

const filters = ["All", "Cloud", "Platform", "Reliability", "Engineering"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.group === activeFilter);

  return (
    <main className="portfolio" id="home">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-symbol">M</span>
          <span>
            Mh Asif Kamal<span className="brand-dot">.</span>
          </span>
        </a>

        <nav className="main-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#lab">Infrastructure</a>
          <a href="#journey">FDE Journey</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let&apos;s connect
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="hero-intro">
            <div className="availability">
              <span className="pulse-dot" />
              SITE RELIABILITY ENGINEER
            </div>

            <h1>
              I engineer
              <br />
              <span>reliable systems.</span>
              <br />
              <span className="outline-text">At scale.</span>
            </h1>

            <p className="hero-summary">
              I&apos;m Mh Asif Kamal. I build, automate and operate cloud-native
              infrastructure, bringing reliability engineering and platform
              thinking into production systems.
            </p>

            <div className="hero-tags">
              <span>AWS</span>
              <span>Kubernetes</span>
              <span>Terraform</span>
              <span>Python</span>
            </div>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my engineering <span>↘</span>
              </a>
              <a className="button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-contact-links">
              <a href="tel:+918295664726">+91 8295664726</a>
              <a href="mailto:mhasifkamal@gmail.com">
                mhasifkamal@gmail.com
              </a>
              <a
                href="https://github.com/mhasif0786"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="portrait-area">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />

            <div className="portrait-placeholder">
              <Image
                src="/images/asif-profile.png"
                alt="Mh Asif Kamal"
                fill
                priority
                className="profile-photo"
              />
            </div>

            <div className="portrait-caption">
              <span className="pulse-dot" />
              BUILDING WHAT&apos;S NEXT
            </div>

            <div className="floating-label label-top">CLOUD NATIVE</div>
            <div className="floating-label label-bottom">
              RELIABILITY FIRST
            </div>
          </div>
        </div>

        <div className="hero-bottom-line">
          <span>ENGINEERING · AUTOMATION · RELIABILITY</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="intro-section section-wrap" id="about">
        <div className="section-kicker">01 / THE ENGINEER</div>

        <div className="intro-grid">
          <div>
            <h2>
              Infrastructure is more than servers.
              <span> It&apos;s an engineering discipline.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              I&apos;m a Senior Site Reliability Engineer at Bidgely, working
              across cloud infrastructure, Kubernetes, automation and
              production reliability.
            </p>

            <p>
              I enjoy understanding systems from the inside out: finding
              bottlenecks, improving operational workflows, designing
              infrastructure and solving problems that matter in production.
            </p>

            <a className="text-link" href="#experience">
              Explore my experience ↗
            </a>
          </div>
        </div>
      </section>

      <section className="experience-section section-wrap" id="experience">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 / EXPERIENCE</div>
            <h2>Where I engineer</h2>
          </div>

          <span className="section-side-note">
            PRODUCTION SYSTEMS · REAL-WORLD OPERATIONS
          </span>
        </div>

        <div className="experience-card">
          <div className="experience-marker">
            <span className="pulse-dot" />
            CURRENT ROLE
          </div>

          <div className="experience-main">
            <div>
              <h3>Senior Site Reliability Engineer</h3>
              <p className="company-name">Bidgely</p>
              <p className="experience-description">
                Working on infrastructure reliability, cloud operations,
                Kubernetes, automation, monitoring and production engineering.
              </p>
            </div>

            <div className="responsibility-list">
              <span>Cloud infrastructure</span>
              <span>Kubernetes operations</span>
              <span>Infrastructure as Code</span>
              <span>Monitoring &amp; observability</span>
              <span>Production troubleshooting</span>
              <span>Automation &amp; deployments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-wrap" id="skills">
        <div className="section-heading">
          <div>
            <div className="section-kicker">03 / TECHNICAL EXPERTISE</div>
            <h2>My engineering toolkit</h2>
          </div>

          <span className="section-side-note">
            TOOLS ARE ONLY PART OF THE STORY
          </span>
        </div>

        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter ? "filter active" : "filter"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleSkills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <span className="skill-indicator" />
              <span>{skill.name}</span>
              <small>{skill.group}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="lab-section section-wrap" id="lab">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              04 / INFRASTRUCTURE PLAYGROUND
            </div>
            <h2>Systems thinking. Hands-on engineering.</h2>
          </div>

          <span className="section-side-note">PERSONAL KUBERNETES LAB</span>
        </div>

        <div className="lab-panel">
          <div className="lab-header">
            <div>
              <span className="lab-live-dot" />
              LOCAL CLUSTER OVERVIEW
            </div>
            <span className="lab-badge">LAB ENVIRONMENT</span>
          </div>

          <div className="cluster-visual">
            <div className="cluster-side">
              <div className="cluster-node">
                <small>CONTROL PLANE</small>
                <strong>k8s</strong>
                <span>
                  <i /> Node configured
                </span>
              </div>

              <div className="cluster-node">
                <small>WORKER NODE</small>
                <strong>workernode2</strong>
                <span>
                  <i /> Node configured
                </span>
              </div>
            </div>

            <div className="cluster-center">
              <div className="cluster-ring">K8S</div>
              <strong>Kubernetes</strong>
              <span>Container orchestration</span>
            </div>

            <div className="cluster-side">
              <div className="cluster-node">
                <small>NETWORKING</small>
                <strong>Calico</strong>
                <span>
                  <i /> CNI
                </span>
              </div>

              <div className="cluster-node">
                <small>STORAGE</small>
                <strong>Local Path</strong>
                <span>
                  <i /> Provisioner
                </span>
              </div>
            </div>
          </div>

          <div className="lab-footer">
            <span>Built with kubeadm · containerd · Calico</span>
            <span>
              Illustrative view of the personal lab, not live telemetry
            </span>
          </div>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              05 / SELECTED ENGINEERING WORK
            </div>
            <h2>Systems I&apos;ve engineered and explored</h2>
          </div>

          <span className="section-side-note">
            INFRASTRUCTURE · EXPERIMENTS · PLATFORMS
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <span>
                  {project.number} / {project.type}
                </span>
                <span className="project-symbol">{project.symbol}</span>
              </div>

              <div className="project-status">{project.status}</div>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Explore project ↗
                </a>
              ) : (
                <span className="project-link muted-link">
                  Project details coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-wrap" id="writing">
        <div className="section-heading">
          <div>
            <div className="section-kicker">06 / TECHNICAL WRITING</div>
            <h2>Understanding systems from the inside out.</h2>
          </div>

          <span className="section-side-note">
            LEARNING · DOCUMENTATION · ENGINEERING
          </span>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-topline">
              <span>01 / LINUX &amp; NETWORKING</span>
              <span className="project-symbol">⌘</span>
            </div>

            <div className="project-status">PUBLISHED ON DEV.TO</div>

            <h3>
              Real-world SSH: From Your Laptop to the Linux Kernel
            </h3>

            <p>
              Exploring what actually happens when you establish an SSH
              connection, tracing the journey from your laptop through
              networking and Linux system internals.
            </p>

            <div className="project-stack">
              <span>SSH</span>
              <span>Linux</span>
              <span>Networking</span>
              <span>Systems Engineering</span>
            </div>

            <a
              href="https://dev.to/mhasif0786/-real-world-ssh-from-your-laptop-to-the-linux-kernel-4b1c"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Read technical article ↗
            </a>
          </article>
        </div>
      </section>

      <section className="journey-section section-wrap" id="journey">
        <div className="section-heading">
          <div>
            <div className="section-kicker">07 / WHAT&apos;S NEXT</div>
            <h2>Beyond traditional SRE</h2>
          </div>

          <span className="section-side-note">LEARNING IN PUBLIC</span>
        </div>

        <div className="journey-grid">
          <div className="journey-statement">
            <span className="journey-number">01 — 04</span>

            <h3>
              From operating systems
              <span> to engineering solutions.</span>
            </h3>

            <p>
              I&apos;m expanding my engineering toolkit toward AI systems and
              Forward Deployed Engineering: combining deep technical work
              with real customer problems.
            </p>
          </div>

          <div className="learning-list">
            {learning.map((item, index) => (
              <article className="learning-item" key={item.title}>
                <span className="learning-index">0{index + 1}</span>

                <div>
                  <small>{item.tag}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="learning-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="section-kicker">08 / START A CONVERSATION</div>

        <h2>
          Have a difficult system problem?
          <span> Let&apos;s talk engineering.</span>
        </h2>

        <p>
          Open to conversations about SRE, platform engineering, infrastructure
          and global opportunities.
        </p>

        <div className="contact-actions">
          <a
            className="button-primary"
            href="mailto:mhasifkamal@gmail.com"
          >
            Email me
          </a>

          <a className="button-secondary" href="tel:+918295664726">
            +91 8295664726
          </a>
        </div>

        <div className="contact-bottom">
          <a href="mailto:mhasifkamal@gmail.com">
            mhasifkamal@gmail.com
          </a>

          <a
            href="https://github.com/mhasif0786"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <span>India · Open to global opportunities</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-symbol">M</span>
          <span>
            Mh Asif Kamal<span className="brand-dot">.</span>
          </span>
        </a>

        <span>Designed around engineering, reliability and curiosity.</span>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
