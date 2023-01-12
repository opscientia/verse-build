import './globals.css';
import React, { ReactNode } from 'react';

import ThemeProviderConfig from './providers';

export default function RootLayout({ children, }: { children: ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      {/* <head>
        <title>Verse</title>
      </head> */}

      <body>
       <ThemeProviderConfig>
        {children}
        </ThemeProviderConfig>
      </body>
    </html>
  );
}
