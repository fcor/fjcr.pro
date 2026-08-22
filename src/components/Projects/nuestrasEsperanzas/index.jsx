import {
  ProjectCopy,
  ProjectHeader,
  ProjectNavigation,
  ProjectPage,
  ProjectSection,
  ProjectSectionHeading,
} from "../../ProjectDetail";
import ne2 from "../../../images/ne2.jpg";
import ne3 from "../../../images/ne3.jpg";
import ne4 from "../../../images/ne4.jpg";
import ne5 from "../../../images/ne5.jpg";
import styles from "./NuestrasEsperanzas.module.css";

const NuestrasEsperanzas = () => (
  <ProjectPage>
    <ProjectHeader
      category="Generative Design"
      title="Nuestras Esperanzas"
      titleParts={["Nuestras", "Esperanzas"]}
      separateTitleParts
      summary='A generative artwork inspired by "Nuestras esperanzas" by Grito, later released with the band as a small edition of prints and postcards.'
    >
      <div className={styles.heroArtifact}>
        <figure className={styles.heroPhoto}>
          <img
            src={ne5}
            alt="A member of Grito holding the Nuestras Esperanzas print"
            width="6000"
            height="4000"
          />
        </figure>

        <aside className={styles.lyricNote} aria-label="Lyric from Nuestras esperanzas">
          <span>Grito / Nuestras esperanzas</span>
          <blockquote lang="es">
            "El hardcore son los amigos, lo aprendido junto a ellos, y es vivir, sentir, pensar, plasmar para dejar algo
            a los demas!"
          </blockquote>
        </aside>
      </div>
    </ProjectHeader>

    <ProjectSection className={styles.artworkSection}>
      <div>
        <ProjectSectionHeading label="01 / The artwork">Vivir. Sentir. Pensar. Plasmar.</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            Nuestras Esperanzas is a generative artwork inspired by the amazing song of the same name by Grito, one of
            my favorite bands: 100% Colombian hardcore.
          </p>
        </ProjectCopy>
      </div>

      <figure className={styles.artwork}>
        <img
          src={ne2}
          alt='The Nuestras Esperanzas artwork with the words "Vivir, sentir, pensar, plasmar"'
          width="1800"
          height="1200"
          loading="lazy"
        />
        <figcaption>The finished generative artwork.</figcaption>
      </figure>
    </ProjectSection>

    <ProjectSection className={styles.editionSection}>
      <ProjectSectionHeading label="02 / The edition" align="right">
        12 prints and some postcards
      </ProjectSectionHeading>

      <ProjectCopy align="right">
        <p>
          In collaboration with the band, we released a{" "}
          <a
            href="https://www.fjcr.studio/product/nuestras-esperanzas"
            target="_blank"
            rel="noopener noreferrer"
          >
            limited edition
          </a>{" "}
          of 12 prints and some postcards.
        </p>
      </ProjectCopy>

      <div className={styles.editionGallery}>
        <figure className={styles.printPhoto}>
          <img
            src={ne3}
            alt="Fabio holding one of the Nuestras Esperanzas prints"
            width="3856"
            height="5783"
            loading="lazy"
          />
          <figcaption>One of the 12 prints.</figcaption>
        </figure>

        <figure className={styles.postcardPhoto}>
          <img
            src={ne4}
            alt="A Nuestras Esperanzas postcard held in one hand"
            width="3950"
            height="5924"
            loading="lazy"
          />
          <figcaption>The postcard edition.</figcaption>
        </figure>
      </div>
    </ProjectSection>

    <ProjectSection className={styles.processSection}>
      <ProjectSectionHeading label="03 / The process">Made in Processing</ProjectSectionHeading>

      <ProjectCopy>
        <p>
          The pattern is a generative design made in Processing. I made the edits and post-processing in Affinity
          Designer.
        </p>
        <p>
          The font is{" "}
          <a
            href="https://www.theleagueofmoveabletype.com/prociono"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prociono
          </a>
          , an open source typeface made by Barry Schwartz and published by{" "}
          <a href="https://www.theleagueofmoveabletype.com/" target="_blank" rel="noopener noreferrer">
            The League of Movable Type
          </a>
          .
        </p>
      </ProjectCopy>

      <dl className={styles.colophon}>
        <div>
          <dt>Pattern</dt>
          <dd>Processing</dd>
        </div>
        <div>
          <dt>Post-processing</dt>
          <dd>Affinity Designer</dd>
        </div>
        <div>
          <dt>Typeface</dt>
          <dd>Prociono</dd>
        </div>
      </dl>
    </ProjectSection>

    <ProjectNavigation nextTo="/culpable" nextTitle="Culpable" />
  </ProjectPage>
);

export default NuestrasEsperanzas;
