import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NeoTaste",
  description: "Social Discovery Layer Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={poppins.className} style={{ height: '100%' }}>
      <body
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#e5e7eb',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '393px',
            height: '100dvh',
            maxHeight: '852px',
            background: '#ffffff',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
