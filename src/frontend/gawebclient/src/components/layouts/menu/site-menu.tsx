import { useEffect, useState } from "react";
import { SiteMenuStyles } from "./site-menu.jss";
// import { useTheme } from "react-jss";

export enum OrientationEnum {
    Horizontal,
    Vertical
}

// interface ISiteMenuProps {
//     Orientation: OrientationEnum;
// }

export const SiteMenu = () => {
    // const theme = useTheme();
    const styles = SiteMenuStyles();
    const [currentActive, setCurrentActive] = useState<HTMLElement | null>(null);
    const [itemClicked, setItemClicked] = useState<HTMLElement | null>(null);
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const sectionId = event.currentTarget.getAttribute('data-section-target');
        setItemClicked(event.currentTarget);
        const sectionElement = document.querySelector(`[data-section='${sectionId}']`);
        if (sectionElement) {
            sectionElement.scrollIntoView(
                {
                    behavior: 'smooth'
                }
            );
        }
    };

    const handleMenuLauncherClicked = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const menuList = document.querySelector(`.${styles.siteMenuList}`);
        if (menuList && !mobileMenuVisible) {
            menuList.classList.add(styles.siteMenuListLaunched);
        }
        else
        {
            menuList?.classList.remove(styles.siteMenuListLaunched);
        }
        setMobileMenuVisible(!mobileMenuVisible);
    };

    useEffect(() => {
        if (itemClicked) {
            if (currentActive) {
                currentActive.className = styles.siteMenuItem;
            }
            itemClicked.className = `${styles.siteMenuItem} ${styles.siteMenuItemActive}`
            setCurrentActive(itemClicked);
        }
    }, [itemClicked]);

    const MobileMenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    );

    return (
        <>
            <nav className={styles.siteMenu}>
                <div className={styles.siteMenuLauncher} onClick={handleMenuLauncherClicked}>
                    <MobileMenuIcon />
                </div>
                <ul className={styles.siteMenuList}>
                    <li className={styles.siteMenuItem} data-section-target="home" onClick={handleClick}>
                        Inicio
                    </li>
                    <li className={styles.siteMenuItem} data-section-target="schedule" onClick={handleClick}>Agenda</li>
                    {/* <li className={styles.siteMenuItem} data-section-target="speakers" onClick={handleClick}>Ponentes</li> */}
                    <li className={styles.siteMenuItem} data-section-target="sponsorship" onClick={handleClick}>Patrocinadores</li>
                    {/* <li className={styles.siteMenuItem} data-section-target="home" onClick={handleClick}>Registro</li>
                    <li className={styles.siteMenuItem} data-section-target="localization" onClick={handleClick}>Localización</li>
                <li className={styles.siteMenuItem} data-section-target="home" onClick={handleClick}>Discord</li> */}
                    <li className={styles.siteMenuItem} data-section-target="code-of-conduct" onClick={handleClick}>Código de conducta</li>
                    {/* <li className={styles.siteMenuItem} data-section-target="challenge" onClick={handleClick}>El reto</li> */}
                </ul>
            </nav>
        </>
    );
}

