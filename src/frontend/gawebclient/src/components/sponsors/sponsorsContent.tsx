import { SponsorsContentStyles } from './sponsorsContent.jss';
import sponsorsContent from '../../data/sponsors-content.json';

export const SponsorsContent = () => {
    const styles = SponsorsContentStyles();

    return (
        <div className={styles.container}>
            <div dangerouslySetInnerHTML={{ __html: sponsorsContent.body }} />
        </div>
    );
}