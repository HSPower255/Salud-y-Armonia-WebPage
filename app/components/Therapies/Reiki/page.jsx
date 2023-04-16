import styles from './Reiki.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Reiki = () => {
    return (
        <>
            <section className={styles.container}>
                <div>
                    <h1>Reiki</h1>
                    <p>
                        El Reiki es una técnica de curación energética que se originó en Japón. La palabra Reiki se compone de dos términos: "rei", que significa "energía universal", y "ki", que se refiere a la energía vital que fluye a través de todos los seres vivos.
                        En esencia, el Reiki implica la transmisión de energía a través de las manos del terapeuta, con el objetivo de equilibrar y armonizar la energía del cuerpo.
                        <br />
                        Durante una sesión de Reiki, el terapeuta coloca sus manos en diferentes partes del cuerpo del cliente, en función de las necesidades específicas de cada persona.
                        El Reiki es una técnica no invasiva y no requiere ningún tipo de manipulación física del cuerpo. En lugar de eso, el terapeuta simplemente coloca sus manos sobre el cuerpo del cliente, permitiendo que la energía fluya a través de sus manos hacia el cuerpo del cliente.
                        Los beneficios del Reiki pueden variar de persona a persona, pero en general, esta técnica puede ayudar a reducir el estrés, la ansiedad y la tensión emocional. También puede ayudar a aliviar dolores y molestias físicas, mejorar la calidad del sueño y promover un estado general de bienestar.
                        <br />
                        El Reiki es una técnica suave y relajante que puede ser beneficioso para personas de todas las edades y niveles de salud. Si estás buscando una forma natural y no invasiva de mejorar tu bienestar físico y emocional, el Reiki podría ser una excelente opción para ti.
                    </p>
                    <h2>Beneficios del Reiki</h2>
                    <ul>
                        <li>
                            Alivio del estrés y la ansiedad: El Reiki ayuda a reducir los niveles de estrés y ansiedad, permitiendo que la mente y el cuerpo se relajen y descansen.                        </li>
                        <li>
                            Equilibrio emocional: El Reiki puede ayudar a equilibrar las emociones, lo que puede mejorar la salud mental y emocional.
                        </li>
                        <li>
                            Aumento de la claridad mental y la concentración: El Reiki puede ayudar a mejorar la claridad mental y la concentración, permitiendo una mayor capacidad de enfoque y concentración.
                        </li>
                        <li>
                            Mejora de la autoestima y la autoconfianza: El Reiki puede ayudar a mejorar la autoestima y la autoconfianza, lo que puede mejorar la calidad de vida.
                        </li>
                        <li>
                            Aumento de la energía: El Reiki puede ayudar a aumentar los niveles de energía y la vitalidad, lo que puede mejorar la calidad de vida y la capacidad para realizar actividades cotidianas.
                        </li>
                        <li>
                            Alivio del dolor: El Reiki puede ayudar a aliviar el dolor crónico, así como los dolores de cabeza, las migrañas y el dolor muscular.
                        </li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/reiki.png"
                        alt="Reiki"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/reiki-2.png"
                        alt="Reiki"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/reiki-3.png"
                        alt="Reiki"
                        width={400}
                        height={350}
                    />
                </div>
            </section>
            <div className={styles.bttns}>
                <button>
                    <Link href={'/components/Appointments'}>
                        ¿Interesado? ¡Agenda tu cita!
                    </Link>
                </button>
                <button>
                    <Link href={'/components/Treatments'}>
                        Todos nuestros tratamientos...
                    </Link>
                </button>
            </div>
        </>
    )
}

export default Reiki