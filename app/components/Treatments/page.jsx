import styles from 'styles/Treatments.module.css'
import Link from "next/link"
import Image from "next/image"

const Treatments = () => {
    return (
        <>
            <section className={styles.mainServices}>
                <h2>Tratamientos</h2>
                <div className={styles.treatmentsMain}>
                    <div className={styles.treatmentsElement}>
                        <Link href="/components/Therapies/Quiropraxia">
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
                    <div className={styles.treatmentsElement}>
                        <Link href="/components/Therapies/ReflexologiaPodal">
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
                    <div className={styles.treatmentsElement}>
                        <Link href="/components/Therapies/Reiki">
                            <Image
                                src="/reiki-2.png"
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
                    </div>
                    <div className={styles.treatmentsElement}>
                        <Link href="/components/Therapies/PiedrasCalientes">
                            <Image
                                src="/piedras-calientes.png"
                                alt="Piedras Calientes"
                                width={400}
                                height={350}
                            />
                            <button>Más Info...</button>
                        </Link>
                        <h3>Piedras Calientes</h3>
                        <p>
                            El tratamiento de piedras calientes, también conocido como terapia geotermal, es una técnica de masaje en la que se utilizan piedras lisas y calentadas en agua para aplicar calor y presión sobre los músculos del cuerpo.
                            <br />
                            La terapia de calor ayuda a aliviar el estrés y la tensión muscular, al tiempo que mejora la circulación sanguínea y el flujo linfático.
                        </p>
                    </div>
                    <div className={styles.treatmentsElement}>
                        <Link href="/components/Therapies/DrenajeLinfatico">
                            <Image
                                src="/drenaje-linfatico.png"
                                alt="Piedras Calientes"
                                width={400}
                                height={350}
                            />
                            <button>Más Info...</button>
                        </Link>
                        <h3>Drenaje Linfatico</h3>
                        <p>
                            El drenaje linfático es una técnica de masaje terapéutico que tiene como objetivo estimular el sistema linfático del cuerpo para mejorar la eliminación de líquidos y toxinas.
                            <br />
                            Este sistema es esencial para el correcto funcionamiento del cuerpo, ya que es responsable de transportar fluidos, nutrientes y desechos a través del sistema circulatorio.
                        </p>
                    </div>
                    <div className={styles.treatmentsElement}>
                        <Link href="/components/Therapies/MasajesTerapeuticos">
                            <Image
                                src="/masajes-terapeuticos.png"
                                alt="Masajes Terapeuticos"
                                width={400}
                                height={350}
                            />
                            <button>Más Info...</button>
                        </Link>
                        <h3>Masajes Terapeuticos</h3>
                        <p>
                            El drenaje linfático es una técnica de masaje terapéutico que tiene como objetivo estimular el sistema linfático del cuerpo para mejorar la eliminación de líquidos y toxinas.
                            <br />
                            Este sistema es esencial para el correcto funcionamiento del cuerpo, ya que es responsable de transportar fluidos, nutrientes y desechos a través del sistema circulatorio.
                        </p>
                    </div>
                </div>
            </section>
            <div className={styles.bttns}>
                <button>
                    <Link href={'/components/Appointments'}>
                        ¿Interesado? ¡Agenda tu cita!
                    </Link>
                </button>
                <button>
                    <Link href={'/components/Contact'}>
                        ¿Alguna duda? ¡Consulta aquí!
                    </Link>
                </button>
            </div>
        </>
    )
}

export default Treatments
