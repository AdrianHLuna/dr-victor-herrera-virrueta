import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaExclamationTriangle, FaStethoscope, FaInfoCircle, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) return {};
  
  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) notFound();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.description,
      signOrSymptom: disease.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: disease.riskFactors.map(r => ({ "@type": "MedicalRiskFactor", name: r })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: disease.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground py-16 relative overflow-hidden">
      <StructuredData data={schemas} />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} />
        
        {/* Top Academic Banner (Navy with Gold border) */}
        <FadeUp className="bg-primary text-white border-b-4 border-accent rounded-3xl p-8 sm:p-12 mb-12 mt-8 shadow-md relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] bg-accent text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-3">
              Ficha Clínica Informativa
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-white mb-2">{disease.name}</h1>
            <p className="text-slate-300 text-xs sm:text-sm font-light mt-1 italic">Nombre Técnico: {disease.technicalName || disease.name}</p>
          </div>
          {disease.mexicoStats && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 max-w-xs backdrop-blur-sm">
              <span className="text-[9px] uppercase font-bold tracking-widest text-accent block mb-1">Estadística en México</span>
              <p className="text-xs text-slate-200 font-light leading-relaxed">{disease.mexicoStats}</p>
            </div>
          )}
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Clinical Description (60% / 7 cols) */}
          <StaggerContainer className="lg:col-span-7 space-y-12">
            
            {/* Overview */}
            <StaggerItem className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full" /> Descripción General
              </h2>
              <p className="text-slate-650 font-light leading-relaxed text-sm sm:text-base">
                {disease.description}
              </p>
            </StaggerItem>

            {/* Symptoms */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-3">
                <FaExclamationTriangle className="text-accent" /> Síntomas y Señales
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                {disease.symptoms.map(sym => (
                  <li key={sym} className="flex gap-2.5 items-start text-slate-650 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Causes & Risk Factors */}
            <StaggerItem className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-50 border border-slate-200 rounded-3xl p-8">
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FaStethoscope className="text-accent" /> Causas
                </h3>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-2.5 font-light leading-relaxed">
                  {disease.causes.map(cause => <li key={cause}>{cause}</li>)}
                </ul>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-slate-200 pt-6 sm:pt-0 sm:pl-8">
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">Factores de Riesgo</h3>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-2.5 font-light leading-relaxed">
                  {disease.riskFactors.map(factor => <li key={factor}>{factor}</li>)}
                </ul>
              </div>
            </StaggerItem>

            {/* Treatments */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-3">
                <FaCheckCircle className="text-emerald-600" /> Abordaje y Tratamientos
              </h2>
              <div className="flex flex-wrap gap-2">
                {disease.treatments.map(treatment => (
                  <span key={treatment} className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold">
                    {treatment}
                  </span>
                ))}
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Right Column: Sidebar (40% / 5 cols) */}
          <FadeUp delay={0.2} className="lg:col-span-5 space-y-6">
            
            {/* FAQs Accordions */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {disease.faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-5 rounded-2xl border border-slate-150">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-2 font-serif">{faq.question}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA Card */}
            <div className="bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-8 shadow-lg border-b-4 border-accent relative overflow-hidden group">
              <h3 className="text-2xl font-serif font-bold mb-4">¿Sospecha de esta condición?</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light mb-8">
                Un diagnóstico preciso a tiempo evita cirugías mayores de urgencia. Agenda tu valoración médica militar en Mérida, Yucatán.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  <FaWhatsapp size={14} /> Agendar por WhatsApp
                </a>
                <a 
                  href={`tel:${doctor.phone}`}
                  className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  <FaPhone size={12} /> Llamar Consultorio
                </a>
              </div>
            </div>

          </FadeUp>

        </div>
      </div>
    </div>
  );
}
