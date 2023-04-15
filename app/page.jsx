import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/MainPage.module.css'

const MainPage = () => {
    return (
        <>
            <section className={styles.mainPageContainer}>
                <div>
                    <Image
                        src="/mainImg.png"
                        alt="Main Image"
                        width={800}
                        height={700}
                    />
                </div>
                <div className={styles.mainTextContainer}>
                    <h1>Salud y Armonía</h1>
                    <h3>Adriana Sosa</h3>
                    <p>En Salud y Armonía te invitamos a vivir una experiencia de relajación total y lograr desconectar del estrés y las preocupaciones cotidianas.</p>
                    <Link href={'/components/AboutUs'}>
                        Más sobre nosotros...
                    </Link>
                </div>
            </section>
            <hr className={styles.hr} />
            <section className={styles.mainServices}>
                <h2>Nuestros Tratamientos</h2>
                <div className={styles.tratamientosMain}>
                    <div className={styles.tratamientosElement}>
                        <Link href={'/components/Therapies/Quiropraxia'}>
                            <Image
                                src="/quiropraxia.png"
                                alt="Quiropraxia"
                                width={400}
                                height={350}
                            />
                            <button>Más Info...</button>
                        </Link>
                        <h3>Quiropraxia</h3>
                        <p>
                            La quiropraxia trata de restituir a su posición normal las vértebras desplazadas y de este modo tratar las enfermedades que las mismas pueden producir.
                            <br />
                            El terapeuta explora con los dedos la columna vertebral para identificar el lugar donde se ha producido el pinzamiento nervioso y subsana el desplazamiento de la vértebra mediante una ligera presión.
                        </p>
                    </div>
                    <div className={styles.tratamientosElement}>
                        <Link href={'/components/Therapies/ReflexologiaPodal'}>
                            <Image
                                src="/reflexologia-podal1.png"
                                alt="Reflexologia Podal"
                                width={400}
                                height={350}
                            />
                            <button>Más Info...</button>
                        </Link>
                        <h3>Reflexologia Podal</h3>
                        <p>
                            La reflexología podal es una técnica de masaje específico, que se aplica en ciertas zonas de los pies que se corresponden con otras partes del cuerpo.
                            <br />
                            Este método permite al organismo estar en las mejores condiciones posibles tanto físicas como mentales para luchar o prevenir los distintos síntomas o dolencias.
                        </p>
                    </div>
                    <div className={styles.tratamientosElement}>
                        <Link href={'/components/Therapies/Reiki'}>
                            <Image
                                src="/reiki.png"
                                alt="Reiki"
                                width={400}
                                height={350}
                            />
                            <button>Más Info...</button>
                        </Link>
                        <h3>Reiki</h3>
                        <p>
                            Reiki es una técnica de canalización y transmisión de energía vital a través de la imposición de manos, que se utiliza para obtener paz y equilibrio en todos los niveles: físico, mental, emocional y espiritual.
                            <br />
                            Es decir: armoniza y equilibra los chakras de tu cuerpo.
                        </p>
                        <Link href={'/components/Treatments'}>
                            Ver todos nuestros tratamientos...
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage