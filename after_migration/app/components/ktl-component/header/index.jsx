import React, { useEffect, useState } from "react";
import '@jetbrains/kotlin-web-site-ui/dist/header.css';

const Header = (props) => {
  const [GlobalHeader, setGlobalHeader] = useState(null);

  useEffect(() => {
    import("@jetbrains/kotlin-web-site-ui/dist/header.js").then((mod) => {
      setGlobalHeader(() => mod.default || mod);
    });
  }, []);

  if (!GlobalHeader) {
    return null;
  }

  return <GlobalHeader {...props} />;
};

export default Header;
// import React from "react";
// import GlobalHeader from '@jetbrains/kotlin-web-site-ui/dist/header.js';
// // import '@jetbrains/kotlin-web-site-ui/dist/header.css';

// const Header = (props) => {
//   return (
//       <GlobalHeader { ... props } />
//   );
// }

// export default Header;
