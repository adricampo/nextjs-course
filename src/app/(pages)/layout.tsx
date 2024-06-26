import { Navbar } from '@/components'
import styles from "../page.module.css";

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