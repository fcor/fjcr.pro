import { useEffect, useRef, useState } from "react";
import styles from "./ContactOverlay.module.css";

const EMAIL = "fabio@fjcr.pro";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/fabiojcortes/" },
  { label: "GitHub", href: "https://github.com/fcor" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fabiojcortes/" },
];

const copyText = async (value) => {
  if (!navigator.clipboard?.writeText) {
    throw new Error("Clipboard API unavailable");
  }

  await navigator.clipboard.writeText(value);
};

const ContactOverlay = ({ nodeRef, onClose, returnFocusRef }) => {
  const [copyStatus, setCopyStatus] = useState("idle");
  const closeButtonRef = useRef(null);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    const returnFocusTarget = returnFocusRef.current;

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusTarget?.focus({ preventScroll: true });
    };
  }, [onClose, returnFocusRef]);

  useEffect(
    () => () => {
      window.clearTimeout(copyTimerRef.current);
    },
    [],
  );

  const handleCopy = async () => {
    window.clearTimeout(copyTimerRef.current);

    try {
      await copyText(EMAIL);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }

    copyTimerRef.current = window.setTimeout(() => {
      setCopyStatus("idle");
    }, 2200);
  };

  const copyMessage = {
    idle: "CLICK TO COPY",
    copied: "COPIED TO CLIPBOARD",
    error: "COPY FAILED - EMAIL SHOWN ABOVE",
  }[copyStatus];

  return (
    <div
      ref={nodeRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-overlay-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.shell}>
        <header className={styles.topBar}>
          <span className={styles.brand}>FJCR / CONTACT</span>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close contact overlay"
            title="Close"
          >
            <span aria-hidden="true" />
          </button>
        </header>

        <div className={styles.main}>
          <h2 id="contact-overlay-title" className={styles.prompt}>
            Shoot me a message
          </h2>

          <button
            type="button"
            className={styles.email}
            onClick={handleCopy}
            aria-describedby="contact-copy-status"
          >
            <span>fabio@</span>
            <span>fjcr.pro</span>
          </button>

          <button
            type="button"
            id="contact-copy-status"
            className={`${styles.copyStatus} ${
              copyStatus === "copied" ? styles.copied : ""
            } ${copyStatus === "error" ? styles.copyError : ""}`}
            onClick={handleCopy}
            aria-live="polite"
          >
            {copyMessage}
          </button>
        </div>

        <footer className={styles.footer}>
          <span className={styles.location}>Milan, Italy</span>
          <nav className={styles.socials} aria-label="Contact profiles">
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default ContactOverlay;
