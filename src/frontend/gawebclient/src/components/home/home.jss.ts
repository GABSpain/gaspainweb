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
        
        '& > img': {
            verticalAlign: "top",
            maxWidth: "100%",
            width: "100%",
        }
    },
    content: {
        padding: '20px 40px 0',
        boxSizing: "border-box",
    },
    sectionBanner: {
        minHeight: "100vh",
        background: "url('/images/site/2024/banner-home-2024.jpg') no-repeat center center",
        backgroundSize: "cover",
    },
    sectionTitle: {
        padding: "1px 0",
        // lineHeight: "1",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "2rem",
        // borderTop: "1px solid #1ba1e2", // Cambia esto al color de línea que prefieras
        // borderTop: "1px solid #293473", // Cambia esto al color de línea que prefieras
        // borderBottom: "1px solid #1ba1e2", // Cambia esto al color de línea que prefieras
        textTransform: "uppercase",
        color: "#293473", // Cambia esto al color de texto que prefieras
        background: 'rgba(27, 161, 226, 0.1)', // Cambia esto al color de fondo que prefieras
        // background: 'rgba(41, 52, 115, 0.1)', // Cambia esto al color de fondo que prefieras

        "& h2": {
        },
        "& h3": {
            fontWeight: "400",
            fontSize: "1.8rem",
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
        background: "#1ba1e2",
        color: "#f0f0f0",
    }
});
