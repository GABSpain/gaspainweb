import { useRoutes } from "react-router";
import { SiteTemplate } from '../components/layouts/site-template';
import { CSSProperties } from "react";
import { Home } from "../components/home/home";

export const SiteRouter = () => {
    const routeNotMappedStyles: CSSProperties = { color: 'darkgray', padding: '32px', fontSize: '20px' };

    return useRoutes([
        {
            path: "/",
            element: <SiteTemplate featureId="home" component={<Home />} />,
        },
        {
            path: "/sponsorship",
            element: <SiteTemplate featureId="home" component={<div>Patrocinadores</div>} />,
        },
        {
            path: "/speakers",
            element: <SiteTemplate featureId="home" component={<div>Ponentes</div>} />,
        },
        {
            path: "/register",
            element: <SiteTemplate featureId="home" component={<div>Registro</div>} />,
        },
        {
            path: "/schedule",
            element: <SiteTemplate featureId="home" component={<div>Agenda</div>} />,
        },
        {
            path: "/localization",
            element: <SiteTemplate featureId="home" component={<div>Localización</div>} />,
        },
        {
            path: "/codeofconduct",
            element: <SiteTemplate featureId="home" component={<div>Código de Conducta</div>} />,
        },
        {
            path: "/codeofconduct",
            element: <SiteTemplate featureId="home" component={<div>Redes</div>} />,
        },
        // {
        //     path: "/elecciones",
        //     element: <SiteTemplate featureId="home" component={<div>Elecciones Federación Canaria de Caza 2022</div>} />,
        // },
        // {
        //     path: "/transparencia",
        //     element: <SiteTemplate featureId="home" component={<Transparency />} />,
        // },
        // {
        //     path: "/calendario",
        //     element: <SiteTemplate featureId="home" component={<div>Calendarios Deportivos</div>} />,
        // },
        // {
        //     path: "/memoria",
        //     element: <SiteTemplate featureId="home" component={<Memories />} />,
        // },
        // {
        //     path: "/contacto",
        //     element: <SiteTemplate featureId="home" component={<Contact />} />,
        // },
        { 
            path: '*', 
            element: <div style={routeNotMappedStyles}>Route not mapped or not exists</div> 
        },
    ]);
}
