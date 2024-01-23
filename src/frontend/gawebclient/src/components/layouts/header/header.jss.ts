import { createUseStyles } from "react-jss";

export const HeaderStyles = createUseStyles({
    header: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'stretch',
        alignItems: 'center',
        padding: '8px 20px',
        color: 'white',
        columnGap: '24px',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#f0f0f0',
    },
    logo: {
        height: '64px',
    },
    headerLink: {
        color: '#61dafb',
    },
});
