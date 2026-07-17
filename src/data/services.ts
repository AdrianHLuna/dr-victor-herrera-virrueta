import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "vh-ser-001",
    slug: "gastroscopia-o-panendoscopia",
    name: "Gastroscopia o Panendoscopia Diagnóstica",
    description: "Estudio endoscópico del esófago, estómago y duodeno bajo sedación, vital para detectar gastritis, reflujo y Helicobacter pylori.",
    longDescription: "La Gastroscopia (también llamada Panendoscopia) es un estudio diagnóstico y terapéutico mínimamente invasivo realizado por un especialista en endoscopia del aparato digestivo. A través de la introducción de una sonda flexible y delgada con cámara de alta definición por la boca, se evalúa minuciosamente el estado de la mucosa del esófago, estómago y las primeras porciones del intestino delgado (duodeno). Permite la toma indolora de biopsias, la detección de la bacteria Helicobacter pylori y la identificación de pólipos o sospecha de cáncer gástrico.",
    type: "ambulatorio",
    anesthesiaType: "Sedación profunda asistida",
    duration: "15 a 20 minutos",
    recoveryTime: "1 hora en recuperación clínica",
    isPainful: false,
    benefits: [
      "Permite tomar muestras de tejido (biopsias) de manera completamente indolora.",
      "Identificación precisa de esofagitis, gastritis, úlceras y reflujo gastroesofágico.",
      "Detección inmediata de Helicobacter pylori e infecciones estomacales.",
      "Diagnóstico preventivo de tumores y pólipos gástricos en etapas tempranas.",
      "Realizado bajo sedación, por lo que el paciente no experimenta ninguna molestia o náusea."
    ],
    postOpRecommendations: [
      "No consumir alimentos sólidos durante las 2 horas posteriores al estudio.",
      "Evitar conducir vehículos o realizar tareas de precisión el resto del día debido a la sedación.",
      "Es normal sentir una ligera molestia o resequedad en la garganta temporalmente.",
      "Consumir alimentos blandos y templados en su primera comida."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Equipo": "Endoscopios flexibles de alta definición (HD) con cromoendoscopia digital",
      "Sedación": "Administrada por médico especialista de forma segura",
      "Toma de muestras": "Pinzas de biopsia desechables estériles"
    },
    relatedConditions: ["enfermedad-por-reflujo-gastroesofagico", "infeccion-por-helicobacter-pylori", "deteccion-de-cancer-gastrico", "cirrosis-hepatica"],
    image: "/servicios/panendoscopia.png",
    seo: {
      title: "Gastroscopia y Endoscopia Diagnóstica en Mérida",
      description: "Realízate una gastroscopia segura y sin dolor en Mérida con el especialista en endoscopia digestiva Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["gastroscopia precio merida", "endoscopia superior yucatan", "estudio de estomago costo", "deteccion de gastritis merida"]
    }
  },
  {
    id: "vh-ser-002",
    slug: "colonoscopia",
    name: "Colonoscopia Diagnóstica y Terapéutica",
    description: "Estudio integral de todo el colon y el recto bajo sedación, ideal para el tamizaje preventivo de pólipos y detección de cáncer.",
    longDescription: "La Colonoscopia es el examen clínico de referencia para la evaluación del intestino grueso (colon) y el recto. Consiste en introducir a través del ano un tubo flexible con una cámara digital especial de alta definición. Permite al endoscopista examinar toda la pared del colon para detectar zonas inflamadas, sangrados, úlceras o pólipos de diversos tamaños. Si se identifican pólipos durante el examen, se realiza su extirpación inmediata (polipectomía endoscópica), evitando que en el futuro puedan evolucionar hacia un cáncer de colon.",
    type: "ambulatorio",
    anesthesiaType: "Sedación profunda asistida",
    duration: "30 a 45 minutos",
    recoveryTime: "1 a 2 horas en recuperación clínica",
    isPainful: false,
    benefits: [
      "Estándar de oro a nivel mundial para prevenir y detectar el cáncer colorrectal.",
      "Polipectomía inmediata: extirpación de pólipos en el mismo procedimiento clínico.",
      "Evaluación precisa del origen de sangrados rectales y heces con sangre.",
      "Diagnóstico diferencial para colitis, diverticulosis, CUCI y enfermedad de Crohn.",
      "Procedimiento seguro, cómodo y sin dolor gracias a la sedación controlada."
    ],
    postOpRecommendations: [
      "Permanecer en reposo relativo en casa el resto del día de la prueba.",
      "Reintroducir la alimentación habitual de forma progresiva, iniciando con líquidos o comidas blandas.",
      "Es común sentir gases o distensión leve; caminar ayuda a expulsarlos de manera natural.",
      "Evitar tomar aspirinas o antiinflamatorios si se realizó una polipectomía sin indicación de su cirujano."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Accesorios": "Asas de polipectomía de un solo uso y pinzas de coagulación monopolar",
      "Medios de insuflación": "Insuflación con CO2 para menor distensión y dolor post-estudio",
      "Visualización": "Filtros de espectro de luz para caracterización de pólipos"
    },
    relatedConditions: ["polipos-gastricos-y-de-colon", "deteccion-de-cancer-de-colon-y-recto", "enfermedad-diverticular"],
    image: "/servicios/colonoscopia.png",
    seo: {
      title: "Colonoscopia y Extirpación de Pólipos en Mérida",
      description: "Realízate una colonoscopia de tamizaje en Mérida con el especialista militar Dr. Víctor Javier Herrera Virrueta. Prevención de cáncer.",
      keywords: ["colonoscopia costo merida", "tamizaje cancer de colon yucatan", "polipectomia endoscopica merida", "sangrado anal diagnostico"]
    }
  },
  {
    id: "vh-ser-003",
    slug: "colocacion-de-balon-intragastrico",
    name: "Colocación de Balón Intragástrico Endoscópico",
    description: "Método endoscópico restrictivo no quirúrgico para la pérdida de peso efectiva, ideal para sobrepeso y obesidad.",
    longDescription: "La colocación de Balón Intragástrico es un procedimiento médico no quirúrgico indicado para el tratamiento del sobrepeso y la obesidad. Mediante una gastroscopia breve bajo sedación, se introduce un balón de silicona blanda desinflado al estómago. Una vez colocado, se llena con solución salina estéril y colorante especial (azul de metileno) hasta alcanzar un volumen óptimo. El balón ocupa espacio en la cavidad gástrica, lo que reduce la capacidad física para almacenar comida y retrasa el vaciamiento gástrico, induciendo una sensación de saciedad temprana.",
    type: "ambulatorio",
    anesthesiaType: "Sedación profunda controlada",
    duration: "20 a 30 minutos",
    recoveryTime: "De 2 a 3 días de adaptación en casa",
    isPainful: false,
    benefits: [
      "Procedimiento 100% reversible y libre de cortes o grapas en el estómago.",
      "Ayuda a perder del 15% al 20% del peso corporal total en un periodo de 6 a 12 meses.",
      "Herramienta de gran impacto para cambiar hábitos alimenticios y porciones de comida.",
      "Disminuye la presión arterial, colesterol y mejora el control glucémico.",
      "Rápido reinicio de actividades cotidianas."
    ],
    postOpRecommendations: [
      "Dieta líquida estricta durante los primeros 3 a 5 días post-colocación.",
      "Tomar medicamentos antieméticos y protectores gástricos recetados para minimizar náuseas.",
      "Aprender a masticar despacio y suspender la ingesta de alimentos ante la primera señal de saciedad.",
      "Mantener un acompañamiento multidisciplinario constante con el nutriólogo."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Material del Balón": "Silicona médica de alta resistencia biocompatible",
      "Duración del implante": "6 a 12 meses según el tipo de balón utilizado",
      "Medio de llenado": "Solución salina con indicador azul de metileno"
    },
    relatedConditions: ["obesidad-y-sobrepeso"],
    image: "/servicios/balon-intragastrico.png",
    seo: {
      title: "Colocación de Balón Intragástrico en Mérida",
      description: "Baja de peso de forma segura y sin cirugía con el balón intragástrico endoscópico en Mérida. Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["balon intragastrico merida precio", "perder peso sin cirugia yucatan", "endoscopia para bajar de peso", "tratamiento obesidad merida"]
    }
  },
  {
    id: "vh-ser-004",
    slug: "retiro-de-balon-intragastrico",
    name: "Retiro de Balón Intragástrico por Endoscopia",
    description: "Extracción endoscópica del balón de silicona al cumplir su ciclo terapéutico, de forma segura y sin hospitalización.",
    longDescription: "El retiro del balón intragástrico es el procedimiento final del programa terapéutico de control de peso. Una vez cumplido el periodo establecido (6 o 12 meses), el balón debe ser removido. El proceso se realiza mediante una endoscopia superior (gastroscopia) bajo sedación. El especialista introduce un sistema de punción para aspirar toda la solución salina del interior del balón, colapsándolo por completo. Posteriormente, se sujeta el dispositivo con una pinza de extracción especial y se retira suavemente a través del esófago y la boca.",
    type: "ambulatorio",
    anesthesiaType: "Sedación profunda controlada",
    duration: "15 a 20 minutos",
    recoveryTime: "Ambulatorio (1 hora de recuperación)",
    isPainful: false,
    benefits: [
      "Procedimiento ambulatorio rápido y libre de incisiones quirúrgicas.",
      "Evaluación simultánea de la mucosa gástrica para garantizar la salud del estómago tras el retiro.",
      "Mínima molestia postoperatoria.",
      "Momento clave para iniciar la fase de mantenimiento de hábitos saludables a largo plazo."
    ],
    postOpRecommendations: [
      "Mantener ayuno absoluto de 8 a 12 horas antes del procedimiento de retiro.",
      "Iniciar dieta blanda el día del retiro y progresar al plan nutricional regular al día siguiente.",
      "Es normal sentir una leve inflamación o pesadez estomacal transitoria el día del retiro.",
      "Continuar con el seguimiento nutricional para consolidar la pérdida de peso."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Instrumental de Retiro": "Catéter de punción estéril y pinza de sujeción tipo asa de extracción reforzada",
      "Seguimiento posprocedimiento": "Inspección endoscópica final de la cavidad gástrica"
    },
    relatedConditions: ["obesidad-y-sobrepeso"],
    image: "/servicios/retiro-balon.png",
    seo: {
      title: "Retiro de Balón Intragástrico por Endoscopia en Mérida",
      description: "Extracción endoscópica segura de balones intragástricos de 6 y 12 meses en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["retiro balon intragastrico merida", "extraccion de balon gastrico yucatan", "endoscopia retiro balon precio", "cirujano digestivo merida"]
    }
  },
  {
    id: "vh-ser-005",
    slug: "cpre",
    name: "CPRE (Colangiopancreatografía Retrógrada Endoscópica)",
    description: "Procedimiento endoscópico avanzado de alta especialidad para diagnosticar y extraer piedras o aliviar obstrucciones en la vía biliar.",
    longDescription: "La Colangiopancreatografía Retrógrada Endoscópica (CPRE) es un procedimiento intervencionista avanzado que combina la endoscopia con el uso de radiografías (fluoroscopia). A través de un endoscopio especial (duodenoscopio de visión lateral) introducido hasta la segunda porción del duodeno, se localiza la ámpula de Vater. Se introduce un fino catéter en los conductos biliares o pancreáticos, se inyecta medio de contraste y se toman imágenes radiológicas. Permite realizar cortes en el esfínter (esfinterotomía) para extraer piedras impactadas, colocar prótesis (stents) para aliviar obstrucciones tumorales o tomar biopsias.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general o sedación profunda monitoreada",
    duration: "45 a 90 minutos",
    recoveryTime: "24 horas de observación intrahospitalaria preventiva",
    isPainful: false, // Se realiza bajo anestesia completa
    benefits: [
      "Alternativa mínimamente invasiva que evita una cirugía abierta compleja de la vía biliar.",
      "Extracción efectiva de piedras del conducto colédoco (coledocolitiasis).",
      "Alivio inmediato de la ictericia (coloración amarilla) por obstrucciones de la bilis.",
      "Colocación de prótesis plásticas o metálicas para restaurar el flujo biliar en cánceres.",
      "Diagnóstico preciso de estenosis y malformaciones biliares."
    ],
    postOpRecommendations: [
      "Vigilancia hospitalaria de al menos 12 a 24 horas para monitorizar la función pancreática.",
      "Ayuno posprocedimiento inmediato y reintroducción de dieta líquida vigilada.",
      "Reportar de inmediato dolor abdominal intenso, fiebre o vómitos persistentes.",
      "Planificar la cirugía de vesícula biliar a la brevedad si la causa fue piedras biliares."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Equipo": "Duodenoscopio de visión lateral y arco en C de rayos X (fluoroscopio)",
      "Accesorios": "Esfinterótomos triples, canastillas de Dormia, balones extractores y guías hidrofílicas",
      "Stents": "Prótesis biliares de teflón de diversos calibres y stents metálicos autoexpandibles"
    },
    relatedConditions: ["colecistitis-y-colelitiasis", "pancreatitis-aguda"],
    image: "/servicios/cpre.png",
    seo: {
      title: "CPRE Extracción de Piedras Vía Biliar en Mérida",
      description: "Tratamiento avanzado de coledocolitiasis y obstrucción biliar mediante CPRE en Mérida con el especialista militar Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["cpre precio merida", "extraccion de piedras de colédoco yucatan", "coledocolitiasis cpre merida", "endoscopia biliar avanzada"]
    }
  },
  {
    id: "vh-ser-006",
    slug: "ligadura-de-varices-esofagicas",
    name: "Ligadura de Várices Esofágicas por Endoscopia",
    description: "Tratamiento endoscópico de urgencia o preventivo para colocar bandas elásticas y estrangular venas esofágicas dilatadas.",
    longDescription: "La ligadura de várices esofágicas es el tratamiento de elección para controlar la hemorragia digestiva activa y prevenir futuros sangrados en pacientes con hipertensión portal (frecuentemente secundaria a cirrosis hepática). Mediante una gastroscopia, se acopla un dispositivo ligador en la punta del endoscopio. Se aspira la vena dilatada (várice) dentro de la copa del dispositivo y se dispara una banda elástica de goma en la base de la várice. Esto bloquea el flujo de sangre en la várice, provocando su trombosis, posterior necrosis caída y cicatrización segura.",
    type: "ambulatorio",
    anesthesiaType: "Sedación profunda controlada",
    duration: "20 a 30 minutos",
    recoveryTime: "Ambulatorio (reposo alimenticio inmediato)",
    isPainful: false,
    benefits: [
      "Tratamiento de alta efectividad para detener el sangrado varicoso activo en urgencias.",
      "Reduce drásticamente la mortalidad asociada a hemorragias de tubo digestivo alto por cirrosis.",
      "Se puede realizar de forma preventiva en pacientes con várices grandes que no han sangrado.",
      "Evita cirugías abiertas de descompresión portal de alto riesgo en pacientes con hígado dañado."
    ],
    postOpRecommendations: [
      "Dieta líquida fría y papillas suaves durante los primeros 3 días post-ligadura.",
      "Evitar alimentos calientes, duros o ásperos que puedan raspar las bandas elásticas.",
      "Tomar antiácidos líquidos para acelerar la cicatrización de las úlceras mucosas que se forman.",
      "Guardar reposo físico relativo sin levantar cargas durante la primera semana."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Dispositivo": "Ligador multibanda desechable de 6 a 10 bandas de caucho",
      "Abordaje": "Endoscópico directo con sobretubo protector en caso de sangrado activo masivo"
    },
    relatedConditions: ["varices-esofagicas-y-gastricas", "cirrosis-hepatica"],
    image: "/servicios/ligadura-varices.png",
    seo: {
      title: "Ligadura de Várices con Bandas en Mérida | Endoscopia",
      description: "Prevención de hemorragias por cirrosis mediante ligadura endoscópica de várices esofágicas en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["ligadura de varices merida", "bandas esofagicas varices yucatan", "sangrado digestivo cirrosis", "gastroscopia terapeutica merida"]
    }
  },
  {
    id: "vh-ser-007",
    slug: "colecistectomia-laparoscopica",
    name: "Colecistectomía Laparoscópica (Cirugía de Vesícula)",
    description: "Extirpación quirúrgica de la vesícula biliar a través de pequeñas incisiones (laparoscopia) para tratar piedras y colecistitis.",
    longDescription: "La Colecistectomía Laparoscópica es el estándar de oro quirúrgico a nivel mundial para el tratamiento definitivo de la colelitiasis (piedras en la vesícula) y la colecistitis aguda o crónica. A través de 3 a 4 incisiones milimétricas en el abdomen, el cirujano introduce una cámara laparoscópica y pinzas especializadas. Se identifica la anatomía (triángulo de Calot), se colocan grapas de titanio en el conducto y la arteria cística para sellarlos, y se separa la vesícula biliar de su lecho hepático para extraerla de forma segura por el ombligo.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 60 minutos",
    recoveryTime: "7 a 10 días para retomar actividades regulares",
    isPainful: false, // Dolor moderado controlado con analgésicos
    benefits: [
      "Curación definitiva del dolor vesicular y eliminación del riesgo de peritonitis o pancreatitis.",
      "Heridas muy pequeñas que sanan con excelente resultado estético y mínima molestia.",
      "Menor tiempo de hospitalización (generalmente solo 1 noche o incluso ambulatorio).",
      "Retorno rápido al trabajo y vida social a la semana del procedimiento."
    ],
    postOpRecommendations: [
      "Mantener una dieta libre de grasas saturadas, lácteos enteros y picantes durante 2 a 3 semanas.",
      "Caminar de forma habitual y evitar levantar pesos de más de 5 kg por un mes.",
      "Mantener las heridas limpias y secas; lavarlas solo con agua y jabón neutro.",
      "Reportar fiebre alta, enrojecimiento con pus en las heridas, o coloración amarilla en ojos."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Abordaje": "Laparoscópico multiport (3 o 4 incisiones)",
      "Materiales de sellado": "Clips de titanio biocompatibles para colédoco y arterias",
      "Estancia típica": "12 a 24 horas intrahospitalarias"
    },
    relatedConditions: ["colecistitis-y-colelitiasis", "pancreatitis-aguda"],
    image: "/servicios/colecistectomia.png",
    seo: {
      title: "Cirugía de Vesícula por Laparoscopia en Mérida",
      description: "Cirugía de colecistectomía laparoscópica en Mérida con el especialista militar Dr. Víctor Javier Herrera Virrueta. Mínima invasión.",
      keywords: ["operacion de vesicula costo merida", "colecistectomia laparoscopica yucatan", "cirujano de vesicula merida", "quitar la vesicula piedras"]
    }
  },
  {
    id: "vh-ser-008",
    slug: "hernioplastia-inguinal-laparoscopica",
    name: "Hernioplastia Inguinal y Umbilical Laparoscópica",
    description: "Reparación quirúrgica de hernias en la ingle o en el ombligo mediante laparoscopia, reforzando la pared con mallas avanzadas.",
    longDescription: "La Hernioplastia Laparoscópica es la técnica quirúrgica mínimamente invasiva indicada para corregir defectos (orificios) en la pared abdominal. En el caso de la hernia inguinal, el cirujano utiliza el abordaje laparoscópico (frecuentemente técnica TAPP) para entrar al espacio preperitoneal, regresar el contenido herniado a la cavidad abdominal y cubrir la zona de debilidad muscular con una malla tridimensional de polipropileno de última generación, la cual se fija con tachuelas absorbibles o pegamento de fibrina.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General o Bloqueo Epidural según el caso",
    duration: "60 a 90 minutos",
    recoveryTime: "10 a 14 días de recuperación",
    isPainful: false,
    benefits: [
      "Dolor posoperatorio significativamente menor en comparación con la cirugía de hernia abierta.",
      "Uso de mallas de gran tamaño que cubren todos los puntos potenciales de hernia en la ingle.",
      "Tasa de recurrencia (que la hernia vuelva a salir) menor al 1%.",
      "Excelentes resultados estéticos sin cicatrices grandes."
    ],
    postOpRecommendations: [
      "Evitar esfuerzos físicos extenuantes, ejercicio de impacto o levantar peso durante 4 semanas.",
      "Usar faja abdominal elástica durante las primeras 3 semanas en caso de hernia umbilical.",
      "Llevar una dieta alta en fibra y líquidos para prevenir el estreñimiento y esfuerzos al evacuar.",
      "Caminar de forma rutinaria y reincorporarse a labores de oficina a los 7 días."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Técnica Inguinal": "Abordaje transabdominal preperitoneal (TAPP)",
      "Mallas": "Mallas de polipropileno de baja densidad autofijables o de macroporo",
      "Fijación": "Tackers absorbibles o cianocrilato tisular"
    },
    relatedConditions: ["hernias-inguinales-y-umbilicales"],
    image: "/servicios/hernioplastia.png",
    seo: {
      title: "Operación de Hernia Inguinal y Umbilical en Mérida",
      description: "Cirugía de hernia laparoscópica con colocación de malla de refuerzo en Mérida con el cirujano militar Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["operacion de hernia inguinal merida", "hernioplastia umbilical yucatan", "cirujano de hernias malla merida", "hernia de pared abdominal cirugia"]
    }
  },
  {
    id: "vh-ser-009",
    slug: "apendicectomia-laparoscopica",
    name: "Apendicectomía Laparoscópica (Apendicitis de Urgencia)",
    description: "Extirpación de urgencia del apéndice cecal inflamado por vía laparoscópica, previniendo infecciones y peritonitis abdominal.",
    longDescription: "La Apendicectomía Laparoscópica es la cirugía de urgencia realizada para tratar la apendicitis aguda. Se efectúa introduciendo una cámara digital y pinzas finas a través de tres pequeñas incisiones. Se diseca el apéndice inflamado, se liga su base cecal de forma segura mediante nudos especiales o grapas poliméricas, y se extrae el órgano dentro de una bolsa protectora estéril para evitar contaminar la herida. En casos de peritonitis, permite aspirar y lavar de forma meticulosa toda la cavidad abdominal.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 60 minutos",
    recoveryTime: "7 a 10 días de recuperación",
    isPainful: false,
    benefits: [
      "Extirpación urgente y segura antes de que ocurra una perforación vesicular o fecal.",
      "Menor riesgo de infecciones y abscesos intraabdominales comparado con cirugía abierta.",
      "Excelente resultado cosmético, reduciendo el dolor y acelerando el alta hospitalaria.",
      "La mayoría de los pacientes regresan a casa al día siguiente."
    ],
    postOpRecommendations: [
      "Guardar reposo relativo en casa, evitando levantar cargas pesadas durante 3 semanas.",
      "Lavar las incisiones diariamente con agua y jabón neutro; no retirar las costras.",
      "Dieta progresiva fácil de digerir y evitar alimentos irritantes o grasos.",
      "Monitorear la temperatura axilar ante cualquier sospecha de fiebre."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Abordaje": "Laparoscopía de 3 puertos (incisión umbilical de 10mm y dos de 5mm)",
      "Ligadura de la base": "Endoloops de catgut crómico o clips poliméricos Hem-o-lok",
      "Extracción": "Bolsa de recuperación de muestras desechable"
    },
    relatedConditions: ["apendicitis-aguda"],
    image: "/servicios/apendicectomia.png",
    seo: {
      title: "Cirugía de Apendicitis de Urgencia en Mérida",
      description: "Apendicectomía laparoscópica urgente en Mérida con el cirujano militar Dr. Víctor Javier Herrera Virrueta. Disponible 24/7.",
      keywords: ["apendicitis operacion merida", "apendicectomia de urgencia yucatan", "dolor de apendice cirujano", "urgencias de cirugia merida"]
    }
  },
  {
    id: "vh-ser-010",
    slug: "accesos-nutricionales-enterales",
    name: "Colocación de Sondas de Alimentación (Gastrostomía/Nasoyeyunal)",
    description: "Instalación de sondas nasoyeyunales o de gastrostomía endoscópica para pacientes que requieren soporte nutricional enteral a largo plazo.",
    longDescription: "La colocación de accesos nutricionales enterales comprende procedimientos indicados en pacientes con imposibilidad para tragar alimentos por vía oral (disfagia severa secundaria a enfermedades neurológicas, tumores de cabeza/cuello o postración crónica). El Dr. Víctor Javier Herrera Virrueta realiza de forma segura la **Gastrostomía Endoscópica Percutánea (PEG)**, un método donde se introduce una sonda de alimentación directamente a través de la pared abdominal hacia el estómago mediante control endoscópico, así como la colocación dirigida de **Sondas Nasoyeyunales** avanzadas bajo visión endoscópica directa.",
    type: "ambulatorio",
    anesthesiaType: "Sedación profunda combinada con anestesia local en la piel",
    duration: "20 a 30 minutos",
    recoveryTime: "24 horas de adaptación al soporte nutricional",
    isPainful: false, // Sedación y anestesia local garantizan confort
    benefits: [
      "Garantiza un aporte calórico y de líquidos seguro, previniendo la desnutrición extrema.",
      "Evita el uso prolongado de sondas nasogástricas incómodas que lesionan el esófago.",
      "Procedimientos rápidos, ambulatorios y de mínima invasión sin necesidad de cirugía abierta.",
      "Fácil administración de medicamentos triturados e hidratación directa por parte de los cuidadores."
    ],
    postOpRecommendations: [
      "Iniciar la alimentación a través de la sonda de forma lenta y con las fórmulas indicadas por el nutriólogo clínico.",
      "Mantener limpia la piel alrededor del botón o sonda de gastrostomía lavándola con agua y jabón.",
      "Girar la sonda 360 grados diariamente una vez cicatrizada la piel para evitar adherencias internas.",
      "Lavar la sonda con 20-30ml de agua tibia después de cada toma de alimento o medicamento para evitar obstrucciones."
    ],
    priceRange: "Bajo valoración médica",
    technicalSpecs: {
      "Gastrostomía": "Kits de gastrostomía percutánea por método de tracción (Pull)",
      "Sonda Nasoyeyunal": "Sondas de poliuretano con lastre metálico guiadas por endoscopia",
      "Calibre típico": "18 Fr a 24 Fr según el caso del paciente"
    },
    relatedConditions: ["deteccion-de-cancer-gastrico", "cirrosis-hepatica"],
    image: "/servicios/sondas-alimentacion.png",
    seo: {
      title: "Gastrostomía Endoscópica y Sondas en Mérida",
      description: "Colocación segura de sondas nasoyeyunales y botones de gastrostomía percutánea en Mérida con el Dr. Víctor Javier Herrera Virrueta.",
      keywords: ["gastrostomia endoscopica merida", "colocacion de sonda nasoyeyunal yucatan", "soporte nutricional enteral merida", "sonda de alimentacion costo"]
    }
  }
];
