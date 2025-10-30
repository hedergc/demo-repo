import '@app/global.css';

import { React } from 'react';

export const Metadata = {
  title: "Gerdau AI Modernization",
  description: "Modernizing legacy ERP and MES integrations"
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-00 font-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;