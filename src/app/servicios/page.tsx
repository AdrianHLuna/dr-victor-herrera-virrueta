import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaArrowRight, FaCameraRetro, FaStethoscope } from "react-icons/fa";

export const metadata = {
  title: "Estudios Endoscópicos y Cirugías | Dr. Víctor Javier Herrera Virrueta",
  description: "Portafolio de procedimientos quirúrgicos y endoscópicos del Dr. Víctor Javier Herrera Virrueta en Mérida, Yucatán.",
};

export default function ServiciosPage() {
  // Split services by type or slug characteristics
  const endoscopias = services.filter(s => 
    s.slug.includes("panendoscopia") || 
    s.slug.includes("colonoscopia") || 
    s.slug.includes("balon") || 
    s.slug.includes("cpre") || 
    s.slug.includes("varices")
  );

  const cirugias = services.filter(s => !endoscopias.some(e => e.id === s.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Procedimientos y Servicios</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-light">
            Especialista militar en Mérida. Brindamos abordajes integrales en endoscopia digestiva diagnóstica e intervencionista y cirugía general por mínima invasión.
          </p>
        </FadeUp>

        <div className="space-y-20">
          
          {/* SECTION 1: ENDOSCOPIAS */}
          <div className="space-y-8">
            <FadeUp className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary border border-primary/10 flex items-center justify-center">
                <FaCameraRetro size={16} />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-slate-900">Unidad de Endoscopia Avanzada</h2>
                <p className="text-[10px] text-slate-500 font-light uppercase tracking-wider">Estudios de diagnóstico e intervencionismo del aparato digestivo</p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {endoscopias.map(service => (
                <StaggerItem key={service.id}>
                  <Link 
                    href={`/servicios/${service.slug}`} 
                    className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-md hover:border-accent/20 transition-all duration-300 flex flex-col h-full group"
                  >
                    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-[9px] bg-primary/5 text-primary border border-primary/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-4">
                          Endoscopia
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-accent transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-slate-550 text-xs leading-relaxed font-light mb-6">
                          {service.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                        <span>Ver ficha del estudio &rarr;</span>
                        <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* SECTION 2: CIRUGIAS */}
          <div className="space-y-8">
            <FadeUp className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent border border-accent/25 flex items-center justify-center">
                <FaStethoscope size={16} />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-serif text-slate-900">Unidad de Cirugía Laparoscópica</h2>
                <p className="text-[10px] text-slate-500 font-light uppercase tracking-wider">Procedimientos de mínima invasión y cirugía general</p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cirugias.map(service => (
                <StaggerItem key={service.id}>
                  <Link 
                    href={`/servicios/${service.slug}`} 
                    className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-md hover:border-accent/20 transition-all duration-300 flex flex-col h-full group"
                  >
                    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <span className="text-[9px] bg-accent/10 text-accent border border-accent/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-4">
                          Laparoscopia / Cirugía
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-accent transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-slate-550 text-xs leading-relaxed font-light mb-6">
                          {service.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                        <span>Ver ficha quirúrgica &rarr;</span>
                        <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </div>
  );
}
