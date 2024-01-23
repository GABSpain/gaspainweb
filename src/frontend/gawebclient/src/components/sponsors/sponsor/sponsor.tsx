import { ISponsor } from "../../../models/sponsor";
import { SponsorStyles } from "./sponsor.jss";

// interface ISponsorProps {
//     title: string;
//     link: string;
//     logo: string;
// }

export const Sponsor = (props: ISponsor) => {
    const styles = SponsorStyles();

    return (
        <article className={styles.sponsorLogo}>
            <a href={props.link} target="_blank" rel="noopener">
                <img src={props.logo} alt={props.title} />
            </a>
        </article>
    );
};