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
        padding: '10px',

    },
    addToCalendar: {
        fontWeight: '500',
        color: '#293473',
        background: '#f0f0f0',
        fontSize: '1rem',
        padding: '10px',
        borderRadius: '20px',
        verticalAlign: 'middle',
        "@media screen and (max-width: 1024px)": {
            fontSize: '0.8rem',
        },
        "@media screen and (max-width: 800px)": {
            fontSize: '0.7rem',
        },

        "& svg": {
            display: 'inline-block',
            verticalAlign: 'middle',
            width: '50px',
            color: '#293473',
            fill: 'transparent',
            background: 'transparent',
            "@media screen and (max-width: 1024px)": {
                width: '30px',
            },
            "@media screen and (max-width: 800px)": {
                width: '20px',
            },
        }
    },
});