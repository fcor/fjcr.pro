import { NavLink } from "react-router-dom";
import BrowserFrame from "../../ProjectDetail/BrowserFrame";
import {
  ProjectCopy,
  ProjectHeader,
  ProjectNavigation,
  ProjectPage,
  ProjectSection,
  ProjectSectionHeading,
  ProjectStatement,
} from "../../ProjectDetail";
import pdb2ar1 from "../../../images/pdb2ar1.webp";
import pdb2ar2 from "../../../images/pdb2ar2.webp";
import pdb2ar3 from "../../../images/pdb2ar3.webp";
import pdb2ar4 from "../../../images/pdb2ar4.webp";
import pdb2ar6 from "../../../images/pdb2ar6.mp4";
import styles from "./PDB2AR.module.css";

const PDB2AR = () => (
  <ProjectPage>
    <ProjectHeader
      category="3D & Augmented Reality"
      title="PDB2AR"
      summary="A tool where scientists and educators can create their own WebXR experiences from PDB files, PDB entries or 3D models."
      cta={{
        href: "https://molecularweb.epfl.ch/pages/pdb2ar.html",
        label: "Try PDB2AR",
      }}
    >
      <div className={styles.heroArtifact}>
        <BrowserFrame className={styles.heroFrame}>
          <img
            className={styles.heroImage}
            src={pdb2ar1}
            alt="A DNA structure being manipulated with virtual hands in PDB2AR"
            width="800"
            height="600"
          />
        </BrowserFrame>

        <aside className={styles.heroNote} aria-label="PDB2AR output">
          <span>One project</span>
          <strong>Three immersive apps.</strong>
          <strong>Augmented reality and VR.</strong>
        </aside>
      </div>
    </ProjectHeader>

    <ProjectSection className={styles.originSection}>
      <ProjectSectionHeading label="01 / Why we built it">How can we automate this?</ProjectSectionHeading>

      <ProjectCopy>
        <p>
          A few months after launching <NavLink to="/molecularweb">MoleculARweb</NavLink>, we started receiving a lot of
          requests to add new content. At first we did it ourselves, but we were a small team with limited resources and
          this was not going to scale.
        </p>
        <p>
          So we asked ourselves: how can we automate this process so anyone can create their own immersive content? This
          is how PDB2AR was born.
        </p>
      </ProjectCopy>
    </ProjectSection>

    <ProjectSection className={styles.workflowSection}>
      <div>
        <ProjectSectionHeading label="02 / The workflow">From a PDB file to a VMD script</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            PDB2AR is based on{" "}
            <a href="https://www.ks.uiuc.edu/Research/vmd/" target="_blank" rel="noopener noreferrer">
              VMD
            </a>
            , a tool most biologists are familiar with. Users can upload a PDB file, paste a PDB entry or upload a 3D
            model exported from VMD.
          </p>
          <p>
            The app parses the atomic coordinates, detects the elements, and lets users choose what they want to show
            and how to represent it.
          </p>
        </ProjectCopy>
      </div>

      <BrowserFrame
        className={styles.configFrame}
        caption="Selecting which chains, ligands and molecules to include."
      >
        <img
          className={styles.configImage}
          src={pdb2ar2}
          alt="PDB2AR controls for selecting molecular chains, ligands and colors"
          width="821"
          height="778"
          loading="lazy"
        />
      </BrowserFrame>

      <ol className={styles.workflow}>
        <li>
          <span>Input / 01</span>
          <strong>Add the structure</strong>
          <p>Upload a PDB file, paste a PDB entry or add a 3D model exported from VMD.</p>
        </li>
        <li>
          <span>Selection / 02</span>
          <strong>Choose what to show</strong>
          <p>Select the elements and decide how each part of the structure should be represented.</p>
        </li>
        <li>
          <span>Script / 03</span>
          <strong>Build the VMD script</strong>
          <p>PDB2AR creates an editable rendering script based on the user's selections.</p>
        </li>
      </ol>
    </ProjectSection>

    <ProjectSection className={styles.outputSection}>
      <ProjectSectionHeading label="03 / The output" align="right">
        Three immersive apps
      </ProjectSectionHeading>

      <ProjectCopy align="right">
        <p>
          After adding a custom title and submitting the project, PDB2AR creates three web-based apps from the same
          structure.
        </p>
      </ProjectCopy>

      <div className={styles.outputList}>
        <div>
          <span>01</span>
          <strong>Cube-marker AR</strong>
          <p>Manipulate the structure using a printed cube marker.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Markerless AR</strong>
          <p>Place the structure directly in the user's physical space.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Virtual reality</strong>
          <p>Use hands or controllers to manipulate the structure in a VR headset.</p>
        </div>
      </div>

      <div className={styles.outputMedia}>
        <BrowserFrame
          className={styles.arFrame}
          caption="The generated marker-based and markerless AR apps."
        >
          <div className={styles.phonePair}>
            <img
              className={styles.phoneLeft}
              src={pdb2ar3}
              alt="A DNA structure displayed with marker-based augmented reality"
              width="386"
              height="669"
              loading="lazy"
            />
            <img
              className={styles.phoneRight}
              src={pdb2ar4}
              alt="A DNA structure placed in a room with markerless augmented reality"
              width="386"
              height="669"
              loading="lazy"
            />
          </div>
        </BrowserFrame>

        <BrowserFrame className={styles.vrFrame} caption="Manipulating a generated scene in virtual reality.">
          <video
            className={styles.vrImage}
            src={pdb2ar6}
            aria-label="A person manipulating a molecular structure in virtual reality"
            width="568"
            height="320"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </BrowserFrame>
      </div>
    </ProjectSection>

    <ProjectStatement
      label="Web based"
      note="PDB2AR sends an email with one link for each generated app."
    >
      Three URLs. No installation.
    </ProjectStatement>

    <ProjectSection className={styles.creditsSection}>
      <ProjectSectionHeading label="04 / Access" align="right">
        Free and open source
      </ProjectSectionHeading>

      <ProjectCopy className={styles.creditsCopy} align="right">
        <p>
          PDB2AR is free and available{" "}
          <a href="https://molecularweb.epfl.ch/pages/pdb2ar.html" target="_blank" rel="noopener noreferrer">
            online
          </a>
          . We also open-sourced the{" "}
          <a
            href="https://github.com/molecularwebxr/pdb2ar-templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            templates used for the immersive apps
          </a>
          .
        </p>
        <p>
          The project was funded by the{" "}
          <a href="https://www.snf.ch" target="_blank" rel="noopener noreferrer">
            Swiss National Science Foundation
          </a>{" "}
          and was made by me and{" "}
          <a href="https://www.lucianoabriata.com/" target="_blank" rel="noopener noreferrer">
            Luciano Abriata
          </a>{" "}
          at EPFL's Laboratory for Biomolecular Modeling.
        </p>
      </ProjectCopy>
    </ProjectSection>

    <ProjectNavigation
      className={styles.projectNavigation}
      nextTo="/nuestras-esperanzas"
      nextTitle="Nuestras Esperanzas"
    />
  </ProjectPage>
);

export default PDB2AR;
