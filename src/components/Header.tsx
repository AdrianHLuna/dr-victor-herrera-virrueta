"use client";

import Link from "next/link";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-border">
      {/* Top Bar - Credentials & Urgent Contact */}
      <div className="bg-primary text-primary-foreground text-[10px] sm:text-[11px] py-2.5 hidden md:block tracking-wide">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 items-center font-light">
            <span>
              Céd. Prof: <strong className="font-semibold text-white">{doctor.cedula}</strong> <span className="text-accent font-bold text-[9px] uppercase tracking-wider">(UDEFA)</span>
            </span>
            <span className="text-slate-700">|</span>
            <span>
              Céd. Esp: <strong className="font-semibold text-white">{doctor.cedulaEspecialidad}</strong> <span className="text-accent font-bold text-[9px] uppercase tracking-wider">(UDEFA)</span>
            </span>
            <span className="text-slate-700">|</span>
            <span>
              Céd. Subesp: <strong className="font-semibold text-white">14233651</strong> <span className="text-accent font-bold text-[9px] uppercase tracking-wider">(UDEFA)</span>
            </span>
            {doctor.cofepris && (
              <>
                <span className="text-slate-700">|</span>
                <span>
                  COFEPRIS: <strong className="font-semibold text-white">{doctor.cofepris}</strong>
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 text-slate-300 hover:text-white transition-all font-semibold">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Urgencias 24/7: <strong className="text-white font-bold tracking-wider">{doctor.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}</strong>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand Logo with dynamic fallback */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo/cropped_LOGO DR VICTOR H-07.png" 
            alt={`Logo ${doctor.title} ${doctor.name}`}
            width={1036}
            height={166}
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-bold text-primary/80">
          <Link href="/" className="hover:text-accent transition-all duration-300">Inicio</Link>
          <Link href="/enfermedades" className="hover:text-accent transition-all duration-300">Enfermedades</Link>
          <Link href="/servicios" className="hover:text-accent transition-all duration-300">Servicios</Link>
          <Link href="/sintomas" className="hover:text-accent transition-all duration-300">Síntomas</Link>
          <Link href="/contacto" className="hover:text-accent transition-all duration-300">Contacto</Link>
        </nav>

        {/* Action Button */}
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 bg-primary hover:bg-accent text-white px-5 py-3 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 rounded-xl">
          <FaWhatsapp size={14} /> Agendar Cita
        </a>

        {/* Mobile Toggle */}
        <button aria-label="Menu" className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border p-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-bold text-primary shadow-2xl absolute w-full left-0">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Inicio</Link>
          <Link href="/enfermedades" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Enfermedades</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Servicios</Link>
          <Link href="/sintomas" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Síntomas</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)} className="py-3 border-b border-stone-100">Contacto</Link>
          
          <div className="flex flex-col gap-2 mt-4 text-[10px] text-stone-500 font-light normal-case">
            <span>Céd. Prof: {doctor.cedula} (UDEFA)</span>
            <span>Céd. Esp: {doctor.cedulaEspecialidad} (UDEFA)</span>
            <span>Céd. Subesp: 14233651 (UDEFA)</span>
            {doctor.cofepris && <span>COFEPRIS: {doctor.cofepris}</span>}
          </div>

          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest rounded-xl">
            <FaWhatsapp size={16} /> Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
