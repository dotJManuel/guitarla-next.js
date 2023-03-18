import Layout from "../components/layout";
import Guitarra from "@/components/guitarra";
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {
	return (
		<Layout
			title={"Tienda virtual"}
			description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
		>
			<main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
              {guitarras?.map(guitarra => (
                  <Guitarra
                      key={guitarra.id}
                      guitarra={guitarra.attributes}
                  />
              ))}
            </div>
        </main>
		</Layout>
	);
}

// los datos solo se obtienen antes de que se cargue la página.
// export async function getStaticProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json() 
//     return {
//       props: {
//         guitarras
//       }
//     }
// }

// Esta función se llama en cada solicitud y se utiliza para pre-renderizar datos que se actualizan con frecuencia (obtenidos de una API externa)
export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json() 
    return {
      props: {
        guitarras
      }
    }
}