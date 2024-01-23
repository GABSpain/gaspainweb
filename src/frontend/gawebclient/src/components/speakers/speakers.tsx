import { SpeakersStyles } from "./speakers.jss"
import speakers from "../../data/speakers.json";
import { ISpeaker } from "../../models/speaker";
import { Speaker } from "./speaker/speaker";

export const Speakers = () => {
    const styles = SpeakersStyles();

    return (
        <>
            <div className={styles.container}>
                {speakers.map((speaker: ISpeaker, index: number) => {
                    return (
                        <Speaker key={index} speaker={speaker} />
                    )
                })}
            </div>
        </>
    )
}
