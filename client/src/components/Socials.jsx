import { profile, hireMe } from "../data.js";

// Simple Icons / Feather paths, inline so no icon library is needed.
const icons = {
  github: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3",
  linkedin: "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.4v6.3zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z",
  mail: "M2 4h20a2 2 0 0 1 2 2v.4l-12 7.5L0 6.4V6a2 2 0 0 1 2-2zM0 9.2l12 7.5 12-7.5V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.2z",
};
const socials = [
  [profile.github, "GitHub", icons.github],
  [profile.linkedin, "LinkedIn", icons.linkedin],
  [hireMe, `Email ${profile.email}`, icons.mail],
].filter(([href]) => href);

export default function Socials({ className = "socials" }) {
  return (
    <ul className={className}>
      {socials.map(([href, label, d]) => (
        <li key={label}>
          <a href={href} aria-label={label} title={label} {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
