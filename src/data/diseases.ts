import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "vh-dis-001",
    slug: "enfermedad-por-reflujo-gastroesofagico",
    name: "Enfermedad por Reflujo Gastroesofágico (ERGE)",
    technicalName: "Reflujo Gastroesofágico y Hernia Hiatal",
    description: "La Enfermedad por Reflujo Gastroesofágico (ERGE) ocurre cuando el ácido del estómago fluye de regreso hacia el esófago. Este retroceso (reflujo) puede irritar la mucosa del esófago, provocando inflamación (esofagitis), acidez severa y ardor en el pecho. A menudo está asociada con una hernia hiatal. Si no se trata, el reflujo crónico puede dañar gravemente las células esofágicas, evolucionando hacia complicaciones como el Esófago de Barrett o incluso cáncer de esófago.",
    symptoms: [
      "Sensación de ardor en el pecho (pirosis), usualmente después de comer",
      "Regurgitación de comida o líquidos ácidos",
      "Dolor en el pecho o en la parte superior del abdomen",
      "Dificultad para pasar alimentos (disfagia)",
      "Sensación de tener un nudo en la garganta",
      "Tos crónica o ronquera por irritación laringofaríngea"
    ],
    causes: [
      "Debilidad o disfunción del esfínter esofágico inferior",
      "Presencia de hernia hiatal",
      "Vaciado gástrico retrasado",
      "Aumento de la presión intraabdominal (embarazo, obesidad)"
    ],
    riskFactors: [
      "Obesidad y sobrepeso",
      "Consumo de tabaco y alcohol",
      "Ingesta excesiva de grasas, cafeína, chocolates y picante",
      "Ciertos medicamentos que relajan el esfínter esofágico"
    ],
    mexicoStats: "La ERGE es uno de los principales motivos de consulta médica en gastroenterología en México, estimándose que afecta a más del 20% de la población adulta mexicana.",
    complications: [
      "Esofagitis erosiva (úlceras en el esófago)",
      "Estrechez o estenosis esofágica",
      "Esófago de Barrett (cambio premaligno en las células)",
      "Aumento del riesgo de adenocarcinoma esofágico"
    ],
    treatments: [
      "Tratamiento médico con inhibidores de la bomba de protones (IBP)",
      "Fundoplicatura laparoscópica (cirugía antirreflujo de mínima invasión)",
      "Modificaciones en el estilo de vida y hábitos alimenticios"
    ],
    faqs: [
      {
        question: "¿Cuándo es necesaria la cirugía para el reflujo?",
        answer: "La cirugía (fundoplicatura laparoscópica) se recomienda en pacientes que no responden al tratamiento médico, que tienen efectos secundarios por el uso prolongado de medicamentos, o que presentan una hernia hiatal grande que compromete su anatomía."
      },
      {
        question: "¿Qué es el Esófago de Barrett?",
        answer: "Es una condición donde el revestimiento normal del esófago cambia por células similares a las del intestino debido al daño del ácido crónico. Requiere vigilancia endoscópica estrecha por su relación con el cáncer."
      },
      {
        question: "¿Cómo ayuda la endoscopia en el diagnóstico?",
        answer: "La endoscopia superior permite observar directamente la mucosa esofágica, evaluar el grado de esofagitis, diagnosticar hernias hiatales y tomar biopsias para descartar Esófago de Barrett."
      }
    ],
    relatedServices: ["gastroscopia-o-panendoscopia", "colecistectomia-laparoscopica"],
    relatedSymptoms: ["reflujo-gastroesofagico", "pirosis", "dolor-abdominal"],
    image: "/enfermedades/reflujo.png",
    seo: {
      title: "Tratamiento de Reflujo Gastroesofágico y ERGE en Mérida",
      description: "Elimina el reflujo con endoscopia y cirugía de mínima invasión en Mérida. Valoración integral con el especialista Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["tratamiento erge merida", "cirugia antireflujo yucatan", "endoscopia de reflujo", "hernia hiatal operacion"]
    }
  },
  {
    id: "vh-dis-002",
    slug: "infeccion-por-helicobacter-pylori",
    name: "Infección por Helicobacter Pylori",
    technicalName: "Infección Gastrointestinal por H. Pylori",
    description: "Helicobacter pylori es una bacteria en forma de espiral que infecta la mucosa del estómago. Es una de las infecciones bacterianas crónicas más comunes en el ser humano. La bacteria produce sustancias que debilitan la capa protectora de moco del estómago, permitiendo que el ácido dañe la mucosa y cause inflamación (gastritis crónica), úlceras pépticas (gástricas o duodenales) y aumenta significativamente el riesgo de padecer cáncer de estómago y linfoma MALT.",
    symptoms: [
      "Dolor u ardor en el abdomen superior (dispepsia)",
      "Sensación de saciedad precoz al comer",
      "Pérdida de apetito y pérdida de peso involuntaria",
      "Náuseas, eructos frecuentes y distensión abdominal",
      "Fatiga secundaria a anemia si hay sangrado ulceroso"
    ],
    causes: [
      "Transmisión de persona a persona por vía fecal-oral u oral-oral",
      "Consumo de agua o alimentos contaminados por deficientes condiciones sanitarias"
    ],
    riskFactors: [
      "Vivir en países en desarrollo con hacinamiento o falta de agua potable",
      "Compartir utensilios o alimentos con personas infectadas",
      "Higiene deficiente en la preparación de alimentos"
    ],
    mexicoStats: "Se calcula que en México la prevalencia de la infección por Helicobacter pylori supera el 60% de la población, siendo un factor crucial en la alta incidencia nacional de gastritis y úlceras.",
    complications: [
      "Úlceras pépticas gástricas o duodenales",
      "Perforación o sangrado de tubo digestivo alto",
      "Gastritis crónica atrófica",
      "Adenocarcinoma gástrico (cáncer de estómago)"
    ],
    treatments: [
      "Terapia triple o cuádruple de erradicación (antibióticos combinados con protectores gástricos)",
      "Seguimiento endoscópico para verificar la curación de las úlceras",
      "Prueba de aliento de control posterior al tratamiento"
    ],
    faqs: [
      {
        question: "¿Cómo se diagnostica el Helicobacter pylori?",
        answer: "Se puede diagnosticar mediante pruebas no invasivas como la prueba de aliento con urea, detección de antígenos en heces, o mediante una biopsia tomada durante una gastroscopia (endoscopia superior)."
      },
      {
        question: "¿El Helicobacter pylori siempre causa cáncer?",
        answer: "No, la gran mayoría de las personas infectadas no desarrollarán cáncer gástrico. Sin embargo, dado que es un carcinógeno de tipo 1 reconocido, su detección oportuna y erradicación son altamente recomendadas."
      },
      {
        question: "¿Se puede volver a contraer la bacteria después del tratamiento?",
        answer: "La tasa de reinfección en adultos tras una erradicación exitosa es baja (menor al 2% anual), pero puede ocurrir si se consumen alimentos o agua contaminados."
      }
    ],
    relatedServices: ["gastroscopia-o-panendoscopia"],
    relatedSymptoms: ["dolor-abdominal", "distension-abdominal", "vomito-con-sangre"],
    image: "/enfermedades/helicobacter.png",
    seo: {
      title: "Prueba y Tratamiento de Helicobacter Pylori en Mérida",
      description: "Diagnóstico preciso y tratamiento antibiótico de erradicación para Helicobacter pylori en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["prueba helicobacter pylori merida", "gastritis por h pylori yucatan", "endoscopia gastrica merida", "tratamiento ulceras estomago"]
    }
  },
  {
    id: "vh-dis-003",
    slug: "varices-esofagicas-y-gastricas",
    name: "Várices Esofágicas y Gástricas",
    technicalName: "Várices Esofagogástricas por Hipertensión Portal",
    description: "Las várices esofágicas y gástricas son venas anormalmente dilatadas en las paredes del esófago inferior o del estómago. Se desarrollan principalmente a causa de la hipertensión portal (presión arterial alta en el sistema de la vena porta), que suele ser una consecuencia directa de la cirrosis hepática. Debido a que las paredes de estas venas son muy delgadas y están sometidas a una alta presión, tienen una susceptibilidad extremadamente alta a romperse, lo que causa un sangrado masivo que constituye una urgencia médica potencialmente mortal.",
    symptoms: [
      "Ausencia de síntomas iniciales hasta que se presenta la ruptura",
      "Vómito con sangre roja brillante y abundante (hematemesis)",
      "Evacuaciones negras y alquitranadas con olor fétido (melena)",
      "Palidez extrema, debilidad y sudoración fría",
      "Pérdida del conocimiento o shock hemodinámico"
    ],
    causes: [
      "Cirrosis hepática (cicatrización avanzada del hígado)",
      "Trombosis de la vena porta o de la vena esplénica",
      "Infecciones parasitarias graves (Esquistosomiasis)"
    ],
    riskFactors: [
      "Consumo crónico y excesivo de alcohol",
      "Hepatitis viral crónica B o C no tratada",
      "Hígado graso grave no alcohólico (esteatohepatitis)"
    ],
    mexicoStats: "La cirrosis hepática es una de las principales causas de muerte en adultos en México, y la hemorragia por várices esofágicas representa la complicación grave más común y con mayor mortalidad de esta enfermedad.",
    complications: [
      "Choque hipovolémico severo por pérdida masiva de sangre",
      "Encefalopatía portosistémica o falla hepática aguda",
      "Infecciones bacterianas secundarias (peritonitis bacteriana espontánea)",
      "Alta tasa de recurrencia de sangrado en las primeras semanas"
    ],
    treatments: [
      "Ligadura de várices esofágicas por endoscopia (colocación de bandas elásticas)",
      "Medicamentos betabloqueadores para disminuir la presión portal",
      "Terapia con octreotida o terlipresina durante episodios de sangrado agudo",
      "Derivación portosistémica intrahepática transyugular (TIPS) en casos refractarios"
    ],
    faqs: [
      {
        question: "¿Qué es la ligadura de várices por endoscopia?",
        answer: "Es un procedimiento terapéutico donde el especialista, mediante un endoscopio, coloca pequeñas ligas elásticas alrededor de las venas dilatadas para estrangularlas y cicatrizarlas, previniendo o deteniendo el sangrado."
      },
      {
        question: "¿Cómo sé si tengo várices en el esófago?",
        answer: "Los pacientes con diagnóstico de cirrosis o daño hepático deben realizarse una gastroscopia de tamizaje para buscar várices de forma preventiva, incluso si nunca han sangrado."
      },
      {
        question: "¿Qué debo hacer ante un vómito con sangre?",
        answer: "Es una emergencia vital absoluta. Debe trasladarse de inmediato a una sala de urgencias hospitalaria y contactar al cirujano/endoscopista de guardia."
      }
    ],
    relatedServices: ["ligadura-de-varices-esofagicas", "gastroscopia-o-panendoscopia"],
    relatedSymptoms: ["vomito-con-sangre", "evacuaciones-con-sangre", "sangrado-transrectal"],
    image: "/enfermedades/varices.png",
    seo: {
      title: "Ligadura de Várices Esofágicas y Gástricas en Mérida",
      description: "Prevención y control de hemorragias por várices esofágicas mediante ligadura endoscópica en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["ligadura de varices esofagicas merida", "sangrado digestivo varices yucatan", "hipertension portal tratamiento", "endoscopia varices de esofago"]
    }
  },
  {
    id: "vh-dis-004",
    slug: "polipos-gastricos-y-de-colon",
    name: "Pólipos Gástricos y de Colon",
    technicalName: "Pólipos Epiteliales Gastrointestinales",
    description: "Los pólipos son crecimientos anormales de tejido que se desarrollan en el revestimiento interno (mucosa) del estómago o del colon. La mayoría de los pólipos son benignos y no causan síntomas, sin embargo, ciertos tipos de pólipos (especialmente los adenomatosos en el colon) tienen el potencial de mutar y transformarse en cáncer con el paso de los años. La extirpación de estos pólipos durante una endoscopia o colonoscopia (polipectomía) es la medida preventiva más eficaz contra el cáncer gastrointestinal.",
    symptoms: [
      "Frecuentemente asintomáticos en sus etapas iniciales",
      "Sangrado rectal o sangre oculta en heces",
      "Cambios en los hábitos intestinales (diarrea o estreñimiento prolongado)",
      "Dolor o cólicos abdominales leves (en pólipos muy grandes)",
      "Anemia inexplicada por sangrado crónico microscópico"
    ],
    causes: [
      "Mutaciones genéticas en las células que recubren la mucosa",
      "Procesos inflamatorios crónicos (gastritis crónica, colitis ulcerativa)"
    ],
    riskFactors: [
      "Edad mayor a 45 o 50 años",
      "Antecedentes familiares de pólipos o cáncer colorrectal",
      "Tabaquismo, consumo frecuente de alcohol y obesidad",
      "Dieta rica en carnes rojas y procesadas, y baja en fibra"
    ],
    mexicoStats: "El cáncer colorrectal es el segundo tipo de cáncer más común en México. La gran mayoría de estos tumores se originan a partir de un pólipo adenomatoso que pudo haber sido detectado y extirpado a tiempo.",
    complications: [
      "Transformación maligna en cáncer colorrectal o gástrico",
      "Obstrucción intestinal (en pólipos de gran tamaño)",
      "Hemorragias digestivas severas que causan anemia"
    ],
    treatments: [
      "Polipectomía endoscópica (extirpación segura durante la endoscopia o colonoscopia)",
      "Análisis histopatológico de cada pólipo extraído",
      "Seguimiento endoscópico periódico de control"
    ],
    faqs: [
      {
        question: "¿Todos los pólipos se convierten en cáncer?",
        answer: "No. Existen pólipos hiperplásicos o inflamatorios que tienen un riesgo prácticamente nulo de malignidad. Sin embargo, los pólipos adenomatosos sí son precursores de cáncer y deben retirarse siempre."
      },
      {
        question: "¿Duele la extirpación de un pólipo?",
        answer: "No. El procedimiento de polipectomía se realiza bajo sedación asistida durante el estudio endoscópico y el tejido interno del tubo digestivo no posee terminaciones de dolor al corte."
      },
      {
        question: "¿Cada cuánto debo realizarme una colonoscopia de control?",
        answer: "Depende del número, tamaño y tipo histológico de los pólipos detectados. El intervalo puede variar de 1 a 5 años según la recomendación del especialista."
      }
    ],
    relatedServices: ["gastroscopia-o-panendoscopia", "colonoscopia"],
    relatedSymptoms: ["sangrado-transrectal", "evacuaciones-con-sangre", "dolor-abdominal"],
    image: "/enfermedades/polipos.png",
    seo: {
      title: "Extirpación de Pólipos de Colon y Estómago en Mérida",
      description: "Polipectomía endoscópica segura en Mérida. Previene el cáncer de colon y estómago con el especialista Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["polipectomia colonica merida", "polipos gastricos extirpacion yucatan", "colonoscopia preventiva merida", "deteccion de cancer de colon"]
    }
  },
  {
    id: "vh-dis-005",
    slug: "deteccion-de-cancer-gastrico",
    name: "Detección Oportuna de Cáncer Gástrico",
    technicalName: "Cribado de Adenocarcinoma Gástrico",
    description: "El cáncer gástrico o cáncer de estómago se origina en las células de la mucosa gástrica. Es una enfermedad silenciosa en sus etapas iniciales, lo que significa que suele diagnosticarse en fases avanzadas cuando las opciones de curación son limitadas. La detección oportuna mediante gastroscopia asistida con toma de biopsia en pacientes con factores de riesgo o síntomas de dispepsia persistente es la única estrategia eficaz para identificar lesiones premalignas o tumores en etapa temprana susceptibles de curación.",
    symptoms: [
      "Sensación de indigestión o ardor persistente",
      "Dolor abdominal difuso en la boca del estómago",
      "Náuseas, vómitos frecuentes o vómito con sangre",
      "Pérdida de peso involuntaria y acelerada",
      "Dificultad progresiva para comer o tragar (disfagia)",
      "Sensación de llenura excesiva después de comer porciones pequeñas"
    ],
    causes: [
      "Daño crónico del ADN celular debido a inflamación prolongada",
      "Infección persistente no tratada por Helicobacter pylori",
      "Gastritis atrófica crónica y metaplasia intestinal"
    ],
    riskFactors: [
      "Infección por Helicobacter pylori",
      "Dieta alta en alimentos salados, ahumados o en conserva",
      "Tabaquismo y alcoholismo",
      "Antecedentes familiares directos de cáncer de estómago"
    ],
    mexicoStats: "El cáncer gástrico representa una de las principales causas de muerte por tumores malignos en México. Desafortunadamente, más del 85% de los casos se diagnostican en etapas avanzadas debido a la falta de programas de tamizaje preventivo.",
    complications: [
      "Metástasis a órganos vecinos (hígado, peritoneo, pulmón)",
      "Obstrucción del tracto de salida gástrico (imposibilidad para comer)",
      "Hemorragia digestiva grave y anemia severa",
      "Perforación de la pared gástrica causando peritonitis"
    ],
    treatments: [
      "Resección endoscópica de la mucosa para tumores muy tempranos",
      "Cirugía de resección gástrica parcial o total (Gastrectomía)",
      "Tratamiento oncológico complementario (quimioterapia o radioterapia)"
    ],
    faqs: [
      {
        question: "¿Quién debe realizarse una gastroscopia de detección?",
        answer: "Cualquier persona mayor de 40 años que presente dolor o ardor en la boca del estómago de más de 3 semanas de evolución, antecedentes familiares de cáncer de estómago o pérdida de peso inexplicable."
      },
      {
        question: "¿La gastritis crónica puede convertirse en cáncer?",
        answer: "La gastritis crónica atrófica con metaplasia intestinal es un factor de riesgo intermedio. Requiere seguimiento endoscópico periódico para identificar a tiempo cambios displásicos celulares."
      },
      {
        question: "¿Qué tan confiable es la biopsia endoscópica?",
        answer: "Es el estándar de oro. Permite al patólogo analizar bajo el microscopio las células tomadas directamente de las zonas sospechosas con una precisión diagnóstica superior al 98%."
      }
    ],
    relatedServices: ["gastroscopia-o-panendoscopia"],
    relatedSymptoms: ["dolor-abdominal", "vomito-con-sangre", "vomito"],
    image: "/enfermedades/cancer-gastrico.png",
    seo: {
      title: "Detección de Cáncer de Estómago en Mérida",
      description: "Detección temprana de cáncer gástrico mediante gastroscopia de alta definición y toma de biopsias en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["deteccion cancer gastrico merida", "endoscopia digestiva yucatan", "biopsia de estomago merida", "gastritis cronica atrofica"]
    }
  },
  {
    id: "vh-dis-006",
    slug: "deteccion-de-cancer-de-colon-y-recto",
    name: "Detección Oportuna de Cáncer de Colon y Recto",
    technicalName: "Tamizaje de Cáncer Colorrectal",
    description: "El cáncer colorrectal es el tumor maligno que se desarrolla en el colon (intestino grueso) o el recto. En la gran mayoría de los casos, este cáncer comienza como un crecimiento benigno llamado pólipo adenomatoso. El proceso de transformación de un pólipo a cáncer toma entre 10 y 15 años. Por ello, la colonoscopia de tamizaje a partir de los 45 años es una herramienta preventiva de gran impacto, ya que permite identificar y retirar los pólipos antes de que se vuelvan malignos.",
    symptoms: [
      "Sangrado rectal o presencia de sangre (fresca u oscura) en las heces",
      "Cambios inexplicables en el ritmo intestinal (diarrea o estreñimiento)",
      "Heces más delgadas de lo normal (en forma de lápiz)",
      "Sensación de no vaciar por completo el intestino (tenesmo rectal)",
      "Pérdida de peso injustificada y debilidad generalizada",
      "Dolor abdominal persistente o sensación de gases molestos"
    ],
    causes: [
      "Acumulación de mutaciones genéticas en las células que recubren el colon",
      "Crecimiento progresivo de pólipos precancerosos no extirpados"
    ],
    riskFactors: [
      "Edad igual o mayor a 45 años",
      "Antecedentes de pólipos o cáncer colorrectal en la familia",
      "Enfermedad inflamatoria intestinal crónica (CUCI o Crohn)",
      "Estilo de vida sedentario, tabaquismo y dieta pobre en fibra"
    ],
    mexicoStats: "El cáncer de colon y recto es el segundo cáncer con mayor incidencia en hombres y mujeres en México, cobrando miles de vidas al año, la mayoría de las cuales pudieron evitarse con una colonoscopia oportuna.",
    complications: [
      "Obstrucción intestinal completa (emergencia médica)",
      "Perforación del colon provocando sepsis abdominal",
      "Metástasis principalmente al hígado y ganglios linfáticos",
      "Anemia severa por pérdida constante y silenciosa de sangre"
    ],
    treatments: [
      "Polipectomía endoscópica durante el tamizaje (preventivo)",
      "Cirugía de resección del segmento del colon afectado (Hemicolectomía)",
      "Quimioterapia y terapias dirigidas según la etapa clínica"
    ],
    faqs: [
      {
        question: "¿A qué edad debo hacerme mi primera colonoscopia?",
        answer: "Las guías internacionales recomiendan iniciar el tamizaje a los 45 años en personas sin antecedentes. Si tienes familiares con cáncer de colon, debes iniciar a los 40 años o 10 años antes del diagnóstico del familiar."
      },
      {
        question: "¿Qué preparación se requiere para la colonoscopia?",
        answer: "Consiste en una dieta de líquidos claros el día anterior y la toma de un laxante especial para limpiar por completo el colon. Una buena limpieza es vital para que el cirujano pueda ver pólipos milimétricos."
      },
      {
        question: "¿Se realiza con dolor el estudio?",
        answer: "No. En nuestra práctica médica, la colonoscopia se realiza siempre bajo sedación anestésica profunda administrada por un especialista, garantizando comodidad y seguridad absoluta."
      }
    ],
    relatedServices: ["colonoscopia"],
    relatedSymptoms: ["sangrado-transrectal", "evacuaciones-con-sangre", "estreñimiento"],
    image: "/enfermedades/cancer-colon.png",
    seo: {
      title: "Colonoscopia y Detección de Cáncer de Colon en Mérida",
      description: "Previene el cáncer colorrectal. Agenda tu colonoscopia de detección oportuna en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["colonoscopia merida precio", "deteccion cancer de colon yucatan", "polipectomia colonica merida", "sangre en heces diagnostico"]
    }
  },
  {
    id: "vh-dis-007",
    slug: "colecistitis-y-colelitiasis",
    name: "Colecistitis y Colelitiasis (Piedras en la Vesícula)",
    technicalName: "Colelitiasis, Cólico Biliar y Colecistitis Aguda",
    description: "La colelitiasis es la presencia de cálculos o 'piedras' de colesterol o sales biliares en la vesícula. Cuando estas piedras obstruyen el conducto de salida de la bilis, provocan un cólico biliar caracterizado por dolor intenso. Si la obstrucción se prolonga, se desarrolla la colecistitis (inflamación aguda de la vesícula biliar), una condición seria que requiere atención médica y con frecuencia cirugía de urgencia para extraer el órgano afectado.",
    symptoms: [
      "Dolor severo y repentino en el cuadrante superior derecho del abdomen",
      "Dolor que se propaga hacia la espalda o al hombro derecho",
      "Náuseas, vómitos y rechazo a los alimentos grasosos",
      "Fiebre y escalofríos (indican infección o colecistitis aguda)",
      "Ictericia (color amarillo en ojos y piel) si hay una piedra en la vía biliar"
    ],
    causes: [
      "Desequilibrio químico en la bilis que favorece la cristalización",
      "Vaciamiento incompleto o lento de la vesícula biliar"
    ],
    riskFactors: [
      "Sexo femenino (mayor propensión por hormonas)",
      "Obesidad, sobrepeso o pérdida de peso muy rápida",
      "Edad mayor a 40 años",
      "Diabetes mellitus y sedentarismo"
    ],
    mexicoStats: "La cirugía de vesícula (colecistectomía laparoscópica) es la cirugía programada más común en los hospitales de México, afectando predominantemente al sector femenino.",
    complications: [
      "Piocolecisto (vesícula llena de pus e infección grave)",
      "Perforación vesicular y peritonitis biliar",
      "Coledocolitiasis (migración de piedras a la vía biliar principal)",
      "Pancreatitis biliar (inflamación grave del páncreas)"
    ],
    treatments: [
      "Colecistectomía laparoscópica (cirugía de mínima invasión para retirar la vesícula con sus piedras)",
      "Ayuno y antibióticos intravenosos durante episodios agudos inflamatorios",
      "CPRE para extraer piedras impactadas en la vía biliar antes de la cirugía"
    ],
    faqs: [
      {
        question: "¿Se pueden deshacer las piedras de la vesícula con medicamentos?",
        answer: "No de forma efectiva ni segura. Los tratamientos médicos no disuelven cálculos grandes y conllevan un alto riesgo de que al fragmentarse migren a la vía biliar, complicando el cuadro con pancreatitis."
      },
      {
        question: "¿Cómo se vive sin vesícula biliar?",
        answer: "La vesícula solo almacena la bilis producida por el hígado. Tras la cirugía, el hígado drena la bilis directamente al intestino. La mayoría de los pacientes llevan una vida normal sin restricciones severas tras un breve periodo de adaptación."
      },
      {
        question: "¿Qué es la coledocolitiasis?",
        answer: "Ocurre cuando una piedra sale de la vesícula y se atora en el conducto colédoco, bloqueando la bilis del hígado. Provoca ictericia (coloración amarilla) y requiere CPRE urgente para destaparlo."
      }
    ],
    relatedServices: ["colecistectomia-laparoscopica", "cpre"],
    relatedSymptoms: ["ictericia", "vomito-con-bilis", "dolor-abdominal"],
    image: "/enfermedades/vesicula.png",
    seo: {
      title: "Cirugía de Vesícula por Laparoscopia en Mérida",
      description: "Tratamiento de piedras en la vesícula mediante colecistectomía laparoscópica en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["operacion de vesicula merida", "colecistectomia laparoscopica yucatan", "cirujano de vesicula merida", "dolor de vesícula tratamiento"]
    }
  },
  {
    id: "vh-dis-008",
    slug: "hernias-inguinales-y-umbilicales",
    name: "Hernias Inguinales y Umbilicales",
    technicalName: "Hernias de la Pared Abdominal",
    description: "Una hernia se produce cuando un órgano o tejido interno (generalmente una porción de grasa o intestino) sobresale a través de un punto débil o desgarro en la capa muscular que lo rodea. Las más comunes son las hernias inguinales (en la ingle) y las umbilicales (en el ombligo). Estas hernias se manifiestan como un abultamiento blando y pueden causar molestias o dolor al hacer esfuerzo. No se curan solas y requieren una reparación quirúrgica para evitar complicaciones graves como el estrangulamiento del intestino.",
    symptoms: [
      "Presencia de un bulto visible bajo la piel en el ombligo o la ingle",
      "Dolor o sensación de presión al cargar objetos pesados, toser o agacharse",
      "Sensación de ardor o debilidad en la zona afectada",
      "El bulto puede desaparecer al acostarse y reaparecer al ponerse de pie"
    ],
    causes: [
      "Aumento crónico de la presión dentro del abdomen (esfuerzo, tos crónica, estreñimiento)",
      "Debilidad congénita o adquirida de los tejidos musculares",
      "Cirugías previas en la pared abdominal (hernia incisional)"
    ],
    riskFactors: [
      "Sobrepeso y obesidad",
      "Levantamiento frecuente de objetos pesados de forma profesional",
      "Embarazos múltiples",
      "Tener antecedentes de familiares con hernias"
    ],
    mexicoStats: "La hernioplastia es uno de los procedimientos quirúrgicos de pared abdominal más frecuentes en México, resolviendo de forma segura problemas de dolor y previniendo oclusiones intestinales.",
    complications: [
      "Incarcelación (la hernia queda atrapada fuera y no se puede reducir)",
      "Estrangulamiento (bloqueo del flujo sanguíneo al tejido atrapado, causando necrosis)",
      "Obstrucción intestinal con síntomas de náuseas, vómitos y peritonitis"
    ],
    treatments: [
      "Hernioplastia inguinal laparoscópica (reparación con colocación de malla por mínima invasión)",
      "Hernioplastia abierta (indicada en casos específicos o hernias gigantes)",
      "Uso de mallas protésicas biocompatibles de última generación para reforzar la pared"
    ],
    faqs: [
      {
        question: "¿Es peligroso retrasar la cirugía de hernia?",
        answer: "Sí. Existe el riesgo constante de que una porción de intestino quede atrapada (hernia incarcerada) y pierda riego sanguíneo (hernia estrangulada), lo cual representa una urgencia quirúrgica severa de alto riesgo."
      },
      {
        question: "¿Cuánto dura la recuperación tras una hernioplastia laparoscópica?",
        answer: "Gracias al abordaje laparoscópico, la recuperación es rápida. Se recomienda evitar esfuerzos pesados durante 3 a 4 semanas, pero el paciente puede caminar e incorporarse a actividades de oficina a los 7 días."
      },
      {
        question: "¿Siempre se debe colocar una malla?",
        answer: "Sí, en la gran mayoría de los casos de adultos. El uso de mallas disminuye drásticamente la tasa de recurrencia (que la hernia vuelva a salir) de más de un 15% a menos del 1%."
      }
    ],
    relatedServices: ["hernioplastia-inguinal-laparoscopica"],
    relatedSymptoms: ["hernias-en-region-umbilical", "hernias-en-region-inguinal", "tumoraciones-en-la-espalda-brazos-piernas-abdomen"],
    image: "/enfermedades/hernias.png",
    seo: {
      title: "Operación de Hernia Inguinal y Umbilical en Mérida",
      description: "Reparación laparoscópica de hernias con colocación de malla en Mérida con el especialista militar Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["operacion de hernia inguinal merida", "hernioplastia umbilical yucatan", "cirugia de hernia con malla", "cirujano de hernias merida"]
    }
  },
  {
    id: "vh-dis-009",
    slug: "apendicitis-aguda",
    name: "Apendicitis Aguda",
    technicalName: "Inflamación Aguda del Apéndice Cecal",
    description: "La apendicitis es la inflamación del apéndice, un pequeño órgano en forma de saco localizado al inicio del colon. Es la urgencia quirúrgica abdominal más frecuente en todo el mundo. Suele originarse por la obstrucción del interior del apéndice (debido a materia fecal endurecida o ganglios linfáticos inflamados). La inflamación progresa rápidamente, pudiendo causar perforación del apéndice y peritonitis generalizada. Requiere intervención quirúrgica inmediata (apendicectomía).",
    symptoms: [
      "Dolor que inicia alrededor del ombligo y migra hacia la fosa ilíaca derecha (abajo y a la derecha)",
      "Dolor abdominal que empeora al toser, caminar o realizar movimientos bruscos",
      "Náuseas y vómitos que se presentan poco después de iniciar el dolor",
      "Pérdida de apetito y febrícula (37.5°C - 38°C)",
      "Estreñimiento o diarrea leve",
      "Rigidez o dolor intenso al presionar y soltar el abdomen derecho (signo de rebote)"
    ],
    causes: [
      "Obstrucción del apéndice cecal por fecalitos (materia fecal dura)",
      "Hiperplasia linfoide (inflamación de los tejidos linfáticos del órgano)",
      "Cuerpos extraños o parásitos"
    ],
    riskFactors: [
      "Afecta principalmente a personas jóvenes entre 10 y 30 años",
      "Dieta baja en fibra y alta en carbohidratos refinados"
    ],
    mexicoStats: "La apendicitis es la principal causa de cirugía general de urgencia en niños y adultos jóvenes en los hospitales de México.",
    complications: [
      "Perforación del apéndice cecal",
      "Peritonitis localizada o generalizada (infección abdominal grave)",
      "Absceso apendicular (acumulación localizada de pus)",
      "Sepsis y falla orgánica múltiple"
    ],
    treatments: [
      "Apendicectomía laparoscópica (extirpación del apéndice de urgencia por mínima invasión)",
      "Administración intravenosa de antibióticos y analgésicos",
      "Manejo de líquidos de urgencia"
    ],
    faqs: [
      {
        question: "¿Qué pasa si tomo analgésicos antes de ver al médico?",
        answer: "Está estrictamente prohibido. Tomar analgésicos o antibióticos puede ocultar los síntomas clásicos de la apendicitis, lo que retrasa el diagnóstico y eleva el riesgo de perforación y peritonitis."
      },
      {
        question: "¿Cuáles son las ventajas de la apendicectomía laparoscópica?",
        answer: "Permite incisiones milimétricas, genera mucho menos dolor postoperatorio, ofrece un menor riesgo de infecciones de la herida quirúrgica y una reincorporación a la vida normal en pocos días."
      },
      {
        question: "¿Cómo se diferencia la apendicitis de una colitis?",
        answer: "El dolor de apendicitis es progresivo, no cede y se localiza en la parte inferior derecha, frecuentemente acompañado de náuseas, pérdida de apetito y fiebre. Ante la menor sospecha, es imperativo acudir a urgencias."
      }
    ],
    relatedServices: ["apendicectomia-laparoscopica"],
    relatedSymptoms: ["sintomas-de-apendicitis", "dolor-abdominal", "vomito"],
    image: "/enfermedades/apendicitis.png",
    seo: {
      title: "Cirugía de Apendicitis por Laparoscopia en Mérida",
      description: "Cirugía de urgencia de apendicetomía laparoscópica en Mérida con el especialista militar Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["apendicitis urgente merida", "apendicectomia laparoscopica yucatan", "dolor fosa iliaca derecha", "cirujano general urgencias merida"]
    }
  },
  {
    id: "vh-dis-010",
    slug: "pancreatitis-aguda",
    name: "Pancreatitis Aguda",
    technicalName: "Inflamación Aguda del Páncreas",
    description: "La pancreatitis aguda es la inflamación súbita del páncreas, una glándula localizada detrás del estómago que produce enzimas digestivas y hormonas como la insulina. Ocurre cuando las enzimas digestivas se activan prematuramente dentro del propio páncreas, provocando que la glándula se digiera a sí misma. Las causas más comunes son los cálculos biliares que obstruyen el conducto pancreático o el consumo excesivo de alcohol. Puede variar de leve a severa, representando esta última una condición médica crítica que pone en riesgo la vida.",
    symptoms: [
      "Dolor severo en el abdomen superior que se irradia en 'cinturón' hacia la espalda",
      "Náuseas y vómitos abundantes que no alivian el dolor",
      "Fiebre y aumento del ritmo cardíaco (taquicardia)",
      "Abdomen distendido y muy doloroso al tacto",
      "Dificultad para respirar en casos graves"
    ],
    causes: [
      "Piedras en la vesícula biliar (colelitiasis biliar) que bloquean la salida del conducto",
      "Consumo agudo o crónico de alcohol",
      "Niveles extremadamente elevados de triglicéridos en sangre (>1000 mg/dl)",
      "Traumatismos o efectos secundarios de ciertos medicamentos"
    ],
    riskFactors: [
      "Padecer colelitiasis sin tratamiento quirúrgico",
      "Consumo frecuente de bebidas alcohólicas",
      "Hipertrigliceridemia o antecedentes de problemas metabólicos"
    ],
    mexicoStats: "La pancreatitis biliar es una de las complicaciones más serias y frecuentes de la colelitiasis en la población mexicana, requiriendo hospitalización inmediata.",
    complications: [
      "Necrosis pancreática (muerte del tejido del páncreas)",
      "Pseudoquiste pancreático (acumulación de líquido y enzimas)",
      "Falla orgánica sistémica (renal, respiratoria, cardiovascular)",
      "Infección de la necrosis pancreática, requiriendo lavado quirúrgico"
    ],
    treatments: [
      "Hospitalización, ayuno absoluto para 'reposar' el páncreas y terapia intensiva de líquidos",
      "Analgésicos potentes para el control del dolor abdominal",
      "CPRE para retirar piedras biliares obstruyendo el colédoco",
      "Colecistectomía una vez que se resuelva la inflamación del páncreas"
    ],
    faqs: [
      {
        question: "¿Por qué da dolor en cinturón en la pancreatitis?",
        answer: "El páncreas está ubicado en el espacio retroperitoneal, justo delante de la columna vertebral. Su inflamación estimula nervios que transmiten el dolor directamente hacia la espalda en forma de banda."
      },
      {
        question: "¿La pancreatitis aguda se opera?",
        answer: "En etapas iniciales el tratamiento es médico (líquidos, ayuno, analgesia). La cirugía se reserva para complicaciones como infección de la necrosis pancreática, abscesos, o para extirpar la vesícula una vez recuperado el paciente."
      },
      {
        question: "¿Cuánto tiempo debe estar hospitalizado el paciente?",
        answer: "En casos leves, usualmente de 3 a 5 días para reintroducir la dieta. En pancreatitis graves, la estancia hospitalaria puede prolongarse semanas en la unidad de cuidados intensivos."
      }
    ],
    relatedServices: ["cpre", "colecistectomia-laparoscopica"],
    relatedSymptoms: ["sintomas-de-pancreatitis", "dolor-abdominal", "vomito-con-bilis"],
    image: "/enfermedades/pancreatitis.png",
    seo: {
      title: "Tratamiento de Pancreatitis Aguda en Mérida",
      description: "Diagnóstico y manejo integral de pancreatitis aguda biliar en Mérida con el especialista militar Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["pancreatitis biliar merida", "tratamiento de pancreatitis yucatan", "dolor en cinturon abdomen", "urgencia de pancreatitis merida"]
    }
  },
  {
    id: "vh-dis-011",
    slug: "enfermedad-diverticular",
    name: "Diverticulosis y Diverticulitis",
    technicalName: "Enfermedad Diverticular del Colon",
    description: "La diverticulosis es la presencia de pequeños sacos o bolsas dilatadas (divertículos) que sobresalen a través de la pared del colon. Es común en personas de edad avanzada y suele no causar molestias. La diverticulitis ocurre cuando uno o más de estos divertículos se inflaman o infectan debido a la obstrucción por materia fecal (fecalito), provocando dolor abdominal intenso, fiebre y riesgo de perforación colónica.",
    symptoms: [
      "Dolor severo y constante en la parte inferior izquierda del abdomen",
      "Fiebre y escalofríos",
      "Náuseas y alteración del ritmo intestinal (estreñimiento o diarrea)",
      "Sangrado rectal abundante (sangrado diverticular)",
      "Distensión y dolor al tacto en el abdomen"
    ],
    causes: [
      "Aumento de la presión dentro del colon debido a esfuerzo evacuatorio",
      "Falta de fibra en la dieta que endurece las heces"
    ],
    riskFactors: [
      "Envejecimiento (más común después de los 50 años)",
      "Dieta baja en fibra y alta en alimentos procesados",
      "Obesidad, sedentarismo y consumo de tabaco",
      "Uso crónico de antiinflamatorios no esteroideos (AINEs)"
    ],
    mexicoStats: "La enfermedad diverticular es una causa común de hospitalización en adultos mayores de 60 años en México, siendo la diverticulitis una urgencia quirúrgica relevante.",
    complications: [
      "Absceso diverticular (acumulación de pus)",
      "Fístulas (comunicaciones anormales entre el colon y otros órganos como la vejiga)",
      "Obstrucción intestinal por estrechez inflamatoria",
      "Perforación del colon provocando peritonitis fecal de alta mortalidad"
    ],
    treatments: [
      "Diverticulosis: Dieta rica en fibra y abundante agua para evitar estreñimiento",
      "Diverticulitis leve: Antibióticos orales y dieta líquida en casa",
      "Diverticulitis complicada: Hospitalización con antibióticos intravenosos o cirugía de resección del colon afectado (procedimiento de Hartmann o colectomía segmentaria)"
    ],
    faqs: [
      {
        question: "¿Se deben evitar las semillas si tengo divertículos?",
        answer: "Estudios médicos recientes demuestran que comer semillas, nueces o palomitas de maíz no incrementa el riesgo de inflamación de los divertículos. Lo primordial es evitar el estreñimiento crónico mediante fibra y agua."
      },
      {
        question: "¿Cuándo se requiere operar los divertículos?",
        answer: "La cirugía se realiza ante complicaciones como perforación con peritonitis, obstrucción intestinal, fístulas, o después de múltiples episodios repetidos de diverticulitis que merman la calidad de vida del paciente."
      },
      {
        question: "¿La colonoscopia sirve durante un ataque de diverticulitis?",
        answer: "No. Durante una diverticulitis aguda la colonoscopia está estrictamente contraindicada por el riesgo extremadamente elevado de perforar el colon inflamado. Debe realizarse 6 semanas después de resuelta la inflamación."
      }
    ],
    relatedServices: ["colonoscopia"],
    relatedSymptoms: ["diverticulosis-diverticulos-en-colon", "diverticulitis-inflamacion-de-diverticulos", "sangrado-transrectal"],
    image: "/enfermedades/diverticulos.png",
    seo: {
      title: "Tratamiento de Diverticulitis y Divertículos en Mérida",
      description: "Diagnóstico y tratamiento de la enfermedad diverticular en Mérida con el especialista militar Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["diverticulitis aguda merida", "tratamiento diverticulos yucatan", "dolor fosa iliaca izquierda colon", "cirugia de colon diverticulitis"]
    }
  },
  {
    id: "vh-dis-012",
    slug: "cirrosis-hepatica",
    name: "Cirrosis Hepática y Complicaciones",
    technicalName: "Cirrosis Hepática e Hipertensión Portal",
    description: "La cirrosis hepática es la fase tardía de la cicatrización (fibrosis) del hígado provocada por diversas enfermedades y afecciones hepáticas crónicas. A medida que progresa, el tejido sano es reemplazado por tejido cicatrizal, lo que bloquea el flujo sanguíneo y disminuye la capacidad funcional del hígado. Provoca hipertensión portal, la cual desencadena complicaciones quirúrgicas digestivas como várices esofágicas sangrantes, acumulación de líquido en el abdomen (ascitis) y disfunción multiorgánica.",
    symptoms: [
      "Fatiga, debilidad general y pérdida de peso involuntaria",
      "Ictericia (coloración amarilla de piel y ojos)",
      "Acumulación de líquido en el abdomen (ascitis) o hinchazón en piernas",
      "Sangrado fácil, moretones recurrentes o arañas vasculares en la piel",
      "Confusión o desorientación mental (encefalopatía hepática)"
    ],
    causes: [
      "Consumo crónico de alcohol a largo plazo",
      "Infección crónica por virus de Hepatitis B o C",
      "Enfermedad por hígado graso no alcohólico grave"
    ],
    riskFactors: [
      "Consumo diario de alcohol por años",
      "Tener sobrepeso y diabetes",
      "Compartir agujas o tener relaciones sexuales de riesgo sin protección"
    ],
    mexicoStats: "La cirrosis hepática figura consistentemente entre las primeras 10 causas de muerte general en la población adulta de México.",
    complications: [
      "Sangrado masivo por várices esofágicas o gástricas",
      "Ascitis refractaria e infección del líquido (peritonitis bacteriana espontánea)",
      "Carcinoma hepatocelular (cáncer de hígado)",
      "Insuficiencia hepática terminal"
    ],
    treatments: [
      "Manejo médico de soporte y control de la hipertensión portal",
      "Procedimientos endoscópicos para prevenir o detener sangrados varicosos",
      "Paracentesis para drenar el líquido acumulado en el abdomen",
      "Trasplante hepático en etapas avanzadas de falla del órgano"
    ],
    faqs: [
      {
        question: "¿La cirrosis hepática es reversible?",
        answer: "El tejido cicatrizal ya formado generalmente no se puede revertir. Sin embargo, detener la causa subyacente (como suspender el alcohol o tratar la hepatitis C) puede detener la progresión de la enfermedad."
      },
      {
        question: "¿Por qué se acumula líquido en el abdomen?",
        answer: "Debido a la alta presión en las venas del hígado (hipertensión portal) y a la incapacidad del hígado cirrótico para producir albúmina (proteína que mantiene el líquido dentro de las venas)."
      },
      {
        question: "¿Cómo ayuda la endoscopia al paciente con cirrosis?",
        answer: "Ayuda a identificar la presencia de várices en el esófago o estómago y a realizar tratamientos preventivos (como ligadura con bandas elásticas) antes de que sufran una ruptura sangrante catastrófica."
      }
    ],
    relatedServices: ["gastroscopia-o-panendoscopia", "ligadura-de-varices-esofagicas"],
    relatedSymptoms: ["ictericia", "vomito-con-sangre", "distension-abdominal"],
    image: "/enfermedades/cirrosis.png",
    seo: {
      title: "Control de Complicaciones de Cirrosis en Mérida",
      description: "Diagnóstico de várices esofágicas por cirrosis y tratamiento endoscópico en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["cirrosis hepatica merida", "hipertension portal varices yucatan", "endoscopia cirrosis diagnostico", "drenaje de ascitis merida"]
    }
  },
  {
    id: "vh-dis-013",
    slug: "enfermedad-hemorroidal-y-hemorroides",
    name: "Enfermedad Hemorroidal (Hemorroides)",
    technicalName: "Patología Hemorroidal Interna y Externa",
    description: "La enfermedad hemorroidal es la inflamación, congestión o prolapso de los cojinetes vasculares y tejido conectivo ubicados en el canal anal. Es una de las condiciones proctológicas más comunes en adultos. Se dividen en hemorroides internas (que provocan sangrado sin dolor al evacuar) y hemorroides externas (que generan bultos dolorosos, ardor y posible trombosis anal). Requiere evaluación por el cirujano especialista para ofrecer el tratamiento más efectivo y descartar otras patologías graves.",
    symptoms: [
      "Sangrado transrectal de color rojo brillante durante o al finalizar la evacuación",
      "Bultos o protuberancias inflamadas y sensibles en el margen anal",
      "Picazón (prurito anal), irritación y ardor en la región perianal",
      "Dolor o molestia severa al sentarse o durante la defecación",
      "Prolapso (sensación de salida de tejido a través del ano)"
    ],
    causes: [
      "Aumento recurrente de la presión venosa en el recto y el ano",
      "Esfuerzo excesivo evacuatorio secundario a estreñimiento crónico",
      "Permanecer sentado en el inodoro durante periodos prolongados"
    ],
    riskFactors: [
      "Estreñimiento o diarrea crónica",
      "Embarazo y parto vaginal",
      "Obesidad y sedentarismo prolongado",
      "Dieta baja en fibra y baja ingesta de líquidos",
      "Factores hereditarios y envejecimiento"
    ],
    mexicoStats: "La enfermedad hemorroidal afecta a más del 50% de los adultos mayores de 45 años en México, siendo uno de los principales motivos de consulta médica general y de coloproctología.",
    complications: [
      "Trombosis hemorroidal (formación de coágulos sumamente dolorosos dentro de la hemorroide)",
      "Anemia ferropénica por sangrado crónico e ininterrumpido",
      "Estrangulamiento hemorroidal con necrosis del tejido prolapsado",
      "Infección e ulceración secundaria del área anal"
    ],
    treatments: [
      "Tratamiento médico conservador (fibra, venotónicos, baños de asiento y pomadas específicas)",
      "Ligadura con banda elástica (para hemorroides internas sangrantes de grado I y II)",
      "Hemorroidectomía quirúrgica (extirpación definitiva para hemorroides prolapsadas o trombosadas)",
      "Procedimientos avanzados de mínima invasión y electrofulguración"
    ],
    faqs: [
      {
        question: "¿Cualquier sangrado al evacuar es causado por hemorroides?",
        answer: "No necesariamente. Si bien las hemorroides son muy frecuentes, el sangrado anal debe ser evaluado por el especialista mediante anoscopia o colonoscopia para descartar fisuras, pólipos o cáncer colorrectal."
      },
      {
        question: "¿Cuándo es indispensable la cirugía de hemorroides?",
        answer: "La cirugía se indica cuando los tratamientos convencionales no alivian los síntomas, en hemorroides con prolapso permanente (grado III y IV), en casos de trombosis anal recurrente o ante sangrado severo que provoca anemia."
      },
      {
        question: "¿Cómo prevenir la reaparición de hemorroides?",
        answer: "Es fundamental corregir el hábito intestinal consumiendo de 25 a 30 gramos de fibra al día, tomar al menos 2 litros de agua, evitar el sedentarismo y no permanecer más de 5 minutos sentado en el inodoro."
      }
    ],
    relatedServices: ["colonoscopia", "gastroscopia-o-panendoscopia"],
    relatedSymptoms: ["sangrado-transrectal", "evacuaciones-con-sangre", "abultamientos-y-hernias"],
    image: "/enfermedades/hemorroides.png",
    seo: {
      title: "Tratamiento de Hemorroides y Cirugía en Mérida",
      description: "Alivio y tratamiento definitivo para hemorroides en Mérida. Valoración médica, ligadura y hemorroidectomía con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["tratamiento de hemorroides merida", "cirujano de hemorroides yucatan", "hemorroidectomia precio merida", "sangrado anal tratamiento merida"]
    }
  }
];
