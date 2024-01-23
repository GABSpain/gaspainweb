import { TimerItemStyles } from "./timerItem.jss";

interface ITimerItemProps {
    title: string;
    value: number;
}

export const TimerItem = (props: ITimerItemProps) => {
    const styles = TimerItemStyles();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.value}>{props.value}</div>
                <div className={styles.title}>{props.title}</div>
            </div>
        </>
    );
};