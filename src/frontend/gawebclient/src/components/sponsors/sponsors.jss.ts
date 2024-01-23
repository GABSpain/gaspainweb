import { createUseStyles } from "react-jss";

export const SponsorsStyles = createUseStyles({
    container: {
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0.5rem 0',
    },
    list: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '48px',
        flexWrap: 'wrap',
        padding: '24px',

        "& > *": {
            flex: '0 0 200px',
        }
    }
});