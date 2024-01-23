import { createUseStyles } from "react-jss";

export const TimerItemStyles = createUseStyles({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '120px',
        height: '120px',
        borderRadius: '8px',
        border: '1px solid #f0f0f0',
        "@media screen and (max-width: 1024px)": {
            width: '80px',
            height: '80px',
        },
        "@media screen and (max-width: 800px)": {
            width: '60px',
            height: '60px',
        },
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: '200',
        color: '#f0f0f0',
        "@media screen and (max-width: 1024px)": {
            fontSize: '1rem',
        },
        "@media screen and (max-width: 800px)": {
            fontSize: '0.6rem',
        },
    },
    value: {
        fontSize: '2rem',
        fontWeight: '500',
        color: '#f0f0f0',
        "@media screen and (max-width: 1024px)": {
            fontSize: '1.5rem',
        },
        "@media screen and (max-width: 800px)": {
            fontSize: '1.2rem',
        },
    },
});