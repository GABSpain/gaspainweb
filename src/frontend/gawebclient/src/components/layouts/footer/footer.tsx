import { FooterStyles } from "./footer.jss";

export const Footer = () => {
    const styles = FooterStyles();

    return (
        <div className={styles.container}>
            Global Azure 2024 - An initiative by Microsoft Azure User Groups around the world - Todos los derechos reservados
        </div>
    );
}