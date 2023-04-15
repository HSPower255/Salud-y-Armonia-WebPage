import styles from './Quiropraxia.module.css'
import Link from "next/link"
import Image from "next/image"

const Quiropraxia = () => {
    return (
        <>
            <section className={styles.container}>
                <div>
                    <h1>Quiropraxia</h1>
                    <p>
                        La quiropraxia es una técnica terapéutica que se enfoca en el diagnóstico y tratamiento de los trastornos del sistema musculoesquelético y del sistema nervioso. Esta técnica se basa en la idea de que la estructura y función del cuerpo están íntimamente relacionadas y que la corrección de problemas estructurales puede ayudar a restaurar la función del cuerpo y mejorar la salud en general.
                        <br />
                        En una sesión de quiropraxia, el terapeuta realiza ajustes manuales precisos en las articulaciones y tejidos blandos del cuerpo con el objetivo de mejorar la movilidad, reducir el dolor y promover la curación natural. La quiropraxia puede ser efectiva para tratar una amplia gama de problemas, incluyendo dolor de cuello y espalda, lesiones deportivas, dolores de cabeza y problemas de postura.
                        <br />
                        Si estás buscando una solución natural y efectiva para tus problemas de salud musculoesqueléticos, la quiropraxia puede ser la opción perfecta para ti.
                    </p>
                    <h2>Beneficios de la Quiropraxia</h2>
                    <ul>
                        <li>
                            Alivio del dolor: La quiropraxia es conocida por ser una técnica efectiva para aliviar el dolor de cuello y espalda, así como para reducir el dolor en otras áreas del cuerpo, como las rodillas, los hombros y los codos.
                        </li>
                        <li>
                            Mejora de la movilidad y flexibilidad: Los ajustes quiroprácticos pueden ayudar a mejorar la movilidad y flexibilidad de las articulaciones y los músculos, lo que a su vez puede ayudar a mejorar la postura y reducir la rigidez muscular.
                        </li>
                        <li>
                            Reducción de la inflamación: La quiropraxia puede ayudar a reducir la inflamación en el cuerpo, lo que a su vez puede ayudar a reducir el dolor y la rigidez.
                        </li>
                        <li>
                            Mejora del sistema nervioso: Los ajustes quiroprácticos pueden ayudar a mejorar la comunicación entre el sistema nervioso y el resto del cuerpo, lo que puede mejorar la función del cuerpo en general.
                        </li>
                        <li>
                            Mejora de la calidad del sueño: La quiropraxia puede ayudar a reducir el dolor y la tensión muscular, lo que a su vez puede mejorar la calidad del sueño.
                        </li>
                        <li>
                            Mejora de la salud en general: Al mejorar la movilidad y función del cuerpo, la quiropraxia puede ayudar a mejorar la salud en general y reducir el riesgo de problemas de salud a largo plazo.
                        </li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/quiropraxia.png"
                        alt="Quiropraxia"
                        width={400}
                        height={350}
                    />
                    <Image
                        src="/quiropraxia2.png"
                        alt="Quiropraxia"
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

export default Quiropraxia