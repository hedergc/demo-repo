import 'tailwindcss/base.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "FinOps AI Cost Optimization"
};

export default function RootLayout({children: children}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
