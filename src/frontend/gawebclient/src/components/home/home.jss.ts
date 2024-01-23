import { createUseStyles } from "react-jss";

export const HomeStyles = createUseStyles({
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        rowGap: '40px',

        '& > *': {
            verticalAlign: "top",
        }
    },
    title: {
    },
    link: {
    },
    image: {
        verticalAlign: "top",
        maxWidth: "100%",
        width: "100%",
    },
    section: {
        boxSizing: "border-box",
        padding: "20px 0",

        '& > img': {
            verticalAlign: "top",
            maxWidth: "100%",
            width: "100%",
        }
    },
    content: {
        padding: '20px 40px 0',
        width: '1024px',
        margin: "0 auto",
        boxSizing: "border-box",
        "@media screen and (max-width: 1024px)": {
            width: '95%',
        },
    },
    sectionBanner: {
        minHeight: "100vh",
        background: "url('/images/site/2024/banner-home-2024.jpg') no-repeat center center",
        backgroundSize: "cover",
    },
    sectionTitle: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: "2rem",
        textTransform: "uppercase",

        "& h1": {
            fontSize: "2.7rem",
            fontWeight: "400",
            margin: "0.5rem 0",
        },
        "& h2": {
            borderTop: "1px solid #293473",
            display: 'inline-block',
            fontWeight: "400",
            fontSize: "1.8rem",
            margin: "0.5rem 0",
        }
    },
    sectionFull: {
        position: "relative",
        padding: 0,
    },
    sectionAbout: {
        position: "absolute",
        bottom: 0,
        padding: 0,
        width: "100%",
    },
    sectionContact: {
        background: "#151515",
        color: "#f0f0f0",
    }
});
