"use client";

import { useState } from "react";
import { doctor, offices } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaAward, 
  FaUniversity, 
  FaCertificate, 
  FaShieldAlt, 
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaBookOpen,
  FaUserShield,
  FaRegHospital,
  FaExclamationTriangle,
  FaQuestionCircle
} from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [expandedBio, setExpandedBio] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  const generalFAQs = [
    {
      q: "¿Cómo debo prepararme para una gastroscopia o colonoscopia?",
      a: "Para la gastroscopia se requiere un ayuno de 8 horas. Para la colonoscopia, se te indicará una dieta de líquidos claros y la toma de un laxante especial un día antes del estudio para limpiar el colon. Nuestro equipo te enviará la guía de preparación detallada por WhatsApp."
    },
    {
      q: "¿La cirugía de vesícula o hernias requiere hospitalización?",
      a: "Al realizarse por laparoscopia (mínima invasión), la colecistectomía y las hernioplastias suelen requerir únicamente una noche de hospitalización. En algunos casos específicos de hernias umbilicales pequeñas, el procedimiento puede ser ambulatorio, permitiéndote regresar a casa el mismo día."
    },
    {
      q: "¿Trabaja con mi seguro de gastos médicos mayores?",
      a: "Sí. Aceptamos todas las aseguradoras nacionales. Te apoyamos con el llenado de informes médicos y la integración de tu expediente clínico militar o civil para tramitar el reembolso o programar el pago directo con tu compañía de seguros."
    },
    {
      q: "¿Qué métodos de pago acepta en los consultorios?",
      a: "Aceptamos pagos en efectivo y transferencias electrónicas directas durante tu consulta en Mérida."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 font-sans selection:bg-accent/20 relative overflow-hidden">
      <StructuredData data={homeSchema} />

      {/* Background design - Glowing Gold & Navy ambient spheres (NO grid patterns) */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#887039]/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse duration-[6000ms]" />
      <div className="absolute top-[30%] right-[-150px] w-[600px] h-[600px] bg-[#111c2b]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-200px] w-[700px] h-[700px] bg-[#887039]/5 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />

      {/* 1. ASYMMETRICAL SPLIT HERO WITH LARGE DOCTOR PHOTO */}
      <section className="relative pt-12 pb-16 lg:py-24 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial text content (7 cols) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111c2b] text-white border border-[#887039]/30 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#887039] animate-ping" />
                Rigurosa Disciplina y Ética Médica Militar
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111c2b] leading-[1.1] font-serif uppercase tracking-tight">
                Dr. Víctor Javier <br />
                <span className="text-[#887039] drop-shadow-sm">Herrera Virrueta</span>
              </h1>

              <div className="h-[2.5px] w-24 bg-[#887039]" />

              <h2 className="text-lg sm:text-xl font-bold text-slate-700 uppercase tracking-wide">
                Cirujano General y Especialista en Endoscopia del Aparato Digestivo
              </h2>

              <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base max-w-2xl">
                Egresado con honores de la **Universidad del Ejército y Fuerza Aérea** (UDEFA). Ofrecemos tratamientos quirúrgicos laparoscópicos de mínima invasión y estudios endoscópicos avanzados de diagnóstico y tratamiento en Mérida, Yucatán.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all rounded-2xl flex items-center justify-center gap-3 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaWhatsapp size={14} /> Agendar por WhatsApp
                </a>
                <a 
                  href={`tel:${doctor.phone}`}
                  className="px-8 py-4 bg-[#111c2b] hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-widest transition-all rounded-2xl flex items-center justify-center gap-3 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaPhone size={12} /> Citas: 999 770 8534
                </a>
              </div>
            </div>

            {/* Right Column: Large Doctor Portrait Photo Frame (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] bg-gradient-to-tr from-slate-200 to-slate-300 rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden group">
                {/* Gold glowing border */}
                <div className="absolute inset-0 border-2 border-[#887039]/30 rounded-[2.8rem] pointer-events-none z-10" />
                
                <Image 
                  src={doctor.photo || "/images/doctor.png"} 
                  alt={`Dr. Víctor Javier Herrera Virrueta`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Military seal label on photo */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#111c2b]/95 backdrop-blur-sm border border-[#887039]/40 p-4 rounded-2xl z-20">
                  <p className="text-[10px] text-[#887039] font-bold uppercase tracking-widest font-serif">Médico Militar</p>
                  <p className="text-xs text-white font-semibold mt-0.5">Céd. General: 10144625</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE INFO WIDGET CARDS */}
      <section className="relative z-10 -mt-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 border border-slate-200 shadow-xl rounded-3xl">
            {/* Card 1: Dirección */}
            <div className="flex items-start gap-4 p-4">
              <FaMapMarkerAlt className="text-[#887039] text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#111c2b] uppercase text-xs tracking-wider mb-2 font-serif">Dirección Mérida</h3>
                <p className="text-slate-650 text-xs leading-relaxed font-light">
                  Avenida Pérez Ponce #496, Centro. <br />
                  Calle 31 #645 A, Ciudad Caucel.
                </p>
              </div>
            </div>

            {/* Card 2: Urgencias */}
            <div className="flex items-start gap-4 p-4 border-y md:border-y-0 md:border-x border-slate-100">
              <FaPhone className="text-[#887039] text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#111c2b] uppercase text-xs tracking-wider mb-2 font-serif">Citas y Urgencias</h3>
                <p className="text-[#111c2b] font-bold text-base tracking-wider font-mono">
                  999 770 8534
                </p>
                <p className="text-slate-400 text-[10px] mt-1 font-light">Disponible 24 horas para urgencias agudas.</p>
              </div>
            </div>

            {/* Card 3: Horarios */}
            <div className="flex items-start gap-4 p-4">
              <FaClock className="text-[#887039] text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#111c2b] uppercase text-xs tracking-wider mb-2 font-serif">Horarios</h3>
                <p className="text-slate-650 text-xs leading-relaxed font-light">
                  <strong>Lun a Vie:</strong> 16:00 a 21:00 <br />
                  <strong>Sáb a Dom:</strong> 08:00 a 20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BIOGRAPHY / "SOBRE MÍ" SECTION */}
      <section id="sobre-mi" className="py-24 bg-white mt-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Bio description */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold text-[#887039] uppercase tracking-widest block">Sobre el Cirujano</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111c2b] font-serif uppercase tracking-tight">
                Dr. Víctor Javier Herrera Virrueta
              </h2>
              <div className="h-[2px] w-20 bg-[#887039]" />
              
              <div className="space-y-4 text-slate-650 font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Soy egresado como **Médico Cirujano Militar** de la prestigiosa Universidad del Ejército y Fuerza Aérea (UDEFA), donde forjé bases sólidas de disciplina, honestidad y el más alto rigor científico para el cuidado del ser humano.
                </p>
                <p>
                  Posteriormente, cursé la especialidad en **Cirugía General** y la subespecialidad en **Endoscopia del Aparato Digestivo** dentro de las mismas instituciones militares de alta especialidad, consolidándome en el diagnóstico avanzado y abordajes quirúrgicos de mínima invasión.
                </p>

                {expandedBio && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <p>
                      Mi trayectoria profesional en el sector militar y civil me capacita para ofrecer tratamientos de alta complejidad en el aparato digestivo. Utilizo tecnología de cromoendoscopia y sistemas laparoscópicos modernos para resolver problemas de vesícula biliar, hernias complejas y colocación/retiro de accesos de alimentación o balones intragástricos.
                    </p>
                    <p>
                      Mi compromiso absoluto es ofrecer una atención ética y precisa, explicando minuciosamente el diagnóstico a cada paciente y priorizando procedimientos con mínima molestia y pronta recuperación en Mérida.
                    </p>
                  </div>
                )}
              </div>

              <button 
                onClick={() => setExpandedBio(!expandedBio)}
                className="text-xs font-bold text-[#887039] hover:text-[#111c2b] transition-colors uppercase tracking-widest flex items-center gap-2 pt-2"
              >
                {expandedBio ? "Leer menos ↑" : "Conocer más sobre mi trayectoria →"}
              </button>
            </div>

            {/* Right side: Experience statistics cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 font-serif">Acreditación e Hitos</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#887039] font-bold font-serif text-sm flex-shrink-0 shadow-sm">
                      +10
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111c2b] text-xs uppercase tracking-wider">Años de Trayectoria</h4>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">En el ámbito de la salud médica civil y del ejército.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#887039] font-bold font-serif text-sm flex-shrink-0 shadow-sm">
                      +1k
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111c2b] text-xs uppercase tracking-wider">Endoscopias Realizadas</h4>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">Procedimientos diagnósticos e intervencionistas con sedación.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#887039] font-bold font-serif text-sm flex-shrink-0 shadow-sm">
                      +500
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111c2b] text-xs uppercase tracking-wider">Cirugías Exitosas</h4>
                      <p className="text-[11px] text-slate-500 font-light mt-0.5">Laparoscopias programadas de vesícula, apéndice y hernias.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS & TRUST BADGES */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-[9px] font-bold text-[#887039] uppercase tracking-widest mb-2 block">Acreditación Académica</span>
            <h3 className="text-xl font-serif text-[#111c2b] font-bold">Certificado por Organismos Reguladores Nacionales</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {doctor.certifications.slice(0, 4).map((cert, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center flex flex-col justify-between items-center group hover:border-[#887039]/40 transition-colors">
                <FaAward className="text-[#887039] text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-slate-900 text-[10px] uppercase tracking-wider leading-snug">{cert.name}</h4>
                  <p className="text-[9px] text-slate-500 font-light mt-1.5 leading-relaxed">{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMON DISEASES GRID (DISEASES CATALOGUE) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#887039] uppercase tracking-widest mb-3 block">Directorio Clínico</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#111c2b] font-bold">Enfermedades y Padecimientos Tratados</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-xs sm:text-sm mt-3">
              Haz clic en cualquiera de las condiciones a continuación para conocer causas y opciones quirúrgicas de reparación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {diseases.slice(0, 6).map(disease => (
              <Link 
                key={disease.id}
                href={`/enfermedades/${disease.slug}`} 
                className="group bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-md hover:border-[#887039]/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image 
                    src={disease.image} 
                    alt={disease.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-[#111c2b] font-serif mb-2.5 group-hover:text-[#887039] transition-colors line-clamp-2">
                      {disease.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-3">
                      {disease.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#887039] group-hover:text-[#111c2b] transition-colors">
                    <span>Ver Ficha Diagnóstica &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/enfermedades" 
              className="px-8 py-4 bg-[#111c2b] hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all inline-flex items-center gap-2 shadow-sm"
            >
              Ver Todas las Enfermedades <FaArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DETAILED SERVICES BENTO CARD GRID */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[10px] font-bold text-[#887039] uppercase tracking-widest mb-3 block">Procedimientos</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#111c2b] font-bold">Unidades Quirúrgicas y de Endoscopia</h2>
            </div>
            <p className="text-slate-500 max-w-sm font-light text-xs sm:text-sm mt-4 md:mt-0 leading-relaxed">
              Equipos de alta definición diagnóstica y sistemas laparoscópicos de mínima invasión.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Endoscopy Focus */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-[#887039]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#111c2b] text-[10px] font-bold uppercase tracking-wider">
                  Unidad de Endoscopia Avanzada
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Diagnóstico e Intervencionismo</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  Estudios endoscópicos bajo sedación profunda controlada. Especialista en la detección temprana de pólipos, ligadura de várices, colocación de balones intragástricos y accesos enterales.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-655 font-light pt-2">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#887039] rounded-full" /> Gastroscopia</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#887039] rounded-full" /> Colonoscopia</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#887039] rounded-full" /> Balón Intragástrico</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#887039] rounded-full" /> CPRE</span>
                </div>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/servicios" className="text-xs font-bold text-[#887039] hover:text-[#111c2b] transition-colors flex items-center gap-2 uppercase tracking-wider">
                  Ver Detalles de Endoscopia <FaArrowRight size={10} />
                </Link>
              </div>
            </div>

            {/* Card 2: Laparoscopy Focus */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-[#887039]/30 transition-all duration-300">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#887039] text-[10px] font-bold uppercase tracking-wider">
                  Unidad de Cirugía de Mínima Invasión
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Cirugía Laparoscópica</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  Intervenciones quirúrgicas programadas de vesícula biliar y reparación de hernias abdominales umbilicales e inguinales con malla.
                </p>
                <div className="space-y-2 text-xs text-slate-655 font-light pt-2">
                  <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#111c2b] rounded-full" /> Colecistectomía (Vesícula biliar)</p>
                  <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#111c2b] rounded-full" /> Hernioplastias con malla</p>
                  <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#111c2b] rounded-full" /> Apendicectomía laparoscópica</p>
                </div>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8">
                <Link href="/servicios" className="text-xs font-bold text-[#111c2b] hover:text-[#887039] transition-colors flex items-center gap-2 uppercase tracking-wider">
                  Ver Fichas Quirúrgicas <FaArrowRight size={10} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SYMPTOMS / WARNING SIGNS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#887039] uppercase tracking-widest mb-3 block">Cuándo Consultar</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#111c2b] font-bold">Síntomas y Señales de Alarma Digestiva</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-xs sm:text-sm mt-3">
              Identificar estas manifestaciones a tiempo es clave para evitar peritonitis u obstrucciones intestinales severas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {symptoms.slice(0, 4).map(sym => (
              <div key={sym.id} className="group bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-md hover:border-amber-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image 
                    src={sym.image} 
                    alt={sym.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500/90 text-white p-2 rounded-xl backdrop-blur-sm">
                    <FaExclamationTriangle size={12} />
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-bold text-[#111c2b] text-base font-serif mb-2 group-hover:text-[#887039] transition-colors">{sym.name}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-light line-clamp-3">{sym.description}</p>
                  </div>
                  <Link 
                    href={`/sintomas/${sym.slug}`} 
                    className="text-[#887039] font-bold text-[10px] uppercase tracking-wider mt-6 hover:text-[#111c2b] transition-colors pt-3 border-t border-slate-100 flex items-center justify-between"
                  >
                    <span>Cuándo acudir</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLINIC LOCATIONS MAPS (SIDE-BY-SIDE) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#887039] uppercase tracking-widest mb-3 block">Ubicaciones</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#111c2b] font-bold">Nuestros Consultorios en Mérida</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-xs sm:text-sm mt-3">
              Ubicados estratégicamente con instalaciones cómodas y seguras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {offices.map((office) => (
              <div key={office.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#887039]/30 transition-all">
                <div className="h-[250px] bg-slate-100 relative">
                  <iframe 
                    src={office.id === "office-1" 
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.295489678129!2d-89.6100000!3d19.4312502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sAv%20P%C3%A9rez%20Ponce%20496%2C%20Centro%2C%2097000%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.295489678129!2d-99.7100000!3d19.4312502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sCalle+31+645A%2C+Ciudad+Caucel%2C+97314+M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                    }
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[20%] opacity-95 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-[#111c2b] font-serif mb-2">{office.name}</h4>
                  <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">{office.address}</p>
                  <div className="border-t border-slate-100 pt-5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#887039]">
                    <a href={office.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:underline">Ver en Google Maps &rarr;</a>
                    <a href={`tel:${office.phone}`} className="text-[#111c2b] font-mono">{office.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSURANCE, PRICE & PAYMENTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Insurance Details (7 cols) */}
            <div className="lg:col-span-7 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <FaUserShield size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-slate-900">Convenios y Aseguradoras</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  Aceptamos todos los seguros de gastos médicos mayores. Brindamos asesoría en la integración de tu expediente clínico militar o civil para facilitar tu proceso de **reembolso** o **pago directo** con tu compañía aseguradora.
                </p>
                <div className="flex gap-2 pt-2">
                  <span className="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    Pago Directo
                  </span>
                  <span className="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    Reembolso de Gastos
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Consultation Price & Payment Methods (5 cols) */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8 space-y-6">
              
              {/* Price Block */}
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Costo de Consulta</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-[#111c2b] font-serif">${doctor.consultationPrice}</span>
                  <span className="text-xs text-slate-500 font-medium">MXN</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 font-light">*Primera valoración o consulta subsecuente.</p>
              </div>

              {/* Payment Methods Block */}
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Métodos de Pago</span>
                <div className="flex flex-wrap gap-2">
                  {doctor.paymentMethods.map(method => (
                    <span key={method} className="bg-[#111c2b] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">
                      {method}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
