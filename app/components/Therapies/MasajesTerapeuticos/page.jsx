import styles from './MasajesTerapeuticos.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MasajesTerapeuticos = () => {
    return (
        <>
            <section className={styles.container}>
                <div>
                    <h1>Masajes Terapéuticos</h1>
                    <p>
                        Los masajes terapéuticos son una técnica de masaje que se centra en aliviar dolores musculares y reducir la tensión en el cuerpo. A diferencia de los masajes de relajación, los masajes terapéuticos se enfocan en áreas específicas del cuerpo donde el paciente experimenta dolor o incomodidad.
                        <br />
                        En una sesión de masaje terapéutico, el terapeuta utiliza una variedad de técnicas para trabajar en los tejidos profundos del cuerpo, incluyendo amasamiento, fricción y presión. Estas técnicas pueden ayudar a aflojar los músculos tensos y reducir la inflamación, lo que a su vez puede aliviar el dolor y mejorar la función del cuerpo.
                        Los masajes terapéuticos son especialmente beneficiosos para personas que sufren de dolor muscular, lesiones deportivas, estrés y tensiones diarias.
                        <br />
                        Si estás buscando una forma natural y efectiva de aliviar el dolor y la tensión en el cuerpo, el masaje terapéutico puede ser la solución perfecta para ti.
                    </p>
                    <h2>Beneficios de los Masajes Terapéuticos</h2>
                    <ul>
                        <li>
                            Alivio del dolor: Los masajes terapéuticos pueden ayudar a aliviar el dolor muscular y reducir la tensión en el cuerpo, lo que puede ser beneficioso para personas que sufren de dolores de cabeza, lesiones deportivas, dolor de espalda y dolor crónico.

                        </li>
                        <li>
                            Reducción de la inflamación: La técnica de masaje puede ayudar a reducir la inflamación en el cuerpo, lo que puede ser beneficioso para personas que sufren de artritis y otros trastornos inflamatorios.

                        </li>
                        <li>
                            Mejora de la circulación sanguínea: Los masajes terapéuticos pueden ayudar a mejorar la circulación sanguínea en el cuerpo, lo que a su vez puede mejorar la entrega de oxígeno y nutrientes a los tejidos y órganos.

                        </li>
                        <li>
                            Reducción del estrés y la ansiedad: Los masajes terapéuticos pueden ayudar a reducir el estrés y la ansiedad, lo que puede mejorar el estado de ánimo y la calidad del sueño.

                        </li>
                        <li>
                            Mejora de la flexibilidad y la amplitud de movimiento: Los masajes terapéuticos pueden ayudar a mejorar la flexibilidad y la amplitud de movimiento en el cuerpo, lo que puede ser beneficioso para personas que sufren de rigidez y problemas de movilidad.

                        </li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/masajes-terapeuticos.png"
                        alt="Masajes Terapéuticos"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/masajes-terapeuticos2.png"
                        alt="Masajes Terapéuticos"
                        width={400}
                        height={350}
                    />
                </div>
            </section>
            <div className={styles.botones}>
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

export default MasajesTerapeuticos