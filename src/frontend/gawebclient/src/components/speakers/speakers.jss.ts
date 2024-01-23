import { createUseStyles } from "react-jss";

export const SpeakersStyles = createUseStyles({
    container: {
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "10px",

        "& > *": {
            flex: "1 1 20%",
            maxWidth: "20%",
        },

    },
});