import { createUseStyles } from "react-jss";

export const ScheduleStyles = createUseStyles({
    container: {
    },
    call4PapersButton: {
        display: "block",
        margin: "auto",
        padding: "24px",
        width: "fit-content",
        backgroundColor: "#FDAF19",
        color: "#f0f0f0",
        fontSize: "1.5rem",
        textTransform: "uppercase",

        "&:hover": {
            backgroundColor: "#E3C038",
            color: "#151515",
        },
    },
    image: {
        width: "100%",
    },
});