import Layout from "../components/layout";

export default function Tienda() {
	return (
		<Layout
			title={"Tienda virtual"}
			description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
		>
			<main className="contenedor">
				<h1 className="heading">Nuestra Colección</h1>
			</main>
		</Layout>
	);
}

// export async function getStaticProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json() 
//     return {
//       props: {
//         guitarras
//       }
//     }
// }


// export async function getServerSideProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json() 
//     return {
//       props: {
//         guitarras
//       }
//     }
// }