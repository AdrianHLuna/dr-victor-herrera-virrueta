import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaInfoCircle, FaPhone, FaWhatsapp, FaNotesMedical, FaClock, FaHeartbeat } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    procedureType: service.type === "ambulatorio" ? "NoninvasiveProcedure" : "SurgicalProcedure",
    howPerformed: service.description,
    preparation: service.anesthesiaType ? `Anestesia: ${service.anesthesiaType}` : undefined,
    performer: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground py-16 relative overflow-hidden">
      <StructuredData data={schema} />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} />
        
        {/* Top Banner (Navy with Gold border) */}
        <FadeUp className="bg-primary text-white border-b-4 border-accent rounded-3xl p-8 sm:p-12 mb-12 mt-8 shadow-md relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="text-[9px] bg-accent text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-3">
              Ficha del Procedimiento: {service.type}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-white mb-4">{service.name}</h1>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">{service.longDescription}</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Recovery Guides (60% / 7 cols) */}
          <StaggerContainer className="lg:col-span-7 space-y-12">
            
            {/* Quick specifications grid */}
            <StaggerItem className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <div className="flex flex-col gap-1.5 p-3">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><FaClock /> Duración</span>
                <span className="text-sm font-bold text-slate-900 font-serif">{service.duration || "Variable"}</span>
              </div>
              <div className="border-t sm:border-t-0 sm:border-x border-slate-100 flex flex-col gap-1.5 p-3 sm:px-6">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><FaHeartbeat /> Recuperación</span>
                <span className="text-sm font-bold text-slate-900 font-serif">{service.recoveryTime || "Inmediata"}</span>
              </div>
              <div className="border-t sm:border-t-0 border-slate-100 flex flex-col gap-1.5 p-3">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5"><FaNotesMedical /> Anestesia</span>
                <span className="text-sm font-bold text-slate-900 font-serif">{service.anesthesiaType || "Local / Sedación"}</span>
              </div>
            </StaggerItem>

            {/* Benefits Checklist */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full" /> Beneficios del Tratamiento
              </h2>
              <ul className="space-y-4 text-xs sm:text-sm">
                {service.benefits.map(b => (
                  <li key={b} className="flex gap-3 items-start text-slate-650 font-light leading-relaxed">
                    <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0 text-base" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Post-Op care instructions */}
            <StaggerItem className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-3">
                <FaInfoCircle className="text-accent" /> Indicaciones y Cuidados Posteriores
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                {service.postOpRecommendations.map((r, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-[10px] text-accent flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-slate-650 font-light leading-relaxed mt-0.5">{r}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Right Column: Sidebar Specs & CTA (40% / 5 cols) */}
          <FadeUp delay={0.2} className="lg:col-span-5 space-y-6">
            
            {/* Technical specs block */}
            {service.technicalSpecs && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <h3 className="text-lg font-serif font-bold text-slate-900 border-b border-slate-100 pb-3">Detalles Técnicos</h3>
                <dl className="space-y-4">
                  {Object.entries(service.technicalSpecs).map(([key, value]) => (
                    <div key={key} className="border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                      <dt className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{key}</dt>
                      <dd className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Contact Callouts */}
            <div className="bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-8 shadow-lg border-b-4 border-accent relative overflow-hidden group">
              <h3 className="text-2xl font-serif font-bold mb-4">¿Deseas agendar este estudio o cirugía?</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light mb-8">
                Resolvemos tus dudas sobre convenios de seguros, presupuestos hospitalarios y preparación previa para el estudio en Mérida.
              </p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  <FaWhatsapp size={14} /> Solicitar Preparación
                </a>
                <a 
                  href={`tel:${doctor.phone}`}
                  className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  <FaPhone size={12} /> Consultorio Mérida
                </a>
              </div>
            </div>

          </FadeUp>

        </div>
      </div>
    </div>
  );
}
