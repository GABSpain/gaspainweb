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
    section: {
        boxSizing: "border-box",
        paddingTop: "65px",
        paddingBottom: "55px",
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
    contentImageFull: {
        verticalAlign: "top",
        maxWidth: "100%",
        width: "100%",
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
        background: "url('/images/site/background.png') no-repeat center center",
        backgroundSize: "cover",
    },
    bannerHeader: {
        position: "absolute",
        top: '120px',
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        color: "#f0f0f0",
        gap: "20px",
        "@media screen and (max-width: 800px)": {
            flexFlow: "column nowrap",
        },
    },
    bannerDate: {
        fontSize: "2.5rem",
        fontWeight: "100",
        "@media screen and (max-width: 1024px)": {
            fontSize: "2.5rem",
        },
        "@media screen and (max-width: 800px)": {
            fontSize: "2rem",
        },
    },
    bannerHashtag: {
        backgroundColor: "#E3C038",
        padding: "20px",
        color: "#151515",
        fontSize: "1.5rem",
    },
    sectionTitle: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: "2rem",
        textTransform: "uppercase",

        "& h1": {
            fontSize: "2.7rem",
            fontWeight: "300",
            margin: "0.5rem 0",
        },
        "& h2": {
            borderTop: "1px solid #293473",
            display: 'inline-block',
            fontWeight: "300",
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
    },
    sectionBlue: {
        background: "#293473",
        color: "#f0f0f0",
    },
    globalAzureLogoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
    },
    globalAzureLogo: {
        maxWidth: "600px",
        width: "100%",
    },
});
