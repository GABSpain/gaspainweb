import { createUseStyles } from "react-jss";

export const TimerStyles = createUseStyles({
    container: {
        color: 'white',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#293473',
    },
    countdown: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#f0f0f0',
    },
    addToCalendar: {
        fontWeight: '500',
        color: '#293473',
        background: '#f0f0f0',
        fontSize: '1rem',
        padding: '10px',
        borderRadius: '20px',
        verticalAlign: 'middle',

        "& svg": {
            display: 'inline-block',
            verticalAlign: 'middle',
            width: '50px',
            color: '#293473',
            fill: 'transparent',
            background: 'transparent',
        }

    },
});