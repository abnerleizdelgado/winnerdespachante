import Layout from "./Layout.jsx"
import Home from "./pages/Home.jsx"
import ServicePage from "./pages/ServicePage.jsx"
import { serviceList } from "./content/services.js"

// Uma rota por serviço é gerada a partir de src/content/services.js — para
// adicionar um serviço novo basta acrescentar um item lá.
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      ...serviceList.map((s) => ({
        path: s.slug,
        element: <ServicePage service={s} />,
      })),
    ],
  },
]
