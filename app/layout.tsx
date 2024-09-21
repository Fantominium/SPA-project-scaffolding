import "./globals.css";

import { ThemeProvider } from '../components/ThemeProvider';
import NavBar from '@/components/NavBar';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
