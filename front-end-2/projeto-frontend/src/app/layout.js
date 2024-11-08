import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Dr. Stone",
  description: "Projeto Front Dr. Stone",
  charset: 'UTF-8',
  author: 'André Orocondo Lopes Aguirre',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}