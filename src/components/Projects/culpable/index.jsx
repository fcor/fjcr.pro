import {
  ProjectCopy,
  ProjectHeader,
  ProjectNavigation,
  ProjectPage,
  ProjectSection,
  ProjectSectionHeading,
  ProjectStatement,
} from "../../ProjectDetail";
import culpable2 from "../../../images/culpable2.webp";
import culpable3 from "../../../images/culpable3.webp";
import styles from "./Culpable.module.css";

const Culpable = () => (
  <ProjectPage>
    <ProjectHeader
      category="Generative Design"
      title="Culpable"
      summary='Code-based artwork for "Culpable", the third song from Grito&apos;s album 8, inspired by the song and the symbolic Arhuaca scorpion.'
      cta={{
        href: "https://www.youtube.com/watch?v=ukudtRv3A4Q&ab_channel=Grito-Topic",
        label: "Listen to the song",
      }}
    >
      <div className={styles.heroArtifact}>
        <figure className={styles.cover}>
          <img
            src={culpable2}
            alt="Culpable artwork showing a geometric red scorpion"
            width="1080"
            height="1080"
          />
        </figure>

        <aside className={styles.trackLabel} aria-label="Album and track">
          <span>Grito / Album 8</span>
          <strong>Track 03</strong>
          <small>Culpable</small>
        </aside>
      </div>
    </ProjectHeader>

    <ProjectSection className={styles.invitationSection}>
      <div>
        <ProjectSectionHeading label="01 / The invitation">One song for each artist</ProjectSectionHeading>

        <ProjectCopy>
          <p>
            In June 2023, Grito invited different artists to collaborate on the art for their new album, "8". Each
            artist was assigned one song and asked to create a unique artwork inspired by the song and its message.
          </p>
          <p>I received the third song: Culpable.</p>
        </ProjectCopy>
      </div>

      <figure className={styles.bandNote}>
        <img
          src={culpable3}
          alt="A note from Grito about Fabio and the Culpable collaboration"
          width="1080"
          height="1080"
          loading="lazy"
        />
        <figcaption>Grito's note about the collaboration.</figcaption>
      </figure>
    </ProjectSection>

    <ProjectStatement
      className={styles.lyric}
      label="From the song"
      note="Do it yourself, but don't do it alone."
    >
      <span lang="es">Hazlo tu mismo, pero no lo hagas solo.</span>
    </ProjectStatement>

    <ProjectSection className={styles.artworkSection}>
      <ProjectSectionHeading label="02 / The artwork" align="right">
        A scorpion made with code
      </ProjectSectionHeading>

      <ProjectCopy align="right">
        <p>
          Creating this code-based artwork, inspired by the song and the symbolic scorpion from the Indigenous Arhuaca
          community in Colombia, was a labor of love: a celebration of art and music, and a tribute to the values we
          stand for.
        </p>
      </ProjectCopy>

      <dl className={styles.trackDetails}>
        <div>
          <dt>Album</dt>
          <dd>8</dd>
        </div>
        <div>
          <dt>Track</dt>
          <dd>03 / Culpable</dd>
        </div>
        <div>
          <dt>Artwork</dt>
          <dd>Code + symbolism</dd>
        </div>
      </dl>
    </ProjectSection>

    <ProjectSection className={styles.personalSection}>
      <ProjectSectionHeading label="03 / Personal">The 19-year-old me</ProjectSectionHeading>

      <ProjectCopy>
        <p>
          I can't help but think back to the 19-year-old me, who wouldn't believe that someday I'd have the chance to
          blend my passions for music and art, all thanks to the amazing band that played that unforgettable night at
          the legendary Teatro La Mama in Bogota.
        </p>
        <p>
          This collaboration is not just about art. It's a journey that connects me to my roots, my inspiration and the
          values that have shaped who I am today.
        </p>
      </ProjectCopy>
    </ProjectSection>

    <ProjectNavigation nextTo="/molecularwebxr" nextTitle="MolecularWebXR" />
  </ProjectPage>
);

export default Culpable;
