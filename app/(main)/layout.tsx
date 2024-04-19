import Navbar from "../ui/navbar/navbar";
import styles from "@/app/ui/main/main.module.css";
export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className={styles.container}>
        <Navbar />
        {children}
      </div>
    );
  }
  