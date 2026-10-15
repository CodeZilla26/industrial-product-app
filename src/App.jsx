import { useState } from 'react';
import { productsData } from './data/productsData';
import ProductSection from './components/ProductSection';

export default function App() {
  const [activeProductId, setActiveProductId] = useState(productsData[0].id);

  const currentProduct =
    productsData.find((p) => p.id === activeProductId) || productsData[0];

  return (
    <main className="min-h-screen bg-slate-100 py-0 sm:py-8 font-sans">
      <div className="mx-auto max-w-6xl overflow-hidden border-slate-200 bg-white sm:rounded-lg sm:border sm:shadow-sm">
        
        {/* Pestañas de navegación dinámicas basadas en los datos */}
        <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-6">
          <nav className="flex space-x-6 overflow-x-auto" aria-label="Pestañas de productos">
            {productsData.map((prod) => (
              <button
                key={prod.id}
                type="button"
                onClick={() => setActiveProductId(prod.id)}
                className={`whitespace-nowrap py-4 px-1 text-sm font-semibold border-b-2 transition ${
                  activeProductId === prod.id
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                {prod.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Componente único reutilizable (buenas prácticas DRY) */}
        <ProductSection product={currentProduct} />

      </div>
    </main>
  );
}
