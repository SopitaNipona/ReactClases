// Ejemplo con las páginas de un sitio para probar react-router

import { Fragment, useEffect, useState, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams, useNavigate } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Tecnológico de Monterrey</h1>
      <nav>
        <Link to="about">Acerca de</Link>
      </nav>


      <p>
        Curabitur non fermentum odio. Cras vitae condimentum libero. Curabitur
        id ultricies enim. Sed aliquam sit amet ex accumsan dignissim. Curabitur
        egestas neque eu ligula fermentum suscipit. Curabitur rhoncus est id
        augue iaculis, at molestie lacus suscipit. Sed quis volutpat justo.
      </p>
    </div>
  );
}

export function About() {
  return (
    <Fragment>
    <div style={ {"textAlign": "left" } }>
      <h1>Acerca del Tec</h1>

      <p>
        Nulla ornare aliquam posuere. Cras convallis, libero eget aliquet
        porttitor, ante sapien ornare elit, vel porta lectus nibh vitae lorem.
        Sed egestas magna condimentum, semper leo a, semper ligula. Suspendisse
        lobortis ipsum quis fringilla suscipit. Quisque sed rhoncus risus.
        Mauris vehicula, leo condimentum commodo convallis, ex sapien faucibus
        tortor, a imperdiet erat lorem ac odio. Aenean ultricies pellentesque
        mi, ut aliquet nunc cursus eget. Vestibulum nec varius sapien. Proin
        purus metus, rhoncus at volutpat viverra, porta sit amet lectus. Sed
        malesuada, est eu eleifend sodales, arcu nibh bibendum dolor, vitae
        viverra felis turpis vitae mauris. Morbi cursus magna mauris, in
        pulvinar elit semper ac. Donec eu dolor quis turpis feugiat bibendum
        tincidunt in dolor. Maecenas sit amet ultricies risus. Etiam finibus dui
        vitae diam pretium, semper tincidunt orci tempus. Donec sed eros ac
        sapien feugiat imperdiet.
      </p>
      
      <ul>
        <li><Link to="services"> Servicios</Link></li>
        <li><Link to="history"> Historia</Link></li>
        <li><Link to="/"> Home</Link></li>
      </ul>

    </div>
    <div>
        <Outlet />
    </div>
    </Fragment>
  );
}

export function Events() {
  return (
    <div>
      <h1>Eventos</h1>
      <p>
        Maecenas commodo ipsum id ultrices scelerisque. Curabitur vel ligula
        vulputate, iaculis nibh eget, blandit ante. Phasellus eleifend commodo
        mauris et vehicula. Vestibulum dolor nisi, finibus et ultricies a,
        sagittis nec massa. Morbi cursus ex condimentum justo pulvinar, eget
        mattis mauris facilisis. Aliquam at ornare libero. Pellentesque tempus
        est neque, ac malesuada turpis pharetra feugiat. Fusce eget semper ex,
        quis vulputate mauris. Morbi lorem est, consequat nec ligula eu,
        accumsan fermentum turpis. Donec mattis mauris eu ex dictum gravida.
        Phasellus congue feugiat magna, quis placerat orci vulputate ornare.
        Duis tempor laoreet lacus, non rhoncus nisi tempor in. Nulla mollis
        mauris quis libero fermentum rhoncus.
      </p>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>Productos</h1>
      <p>
        Sed scelerisque euismod justo, at dictum arcu pulvinar eleifend.
        Maecenas placerat sit amet quam ut mollis. Sed ultricies laoreet
        bibendum. Nullam molestie tortor lobortis iaculis condimentum. Nunc ante
        risus, consectetur quis nisl non, ullamcorper commodo purus. Morbi
        sollicitudin, est nec ultrices accumsan, odio tellus maximus libero,
        vitae pulvinar sem dolor in arcu. Praesent ac est magna. Proin dapibus
        nunc quis sapien fermentum tempor. Cras tellus urna, volutpat ut risus
        laoreet, pellentesque hendrerit nisl. Nam accumsan rutrum sem et
        pellentesque. Nunc nec nibh libero. Donec vitae tortor libero. Nunc
        vitae fringilla augue. Nunc eu efficitur est, convallis ultricies nunc.
        Nulla tempus mauris in sagittis consequat. Praesent tincidunt odio in
        euismod efficitur.
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>
        Praesent dapibus leo quis nisi malesuada, at ultricies augue ornare.
        Praesent dictum, lorem a dignissim tempor, enim lectus cursus nisl, sit
        amet laoreet est libero ut sapien. Integer nisi nunc, faucibus vel enim
        at, auctor dictum est. Praesent scelerisque sollicitudin urna at
        laoreet. Maecenas eleifend malesuada eros et porttitor. Pellentesque
        pharetra mauris at laoreet cursus. Quisque imperdiet, erat a viverra
        sollicitudin, ex lorem convallis nisi, ut convallis nunc velit non
        lectus. Aliquam vulputate magna eget quam vestibulum, at placerat augue
        fringilla. Cras ornare magna vel sem imperdiet mattis.
      </p>
    </div>
  );
}

export const NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <p>No existe la ruta {location.pathname}</p>
    </div>
  );
}

export const Services = () => {
  return (
    <div>
      <h2>Servicios</h2>
      <p>
        Nulla ornare aliquam posuere. Cras convallis, libero eget aliquet
        porttitor, ante sapien ornare elit, vel porta lectus nibh vitae lorem.
        Sed egestas magna condimentum, semper leo a, semper ligula. Suspendisse
        lobortis ipsum quis fringilla suscipit. Quisque sed rhoncus risus.
        Mauris vehicula, leo condimentum commodo convallis, ex sapien faucibus
        tortor, a imperdiet erat lorem ac odio. Aenean ultricies pellentesque
        mi, ut aliquet nunc cursus eget. Ve
      </p>
    </div>
  );
}

export const History = () => {
  return (
    <div>
      <h2>Historia</h2>
      <p>
        Nulla ornare aliquam posuere. Cras convallis, libero eget aliquet
        porttitor, ante sapien ornare elit, vel porta lectus nibh vitae lorem.
        Sed egestas magna condimentum, semper leo a, semper ligula. Suspendisse
        lobortis ipsum quis fringilla suscipit. Quisque sed rhoncus risus.
        Mauris vehicula, leo condimentum commodo convallis, ex sapien faucibus
        tortor, a imperdiet erat lorem ac odio. Aenean ultricies pellentesque
        mi, ut aliquet nunc cursus eget. Ve
      </p>
    </div>
  );
}

export const Agente = () => {
  const {idAgente} = useParams();
  const valor = parseInt(idAgente);
  const [doble, setDoble] = useState(valor);

  useEffect(() => {
    setDoble(valor * 2);
  }, []);

  return (
    <div>
      <h3>Agente: {valor}</h3>
    </div>
  );
}

