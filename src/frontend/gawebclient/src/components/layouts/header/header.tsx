import { OrientationEnum, SiteMenu } from "../menu/site-menu";
import { HeaderStyles } from "./header.jss";

export const Header = () => {
    const styles = HeaderStyles();

    return (
        <div className={styles.header}>
            <img className={styles.logo} src="\images\site\2024\GlobalAzure2023LiveFromSpain-250.png" alt="Logo de Global Azure Spain" />
            <h1 className={styles.title}>Global Azure Spain</h1>
            <SiteMenu Orientation={OrientationEnum.Horizontal} />
        </div>
    );
}