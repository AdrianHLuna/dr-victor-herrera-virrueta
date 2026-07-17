import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaExclamationTriangle, FaPhone, FaWhatsapp, FaInfoCircle } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) return {};
  
  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSignOrSymptom",
    name: symptom.name,
    description: symptom.description,
    cause: symptom.causes.map(c => ({ "@type": "MedicalCause", name: c })),
  };

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground py-16 relative overflow-hidden">
      <StructuredData data={schema} />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />
        
        {/* Top Banner (Navy with Gold border) */}
        <FadeUp className="bg-primary text-white border-b-4 border-accent rounded-3xl p-8 sm:p-12 mb-12 mt-8 shadow-md relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="text-[9px] bg-amber-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-3">
              Señal de Alerta Clínica
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-white mb-4">{symptom.name}</h1>
            <p className="text-slate-350 text-xs sm:text-sm font-light leading-relaxed">{symptom.description}</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Symptom details & causes (60% / 7 cols) */}
          <StaggerContainer className="lg:col-span-7 space-y-12">
            
            {/* Why consult warning block */}
            <StaggerItem className="bg-amber-500/5 border-l-4 border-amber-500 rounded-r-3xl p-8 space-y-4">
              <h2 className="text-lg font-serif font-bold text-amber-900 flex items-center gap-2">
                <FaExclamationTriangle className="text-amber-500" /> ¿Por qué requiere valoración médica?
              </h2>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
                {symptom.whyConsult}
              </p>
            </StaggerItem>

            {/* Possible causes list */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-slate-900">Posibles Causas Relacionadas</h2>
              <ul className="space-y-4 text-xs sm:text-sm">
                {symptom.causes.map(cause => (
                  <li key={cause} className="flex gap-3 items-start text-slate-650 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-slate-400 italic flex items-center gap-1.5 pt-2">
                <FaInfoCircle /> *Nota: Esta lista es de carácter puramente informativo. Solo una valoración con el especialista puede determinar la causa definitiva.
              </p>
            </StaggerItem>

          </StaggerContainer>

          {/* Right Column: Sidebar CTA (40% / 5 cols) */}
          <FadeUp delay={0.2} className="lg:col-span-5 space-y-6">
            
            {/* Contact CTA Card */}
            <div className="bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-8 shadow-lg border-b-4 border-accent relative overflow-hidden group">
              <h3 className="text-2xl font-serif font-bold mb-4">Agenda tu valoración de urgencia o consulta</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light mb-8">
                El Dr. Víctor Javier Herrera Virrueta cuenta con disponibilidad para atender urgencias del tracto digestivo y apéndice en Mérida, Yucatán.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  <FaWhatsapp size={14} /> Enviar WhatsApp
                </a>
                <a 
                  href={`tel:${doctor.phone}`}
                  className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  <FaPhone size={12} /> Llamar al Doctor
                </a>
              </div>
            </div>

          </FadeUp>

        </div>
      </div>
    </div>
  );
}
