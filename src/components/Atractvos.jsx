import React from 'react'
import "./atractivos.scss"
import iglesia from '../assets/atractivos/iglesia.png'
import molino from '../assets/atractivos/molino.png'
import carrizal from '../assets/atractivos/carrizal.png'
import franciscoViejo from '../assets/atractivos/franciscoViejo.png'
import lasPiedritas from '../assets/atractivos/lasPiedritas.png'
import pozodeltigre from '../assets/atractivos/pozodeltigre.png'
import circuito from '../assets/atractivos/circuito.png'
import portada from '../assets/atractivos/portada.png'
import avatar from '/avatarMujer.jpg'

const Atractvos = () => {
  return (
    <main>
        <section className='portada__atractivos'>
            <img className="mb-3" src={portada} alt="casona perteneciente al Circuito Historico"/>
            <h1 className="w-100 text-center">ATRACTIVOS TURISTICOS</h1>
        </section>
      <section>
        <article className='card__atractivo text-center mx-auto my-4'>
            <h4 className='my-3'>Iglesia San Francisco Solano</h4>
            <img className="mb-3" src={iglesia} alt="colage fotos Iglesia San Francisco Solano"/>
            <p className='mx-auto'>El 3 de julio de 1890 se firmó el contrato entre los miembros de la Comisión directiva pro-templo y Antonio Pre visto como constructors este se compromette a construiret templo de tres naves, con dos sacristías y dos portadas co laterales a las naves extemas, y dos torres con sujeción a los planos presentados y aprobados en su oportunidad.</p>
        </article>
        <article className='card__atractivo text-center mx-auto my-4'>
            <h4 className='my-3'>Monumento Piedra de Molino Harinero</h4>
            <img className="mb-3" src={molino} alt="foto Monumento Piedra de Molino Harinero"/>
            <p className='mx-auto'> Ubicado en la actual calle San Martín casi esquina Mariano Moreno. Funcionó hasta finales del siglo IXX y aun se conserva en la plaza central una de las piedras que cumplían dicha labor. </p>
        </article>
        <article className='card__atractivo text-center mx-auto my-4'>
            <h4 className='my-3'>Circuito Historico</h4>
            <img className="mb-3" src={circuito} alt="casona perteneciente al Circuito Historico"/>
            <p className='mx-auto'> Ubicado sobre la actual calle Sarmiento (Antiguo Camino Real) General Paz, San Martín, Belgrano,Mariano Moreno y Rivadavia. Comprendidas entre éstas calles céntricas encontramos las antiguas casonas de Adobe, con sus aljibes, portales y zaguanes, testigos de los viejos tiempos.<br/>
            Aquí nos detenemos a ver las construcciones históricas, molino harinero, guardia Civil, antigua herreria, Catedral del Norte, y la antigua técnica de construcción del adobe, con paredes que llegan al metro de ancho, techos altos de caña y tejas. Acompañan el recorrido un amplio número de Algarrobos centenarios que proveían de preciada sombra tanto para personas como para animales. </p>
        </article>
        <article className='card__atractivo text-center mx-auto my-4'>
            <h4 className='my-3'>El Carrizal</h4>
            <img className="mb-3" src={carrizal} alt="foto castillo del Carrizal"/>
            <p className='mx-auto'> A la vera del camino real, entre San pedro Norte y San Francisco del Chañar, a 20 km de éste último, está “El Carrizal” antigua construcción de finales del siglo XIX de estilo italiano, en forma de castillo, hoy muy destruida.<br/>
            Este antiguo casco de estancia perteneció a Don Tristán Vivas, quién hizo construir el edificio en 1870.<br/>
            El edificio marca un hito histórico sobre el antiguo Camino Real, siendo conocido por los lugareños como “El Castillo del Carrizal” </p>
        </article>
        <article className='card__atractivo text-center mx-auto my-4'>
            <h4 className='my-3'>San Francisco Viejo</h4>
            <img className="mb-3" src={franciscoViejo} alt="foto Monumento pancho ramirez"/>
            <p className='mx-auto'>En las cercanías de Villa de María del Río Seco, el caudillo entrerriano Francisco "Pancho" Ramírez fue capturado y asesinado tras enfrentarse a las tropas de Santa Fe y Córdoba. Perseguido por fuerzas comandadas por Francisco Bedolla, Ramírez descansó brevemente en la zona antes de ser sorprendido por las tropas santafesinas el 10 de julio. Aunque logró rescatar a su compañera Delfina, perdió la vida en el intento. Su cabeza fue exhibida en la plaza pública y enviada al gobernador de Santa Fe, Estanislao López, como prueba de la misión cumplida.</p>
        </article>
        <article className='card__atractivo text-center mx-auto my-4'>
            <h4 className='my-3'>Posta Las Piedritas</h4>
            <img className="mb-3" src={lasPiedritas} alt="foto posta las piedritas"/>
            <p className='mx-auto'> El 6 de agosto de 1810 fue capturado en ésta Posta el ex Virrey Santiago de Liniers, héroe de la reconquista de Buenos Aires y luego conspirador y organizador de la contrarrevolución de Mayo. La operación fue comandada por Antonio Balcarce.
            <br/>
            El ex Virrey recorría éstos caminos para llegar al Alto Perú en busca de partidarios para derrocar la Junta de Mayo. Tres semanas después de ser detenida la partida completa, salvo el Obispo Orellana, fue ejecutada en el Monte de lo Papagallos. </p>
        </article>
        <article className='card__atractivo text-center mx-auto my-4'>
            <h4 className='my-3'>Posta de Pozo del Tigre</h4>
            <img className="mb-3" src={pozodeltigre} alt="foto de posta de pozo del tigre"/>
            <p className='mx-auto'>La Posta debe su nombre al yaguareté (tigre americano) que poblaba la zona. Pozo del Tigre, es una de las pocas construcciones del lugar que aún queda en pie y que conserva un dintel original donde se puede leer: Año del Señor de 1771.
            <br/>
            En agosto de 1810, el Coronel Antonio Gonzáles Balcarce escribió allí el comunicado oficial dirigido al Coronel Ortiz de Ocampo, informando que el ex Virrey Liniers había sido detenido en la Posta de Las Piedritas. </p>
        </article>
      </section>
      <section>
        <h3 className='py-3'>GUIAS TURISTICOS</h3>
            <section className='my-3'>
                <article className='guias d-flex justify-content-center align-items-center mx-auto'>
                    <img className="mx-2 my-4" src={avatar} alt="" />
                    <div className='text-center mx-3'>
                        <h4 className='mb-4'>Guias turisticos</h4>
                        <a className="py-2 px-4" href="tel:+54935">Contactar</a>
                    </div>
                </article>
            </section>
      </section>
    </main>
  )
}

export default Atractvos