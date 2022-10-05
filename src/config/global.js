export default {
  global: {
    componenteFormativo: 'Etapas del riesgo en un SGSI',
    descripcionCurso:
      'Actualmente, ante tantos ataques informáticos, las organizaciones deben contar con políticas de auditoría de seguridad de la información, debido a que estas son indispensables porque protegen uno de los activos más valiosos que es la información, por eso es importante blindarse ante cualquier riesgo digital o vulnerabilidad al que día a día están expuestas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciclo PHVA',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Etapas del proceso de gestión de riesgos de S.I.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Desarrollar y aplicar criterios de valoración de riesgos de seguridad en el contexto del negocio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Valoración de riesgo de seguridad en el contexto del negocio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Aplicar herramientas para la valoración de riesgo de S.I.',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Etapas del proceso de gestión de riesgos de S.I.',
      referencia:
        'Normas ISO. (s.f.). Norma ISO 27001. https://www.normas-iso.com/iso-27001/',
      tipo: 'Página web',
      link: 'https://www.normas-iso.com/iso-27001/',
    },
    {
      tema: 'Etapas del proceso de gestión de riesgos de S.I.',
      referencia:
        'Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones. Agosto 21 de 1999. DO No. 43.673. http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      tema:
        'Desarrollar y aplicar criterios de valoración de riesgos de seguridad en el contexto del negocio',
      referencia:
        'Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - denominado "de la protección de la información y de los datos" y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones. Enero 5 de 2009. DO No.   47.223. https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
      tipo: 'PDF',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      tema:
        'Desarrollar y aplicar criterios de valoración de riesgos de seguridad en el contexto del negocio',
      referencia:
        'Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. DO No. https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_1581_2012.pdf',
      tipo: 'PDF',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_1581_2012.pdf',
    },
    {
      tema:
        'Desarrollar y aplicar criterios de valoración de riesgos de seguridad en el contexto del negocio',
      referencia:
        'Consejo Nacional de Política Económica y Social. (2011).  Lineamientos de política para ciberseguridad y ciberdefensa. CONPES. https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
      tipo: 'PDF',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      tema: 'Valoración de riesgo de seguridad en el contexto del negocio',
      referencia:
        'MinTIC. (s.f.). Seguridad y privacidad de la información. MinTIC. https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
      tipo: 'PDF',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'Es el acto de establecimiento o confirmación de algo como auténtico. La autenticación de un objeto puede significar la confirmación de su procedencia, mientras que la autenticación de una persona a menudo consiste en verificar su identidad. La autenticación depende de uno o varios factores.<br><br>Desde el punto digital se tiene varios tipos de autenticación como las contraseñas, biométricos, token y otros. ',
    },
    {
      termino: 'Base de datos',
      significado:
        'Es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático. Normalmente una base de datos está controlada por un sistema de gestión de base de datos (DBMS). En un conjunto, los datos y el DBMS, junto con las aplicaciones asociadas a ellos, reciben el nombre de sistema de base de datos, abreviado normalmente a simplemente base de datos.',
    },
    {
      termino: 'Evidencia digital',
      significado:
        'También conocida como evidencia computacional, única y conocida como registros o archivos generados por computador u otro medio equivalente, registros o archivos no generados sino simplemente almacenados por o en computadores o medios equivalentes y registros o archivos híbridos que incluyen tanto registros generados por computador o medio equivalente como almacenados en los mismos.',
    },
    {
      termino: 'ICONTEC',
      significado: ' Instituto Colombiano de Normas Técnicas y Certificación',
    },
    {
      termino: 'ISO',
      significado: ' Organización Internacional de Normalización.',
    },
    {
      termino: '<em>Log</em>',
      significado:
        'Es un registro oficial de eventos durante un periodo de tiempo en particular. Para los profesionales en seguridad informática un log es usado para registrar datos o información sobre quién, qué, cuándo, dónde y por qué <em>(who, what, when, where y why, W5)</em> un evento ocurre para un dispositivo en particular o aplicación. La mayoría de los <em>log</em> son almacenados o desplegados en el formato estándar, el cual es un conjunto de caracteres para dispositivos comunes y aplicaciones. De esta forma, cada <em>log</em> generado por un dispositivo en particular puede ser leído y desplegado en otro diferente, a su vez, la palabra <em>log</em> se relaciona con el término evidencia digital. Un tipo de evidencia física construida de campos magnéticos y pulsos electrónicos que pueden ser recolectados y analizados con herramientas y técnicas especiales, lo que implica la lectura del <em>log</em> y deja al descubierto la actividad registrada en el mismo.',
    },
    {
      termino: 'Redes',
      significado:
        'Una red de computadoras (también llamada red de ordenadores o red informática) es un conjunto de equipos (computadoras y/o dispositivos) conectados, que comparten información (archivos), recursos (CD-ROM, impresoras, etc.) y servicios (acceso a Internet, <em>e-mail</em>, <em>chat</em>, juegos, etc.)',
    },
    {
      termino: 'Riesgo',
      significado:
        'En el ámbito informático la definición de riesgo son las amenazas digitales a las que se está expuesto día a día cuando se usa la tecnología. ',
    },
    {
      termino: 'Seguridad informática',
      significado:
        ' Gómez (2006) define la seguridad informática como cualquier medida que impida la ejecución de operaciones no autorizadas sobre un sistema o red informática, cuyos efectos puedan conllevar daños sobre la información, equipo o <i>software</i>. Por su parte, Kissel (2012) la define como la protección de información y sistemas de información de acceso no autorizado.',
    },
    {
      termino: 'SGSI',
      significado: 'Sistema de Gestión de Seguridad de la Información.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'Es el conjunto de procesos que operando sobre una colección de datos estructurada de acuerdo con una empresa o entidad, recopila, elabora y distribuye (parte de) la información necesaria para el buen funcionamiento de ella. Además, apoya actividades de dirección y control correspondientes, apoyando al menos en parte, la toma de decisiones necesarias de acuerdo con su estrategia. ',
    },
    {
      termino: 'Transmisión de datos',
      significado:
        'Movimiento de información codificada de un punto a otro/s punto/s. Estos datos se transmitirán mediante señales eléctricas, ópticas, radio o electromagnéticas (FGN, 2009).',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2016). Política nacional de seguridad digital. CONPES. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2011).  Lineamientos de política para ciberseguridad y ciberdefensa. CONPES.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia:
        'Gómez, A. (2006). Enciclopedia de la seguridad informática. RA-Ma.',
      link: '',
    },
    {
      referencia:
        'Kissel, R. (2012). Glossary of key information security terms. National Institute of Standards and Technology.',
      link: '',
    },
    {
      referencia:
        'Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. DO No. ',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_1581_2012.pdf',
    },
    {
      referencia:
        'Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado - denominado "de la protección de la información y de los datos" y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones. Enero 5 de 2009. DO No.   47.223.',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      referencia:
        'Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones. Agosto 21 de 1999. DO No. 43.673. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      referencia: 'Mifsud, E. (2012). Introducción a la seguridad informática.',
      link:
        'http://recursostic.educacion.es/observatorio/web/es/software/software-general/1040-introduccion-a-la-seguridad-informatica',
    },
    {
      referencia:
        'Oficina de Seguridad para las Redes Informáticas. (2002). Metodología para la gestión de la seguridad informática.',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Cesar Antonio Villamizar Núñez',
        cargo: 'Experto temático',
        centro:
          'Región Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Revisión diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Veimar Celis',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable equipo de gestores de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
