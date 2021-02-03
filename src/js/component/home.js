import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { NavBar } from "./Navbar";

import { Cuerpo } from "./Cuerpo";

import { Cartas } from "./Card";

import { Pie } from "./Footer";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Cuerpo />
			<div className="d-flex justify-content-around flex-wrap m-2">
				<Cartas
					foto="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
					contenido="Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario).

Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
					titulo="Carta 1"
				/>
				<Cartas
					foto="https://cdn.shopify.com/s/files/1/0229/0839/files/Busqueda_de_imagenes_3_large.jpg?v=1578328497"
					contenido="Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario).

Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
					titulo="Carta 2"
				/>
				<Cartas
					foto="https://www.astrobitacora.com/wp-content/uploads/2016/09/crab-nebula-esa-1024.jpg"
					contenido="Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario).

Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
					titulo="Carta 3"
				/>
				<Cartas
					foto="https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg"
					contenido="Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario).

Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
					titulo="Carta 4"
				/>
			</div>
			<Pie />
		</div>
	);
}
