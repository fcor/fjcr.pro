import ArrowIcon from "../ArrowIcon";
import ProceduralBackdrop from "../ProceduralBackdrop";
import SectionHeading from "../SectionHeading";
import styles from "./Talks.module.css";

const talks = [
  {
    title: "From Sketch to Shipped: How Design Intent Travels Through Agents",
    meta: "2026 / Webflow Conf",
    location: "Boston, US",
    href: "https://webflow.com/webflowconf/session/from-sketch-to-shipped-how-design-intent-travels-through-agents",
    type: "external",
  },
  {
    title: "El código como medio creativo",
    meta: "2025 / Boyaca Dev Meetup",
    location: "Boyaca, Colombia",
    href: "https://boyaca-dev.org/meetup/2025-q2/speaker/fabio-cortes",
    type: "external",
  },
  {
    title: "Mastering MIDI for Live Coding",
    meta: "2023 / Live Performers Meeting",
    location: "Munster, Germany",
    href: "https://avnode.net/performances/mastering-midi-for-live-coding/",
    type: "external",
  },
  {
    title: "Empowering Research and Collaboration through WebXR",
    meta: "2023 / Global XR Conference",
    location: "Online",
    href: "https://www.youtube.com/watch?v=TdVXDzsYAvQ&t=2556s&ab_channel=GlobalXRCommunity",
    type: "video",
  },
  {
    title: "WebXR pour la recherche en biologie et chimie",
    meta: "2023 / WebXR Francophone",
    location: "Online",
    href: "https://www.youtube.com/watch?v=U8XMyvtVYEM&ab_channel=WebXRFrancophone",
    type: "video",
  },
  {
    title: "PDB2AR: Immersive web apps for research and education",
    meta: "2022 / WebZurich",
    location: "Zurich, Switzerland",
    href: "https://webzurich.ch/talks/cl0cdxmfs2fm80cxs5jrqeyo5",
    type: "external",
  },
  {
    title: "MoleculARweb: Chemistry and Biology education through AR",
    meta: "2021 / WebZurich",
    location: "Online",
    href: "https://youtu.be/yq_APtAkgD8?t=463",
    type: "video",
  },
  {
    title: "UI Design for AR",
    meta: "2020 / Global XR Bootcamp",
    location: "Online",
    href: "https://youtu.be/rzNm_XL4j7w",
    type: "video",
  },
  {
    title: "WebXR and the next generation of immersive web experiences",
    meta: "2020 / JSWeek",
    location: "Online",
    href: "https://youtu.be/9TohHPGviSM?t=3585",
    type: "video",
  },
  {
    title: "Immersive web experiences with React 360",
    meta: "2019 / Boyaconf",
    location: "Duitama, Colombia",
    href: "https://2019.boyaconf.com/",
    type: "external",
  },
  {
    title: "From 2D to 3D: UI design for VR",
    meta: "2018 / JSConf Colombia",
    location: "Medellin, Colombia",
    href: "https://youtu.be/EsIXYYKJsa0",
    type: "video",
  },
];

const PlayIcon = () => <span className={styles.playIcon} aria-hidden="true" />;

const TalkAction = ({ compact = false, isVideo }) => {
  const actionLabel = isVideo ? "Watch recording" : "Open event page";

  return (
    <span
      className={`${styles.action} ${isVideo ? styles.videoAction : styles.linkAction} ${
        compact ? styles.compactAction : ""
      }`.trim()}
      title={actionLabel}
      aria-hidden="true"
    >
      {isVideo ? <PlayIcon /> : <ArrowIcon className={styles.externalArrow} size={compact ? 15 : 18} />}
    </span>
  );
};

const Talks = () => {
  const featuredTalks = talks.slice(0, 3);
  const previousTalks = talks.slice(3);

  return (
    <main className={styles.page}>
      <ProceduralBackdrop variant="talks" />
      <div className={`site-container ${styles.layout}`}>
        <header className={styles.heading}>
          <SectionHeading as="h1">Speaking</SectionHeading>
          <aside className={styles.intro}>
            <strong>I often give talks and workshops.</strong>
            <p>Emerging technologies, creative coding, and breaking stuff on the web.</p>
          </aside>
        </header>

        <div className={styles.content}>
          <div className={styles.featuredList}>
            {featuredTalks.map((talk, index) => {
              const isVideo = talk.type === "video";
              const actionLabel = isVideo ? "Watch recording" : "Open event page";

              return (
                <a
                  className={`${styles.talk} ${index % 2 === 0 ? styles.rust : styles.teal}`}
                  href={talk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={talk.title}
                  aria-label={`${talk.title}. ${actionLabel}.`}
                >
                  <article className={styles.panel}>
                    <div className={styles.meta}>
                      <span>{talk.meta}</span>
                      <span>{talk.location}</span>
                    </div>
                    <h2>{talk.title}</h2>
                  </article>

                  <TalkAction isVideo={isVideo} />
                </a>
              );
            })}
          </div>

          <section className={styles.archive} aria-labelledby="previous-talks-heading">
            <header className={styles.archiveHeader}>
              <span>Archive / 2018–2023</span>
              <h2 id="previous-talks-heading">Previous talks</h2>
            </header>

            <div className={styles.archiveList}>
              {previousTalks.map((talk) => {
                const isVideo = talk.type === "video";
                const actionLabel = isVideo ? "Watch recording" : "Open event page";

                return (
                  <a
                    className={styles.compactTalk}
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={talk.title}
                    aria-label={`${talk.title}. ${actionLabel}.`}
                  >
                    <article className={styles.compactPanel}>
                      <div className={styles.compactMeta}>
                        <span>{talk.meta}</span>
                        <span>{talk.location}</span>
                      </div>
                      <h3>{talk.title}</h3>
                    </article>

                    <TalkAction compact isVideo={isVideo} />
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Talks;
