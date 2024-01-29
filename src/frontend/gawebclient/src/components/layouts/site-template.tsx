import { useEffect, useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { SiteTemplateStyles } from "./site-template.jss";

interface ISiteTemplateProps {
  featureId: string;
  component: React.ReactNode;
  // component: React.ReactNode | React.Component | React.FunctionComponent;
}

// export const SiteTemplate = (props: ISiteTemplateProps | any) => {
export const SiteTemplate = (props: ISiteTemplateProps) => {
  const styles = SiteTemplateStyles();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY <= 0) {
        setIsScrolled(false);
        return;
      } else if (!isScrolled) {
        setIsScrolled(true);
        return;
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  
  return (
    <section className={styles.siteContainer}>
      <header className={`${styles.siteHeader} ${isScrolled ? styles.siteHeaderScrolled : ''}`}>
        <Header />
      </header>
      <main className={styles.siteBody}>
        {/* <div className={styles.siteMenu}>
          <SiteMenu Orientation={OrientationEnum.Horizontal}/>
        </div> */}
        <div className={styles.siteContent}>
          {props.component}
        </div>
      </main>
      <footer className={styles.siteFooter}>
        <Footer />
      </footer>
    </section>
  );
}
