import { createUseStyles } from "react-jss";

export const SiteMenuStyles = createUseStyles({
    siteMenu: {
        display: 'flex',
        flexFlow: 'column nowrap',
        flex: '1 1 auto',
        alignSelf: 'center',

        "@media screen and (max-width: 1024px)": {
            flex: '0 0 auto',
        },
    },
    siteMenuLauncher: {
        display: 'none',
        flex: '1 1 auto',
        height: '85px',
        textAlign: 'right',
        padding: '15px 20px',

        "& svg": {
            width: '50px'
        },
        
        "@media screen and (max-width: 1024px)": {
            display: 'block',
        },
    },
    siteMenuList: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '18px',
        margin: 0,
        padding: 0,
        listStyle: 'none',

        "@media screen and (max-width: 1024px)": {
            padding: '20px 0',
            flexFlow: 'column nowrap',
            background: '#151515',
            display: 'none',
        },
    },
    siteMenuListLaunched: {
        "@media screen and (max-width: 1024px)": {
            display: 'flex',
        },
    },
    siteMenuItemActive: {
        "@media screen and (max-width: 1024px)": {
            '&:after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: 'calc(50% - 15px)',
                width: '5px',
                height: '30px',
                display: 'block',
                backgroundColor: '#1ba1e2',
                transform: 'scale3d(1, 1, 1)',
                transition: 'all 0.3s ease-in-out 0s',
            },
        },

        "@media screen and (min-width: 1024px)": {
            '&:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 'calc(50% - 15px)',
                width: '30px',
                height: '2px',
                display: 'block',
                backgroundColor: '#1ba1e2',
                transform: 'scale3d(1, 1, 1)',
                transition: 'all 0.3s ease-in-out 0s',
            },
        }
    },
    siteMenuItem: {
        position: 'relative',
        padding: '10px 20px',
        margin: 0,
        textTransform: 'uppercase',
        fontFamily: 'Lato, sans-serif',
        fontSize: '17px',
        lineHeight: '25px',
        transition: 'all 0.3s ease-out 0s',
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        cursor: 'pointer',

        "@media screen and (max-width: 1024px)": {
            padding: '12px 30px',

            '&:before': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: 'calc(50% - 15px)',
                width: '5px',
                height: '30px',
                display: 'block',
                backgroundColor: '#1ba1e2',
                transform: 'scale3d(1, 0, 1)',
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

        "@media screen and (min-width: 1024px)": {
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
});
