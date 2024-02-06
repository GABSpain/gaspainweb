import { createUseStyles } from "react-jss";

export const OrganizersStyles = createUseStyles({
    container: {
    },
    organizers: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',

        "& > *": {
            boxSizing: 'border-box',
            display: 'inline-block',
            padding: '6px',
            backgroundColor: '#353535',
            borderRadius: '12px',
            borderLeft: '3px solid #1ba1e2',
            borderRight: '3px solid #1ba1e2',
            transition: 'all 0.3s ease-out 0s',
            backgroundImage: 'linear-gradient(45deg, #1ba1e2, #1e1e1e)',
            color: '#f0f0f0',

            "&:before": {
                content: '""',
                display: 'inline-block',
                width: '20px',
                height: '25px',
                verticalAlign: 'middle',
                marginRight: '6px',
                backgroundImage: 'url("/images/site/twitter-logo.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                backgroundSize: 'contain',
            },

            "&:hover": {
                color: '#fff',
            }
        }
    },
});