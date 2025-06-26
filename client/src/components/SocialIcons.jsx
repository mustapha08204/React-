import React from "react";

const SocialIcons = () => (
  <div id="social-icons" className="social-icons">
    <SocialIcon href="https://github.com/mustapha08204" icon="github" />
    <SocialIcon
      href="https://x.com/jay_jay060804?t=l45YBocAU2nSpmmcTvvGgA&s=09"
      icon="twitter"
    />
    <SocialIcon
      href="https://www.instagram.com/gumel_innovation?igsh=YTlyeTJ0Y201NmQz"
      icon="instagram"
    />
    <SocialIcon
      href="https://www.linkedin.com/in/mustapha-ali-bb15681a9/"
      icon="linkedin"
    />
    <SocialIcon
      href="https://www.tiktok.com/@gumel_innovation?_t=ZS-8vmAdFAXBl1&_r=1"
      icon="tiktok"
    />
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={`fab fa-${icon} icon`}></i>
  </a>
);

export default SocialIcons;
