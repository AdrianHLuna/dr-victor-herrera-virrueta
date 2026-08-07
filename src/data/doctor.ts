import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Víctor Javier Herrera Virrueta",
  title: "Dr.",
  specialty: "Cirugía General y Endoscopia",
  specialistTitle: "Cirujano General y Especialista en Endoscopia del Aparato Digestivo",
  subspecialty: "Endoscopia del Aparato Digestivo",
  cedula: "10144625", // Médico Cirujano Militar
  cedulaEspecialidad: "12983449", // Especialidad en Cirugía General
  cofepris: "2631012002A00447",
  phone: "9997708534",
  whatsapp: "9997708534",
  email: "victorjavier467@gmail.com",
  address: "Avenida Pérez Ponce #496, Colonia Centro, Mérida, Yucatán",
  city: "Mérida",
  state: "Yucatán",
  country: "México",
  googleMapsUrl: "https://maps.google.com/?q=Avenida+Perez+Ponce+496,+Centro,+97000+Merida,+Yucatan",
  consultationPrice: 1100,
  paymentMethods: ["Efectivo", "Transferencia"],
  insurances: ["Todos los seguros (Reembolso y Pago directo)"],
  schedule: "Lunes a Viernes de 16:00 a 21:00 | Sábado a Domingo de 08:00 a 20:00",
  photo: "/hero.jpeg",
  aboutPhoto: "/aboutme.jpg",
  bio: "El Dr. Víctor Javier Herrera Virrueta es un distinguido Cirujano General Militar con subespecialidad en Endoscopia del Aparato Digestivo, egresado con honores de la Universidad del Ejército y Fuerza Aérea. Su formación y trayectoria en el sector militar y civil le permiten ofrecer el más alto nivel de ética, precisión y disciplina en tratamientos quirúrgicos de mínima invasión. Es especialista en el diagnóstico avanzado mediante gastroscopia y colonoscopia, colocación y retiro de balón intragástrico, así como en procedimientos de cirugía general como la colecistectomía laparoscópica y plastia de hernias de pared abdominal en Mérida, Yucatán.",
  philosophy: "Atención médica con el más alto rigor de disciplina, honestidad y precisión científica, comprometido con la restauración de tu salud mediante procedimientos mínimamente invasivos de mínima molestia.",
  experience: [
    {
      year: "+10 Años",
      title: "Trayectoria Profesional",
      description: "De experiencia en medicina y cirugía en el ámbito de la salud militar y civil.",
    },
    {
      year: "+1,000",
      title: "Endoscopias Realizadas",
      description: "Procedimientos diagnósticos y terapéuticos del tubo digestivo con mínima invasión.",
    },
    {
      year: "+500",
      title: "Cirugías Exitosas",
      description: "Intervenciones laparoscópicas y generales de vesícula, hernias y apendicitis.",
    }
  ],
  certifications: [
    {
      name: "Título de Médico Cirujano Militar",
      institution: "Universidad del Ejército y Fuerza Aérea - Cédula 10144625",
    },
    {
      name: "Especialidad en Cirugía General",
      institution: "Universidad del Ejército y Fuerza Aérea - Cédula 12983449",
    },
    {
      name: "Subespecialidad en Endoscopía del Aparato Digestivo",
      institution: "Universidad del Ejército y Fuerza Aérea - Cédula 14233651",
    },
    {
      name: "Certificación del Consejo Mexicano de Cirugía General",
      institution: "Certificado como Cirujano General y en Endoscopia Gastrointestinal (Reg. EGI230041)",
    },
    {
      name: "Miembro de Sociedades Médicas",
      institution: "Asociación Mexicana de Cirugía General, Asociación Mexicana de Endoscopia Gastrointestinal y Asociación Americana de Endoscopia Gastrointestinal (ASGE)",
    }
  ],
  education: [
    {
      degree: "Médico Cirujano Militar",
      institution: "Universidad del Ejército y Fuerza Aérea",
      year: "Egreso",
    },
    {
      degree: "Especialidad en Cirugía General",
      institution: "Universidad del Ejército y Fuerza Aérea",
      year: "Egreso",
    },
    {
      degree: "Subespecialidad en Endoscopía del Aparato Digestivo",
      institution: "Universidad del Ejército y Fuerza Aérea",
      year: "Egreso",
    }
  ],
  sameAs: [],
  ga4Id: "G-54KYKBY3H8",
  gtmId: "GTM-K6W8FQG3",
  googleAdsId: "AW-18345396143"
};

export const offices = [
  {
    id: "office-1",
    name: "Consultorio Avenida Pérez Ponce",
    address: "Avenida Pérez Ponce #496 (entre Calle 56 y Paseo de Montejo), Colonia Centro, C.P. 97000",
    city: "Mérida",
    state: "Yucatán",
    cp: "97000",
    phone: "9997708534",
    whatsapp: "9997708534",
    googleMapsUrl: "https://maps.google.com/?q=Avenida+Perez+Ponce+496,+Centro,+97000+Merida,+Yucatan"
  },
  {
    id: "office-2",
    name: "Consultorio Ciudad Caucel - La Perla",
    address: "Calle 31 #645 A (entre Calle 74 y Calle 74B), Fraccionamiento La Perla, Ciudad Caucel, C.P. 97314",
    city: "Mérida",
    state: "Yucatán",
    cp: "97314",
    phone: "9997708534",
    whatsapp: "9997708534",
    googleMapsUrl: "https://maps.google.com/?q=Calle+31+645+A,+Ciudad+Caucel,+97314+Merida,+Yucatan"
  }
];

export const doctorPhotos = [];
