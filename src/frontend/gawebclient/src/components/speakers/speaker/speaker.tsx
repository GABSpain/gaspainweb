import { ISpeaker } from "../../../models/speaker";
import { SpeakerStyles } from "./speaker.jss";

interface ISpeakerProps {
    speaker: ISpeaker;
    key: number;
}

export const Speaker = (props: ISpeakerProps) => {
    const styles = SpeakerStyles();

    return (
        <>
            {/* <div>kk</div> */}
            <article className={styles.container}>
                <div className={styles.pictureContainer}>
                    <picture>
                        <source srcSet={props.speaker.picture} type="image/webp" />
                        <source srcSet={props.speaker.picture} type="image/jpeg" />
                        <img src={props.speaker.picture} className={styles.picture} alt={props.speaker.name} />
                    </picture>
                    <div className={styles.overlay}>
                    </div>
                </div>
                <div className={styles.content}>
                    <header>
                        <h3 className={styles.name}>{props.speaker.name}</h3>
                    </header>
                    <div className={styles.info}>
                        <p>{props.speaker.jobTitle}</p>
                        <p>{props.speaker.msTitle}</p>
                    </div>
                </div>
            </article>
        </>
    )
}