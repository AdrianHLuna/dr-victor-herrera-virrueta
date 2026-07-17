"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { diseases } from "@/data/diseases";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaArrowRight, FaStethoscope, FaFilter, FaBriefcaseMedical } from "react-icons/fa";

export default function EnfermedadesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  // Category mapper
  const getCategory = (slug: string) => {
    if (slug.includes("obesidad") || slug.includes("reganancia")) return "Bariátrica";
    if (slug.includes("hernia") && !slug.includes("hiatal")) return "Pared Abdominal";
    if (slug.includes("apendicitis") || slug.includes("pancreatitis")) return "Urgencias";
    if (slug.includes("tiroides")) return "Glandular";
    return "Digestiva / Endoscopia";
  };

  // Filter diseases based on active category
  const filteredDiseases = activeCategory === "todos" 
    ? diseases 
    : diseases.filter(d => {
        const cat = getCategory(d.slug).toLowerCase();
        if (activeCategory === "bariatrica") return cat.includes("bariátrica");
        if (activeCategory === "pared") return cat.includes("pared");
        if (activeCategory === "urgencias") return cat.includes("urgencias");
        return cat.includes("digestiva");
      });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
        
        <FadeUp className="mb-12 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Enfermedades y Padecimientos</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-light">
            Conoce a detalle las condiciones de salud del tracto gastrointestinal y pared abdominal que tratamos en consulta y mediante endoscopia intervencionista.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Filters (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 p-6 rounded-3xl shadow-sm sticky top-32">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <FaFilter size={10} /> Filtrar Catálogo
            </h3>
            
            <div className="flex flex-col gap-2">
              {[
                { id: "todos", label: "Todos los Padecimientos", count: diseases.length },
                { id: "digestiva", label: "Digestiva y Endoscopia", count: diseases.filter(d => getCategory(d.slug).includes("Digestiva")).length },
                { id: "urgencias", label: "Urgencias Quirúrgicas", count: diseases.filter(d => getCategory(d.slug).includes("Urgencias")).length },
                { id: "pared", label: "Pared Abdominal", count: diseases.filter(d => getCategory(d.slug).includes("Pared")).length },
                { id: "bariatrica", label: "Procedimientos de Obesidad", count: diseases.filter(d => getCategory(d.slug).includes("Bariátrica")).length }
              ].filter(cat => cat.count > 0).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full px-5 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex justify-between items-center ${
                    activeCategory === cat.id
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-50 text-slate-650 hover:bg-slate-100"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full ${
                    activeCategory === cat.id ? "bg-accent text-white" : "bg-slate-200 text-slate-600"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Disease Cards List (8 cols) */}
          <StaggerContainer className="lg:col-span-8 space-y-6">
            {filteredDiseases.map(disease => (
              <StaggerItem key={disease.id}>
                <Link 
                  href={`/enfermedades/${disease.slug}`} 
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 hover:shadow-md hover:border-accent/20 transition-all duration-300 group block"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
                    {/* Image Column */}
                    <div className="md:col-span-4 relative w-full aspect-[16/10] md:aspect-square bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image 
                        src={disease.image} 
                        alt={disease.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 250px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content Column */}
                    <div className="md:col-span-8 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] bg-slate-100 text-accent px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit">
                            <FaBriefcaseMedical size={10} /> {getCategory(disease.slug)}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif group-hover:text-accent transition-colors">
                          {disease.name}
                        </h2>

                        <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                          {disease.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {disease.symptoms.slice(0, 3).map(s => (
                            <span key={s} className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-lg text-[10px] font-medium border border-slate-150">
                              {s}
                            </span>
                          ))}
                          {disease.symptoms.length > 3 && (
                            <span className="text-[9px] text-slate-400 font-medium py-1 self-center">
                              +{disease.symptoms.length - 3} más
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                        <span>Ficha clínica de diagnóstico &rarr;</span>
                        <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            {filteredDiseases.length === 0 && (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl text-slate-400 text-sm">
                No se encontraron padecimientos registrados en esta categoría.
              </div>
            )}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
