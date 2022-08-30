<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Valoración de riesgo de seguridad en el contexto del negocio

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro de las fases de implementación de un sistema de gestión se debe realizar el análisis de los riesgos identificados y detectados mediante el ciclo PHVA, por ello es importante tener un cronograma de análisis de las entradas de riesgos detectadas y las acciones tomadas por el auditor con el equipo del departamento de TI de la organización.  A continuación se definen estos elementos:

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center
            b Entrada
          p.text-center Valores y razonamientos que se asignan a las listas de riesgos y aceptación.#[br]

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center
            b Acción
          p.text-center Es el comparativo de los valores vs. los criterios de valoración y de aceptación.#[br]

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center
            b Implementación
          p.text-center Se deben definir los valores de los tipos de riesgos y criterios de valoración, los cuales serán tenidos en cuenta durante la toma de una decisión.


    p.mb-4 El primer paso para tomar la decisión del riesgo es obtener un resultado del análisis de la evaluación satisfactorio, después dentro de las opciones se define el tratamiento del riesgo donde se establecen los planes de mejora junto con el valor de implementación y los beneficios o resultados de esta; como en todo plan de mejora quedarán algunos riesgos residuales donde se tomará una segunda decisión del riesgo y saldrá el proceso o tratamiento satisfactorio.

    p.mb-4 La siguiente figura establece un esquema sobre cómo realizar el tratamiento de los riesgos:


    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Actividad tratamiento del riesgo

        figure.mb-4.px-lg-5.mx-lg-5
          img(src="@/assets/curso/temas/t4/img2.svg", alt="alt")


    .row(data-aos="fade-left")
      .col-lg-8
        p.mb-4  Con el avance de la tecnología vienen de la mano nuevas amenazas, vulnerabilidades y ataques cibernéticos, donde pueden aumentar los riesgos evaluados previamente sobre todo los del nivel más bajo; cada riesgo debe ser tomado de forma separada.

        p El nivel de riesgo deseado puede ser:

        ul.lista-ul--color
          li.mb-4
            i.fas.fa-database
            | Alto
          li.mb-4
            i.fas.fa-database
            | Medio.
          li.mb-4
            i.fas.fa-database
            | Bajo.

      .col-lg-4
        figure.mb-4.px-lg-5.mx-lg-5
          img(src="@/assets/curso/temas/t4/img3.svg", alt="alt")


    p.mb-4 Algunas técnicas a tener en cuenta en la evaluación del riesgo son las metodologías que ayudan a la identificación de eventos o situaciones que se pueden convertir en fuentes de riesgos como se muestra a continuación:

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img3.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-img-infografica
            .p-4
              h4.text-center Riesgos externos
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | Financieros.
                li
                  i.lista-ul__vineta
                  | Comerciales.
                li
                  i.lista-ul__vineta
                  | Regulatorios.
                li
                  i.lista-ul__vineta
                  | Tecnológicos.
                li
                  i.lista-ul__vineta
                  | Políticos.
                li
                  i.lista-ul__vineta
                  | Sociales.
                li
                  i.lista-ul__vineta
                  | Ambientales.

      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img4.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases =>
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-img-infografica
            .p-4
              h4.text-center Riesgos internos
              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | Desempeño de los procesos.
                li
                  i.lista-ul__vineta
                  | Operativos.
                li
                  i.lista-ul__vineta
                  | Técnicos.
                li
                  i.lista-ul__vineta
                  | Humanos.
                li
                  i.lista-ul__vineta
                  | Tecnología interna.
                li
                  i.lista-ul__vineta
                  | Clientes.
                li
                  i.lista-ul__vineta
                  | Psicosociales.

    p.mb-4 Los incidentes informáticos son uno de los desafíos permanentes en la práctica de seguridad de la información. A continuación se establece un proceso común para reportar, conversar y actuar frente a los mismos:

    .row.my-5.justify-content-center
      .col-lg-5
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Muy alto")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t4/img6.jpg', alt='')
            .col-md-6.mb-4.mb-md-0
              p.text-small Eventos que comprometen a la empresa.


          .row(numero="2" titulo="Alto")
            .col-md-6.mb-4.mb-md-0
              p.text-small Eventos que comprometen datos de los clientes, personales o de terceros.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t4/img7.jpg', alt='')


          .row(numero="3" titulo="Medio")
            .col-md-6.mb-4.mb-md-0
              p.text-small Eventos que comprometen la infraestructura.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t4/img8.jpg', alt='')

          .row(numero="3" titulo="Bajo")
            .col-md-6.mb-4.mb-md-0
              p.text-small Eventos que comprometen los procesos y las operaciones de la empresa.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t4/img9.jpg', alt='')

          .row(numero="3" titulo="Correlación")
            .col-md-6.mb-4.mb-md-0
              p.text-small Eventos cotidianos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t4/img10.jpg', alt='')

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t4/img11.jpg', alt='')


    p.mb-5.text-center Es importante mencionar que en todo proceso sistemático se deben identificar:

    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10
        .row.justify-content-center
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Fuentes

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Eventos
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Causas
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Consecuencias


    p.mb-5.text-center Cada proceso debe ser exhaustivo; cuando no se identifica un riesgo en la etapa inicial se hace más complejo encontrarlo más adelante.

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p Según las estadísticas de la Interpol y del Departamento cibernético en Colombia, siguen creciendo los ataques informáticos a las organizaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/t4/img12.svg', alt='')
      .col-lg-7
        p.mb-4 Dentro de los riesgos se tienen incidentes no deseados que pueden ser una causa potencial en el daño a un sistema u organización como:

        ul.lista-ul--color.m-0.p-0
          li.m-0
            i.fas.fa-database
            | Terremotos.
          li.m-0
            i.fas.fa-database
            | Escasez de personal.
          li.m-0
            i.fas.fa-database
            | Uso ilegal de software.

        p.mt-4 Por otra parte, las vulnerabilidades se dan en muchas empresas por factores básicos como:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/img13.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h5.text-center Falta de antivirus.

      .col-md.tarjeta.color-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/img14.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h5.text-center Uso de equipos con sistemas operativos sin soporte técnico.

      .col-md.tarjeta.color-3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/img15.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h5.text-center Falta de mantenimiento preventivo y correctivo en las actualizaciones que requieren los sistemas.

      .col-md.tarjeta.color-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t4/img16.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h5.text-center Entrenamiento insuficiente, ausencia y falta de políticas de seguridad de la información.

    .bg_img_01.my-5

      p.mb-4 En tal sentido, para una amenaza pueden haber múltiples vulnerabilidades, por ello, siempre se deben detectar las comunes en el entorno personal, familiar y empresarial. Los riesgos a los que se ve expuesta una empresa están relacionadas con las vulnerabilidades y amenazas, como las que se ilustran en las siguientes figuras:


      .row.justify-content-center.mb-4
        .col-lg-8
          .row(data-aos="zoom-in").my-5.justify-content-center
            .col-lg-10.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 4
                span Tipos de amenazas

              figure.mb-4.px-lg-5.mx-lg-5
                img(src="@/assets/curso/temas/t4/img17.svg", alt="alt")

          .row(data-aos="zoom-in").my-5.justify-content-center
            .col-lg-10.col-12
              .titulo-sexto.color-acento-contenido
                h5 Figura 5
                span Vulnerabilidad

              figure.mb-4.px-lg-5.mx-lg-5
                img(src="@/assets/curso/temas/t4/img18.svg", alt="alt")

      p.mb-4.text-center Ahora, en la siguiente tabla se describen algunas de las amenazas y vulnerabilidades más comunes:

      .row(data-aos="zoom-in").mt-5.justify-content-center
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1
            span Riesgos por amenazas y vulnerabilidades

          .tabla-a.color-secundario.mb-5
            table
              thead
                tr
                  th Amenazas
                  th Vulnerabilidad

              tbody
                tr
                  td #[strong Terremoto]
                  td
                    p Ubicación en área susceptible a terremotos.
                    p No tienen planes o procedimientos de recuperación de información.
                    p No dispone de copias de seguridad en la nube.


                tr
                  td  #[strong Ataques de negación de servicio]
                  td
                    p Gestión incongruente de la red.
                    p Falta de actualización de parches.

                tr
                  td  #[strong Sabotaje]
                  td
                    p Seguridad física inadecuada.
                    p Ausencia de control de cambios.

                tr
                  td  #[strong Ausencia o pérdida de personal]
                  td
                    p Procedimientos sin documentar.
                    p Ausencia de un plan de transferencia de conocimiento.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta-avatar > img
  width: 132px;

.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: rgba(116,51,238,.25);
  color: #12263F;

.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: rgba(116,51,238,.25);

.caja
  display: block;
  background-color: rgba(116,51,238,.25);
  position: relative;
  padding: 20px;
  white-space: normal;
  text-align: left;
  border-radius: 10px;
</style>
