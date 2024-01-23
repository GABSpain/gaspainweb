import { useState, useEffect } from 'react';
import { TimerStyles } from "./timer.jss";
import { TimerItem } from "./timerItem/timerItem";
// import AddToCalendarIcon from '/images/site/addtocalendar.svg?react';
// import AddToCalendarIcon from '../../images/site/addtocalendar.svg';

export const Timer = () => {
    const styles = TimerStyles();
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // const eventDate = new Date('2024-01-23T00:00:00');
            const eventDate = new Date('2024-04-18T00:00:00');
            const currentDate = new Date();
            const totalSeconds = (eventDate.getTime() - currentDate.getTime()) / 1000;
            if (totalSeconds < 0) {
                clearInterval(interval);
                setVisible(false);
            }
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const minutes = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const AddToCalendarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            // fill={color} 
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="12" y1="10" x2="12" y2="14"></line>
            <line x1="9" y1="12" x2="15" y2="12"></line>
        </svg>
    );

    return (
        <>
            <div className={styles.container}>
                {
                    visible &&
                    <div className={styles.countdown}>
                        <TimerItem title="Días" value={days} />
                        <TimerItem title="Horas" value={hours} />
                        <TimerItem title="Minutos" value={minutes} />
                        <TimerItem title="Segundos" value={seconds} />
                        <a className={styles.addToCalendar} href="/files/2024/globalazure2024.ics">
                            <AddToCalendarIcon />
                            Add to my calendar
                        </a>
                    </div>
                }
            </div>
        </>
    );
};