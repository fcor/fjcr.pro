import "./styles.css";
import styles from "./Projects.module.css";
import SectionHeading from "../SectionHeading";
import ProceduralBackdrop from "../ProceduralBackdrop";
import CompactProjectCard from "./CompactProjectCard";
import ProjectCard from "./ProjectCard";
import molecularWeb from "../../images/mw.webp";
import nuestrasEsperanzas from "../../images/ne1.webp";
import gestures from "../../images/gestures.webp";
import duality1 from "../../images/duality1.webp";
import culpable1 from "../../images/culpable1.webp";
import draw1 from "../../images/draw1.webp";
import pdb2ar1 from "../../images/pdb2ar1.webp";
import mwxr1 from "../../images/mwxr1.webp";

const projects = [
  {
    featured: true,
    category: "Mixed Reality",
    url: "/molecularwebxr",
    title: "MolecularWebXR",
    titleLines: ["Molecular", "WebXR"],
    description:
      "A multi-user mixed reality app where scientists can discuss and manipulate molecular structures in real time",
    image: mwxr1,
    imageAlt: "A multi-user MolecularWebXR session visualizing a molecular structure",
  },
  {
    category: "Augmented Reality",
    url: "/molecularweb",
    title: "MoleculARweb",
    titleLines: ["MoleculAR", "web"],
    description: "A website for chemistry and structural biology education through augmented reality.",
    image: molecularWeb,
    imageAlt: "MoleculARweb displaying an augmented reality molecular structure",
  },
  {
    category: "3D & Augmented Reality",
    url: "/pdb2ar",
    title: "PDB2AR",
    titleLines: ["PDB2AR"],
    description:
      "A tool where scientists and educators can build their own WebXR scenes from PDB files, PDB entries or uploading their own 3D models.",
    image: pdb2ar1,
    imageAlt: "A PDB2AR immersive molecular visualization with hand controls",
  },
  {
    featured: true,
    category: "Mixed Reality & AI",
    url: "/drawing-inspiration",
    title: "Drawing Inspiration",
    titleLines: ["Drawing", "Inspiration"],
    description:
      "A Mixed Reality Approach to Artistic Visualization for Home Decor. 1st place at Develop the Future: Meta & AWS Hackathon for XR & GenAI.",
    image: draw1,
    imageAlt: "Drawing Inspiration preview showing mixed reality artwork",
  },
  {
    category: "Generative Design",
    url: "/nuestras-esperanzas",
    title: "Nuestras Esperanzas",
    titleLines: ["Nuestras", "Esperanzas"],
    description:
      'Generative artwork inspired by the amazing song "Nuestras esperanzas" by Grito, one of my favorite bands. In collaboration with the band, we released a limited edition of 12 prints and some postcards.',
    image: nuestrasEsperanzas,
    imageAlt: "A person holding a Nuestras Esperanzas generative art print",
  },
  {
    featured: true,
    category: "Live Coding",
    url: "/duality",
    title: "Duality",
    titleLines: ["Duality"],
    description:
      "A live performance intertwining generative algorithms, analog remixing, and audiovisual improvisation into a distinctive and captivating experience.",
    image: duality1,
    imageAlt: "Duality live audiovisual performance",
  },
  {
    category: "Generative Design",
    url: "/culpable",
    title: "Culpable",
    titleLines: ["Culpable"],
    description: 'I was invited by Grito to create an artwork for one the songs from their new album "8".',
    image: culpable1,
    imageAlt: "Culpable geometric album artwork",
  },
  {
    category: "Open Source & Augmented Reality",
    url: "https://github.com/fcor/arjs-gestures",
    external: true,
    title: "AR.js Gestures",
    titleLines: ["AR.js", "Gestures"],
    description:
      "Open source library for adding gesture controls to manipulate an AR.js scene using known patterns like pinch, zoom and drag.",
    image: gestures,
    imageAlt: "A phone using touch gestures to manipulate an augmented reality object",
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <main className={styles.work}>
      <ProceduralBackdrop variant="projects" />
      <div className={`site-container ${styles.contentLayer}`}>
        <SectionHeading as="h1">Selected Work</SectionHeading>

        <div className={styles.featuredProjects}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} reversed={index % 2 === 1} />
          ))}
        </div>

        <section className={styles.moreWork} aria-labelledby="more-work-heading">
          <SectionHeading as="h2" id="more-work-heading">
            More Work
          </SectionHeading>

          <div className={styles.compactGrid}>
            {moreProjects.map((project) => (
              <CompactProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
