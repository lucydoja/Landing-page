import React from "react";
import PropTypes from "prop-types";

export function RellenarCartas() {
	let Carta1 = {
		titulo: "Carta 1",
		foto:
			"https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
		contenido:
			"Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario). Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
	};

	let Carta2 = {
		titulo: "Carta 2",
		foto:
			"https://cdn.shopify.com/s/files/1/0229/0839/files/Busqueda_de_imagenes_3_large.jpg?v=1578328497",
		contenido:
			"Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario). Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
	};
	let Carta3 = {
		titulo: "Carta 3",
		foto:
			"https://www.astrobitacora.com/wp-content/uploads/2016/09/crab-nebula-esa-1024.jpg",
		contenido:
			"Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario). Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
	};
	let Carta4 = {
		titulo: "Carta 4",
		foto:
			"https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
		contenido:
			"Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario). Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos)."
	};
	let ArrCartas = [Carta1, Carta2, Carta3, Carta4];

	return ArrCartas.map(function(carta, i) {
		return (
			<Cartas
				key={i}
				titulo={ArrCartas[i].titulo}
				foto={ArrCartas[i].foto}
				contenido={ArrCartas[i].contenido}
			/>
		);
	});
}
export function Cartas(props) {
	return (
		<div className="card mt-4" style={{ width: "20rem" }}>
			<img
				className="card-img-top"
				src={props.foto}
				alt="Imagen de carta"
			/>
			<div
				className="card-body d-flex flex-column justify-content-center"
				style={texto}>
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.contenido}</p>
				<a href="#" className="btn btn-primary ">
					Find out more!
				</a>
			</div>
		</div>
	);
}

Cartas.propTypes = {
	foto: PropTypes.string,
	contenido: PropTypes.string,
	titulo: PropTypes.string
};

const texto = {
	textAlign: "justify"
};
