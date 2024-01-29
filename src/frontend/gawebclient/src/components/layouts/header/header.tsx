import { useEffect, useState } from "react";
import { SiteMenu } from "../menu/site-menu";
import { HeaderStyles } from "./header.jss";

export const Header = () => {
    const styles = HeaderStyles();
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
        <div className={styles.header}>
            <img className={`${styles.logo} ${isScrolled ? styles.logoScrolled : ''}`} src="\images\site\2024\GlobalAzure2023LiveFromSpain-250.png" alt="Logo de Global Azure Spain" />
            <SiteMenu />
        </div>
    );
}