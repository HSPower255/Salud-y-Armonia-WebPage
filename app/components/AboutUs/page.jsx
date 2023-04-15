import Link from "next/link"
import Image from "next/image"
import styles from 'styles/AboutUs.module.css'

const AboutUs = () => {
    return (
        <>
            <section className={styles.textContainer}>
                <div>
                    <h1>Sobre Nosotros</h1>
                    <p>¡Hola! Soy Adriana Sosa, masajista y propietaria de mi propio consultorio de masajes.</p>
                    <p>
                        Desde el año 2020, he estado dedicada a ofrecer servicios de masajes personalizados y de alta calidad a mis clientes.
                        Mi pasión por el masaje comenzó hace unos años cuando descubrí los múltiples beneficios que puede ofrecer para la salud y el bienestar en general. Desde entonces, me he comprometido a aprender y mejorar mis técnicas para brindar a mis clientes una experiencia de masaje excepcional.
                    </p>
                    <p>
                        Mi objetivo es crear un ambiente relajante y tranquilo en mi consultorio para que mis clientes puedan sentirse cómodos y disfrutar plenamente de su experiencia de masaje. Me tomo el tiempo para escuchar a cada cliente y entender sus necesidades individuales para poder personalizar cada masaje y lograr los mejores resultados posibles.
                        Creo firmemente en la importancia de cuidar de nuestro cuerpo y mente. Por eso, estoy comprometida en brindar un servicio de calidad, que no solo ayude a aliviar el dolor y el estrés, sino que también contribuya a la mejora de la salud y bienestar general de mis clientes.
                    </p>
                    <p>Si estás buscando un masaje personalizado y de alta calidad, ¡no dudes en programar una cita conmigo! Estoy segura de que te encantará la experiencia que te ofreceré.</p>
                </div>
                <div className={styles.mapContainer}>
                    <iframe width="350" height="450" src="https://maps.google.com/maps?width=550&amp;height=300&amp;hl=en&amp;q=Eduardo%20Rivero%20631%20Omb%C3%BAes%20de%20Lavalle+(Consultorio)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                </div>
            </section >
            <section className={styles.imgContainer}>
                <div>
                    <Image
                        src="/consultorio.png"
                        alt="Reflexologia Podal"
                        width={1000}
                        height={470}
                    />
                </div>
            </section>
            <section>
                <div className={styles.bttnContainer}>
                    <button>
                        <Link href={'/components/Appointments'}>
                            ¡Agenda una cita!
                        </Link>
                    </button>
                    <button>
                        <Link href={'/components/Contact'}>
                            Contacto
                        </Link>
                    </button>
                    <button>
                        <Link href={'/components/Treatments'}>
                            Nuestros tratamientos
                        </Link>
                    </button>
                </div>
            </section>
        </>
    )
}

export default AboutUs
