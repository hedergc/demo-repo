import '@app/globals.tailwind';

import '../styles/globals.css';

export const metadata = {
  title: 'AI AP[Fault Detection]',
  description: 'Anomaly detection for Accounts Payable'
};

export default function RootLayout({children: children}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-00 font-robot">
        {children}
      </body>
    </html>
  );
}