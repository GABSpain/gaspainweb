import { ScheduleStyles } from "./schedule.jss";
import scheduleContent from "../../data/schedule-content.json";
import eventInfo  from "../../data/event-info.json";


export const Schedule = () => {
    const styles = ScheduleStyles();
    const isCall4PapersClosed = new Date() > new Date(eventInfo.call4Papers.endDate);

    return (
        <div className={styles.container}>
            <div dangerouslySetInnerHTML={{ __html: scheduleContent.body }} />

            {
                isCall4PapersClosed &&
                <img className={styles.image}
                                src="/images/site/schedule-soon.jpeg"
                                alt="Agenda" />
            }
            {
                !isCall4PapersClosed &&
                <a className={styles.call4PapersButton}>Enviar propuesta de sesión</a>
            }

        </div>
    );
};