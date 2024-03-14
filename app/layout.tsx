import styles from '../styles/navbar_layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html>
        <body>
          <div className={styles.topnav}></div>
          <div className={styles.main_page}>
            {children}
          </div>
        </body>
      </html>
  );
}
