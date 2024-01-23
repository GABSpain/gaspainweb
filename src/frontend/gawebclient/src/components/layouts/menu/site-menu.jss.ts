import { createUseStyles } from "react-jss";

export const SiteMenuStyles = createUseStyles((theme: any) => ({
    siteMenu: {
        flex: '0 0 auto',
    },
    siteMenuList: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        columnGap: '18px',
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    siteMenuItem: {
        position: 'relative',
        padding: '10px 0',
        margin: 0,
        textTransform: 'uppercase',
        fontFamily: 'Lato, sans-serif',
        fontSize: '15px',
        lineHeight: '25px',
        transition: 'all 0.3s ease-out 0s',
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        cursor: 'pointer',

        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 'calc(50% - 15px)',
            width: '30px',
            height: '2px',
            display: 'block',
            backgroundColor: '#1ba1e2',
            transform: 'scale3d(0, 1, 1)',
            transition: 'all 0.3s ease-in-out 0s',
        },

        '&:focus-visible': {
            outlineOffset: '1px'
        },

        '&:hover': {
            '&:before': {
                transform: 'scale3d(1, 1, 1)',
            }
        }
    },

    testMenuItem: {
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '100%',
            height: '1rem',
            display: 'block',
            backgroundColor: 'red',
        }
    }
}));
