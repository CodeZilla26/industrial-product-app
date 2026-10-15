import { useState, useEffect } from 'react';
import QuoteModal from './QuoteModal';

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-blue-700"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.57a1 1 0 0 1-1.42 0l-3.5-3.53a1 1 0 1 1 1.42-1.408l2.79 2.814 6.79-6.854a1 1 0 0 1 1.414-.006Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProductSection({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reiniciar a la primera imagen al cambiar de producto
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product.id]);

  const hasMultipleImages = product.images && product.images.length > 1;
  const currentImage = product.images[selectedImageIndex] || product.images[0];

  return (
    <section
      aria-labelledby="product-heading"
      className="bg-white px-4 py-10 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* ==================== BLOQUE SUPERIOR: IMAGEN + DESCRIPCIÓN + CTA ==================== */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          
          {/* Columna de Imagen (Soporta 1 o varias imágenes automáticamente) */}
          <div className="space-y-4">
            <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-10">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="h-auto max-h-80 w-full object-contain"
              />
            </div>

            {/* Selector de miniaturas solo si hay más de 1 imagen */}
            {hasMultipleImages && (
              <div className="flex justify-center gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={`h-20 w-24 rounded border-2 bg-slate-50 p-1 transition overflow-hidden ${
                      selectedImageIndex === index
                        ? 'border-blue-700 ring-1 ring-blue-700'
                        : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Columna de Información */}
          <div>
            <h1
              id="product-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 h-1 w-16 rounded bg-blue-700" aria-hidden="true" />

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              {product.intro}
            </p>

            {/* Cuadrícula 2x2 de características clave */}
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800"
                >
                  <span className="mt-0.5">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Opción clara para solicitar información / cotización */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:w-auto"
              >
                Solicitar información o cotización
              </button>
            </div>
          </div>

        </div>

        {/* ==================== BLOQUE INFERIOR: VENTAJAS HOMOLOGADAS ==================== */}
        <div className="mt-14 border-t border-slate-200 pt-10 md:mt-20">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            {product.advantagesTitle}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.advantages.map((advantage, index) => (
              <article
                key={index}
                className="flex items-start gap-3.5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
              >
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded bg-blue-50 text-xs font-bold text-blue-700">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                    {advantage.title}
                  </h3>
                  {advantage.description && (
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      {advantage.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* Modal interactivo de cotización */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />
    </section>
  );
}
