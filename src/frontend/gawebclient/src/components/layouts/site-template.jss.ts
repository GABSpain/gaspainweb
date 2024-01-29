import { createUseStyles } from "react-jss";

export const SiteTemplateStyles = createUseStyles({
    siteContainer: {
        boxSizing: 'border-box',
        minHeight: '100vh',
        fontSize: '17px',
        fontFamily: 'Nunito, sans-serif',
    },
    siteHeader: {
        position: 'fixed',
        zIndex: 1000,
        width: '100%',
        height: '85px',
        boxSizing: 'border-box',
        transition: 'height 0.3s ease-in-out 0s',
    },
    siteHeaderScrolled: {
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
        background: '#293473',
        height: '60px',
    },
    siteBody: {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        width: '100%',
    },
    siteContent: {
        boxSizing: 'border-box',
        flex: '1 1 auto',
        width: '100%',
        color: '#0a0a0a',
        background: '#fff',
    },
    siteFooter: {
        flex: '0 0 auto',
    },
});
