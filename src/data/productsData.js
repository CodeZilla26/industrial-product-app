import inyeccionImg from '../assets/controlador-inyeccion.jpg';
import tempImg1 from '../assets/Controladores de temperatura-1.jpg';
import tempImg2 from '../assets/Controladores de temperatura-2.jpg';

export const productsData = [
  {
    id: 'inyeccion',
    name: 'Controladores de tiempo de inyección',
    images: [
      { src: inyeccionImg, alt: 'Controladores de tiempo de inyección' },
    ],
    intro:
      'Un temporizador de inyección secuencia controla para abrir y cerrar la puerta de un canal caliente con el fin de tener efecto para:',
    highlights: [
      'Eliminar WELDLINE',
      'Ajustar la cantidad de inyección de cada puerta',
      'Reducir la fuerza de sujeción',
      'Minimizar marca de flujo, etc.',
    ],
    advantagesTitle: 'La ventaja de temporizador de secuencia de inyección',
    advantages: [
      {
        title: 'Seleccionar la tensión de salida',
        description:
          'Los usuarios pueden seleccionar el voltaje de salida del temporizador secuencia de cualquiera de 24V DC o 220V AC con el fin de tener una tensión de salida igual a la tensión del solenoide de entrada.',
      },
      {
        title: 'Mostrar automáticamente la tensión de salida',
        description:
          'Voltaje de salida se muestra automáticamente cuando se trabaja.',
      },
      {
        title: 'Modo de funcionamiento',
        description:
          'Con soporte para A / B / C modos, los usuarios pueden establecer el tiempo de apertura y cierre de la puerta en función de los usuarios de varias condiciones de operación.',
      },
    ],
  },
  {
    id: 'temperatura',
    name: 'Controladores de temperatura',
    images: [
      { src: tempImg1, alt: 'Controladores de temperatura - Vista frontal' },
      { src: tempImg2, alt: 'Controladores de temperatura - Vista en rack' },
    ],
    intro:
      'Los nuevos controladores de temperatura fueron creados para cumplir con las máximas exigencias de inyección por colada caliente:',
    highlights: [
      'Pirómetros digitales con microprocesador de alta tecnología',
      'Formato normalizado de 48 x 96mm, de fácil manejo con programación de funciones por teclado',
      'Gabinetes tipo rack de aluminio normalizado de 19”, de fabricación robusta para soportar trabajos en fábricas',
      'Disponibles en 1, 4, 5 y 6 zonas (sobre pedido podemos fabricar la cantidad de zonas que el cliente solicite)',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      {
        title: 'Compensación automática por falla de la termocupla',
        description:
          'Pasando automáticamente a trabajar manual, con un % de potencia promedio de los últimos minutos, esto hace que el molde siga trabajando normalmente.',
      },
      {
        title: 'Soft-start automático.',
      },
      {
        title: 'Indicación visual de la temperatura deseada y requerida.',
      },
      {
        title: 'Posibilidad de controlar el % de potencia entregada',
      },
      {
        title: 'Amperímetro incluido',
      },
      {
        title: 'De acuerdo a sus características',
      },
      {
        title: 'EL PRECIO MAS BAJO DEL MERCADO',
      },
      {
        title: 'Entrega inmediata',
      },
      {
        title: 'Garantía y asesoramiento',
      },
    ],
  },
];
