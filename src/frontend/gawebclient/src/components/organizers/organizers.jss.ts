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
            backgroundColor: '#f0f0f0',
            border: '1px solid #f0f0f0',
            borderRadius: '12px',
            transition: 'all 0.3s ease-out 0s',

            "&:hover": {
                backgroundColor: '#e0e0e0',
                border: '1px solid #1ba1e2',
            }
        }
    },
});