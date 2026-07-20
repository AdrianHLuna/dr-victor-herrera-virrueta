import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "vh-sym-001",
    slug: "dolor-abdominal",
    name: "Dolor Abdominal Agudo y Crónico",
    description: "El dolor de abdomen es el síntoma de sospecha principal en patologías que requieren intervención del cirujano general. Puede variar desde una molestia sorda y persistente hasta un dolor agudo e insoportable. Localizar el sitio del dolor (boca del estómago, cuadrante derecho, fosa ilíaca) y determinar si se acompaña de otros síntomas (fiebre, náusea) es clave para diferenciar una apendicitis o cólico biliar de una colitis común.",
    causes: [
      "Inflamación aguda del apéndice (Apendicitis)",
      "Piedras e inflamación de la vesícula (Colecistitis/Colelitiasis)",
      "Inflamación del páncreas (Pancreatitis)",
      "Obstrucción intestinal secundaria a hernias estranguladas",
      "Gastritis severa o úlcera gástrica"
    ],
    whyConsult: "Debe solicitar valoración inmediata si el dolor abdominal es repentino y severo, si se agrava al caminar o toser, si se acompaña de fiebre, vómitos abundantes o si el abdomen se siente rígido y doloroso al tacto.",
    relatedConditions: ["apendicitis-aguda", "colecistitis-y-colelitiasis", "hernias-inguinales-y-umbilicales", "pancreatitis-aguda"],
    image: "/sintomas/dolor-abdominal.png",
    seo: {
      title: "Dolor Abdominal Agudo y Valoración Quirúrgica en Mérida",
      description: "Identifica las causas del dolor abdominal agudo en Mérida. Diagnóstico de apendicitis y vesícula con el cirujano Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["dolor de abdomen fuerte merida", "apendicitis sintomas yucatan", "dolor de vesicula cirujano", "urgencias dolor de panza merida"]
    }
  },
  {
    id: "vh-sym-002",
    slug: "reflujo-gastroesofagico",
    name: "Reflujo Gastroesofágico y Pirosis (Acidez)",
    description: "El reflujo es la sensación de regreso del contenido gástrico ácido hacia el esófago, frecuentemente acompañado de pirosis (ardor intenso detrás del esternón). Es una queja clínica muy común que, de persistir a largo plazo, daña de forma crónica la mucosa esofágica, produciendo ulceración, estrecheces y cambios celulares premalignos que requieren confirmación y control mediante endoscopia digestiva alta.",
    causes: [
      "Disfunción del esfínter esofágico inferior",
      "Hernia hiatal que desplaza el estómago hacia el tórax",
      "Consumo excesivo de grasas, picante, alcohol o tabaco",
      "Obesidad que aumenta la presión sobre el abdomen"
    ],
    whyConsult: "Consulte con el especialista si presenta acidez más de dos veces por semana, si tiene dificultad o dolor para tragar (disfagia), si regurgita comida de forma constante o si los síntomas de reflujo no ceden con antiácidos comerciales.",
    relatedConditions: ["enfermedad-por-reflujo-gastroesofagico", "infeccion-por-helicobacter-pylori", "deteccion-de-cancer-gastrico"],
    image: "/sintomas/reflujo.png",
    seo: {
      title: "Tratamiento de Reflujo y Ardor de Estómago en Mérida",
      description: "Acidez y reflujo persistentes en Mérida. Valoración endoscópica y tratamiento integral con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["reflujo gastroesofagico merida", "pirosis ardor de estomago yucatan", "cirugia de reflujo merida", "endoscopia antireflujo"]
    }
  },
  {
    id: "vh-sym-003",
    slug: "ictericia",
    name: "Ictericia (Coloración Amarilla en Piel y Ojos)",
    description: "La ictericia es la coloración amarillenta de la piel y de las escleras (la parte blanca de los ojos) generada por la acumulación excesiva de bilirrubina en la sangre. En la cirugía general, suele indicar una obstrucción en el libre flujo de la bilis desde el hígado hacia el intestino, comúnmente ocasionada por piedras atrapadas en los conductos biliares o compresiones tumorales.",
    causes: [
      "Cálculos que bloquean el conducto biliar principal (Coledocolitiasis)",
      "Infección grave de la vía biliar (Colangitis)",
      "Cirrosis hepática avanzada que altera la función del hígado",
      "Tumores en la cabeza del páncreas o en la vía biliar"
    ],
    whyConsult: "La ictericia siempre requiere evaluación médica urgente. Si se acompaña de fiebre alta, orina de color marrón oscuro (coluria) y evacuaciones de color blanco o grisáceo (acolia), indica una obstrucción biliar grave e infección.",
    relatedConditions: ["colecistitis-y-colelitiasis", "pancreatitis-aguda", "cirrosis-hepatica"],
    image: "/sintomas/ictericia.png",
    seo: {
      title: "Causas de Ictericia y Obstrucción Biliar en Mérida",
      description: "Evaluación urgente de coloración amarilla de piel y ojos (ictericia) en Mérida. Especialista biliar Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["piel amarilla causas merida", "coledocolitiasis ictericia yucatan", "cpre para vias biliares merida", "obstruccion de bilis tratamiento"]
    }
  },
  {
    id: "vh-sym-004",
    slug: "vomito-con-sangre",
    name: "Vómito con Sangre (Hematemesis)",
    description: "La hematemesis o vómito con sangre (ya sea de color rojo brillante o de color oscuro parecido a pozos de café) es un síntoma de alarma crítico que refleja una hemorragia activa en el tracto digestivo alto (esófago, estómago o duodeno). Es una urgencia absoluta que debe ser evaluada y tratada de inmediato mediante una gastroscopia terapéutica de urgencia para ubicar y sellar el vaso o várice sangrante.",
    causes: [
      "Ruptura de várices esofágicas o gástricas (secundaria a cirrosis)",
      "Úlceras gástricas o duodenales erosivas que perforan arterias",
      "Desgarros en la unión esófago-gástrica por esfuerzo al vomitar (Mallory-Weiss)",
      "Cáncer gástrico avanzado"
    ],
    whyConsult: "Cualquier episodio de vómito con sangre, por pequeño que sea, requiere acudir de inmediato a urgencias. La pérdida masiva de sangre puede desencadenar shock y poner en peligro la vida en minutos.",
    relatedConditions: ["varices-esofagicas-y-gastricas", "infeccion-por-helicobacter-pylori", "deteccion-de-cancer-gastrico", "cirrosis-hepatica"],
    image: "/sintomas/vomito-sangre.png",
    seo: {
      title: "Urgencias por Vómito con Sangre en Mérida",
      description: "Atención de urgencia ante vómito con sangre (hematemesis) en Mérida. Endoscopia terapéutica de urgencias con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["vomito con sangre merida", "hematemesis urgencias yucatan", "ligadura de varices esofagicas merida", "sangrado de tubo digestivo alto"]
    }
  },
  {
    id: "vh-sym-005",
    slug: "sangrado-transrectal",
    name: "Sangrado Transrectal y Evacuaciones con Sangre",
    description: "El sangrado transrectal es la expulsión de sangre a través del ano, la cual puede presentarse de forma visible como sangre roja brillante (rectorragia), mezclada con las heces (hematoquecia), o como evacuaciones negras, pastosas e intensamente fétidas (melena) que indican sangre digerida del estómago. Requiere investigación diagnóstica para descartar desde hemorroides hasta pólipos y tumores colorrectales.",
    causes: [
      "Enfermedad hemorroidal y fisuras anales",
      "Pólipos en el colon o en el recto",
      "Sangrado diverticular (ruptura de vasos en divertículos)",
      "Cáncer de colon y recto",
      "Enfermedad inflamatoria intestinal (CUCI)"
    ],
    whyConsult: "Consulte al especialista de inmediato ante cualquier sangrado anal. Es peligroso atribuir siempre el sangrado a hemorroides, ya que podría enmascarar un tumor colorrectal en evolución que requiere una colonoscopia diagnóstica.",
    relatedConditions: ["enfermedad-hemorroidal-y-hemorroides", "polipos-gastricos-y-de-colon", "deteccion-de-cancer-de-colon-y-recto", "enfermedad-diverticular"],
    image: "/sintomas/sangrado-rectal.png",
    seo: {
      title: "Sangrado Rectal y Evacuaciones con Sangre en Mérida",
      description: "Diagnóstico de sangrado rectal mediante colonoscopia en Mérida. Especialista en cirugia colorrectal Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["sangrado rectal merida", "heces con sangre yucatan", "colonoscopia tamizaje merida", "hemorroides operacion merida"]
    }
  },
  {
    id: "vh-sym-006",
    slug: "distension-abdominal",
    name: "Distensión e Inflamación Abdominal",
    description: "La distensión abdominal es la sensación de vientre inflamado, tenso o lleno, con aumento medible del diámetro de la cintura. Puede deberse a causas metabólicas cotidianas, pero cuando se presenta de forma súbita, severa y persistente, puede indicar una incapacidad del intestino para movilizar su contenido debido a un bloqueo físico o a una inflamación aguda interna.",
    causes: [
      "Bloqueo o parálisis del intestino (obstrucción intestinal)",
      "Diverticulitis aguda o peritonitis localizada",
      "Episodios de pancreatitis aguda",
      "Sobrepeso y acumulación de grasa visceral"
    ],
    whyConsult: "Debe consultar si la inflamación abdominal se acompaña de dolor cólico severo, vómitos frecuentes, fiebre o si tiene más de 24 horas sin poder evacuar ni expulsar gases intestinales.",
    relatedConditions: ["apendicitis-aguda", "enfermedad-diverticular", "pancreatitis-aguda", "obesidad-y-sobrepeso"],
    image: "/sintomas/distension.png",
    seo: {
      title: "Inflamación y Distensión Abdominal en Mérida",
      description: "Causas de distensión abdominal aguda y estreñimiento en Mérida. Diagnóstico preciso con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["inflamacion abdominal fuerte merida", "distension abdominal causas yucatan", "obstruccion intestinal cirujano", "urgencias cirugia merida"]
    }
  },
  {
    id: "vh-sym-007",
    slug: "abultamientos-y-hernias",
    name: "Abultamientos en Región Umbilical o Inguinal",
    description: "La aparición de una protuberancia, bola o abultamiento en el ombligo (región umbilical) o en la ingle (región inguinal) es la manifestación clásica de una hernia de la pared abdominal. Estos abultamientos suelen formarse por el esfuerzo y aumentar de tamaño al ponerse de pie, toser o cargar peso, pudiendo llegar a aprisionar porciones de grasa o intestino.",
    causes: [
      "Hernia inguinal (defecto en el conducto inguinal)",
      "Hernia umbilical (defecto en el anillo del ombligo)",
      "Hernia incisional (debilidad secundaria a una incisión quirúrgica previa)",
      "Lipomas (acumulaciones benignas de tejido graso bajo la piel)"
    ],
    whyConsult: "Consulte si nota una protuberancia en el abdomen o ingle. Si el abultamiento se torna muy doloroso, cambia a color morado o rojo, y es imposible regresarlo al abdomen empujándolo con el dedo, acuda de inmediato a urgencias por riesgo de estrangulamiento de la hernia.",
    relatedConditions: ["hernias-inguinales-y-umbilicales"],
    image: "/sintomas/abultamientos.png",
    seo: {
      title: "Abultamientos y Hernias de Pared Abdominal en Mérida",
      description: "Valoración de protuberancias en ingle u ombligo en Mérida. Especialista en hernias con malla Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["hernia umbilical operacion merida", "hernia inguinal bulto yucatan", "bola en el ombligo causas", "cirujano de hernias merida"]
    }
  },
  {
    id: "vh-sym-008",
    slug: "tumoraciones-cutaneas",
    name: "Tumoraciones en Espalda, Brazos o Abdomen",
    description: "La formación de tumoraciones, masas o bolitas bajo la piel de la espalda, extremidades o pared abdominal es una queja clínica frecuente. Generalmente corresponden a lipomas (tumores benignos de tejido graso) o a quistes sebáceos (glándulas obstruidas con queratina). Aunque no son malignos, pueden crecer, causar dolor por compresión nerviosa o infectarse formando abscesos purulentos molestos.",
    causes: [
      "Lipomas subcutáneos simples o múltiples",
      "Quistes epidermoides o sebáceos",
      "Abscesos o foliculitis con acumulación de pus"
    ],
    whyConsult: "Debe consultar al cirujano general si la masa bajo la piel crece de tamaño rápidamente, si es dolorosa al tacto, o si presenta signos de infección activa como enrojecimiento, calor y secreción de líquido purulento.",
    relatedConditions: ["hernias-inguinales-y-umbilicales"],
    image: "/sintomas/tumoraciones.png",
    seo: {
      title: "Extirpación de Lipomas y Quistes en Mérida",
      description: "Cirugía ambulatoria de extirpación de lipomas y tumoraciones cutáneas en Mérida con el cirujano Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["quitar lipoma merida costo", "quiste sebaceo cirugia yucatan", "cirujano ambulatorio merida", "bola en la espalda extirpacion"]
    }
  }
];
