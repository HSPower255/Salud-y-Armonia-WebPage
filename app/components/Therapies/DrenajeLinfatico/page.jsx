import styles from './DrenajeLinfatico.module.css'
import Link from 'next/link'
import Image from 'next/image'

const DrenajeLinfatico = () => {
    return (
        <>
            <section className={styles.container}>
                <div>
                    <h1>Drenaje Linfático</h1>
                    <p>
                        El drenaje linfático es una técnica de masaje especializada que se enfoca en el sistema linfático del cuerpo. Este sistema es responsable de ayudar a eliminar los desechos y toxinas del cuerpo, y es esencial para mantener una buena salud y bienestar en general.
                        En una sesión de drenaje linfático, el terapeuta utiliza movimientos suaves y rítmicos para estimular el flujo de la linfa en el cuerpo.
                        <br />
                        Este masaje ayuda a eliminar la acumulación de líquidos y toxinas en el cuerpo, reducir la inflamación y mejorar la circulación en general.
                        El drenaje linfático es especialmente beneficioso para personas que sufren de retención de líquidos, hinchazón, edema y otros problemas de circulación.
                        <br />
                        También puede ser beneficioso para personas que se están recuperando de una cirugía o lesión, ya que puede ayudar a reducir la inflamación y acelerar la curación.
                        <br />
                        Si estás buscando una forma natural y efectiva de mejorar tu circulación y reducir la inflamación, el drenaje linfático puede ser la solución perfecta para ti.
                    </p>
                    <h2>Beneficios del Drenaje Linfático</h2>
                    <ul>
                        <li>
                            Reducción de la retención de líquidos: El drenaje linfático ayuda a estimular la eliminación del exceso de líquido en el cuerpo, lo que puede reducir la hinchazón y la retención de líquidos.                        </li>
                        <li>
                            Mejora de la circulación: La técnica del drenaje linfático puede ayudar a mejorar la circulación linfática y sanguínea, lo que a su vez puede mejorar la oxigenación de las células y el transporte de nutrientes.

                        </li>
                        <li>
                            Reducción de la inflamación: El drenaje linfático puede ayudar a reducir la inflamación en el cuerpo, lo que a su vez puede ayudar a reducir el dolor y la rigidez.

                        </li>
                        <li>
                            Fortalecimiento del sistema inmunológico: El sistema linfático es una parte esencial del sistema inmunológico del cuerpo, y el drenaje linfático puede ayudar a fortalecer su función y mejorar la respuesta inmune.

                        </li>
                        <li>
                            Alivio del estrés: El drenaje linfático es una técnica relajante que puede ayudar a reducir el estrés y mejorar la sensación de bienestar.

                        </li>
                        <li>
                            Mejora de la apariencia de la piel: Al eliminar los líquidos y las toxinas acumulados, el drenaje linfático puede ayudar a mejorar la apariencia de la piel, reduciendo la apariencia de la celulitis y mejorando la textura de la piel.

                        </li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/drenaje-linfatico.png"
                        alt="Drenaje Linfático"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/drenaje-linfatico2.png"
                        alt="Drenaje Linfático"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/drenaje-linfatico3.png"
                        alt="Drenaje Linfático"
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

export default DrenajeLinfatico