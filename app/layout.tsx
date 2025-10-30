import '@app/global.css';

import type { ReactNode, ReactNode Props } from 'react';

export const metadata = {
  title: "AP Fraud Detection",
  description: "AI-Driven Accounts Payable Fraud and Error Detection"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-00 font-robot">
        {children}
      </body>
    </html>
  );
}