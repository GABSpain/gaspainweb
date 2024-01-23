import { SponsorsStyles } from "./sponsors.jss";
import sponsors from "../../data/sponsors.json";
import { Sponsor } from "./sponsor/sponsor";


interface ISponsorsProps {
    title: string;
}

export const Sponsors = (props: ISponsorsProps) => {
    const styles = SponsorsStyles();
    return (
        <div className={styles.container}>
            <header className={styles.title}>
                <h3>{props.title}</h3>
            </header>
            <div className={styles.list}>
                {sponsors.map((sponsor) => (
                    <Sponsor key={sponsor.title} {...sponsor} />
                ))}
            </div>
        </div>
    );
};