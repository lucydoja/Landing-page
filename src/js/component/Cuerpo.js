import React from "react";

export function Cuerpo() {
	return (
		<div className="pt-5 pb-5" style={estiloCuerpo}>
			<h1>A warm welcome!</h1>
			<div style={texto}>
				<span>
					El filtro de ediciones es una herramienta utilizada para
					permitir a bibliotecarios activar determinados controles
					sobre patrones de edición que generan a su vez determinadas
					reacciones. La extensión del filtro de ediciones fue
					desarrollada por Werdna con ayuda de la Fundación Wikimedia.
				</span>
				<br />
				<button type="button" className="btn btn-primary mt-3 ">
					Click to action
				</button>
			</div>
		</div>
	);
}
const estiloCuerpo = {
	backgroundColor: "	rgb(190,190,190)",
	margin: "10px",
	borderRadius: "5px",
	padding: "20px",
	marginLeft: "30px",
	marginRight: "30px"
};

const texto = {
	textAlign: "justify"
};
