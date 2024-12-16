import React from 'react';
import "../styles/Doncello.css"

const Doncello = () => {
  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-green-800">El Doncello, Caquetá</h1>
      <p className="text-lg mb-6 text-gray-700">
        El Doncello es un municipio en el corazón del Caquetá, reconocido por su exuberante naturaleza y diversas opciones de turismo de aventura y bienestar.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-700">Principales Atractivos Turísticos</h2>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-3 text-green-600">El Fin del Estrés</h3>
        <img
          src="https://i.ytimg.com/vi/7C4nVWudtQc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwob4CCPEfluZO2MRfxPiORRmbKQ"
          alt="Cascada principal de El Fin del Estrés, un paraíso natural con aguas cristalinas"
          loading="lazy"
          className="w-full h-auto rounded-lg mb-3 object-cover"
        />
        <p className="text-gray-700">
          Un paraíso escondido que cuenta con 12 cascadas de agua cristalina, ideales para actividades como senderismo, rappel, puente tibetano, salto al vacío y escalada. Además, ofrece una playa frente a las cascadas, zonas de descanso con hamacas y cabañas diseñadas para la conexión con la naturaleza.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-3 text-green-600">Cañón de la Ceiba</h3>
        <img
          src="https://live.staticflickr.com/1558/24829360529_21557d0e8a_b.jpg"
          alt="Vista panorámica del Cañón de la Ceiba con su exuberante vegetación selvática"
          loading="lazy"
          className="w-full h-auto rounded-lg mb-3 object-cover"
        />
        <p className="text-gray-700">
          Un impresionante cañón natural que ofrece rutas de senderismo a través de paisajes selváticos, permitiendo a los visitantes disfrutar de la biodiversidad y belleza escénica de la región.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-green-700">Actividades Destacadas</h2>

      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li className="text-gray-700">
          <strong>Senderismo:</strong> Explora rutas que atraviesan selvas tropicales, cascadas y formaciones rocosas, ofreciendo vistas panorámicas y contacto directo con la naturaleza.
        </li>
        <li className="text-gray-700">
          <strong>Parapente:</strong> Experimenta la emoción de volar sobre los paisajes del Caquetá, disfrutando de vistas aéreas de la selva y los ríos.
        </li>
        <li className="text-gray-700">
          <strong>Avistamiento de Aves:</strong> El Doncello es hogar de una gran variedad de especies de aves, lo que lo convierte en un destino ideal para los amantes de la ornitología.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-green-700">Fauna y Flora</h2>

      <p className="mb-6 text-gray-700">
        La región alberga una rica biodiversidad, incluyendo especies emblemáticas como el jaguar, el oso hormiguero gigante y una variedad de aves tropicales. La flora es igualmente diversa, con bosques densos que contienen una amplia gama de plantas medicinales y árboles maderables.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-700">Galería de Imágenes</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipNIxuCPHdML_w7zqcF7THTpbB9ihtv6EGztW5Pk=w675-h390-n-k-no"
          alt="Cascada Anayacito"
          loading="lazy"
          className="w-full h-auto rounded-lg object-cover"
        />
        <img
          src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/L2BBD6JL3VDINOAGKVYG2DNGD4.jpg"
          alt="Avistamiento de Aves"
          loading="lazy"
          className="w-full h-auto rounded-lg object-cover"
        />
        <img
          src="https://fmm.es/wp-content/uploads/2024/04/senderismo.webp"
          alt="Senderismo en El Doncello"
          loading="lazy"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-green-700">Ubicación</h2>

      <p className="mb-6 text-gray-700">
        El Doncello se encuentra en el departamento del Caquetá, Colombia, y es accesible por vía terrestre desde las principales ciudades de la región.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-700">Enlaces de Interés</h2>

      <ul className="space-y-2">
        <li>
          <a 
            href="https://www.elfindelestres.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Sitio Oficial de El Fin del Estrés
          </a>
        </li>
        <li>
          <a 
            href="https://www.tripadvisor.co/Attraction_Review-g4458661-d27456205-Reviews-El_Fin_Del_Estres-El_Doncello_Caqueta_Department.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Opiniones sobre El Fin del Estrés en TripAdvisor
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Doncello;