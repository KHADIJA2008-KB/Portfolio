import portfolioData from "@/data/portfolioData.json";

type PortfolioProject = {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  metricsOrResults: string[];
  links: { github: string; demo: string };
};

type PortfolioData = {
  personalInfo: {
    name: string;
    role: string;
    location: string;
    targetPositions: string[];
  };
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    aiMlDomains: string[];
  };
  projects: PortfolioProject[];
};

function formatProject(project: PortfolioProject) {
  return `\nPROJECT: ${project.name}\nTAGLINE: ${project.tagline}\nDESCRIPTION: ${project.description}\nTECHNOLOGIES: ${project.technologies.join(", ")}\nKEY FEATURES:\n- ${project.keyFeatures.join("\n- ")}\nMETRICS / RESULTS:\n- ${project.metricsOrResults.join("\n- ")}\nLINKS:\n- GitHub: ${project.links.github}\n- Demo: ${project.links.demo}\n`;
}

const data = portfolioData as PortfolioData;

export const PORTFOLIO_CONTEXT = `PERSONAL INFO:\n- Name: ${data.personalInfo.name}\n- Role: ${data.personalInfo.role}\n- Location: ${data.personalInfo.location}\n- Target positions: ${data.personalInfo.targetPositions.join(", ")}\n\nSKILLS:\n- Languages: ${data.skills.languages.join(", ")}\n- Frameworks: ${data.skills.frameworks.join(", ")}\n- Tools: ${data.skills.tools.join(", ")}\n- AI/ML domains: ${data.skills.aiMlDomains.join(", ")}\n\n${data.projects.map(formatProject).join("\n")}`;

export function getRelevantProjectContext(query: string) {
  const normalized = query.toLowerCase();
  const matches = data.projects.filter((project) => {
    const haystack = [
      project.name,
      project.tagline,
      project.description,
      ...project.technologies,
      ...project.keyFeatures,
    ]
      .join(" ")
      .toLowerCase();
    return (
      normalized.includes(project.name.toLowerCase()) ||
      normalized.includes(project.tagline.toLowerCase()) ||
      normalized.includes(project.description.toLowerCase()) ||
      project.technologies.some((tech) => normalized.includes(tech.toLowerCase())) ||
      project.keyFeatures.some((feature) => normalized.includes(feature.toLowerCase()))
    );
  });

  if (matches.length === 0) {
    return "";
  }

  return matches.map(formatProject).join("\n");
}
