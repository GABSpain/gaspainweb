import { createUseStyles } from "react-jss";

export const HomeStyles = createUseStyles({
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        // rowGap: '40px',

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
        paddingTop: "65px",

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
    contentImageLeft: {
        float: "left",
        margin: "5px",
        padding: "5px",
        width: "20%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "white"
    },
    contentImageRight: {
        float: "right",
        margin: "5px",
        padding: "5px",
        width: "20%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "white"
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
        paddingLeft: 0,
        paddingRight: 0,
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
