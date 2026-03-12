import React, { useEffect, useState } from "react";
import '@jetbrains/kotlin-web-site-ui/dist/footer.css';

const Footer = (props) => {
  const [GlobalFooter, setGlobalFooter] = useState(null);

  useEffect(() => {
    import("@jetbrains/kotlin-web-site-ui/dist/footer.js").then((mod) => {
      setGlobalFooter(() => mod.default || mod);
    });
  }, []);

  if (!GlobalFooter) {
    return null;
  }

  return <GlobalFooter {...props} />;
};

export default Footer;

// import React from "react";
// import GlobalFooter from '@jetbrains/kotlin-web-site-ui/dist/footer.js';
// // import '@jetbrains/kotlin-web-site-ui/dist/footer.css';
// import { ThemeProvider } from '@rescui/ui-contexts';

// const Footer = (props) => {
//   return (
//     <ThemeProvider theme="dark">
//       <GlobalFooter { ... props } />
//     </ThemeProvider>
//   );
// }

// export default Footer;
