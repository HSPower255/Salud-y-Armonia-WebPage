import styles from './PiedrasCalientes.module.css'
import Link from 'next/link'
import Image from 'next/image'

const PiedrasCalientes = () => {
    return (
        <container>
            <section className={styles.container}>
                <div>
                    <h1>Piedras Calientes</h1>
                    <p>
                        Los masajes de piedras calientes son una técnica de masaje terapéutico que utiliza piedras suaves y calientes para aliviar la tensión muscular, reducir el estrés y mejorar la circulación sanguínea en el cuerpo.
                        Durante una sesión de masaje de piedras calientes, el terapeuta coloca piedras lisas y calientes en puntos específicos del cuerpo, como la espalda, el abdomen y las extremidades. Estas piedras calientes ayudan a relajar los músculos tensos y mejorar la circulación sanguínea en el cuerpo, lo que a su vez puede reducir el estrés y la tensión.
                        <br />
                        El terapeuta también utiliza las piedras calientes para realizar técnicas de masaje, como el amasamiento y la fricción, para ayudar a relajar aún más los músculos y mejorar la circulación sanguínea en el cuerpo.
                        Los masajes de piedras calientes son especialmente beneficiosos para personas que sufren de estrés, tensión muscular, problemas de sueño, problemas circulatorios y problemas de articulaciones y músculos.
                        <br />
                        Si buscas una experiencia de masaje única y relajante, ¡el masaje de piedras calientes podría ser perfecto para ti!
                    </p>
                    <h2>Beneficios de las Piedras Calientes</h2>
                    <ul>
                        <li>
                            Alivio del dolor muscular: Las piedras calientes ayudan a aflojar y relajar los músculos tensos, aliviando así el dolor muscular y la rigidez. Esto puede ser especialmente beneficioso para personas que sufren de dolor crónico y rigidez muscular.                        </li>
                        <li>
                            Reducción del estrés: Los masajes con piedras calientes son muy relajantes y pueden ayudar a reducir el estrés y la ansiedad. Las piedras calientes ayudan a calmar el sistema nervioso y a reducir los niveles de cortisol, la hormona del estrés.

                        </li>
                        <li>
                            Reducción de la inflamación: La quiropraxia puede ayudar a reducir la inflamación en el cuerpo, lo que a su vez puede ayudar a reducir el dolor y la rigidez.
                        </li>
                        <li>
                            Mejora de la piel: La aplicación de piedras calientes en la piel puede mejorar la circulación sanguínea y ayudar a reducir la aparición de cicatrices y marcas en la piel.
                        </li>
                        <li>
                            Mejora de la circulación sanguínea: Las piedras calientes aplicadas en puntos específicos del cuerpo pueden mejorar la circulación sanguínea, lo que a su vez puede ayudar a reducir la inflamación y mejorar la función del sistema inmunológico.

                        </li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/piedras-calientes.png"
                        alt="Piedras Calientes"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/piedras-calientes2.png"
                        alt="Piedras Calientes"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/piedras-calientes3.png"
                        alt="Piedras Calientes"
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
        </container>
    )
}

export default PiedrasCalientes