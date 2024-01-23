import { createUseStyles } from "react-jss";

export const HeaderStyles = createUseStyles({
    header: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        columnGap: '24px',
        color: 'white',

        "@media screen and (max-width: 1024px)": {
            justifyContent: 'space-between',
        },
    },
    title: {
        flex: '0 0 auto',
        fontSize: '1.5rem',
        fontWeight: '500',
        boxSizing: 'border-box',
        color: '#f0f0f0',
        alignSelf: 'center',
    },
    logo: {
        flex: '0 0 auto',
        boxSizing: 'border-box',
        margin: '10px 20px',
        height: '64px',
    },
    headerLink: {
        color: '#61dafb',
    },
});
