import type { Metadata } from "next";
import { Navbar } from '@/app/components/navbar/Navbar'
import styles from "../page.module.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <main className={styles.main}>
      { children }
    </main>
    </>
  );
}