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

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const sectionId = event.currentTarget.getAttribute('data-section-target');
        const sectionElement = document.querySelector(`[data-section='${sectionId}']`);
        if (sectionElement) {
            sectionElement.scrollIntoView(
                { 
                    behavior: 'smooth'
                }
            );
        }
    };

    return (
        <section>
            <nav className={styles.siteMenu}>
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
        </section>
    );
}

