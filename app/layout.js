// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load Geist Sans font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Load Geist Mono font
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load Lineto font with multiple weights and styles
const lineto = localFont({
  src: [
    {
      path: './fonts/lineto/lineto-circular-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/lineto/lineto-circular-bold-italic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/lineto/lineto-circular-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/lineto/lineto-circular-medium-italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/lineto/lineto-circular-black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/lineto/lineto-circular-black-italic.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/lineto/lineto-circular-book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/lineto/lineto-circular-book-italic.ttf',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-lineto', // Corrected CSS variable name
  display: 'swap',
});



export const metadata = {
  title: "Studio Hiroshima",
  description: "Paris based studio specializing in production",
  icons: {
    icon: '/assets/images/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lineto.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
