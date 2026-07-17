import Link from "next/link";
import Image from "next/image";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "Síntomas y Señales de Alarma Digestiva | Dr. Víctor Javier Herrera Virrueta",
  description: "Aprende a identificar síntomas gastrointestinales y de pared abdominal que requieren valoración médica en Mérida, Yucatán.",
};

export default function SintomasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Síntomas de Alarma</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-light">
            Identificar a tiempo señales de alerta en el aparato digestivo o abultamientos en la ingle y ombligo es crucial para prevenir complicaciones médicas severas.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map(sym => (
            <StaggerItem key={sym.id} className="h-full">
              <Link 
                href={`/sintomas/${sym.slug}`} 
                className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-md hover:border-accent/20 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image 
                    src={sym.image} 
                    alt={sym.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500/90 text-white p-2 rounded-xl backdrop-blur-sm">
                    <FaExclamationTriangle size={12} />
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[9px] bg-amber-500/10 text-amber-700 border border-amber-500/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mb-4">
                      <FaExclamationTriangle size={10} /> Señal de Alerta
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-accent transition-colors line-clamp-2">
                      {sym.name}
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed font-light mb-6">
                      {sym.description.substring(0, 140)}...
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                    <span>Cuándo consultar &rarr;</span>
                    <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
