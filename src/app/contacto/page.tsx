import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaEnvelope, FaRegHospital, FaUniversity } from "react-icons/fa";
import { FadeUp } from "@/components/Animations";

export const metadata = {
  title: "Contacto y Ubicación | Dr. Víctor Javier Herrera Virrueta",
  description: "Agenda tu consulta con el Dr. Víctor Javier Herrera Virrueta en Mérida, Yucatán. Consultorios en Pérez Ponce y Ciudad Caucel.",
};

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const offices = [
    {
      id: "office-1",
      name: "Sede Centro - Avenida Pérez Ponce",
      address: "Avenida Pérez Ponce #496 (entre Calle 56 y Paseo de Montejo), Colonia Centro, C.P. 97000",
      between: "Entre Calle 56 y Paseo de Montejo",
      city: "Mérida",
      state: "Yucatán",
      phone: "9997708534",
      schedule: "Lunes a Viernes: 16:00 - 21:00 | Sábado a Domingo: 08:00 - 20:00",
      googleMapsUrl: "https://maps.google.com/?q=Avenida+Perez+Ponce+496,+Centro,+97000+Merida,+Yucatan",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.295489678129!2d-99.6100000!3d19.4312502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sAv%20P%C3%A9rez%20Ponce%20496%2C%20Centro%2C%2097000%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
    },
    {
      id: "office-2",
      name: "Sede Caucel - La Perla",
      address: "Calle 31 #645 A (entre Calle 74 y Calle 74B), Fraccionamiento La Perla, Ciudad Caucel, C.P. 97314",
      between: "Entre Calle 74 y Calle 74B",
      city: "Mérida",
      state: "Yucatán",
      phone: "9997708534",
      schedule: "Lunes a Viernes: 16:00 - 21:00 | Sábado a Domingo: 08:00 - 20:00",
      googleMapsUrl: "https://maps.google.com/?q=Calle+31+645+A,+Ciudad+Caucel,+97314+Merida,+Yucatan",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.295489678129!2d-99.7100000!3d19.4312502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sCalle+31+645A%2C+Ciudad+Caucel%2C+97314+M%C3%A9rida%2C+Yuc.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground py-16 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <FadeUp className="text-center mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Contacto y Ubicaciones</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Atención quirúrgica y valoraciones endoscópicas en Mérida, Yucatán. Ubica nuestros dos consultorios y agenda tu cita.
          </p>
        </FadeUp>

        {/* Side-by-Side Office Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {offices.map((office) => (
            <FadeUp key={office.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              {/* Map Iframe */}
              <div className="h-[250px] bg-slate-50 relative border-b border-slate-200">
                <iframe 
                  src={office.iframeUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] opacity-95 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Office Details */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <FaRegHospital size={16} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-serif">{office.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-650">
                      <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-slate-900">Dirección</p>
                        <p className="font-light mt-0.5">{office.address}</p>
                        <p className="text-[10px] text-slate-400 italic mt-0.5">({office.between})</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-650">
                      <FaClock className="text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-slate-900">Horarios de Consulta</p>
                        <p className="font-light mt-0.5">{office.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs">
                  <a 
                    href={office.googleMapsUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-accent hover:underline uppercase font-bold tracking-wider"
                  >
                    Cómo llegar en mapa &rarr;
                  </a>
                  <a 
                    href={`tel:${office.phone}`}
                    className="text-slate-800 hover:text-accent font-bold font-mono"
                  >
                    {office.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")}
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Central Master Action Hub */}
        <FadeUp delay={0.2} className="bg-slate-50 border border-slate-200 rounded-[2rem] max-w-4xl mx-auto p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Block: Academic & Nutri Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 font-serif">Modalidad de Consulta</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                Toda valoración o estudio endoscópico se realiza bajo cita programada. El Dr. Víctor Javier Herrera Virrueta brinda servicios a pacientes referidos y urgencias agudas del aparato digestivo.
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-accent flex-shrink-0">
                  <FaUniversity />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider">Cédulas de Especialista</h4>
                  <p className="text-slate-500 font-light mt-0.5">Cirugía: {doctor.cedulaEspecialidad} | Endoscopia: 14233651</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-accent flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider">Contacto Administrativo</h4>
                  <p className="text-slate-500 font-light mt-0.5">{doctor.email}</p>
                </div>
              </div>
            </div>

            {/* Right Block: Direct Calls & Urgencies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 font-serif">Canales de Agenda Directa</h3>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={`tel:${doctor.phone}`} 
                  className="flex items-center gap-4 bg-white border border-slate-200 hover:border-accent/40 p-4 rounded-2xl transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-500 text-[10px] uppercase tracking-wider">Citas Telefónicas y Urgencias</h5>
                    <p className="text-slate-800 text-sm font-bold font-mono">999 770 8534</p>
                  </div>
                </a>

                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 bg-white border border-slate-200 hover:border-emerald-500/40 p-4 rounded-2xl transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-500 text-[10px] uppercase tracking-wider">Agendar por WhatsApp</h5>
                    <p className="text-slate-800 text-sm font-bold font-mono">+52 999 770 8534</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-white border border-slate-200 p-4 rounded-2xl text-[10px] text-slate-500 font-light text-center">
                Métodos de Pago: **Efectivo** y **Transferencia Electrónica**. Aceptamos reembolso con todas las aseguradoras.
              </div>
            </div>

          </div>
        </FadeUp>

      </div>
    </div>
  );
}
