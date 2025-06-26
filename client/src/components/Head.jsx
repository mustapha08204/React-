import React from "react";
import { Helmet } from "react-helmet";

const CustomHead = () => (
  <Helmet htmlAttributes={{ lang: "en" }}>
    <title>Gumel Innovation</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta
      name="description"
      content="Gumel Innovation - Crafting exceptional digital experiences through functional, human-centered solutions."
    />
    <meta
      name="keywords"
      content="Gumel Innovation, web development, digital agency, design, branding, portfolio"
    />
    <meta name="author" content="Mustapha Ali" />

    <link rel="icon" href="/picture/logo_black.png" type="image/png" />

    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  </Helmet>
);

export default CustomHead;
