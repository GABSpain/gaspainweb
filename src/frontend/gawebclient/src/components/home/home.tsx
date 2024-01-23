import React from "react";
import { HomeStyles } from "./home.jss";
import { Timer } from "../timer/timer";
// import { Fade, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Speakers } from "../speakers/speakers";
import { Sponsors } from "../sponsors/sponsors";
import { Organizers } from "../organizers/organizers";

export const Home = () => {
    const styles = HomeStyles();

    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //     event.preventDefault();
    //     const sectionId = event.currentTarget.getAttribute('data-section-target');
    //     const sectionElement = document.querySelector(`[data-section='${sectionId}']`);
    //     if (sectionElement) {
    //         sectionElement.scrollIntoView(
    //             { 
    //                 behavior: 'smooth'
    //             }
    //         );
    //     }
    // };

    return (
        <section className={styles.homeContainer}>
            <section className={`${styles.section} ${styles.sectionBanner}`} data-section="banner">
                <img src="/images/site/2024/banner-home-2024.jpg" alt="Global Azure 2024" />
                <section className={styles.sectionAbout} data-section="about">
                    <Timer />
                    {/* El evento de la comunidad de Microsoft Azure en España
                        "Countdown to Global Azure 2021" */}
                </section>
            </section>
            <Slide direction="left" triggerOnce>
                <section className={styles.section} data-section="home">
                    <header className={styles.sectionTitle}>
                        <h2>LIVE FROM SPAIN!</h2>
                    </header>
                    <div className={styles.content}>
                        <p>Ya estamos de nuevo con una nueva edición de nuestro evento favorito sobre la plataforma de nube pública Microsoft Azure. Ha pasado un año desde nuestra última edición que como recordarás además de los eventos por streaming, hicimos un evento híbrido (físicos en Madrid y Barcelona) con limitaciones de aforo. Nos sirvió como toma de contacto después de tanto tiempo sin vernos, pero este año queremos volver a hacer de las nuestras ahora que ya no hay restricciones sanitarias.</p>
                        <p>Así que es para nosotros un placer anunciar que...</p>
                        <h4>¡Volvemos a Madrid, Barcelona y también en Zaragoza!</h4>
                        <p>La idea es que podamos disfrutar de las charlas de los ponentes y de las sesiones de networking en directo en las tres ciudades, además de hacer algunas sesiones en directo los días previos al evento.</p>
                        <p>El evento se realizará entre el 18 y 20 de Abril de 2024 y, como siempre, será totalmente gratuito. Iremos contando los detalles de la agenda más adelante, y qué día serán los eventos en cada ciudad. ¡Pero ya puedes reservar la fecha en tu agenda!</p>
                        <p>En esta edición la <a rel="noopener" href="https://globalazure.net/" target="_blank">organización global</a> también está trabajando de nuevo en la creación de una agenda global única, donde podrás seleccionar entre literalmente cientos de sesiones en directo y en diferido, con un catálogo de sesiones unificado con todas las sesiones que estamos preparando desde cientos de localizaciones alrededor del globo. Puedes consultar el catálogo global de sesiones en la <a rel="noopener" href="https://globalazure.net/" target="_blank">web del Global Azure</a>, incluida la agenda de las sesiones que estamos organizando desde España.</p>
                    </div>
                </section>
            </Slide>
            {/* <Slide direction="right">
                <section className={styles.section} data-section="challenge">
                    <header className={styles.sectionTitle}>
                        <h2 >EL RETO - GLOBAL AZURE SPAIN SKILLS CHALLENGE</h2>
                    </header>
                    <div className={styles.content}>
                        <p>La comunidad Microsoft Learn Student Ambassadors en colaboración con Global Azure Spain han creado este Cloud Skills Challenge en el que tendremos la oportunidad de ganar un voucher de 1 año de LinkedIn Premium gratis!!</p>
                        <p>IMPORTANTE: Para inscribirte al reto, primero rellena este formulario: Formulario de inscripción</p>
                    </div>
                    <img src="/images/site/2024/CloudSkillsChallenge.png" alt="Global Azure Spain Skills Challenge" />
                </section>
            </Slide> */}
            <Slide direction="right" triggerOnce>
                <section className={`${styles.section} ${styles.sectionFull}`} data-section="schedule">
                    <header className={styles.sectionTitle}>
                        <h2>Agenda</h2>
                    </header>
                    <img src="/images/site/schedule-soon.jpeg" alt="Global Azure Spain Skills Challenge" />
                    <div className={styles.content}>
                        <p>Los directos del jueves serán retransmitidos por YouTube y Twitch. Las sesiones del Track 1 de Madrid serán retransmitidas en YouTube. No habrá retransmisión de Barcelona y Zaragoza, ¡así que aún estás a tiempo de registrarte y verlo en persona! Puedes pasarte también por el servidor de Discord que hemos habilitado y pasar un buen rato, charlar con los speakers y resolver alguna duda que puedas tener con Azure. Y como no, no te olvides de seguirnos en <a rel="noopener" href="https://twitter.com/globalazurees" target="_blank">Twitter</a>!</p>
                    </div>
                </section>
            </Slide>
            <Slide direction="left" triggerOnce>
                <section className={styles.section} data-section="speakers">
                    <header className={styles.sectionTitle}><h2>Ponentes</h2></header>
                    <div className={styles.content}>
                        <Speakers />
                    </div>
                </section>
            </Slide>
            <Slide direction="right" triggerOnce>
                <section className={styles.section} data-section="sponsorship">
                    <header className={styles.sectionTitle}>
                        <h2>Patrocinadores</h2>
                        <h3>Descubre quién nos apoya</h3>
                    </header>
                    <div className={styles.content}>
                        <p>La realización de este evento con los líderes de la comunidad de Microsoft Azure en España manteniendo la asistencia gratuita no sería posible sin la dedicación y duro trabajo de los presentadores, organizadores y contribuciones económicas de otras organizaciones para ayudar a financiar la logística del mismo.</p>
                        <p>Para 2024 <b>seguimos buscando patrocinadores</b>. Te ofrecemos <a rel="noopener" href="https://globalazure.es/resources/2024/Global%20Azure%202024%20Spain%20-%20Patrocinadores.pdf" target="_blank">dossier con toda la información para patrocinadores</a> de la edición española del Global Azure.<a rel="noopener" href="mailto:sponsors@globalazure.es" target="_blank">Contáctanos</a> si estás interesado en que aparezca tu logo en esta página, en las sesiones del evento y muchas otras ventajas. ¡No te arrepentirás!</p>
                        <Sponsors title="Patrocinadores Locales" />
                    </div>
                </section>
            </Slide>
            <Slide direction="left" triggerOnce>
                <section className={styles.section} data-section="contact">
                    <header className={styles.sectionTitle}>
                        <h2>Contacto</h2>
                        <h3>Tu opinión es importante</h3>
                    </header>
                    <div className={styles.content}>
                        <p>
                            Puedes ponerte en contacto con nosotros a través de correo electrónico <a href="mailto:hello@globalazure.es">hello@globalazure.es</a> y también seguirnos a través de Twitter en <a href="http://twitter.com/GlobalAzureES" target="_blank" rel="noopener">@GlobalAzureES</a> para enterarte de las noticias al instante.
                            También te puedes suscribir a nuestra lista de corrreos para estar al tanto de las noticias del evento.
                        </p>
                    </div>
                </section>
            </Slide>
            <Slide direction="right" triggerOnce>
                <section className={styles.section} data-section="code-of-conduct">
                    <header className={styles.sectionTitle}><h2>Código de conducta</h2></header>
                    <div className={styles.content}>
                        <h3>Propósito</h3>
                        <p>Un objetivo principal de todas las conferencias y grupos de usuarios que se refieran a este Código de Conducta es ser inclusivos para la mayor cantidad de personas, con la mayor variedad de orígenes y conocimientos posibles. Como tal, nos comprometemos a ofrecer un ambiente amigable, seguro y acogedor para todos, sin importar género, orientación sexual, discapacidad, etnia, estado socio-económico, religión o creencia.</p>
                        <p>Este Código de Conducta expresa nuestras expectativas con respecto a quienes participan de nuestra comunidad, así como también las consecuencias de comportamientos inaceptables.</p>
                        <p>Invitamos a todos los que participan de nuestros eventos a ayudarnos a crear experiencias seguras y positivas para todos.</p>
                        <h3>Ciudadanía de Código/Cultura/Tecnología abierta</h3>
                        <p>Un objetivo suplementario de este Código de Conducta es incrementar la ciudadanía de código/cultura/tecnología abierta, incentivando a sus participantes a reconocer y fortalecer las relaciones entre nuestras acciones y sus efectos en nuestra comunidad.</p>
                        <p>Las comunidades son espejo de las sociedades en las cuales existen y las acciones positivas son esenciales para contrarrestar las diversas formas de desigualdad y abuso de poder que existen en una sociedad.</p>
                        <p>Si Ud. ve a alguien haciendo un esfuerzo extra por asegurarse que nuestra comunidad es acogedora, amistosa e incentiva a todos los que participan en ella a contribuir de manera completa, nos gustaría saberlo.</p>
                        <h3>Comportamiento esperado</h3>
                        <ul>
                            <li>Participe de un modo auténtico y activo. Al hacerlo contribuye a la salud y longevidad de esta comunidad.</li>
                            <li>Ejercite la consideración y el respeto en su discurso y en sus acciones.</li>
                            <li>Intente colaborar para evitar conflictos.</li>
                            <li>Absténgase de discursos o comportamientos despectivos, discriminatorios o abusivos.</li>
                            <li>Sea consciente de su entorno y de los/as otros/as participantes. Alerte a los líderes de la comunidad si nota alguna situación peligrosa, alguien sufriendo una situación comprometedora o violaciones de este Código de Conducta, incluso si parecieran poco importantes.</li>
                        </ul>
                        <h3>Comportamiento inaceptable</h3>
                        <p>Comportamientos inaceptables incluyen: discursos o acciones intimidantes, acosadores, abusivos, discriminatorios, despectivos o degradantes. El alcance incluye a todos/as los/as participantes de nuestra comunidad online en todos los eventos y comunicaciones personales llevadas a cabo en el contexto de las actividades de nuestra comunidad. Los lugares en donde se lleven a cabo eventos de la comunidad pueden ser compartidos con gente ajena a la misma, por favor sea respetuoso hacia las autoridades de dichos lugares.</p>
                        <p>Acoso incluye: daño o perjurio verbal o escrito relacionado con género, orientación sexual, raza, religión, incapacidad; uso inapropiado de imágenes de desnudez (incluyendo presentaciones digitales); intimidación deliberada, acecho o persecución; fotografías o grabaciones abusivas; interrupción sostenida de presentaciones u de otros eventos; contacto físico inapropiado y atención sexual no deseada.</p>
                        <h3>Consecuencias del comportamiento inaceptable</h3>
                        <p>No serán tolerados los comportamientos inaceptables de parte de cualquier miembro de la comunidad, incluidos patrocinadores y aquellos/as con autoridad para tomar decisiones. Se espera de todos/as los/as miembros el inmediato cumplimiento al solicitársele suspender comportamientos inaceptables.</p>
                        <p>Si un miembro incurre en comportamientos inaceptables los organizadores de la comunidad pueden sancionarlo de cualquier forma que se considere apropiada, incluyendo la suspensión temporal o permanente de su participación en la comunidad, sin previo aviso (y sin reintegro del dinero, en caso de ser un evento pago).</p>
                        <h3>Si es testigo o víctima de comportamiento inaceptable</h3>
                        <p>Si Ud. es víctima o testigo de comportamiento inaceptable, o tiene cualquier otra preocupación o problema, por favor notifíquelo a un organizador de la comunidad tan pronto como sea posible. Puede encontrar una lista de los organizadores a contactar para cada una de las comunidades que apoyen este código de conducta al final de esta página.</p>
                        <p>Además, los organizadores de la comunidad se encuentran disponibles para ayudar a los miembros a contactar a las fuerzas policiales locales o, de lo contrario, para ayudar a sentirse seguros a aquellos que hayan sido víctimas de comportamiento inaceptable. En el contexto de eventos presenciales, los organizadores también proveerán escolta a las personas que hayan sufrido dichas experiencias.</p>
                        <h3>Desagravios</h3>
                        <p>Si Ud. siente que ha sido falsa o injustamente acusado/a de violar este Código de Conducta, se le sugiere notificar a uno de los organizadores del evento con una descripción concisa del agravio. El mismo será contemplado y resuelto de acuerdo a las políticas existentes.</p>
                        <h3>Alcance</h3>
                        <p>Se espera que todos los participantes de la comunidad (colaboradores/as —pagos o no—, patrocinadores y otros/as invitados/as) se atengan a este Código de Conducta en todos los lugares de encuentro de la comunidad –online o en persona– así como en todas las comunicaciones uno-a-uno relacionadas con actividades de la comunidad.</p>
                        <h3>Licencia y atribución</h3>
                        <p>El <a href="https://berlincodeofconduct.org/es/">Berlin Code of Conduct</a> se encuentra distribuido bajo una <a href="https://creativecommons.org/licenses/by-sa/4.0/">licencia Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a>. Está basado en el <a href="https://pdxruby.org/CONDUCT">pdx.rb Code of Conduct</a>, que también es distribuido bajo la misma licencia.</p>
                    </div>
                </section>
            </Slide>
            <Slide direction="left" triggerOnce>
            </Slide>
            <Slide direction="up" triggerOnce>
                <footer>
                    <section className={styles.sectionContact}>
                        <header className={styles.sectionTitle}>
                            <h2>Conecta con nosotros</h2>
                            <h3>Síguenos en redes sociales <a href="https://twitter.com/globalazurees" target="_new">@GlobalAzureES</a></h3>
                        </header>
                        <div className={styles.content}>
                            <div>
                                <Organizers />
                            </div>
                            <div>
                                <div>
                                    <a href="http://azure.com" target="_blank" rel="noopener">
                                        <img src="image/Microsoft_Azure_Logo.png" alt="Global Azure" />
                                    </a>
                                </div>
                                <div>
                                    Global Azure 2024 - An initiative by Microsoft Azure User Groups around the world.
                                </div>
                            </div>
                            <p>
                                Global Azure - Todos los derechos reservados 
                            </p>
                        </div>
                    </section>
                </footer>
            </Slide>
        </section >
    );
}