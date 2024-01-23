import { createUseStyles } from "react-jss";

export const SponsorsStyles = createUseStyles({
    container: {
        padding: '24px 0',
        background: '#fff',
    },
    title: {
        textAlign: 'center',
        margin: '0 auto',
        boxSizing: 'border-box',

        "& h3": {
            boxSizing: 'border-box',
            margin: '0 auto',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
        },
    },
    list: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px 48px',
        flexWrap: 'wrap',
        padding: '24px',

        "& > *": {
            flex: '0 0 200px',
        }
    }
});