import { createUseStyles } from "react-jss";

export const TimerItemStyles = createUseStyles({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '120px',
        height: '120px',
        background: '#1ba1e2',
        borderRadius: '50%',
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: '200',
        color: '#f0f0f0',
    },
    value: {
        fontSize: '2rem',
        fontWeight: '500',
        color: '#f0f0f0',
    },
});