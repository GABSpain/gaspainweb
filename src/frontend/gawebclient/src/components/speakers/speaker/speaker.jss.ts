import { createUseStyles } from "react-jss";

export const SpeakerStyles = createUseStyles({
    container: {
    },
    pictureContainer: {
        position: "relative",
        textAlign: "center",
    },
    picture: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
    },
    overlay: {
        position: "absolute",
        top: "0",
        left: "calc(50% - 75px)", // "calc(50% - 75px)
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: "1",
        transition: "opacity 0.5s ease",
        
        "&:hover": {
            cursor: "pointer",
            opacity: "0",
        },
    },  
    content: {
        textAlign: "center",
    },
    name: {
        fontWeight: "400",
    },
    info: {
        fontSize: "13px",
        fontWeight: "300",
        lineHeight: "1",
    },
});