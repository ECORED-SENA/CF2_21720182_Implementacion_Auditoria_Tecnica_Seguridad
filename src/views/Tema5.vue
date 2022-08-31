<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Aplicar herramientas para la valoración de riesgo de S.I.


    p.mb-4 El auditor puede aplicar herramientas como la matriz de riesgos, donde se establece imparcialmente cuáles son los riesgos notables de seguridad que existen en la organización. Para realizar una matriz de riesgos se debe:


    .row.justify-content-center
      .col-lg-7

        .px-4.mb-4
          ul.lista-ul--color.m-0.p-0
            li.m-2
              i.fas.fa-database
              | Priorizar los riesgos identificados.
            li.m-2
              i.fas.fa-database
              | Evaluar la probabilidad y el impacto.
            li.m-2
              i.fas.fa-database
              | Representar gráficamente los riesgos evaluados.

        p.mb-4 A continuación se presentan varios ejemplos de matrices que el auditor podrá implementar como herramienta.

        p.mb-4 El punto de partida para la implantación de un SGSI en cualquier organización es realizar una matriz de riesgos de 3x3 (probabilidad del riesgo x impacto), se aplican herramientas y se analizan resultados de manera gráfica dándole valores a los riesgos.

        p.mb-4 Los resultados de aplicar la matriz de riesgos se muestran en la siguiente tabla:

      .col-lg-5
        figure.mb-4.mx-auto
          img(src="@/assets/curso/temas/t5/img1.svg", alt="alt")



    .px-4.mb-4
      ul.lista-ul--color.m-0.p-0
        li.m-2
          i.fas.fa-database
          | Priorizar los riesgos identificados.
        li.m-2
          i.fas.fa-database
          | Evaluar la probabilidad y el impacto.
        li.m-2
          i.fas.fa-database
          | Representar gráficamente los riesgos evaluados.


    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span Matriz de riesgos 3x3

        figure.mb-4
          img(src="@/assets/curso/temas/t5/img2.svg", alt="alt", style="max-width: 820px")


    p.mb-4 A continuación se muestra una nueva valoración matemática donde se mide el riesgo de lo explicado en la tabla anterior (probabilidad x impacto). Para esto se establece una zona de riesgo:


    .row.justify-content-center.mb-4
      .col-lg-12
        .row.justify-content-center
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Aceptable

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Tolerable
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Moderado
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Importante

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Inaceptable


    p.mb-4 Si bien el color muestra una lógica, se debe clasificar en qué zona de riesgo se encuentra la misma. Con base al valor del impacto se pueden tomar los correctivos adecuados en la implementación de las políticas de auditoría de seguridad de la información.

    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span Valor del impacto y correctivos de implementación matriz de riesgos 3x3

        figure.mb-4
          img(src="@/assets/curso/temas/t5/img3.svg", alt="alt")

    p.mb-4 En las herramientas de matrices de riesgos existe otro ejemplo denominado matriz de control como mapa de riesgo inherente de corrupción de 3x5, en esta las probabilidades se llevan a dos extremos más para su mejor control y análisis como se observa en la siguiente tabla.

    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span Matriz de riesgos 3x5

        figure.mb-4
          img(src="@/assets/curso/temas/t5/img4.svg", alt="alt", style="max-width: 820px")

    p.mb-4 Al ampliar la anterior herramienta a un mapa o matriz de riesgo inherente de 5x5 para un mayor control en una gran empresa u organización se tendrá control completo en los resultados, se tiene una probabilidad de:

    .row.justify-content-center.mb-4
      .col-lg-12
        .row.justify-content-center
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Rara vez

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Improbable
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Posible
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Probable

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Casi seguro

    p.mb-4 Y por el lado del impacto se tienen los ítems:

    .row.justify-content-center.mb-4
      .col-lg-12
        .row.justify-content-center
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Insignificante

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Menor
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Moderado
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Mayor

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Catastrófico

    p.mb-4 Es potestad del equipo auditor implementar el que considere mejor para el análisis y obtención de resultados.

    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5
          span Matriz de riesgos 5x5


        figure.mb-4
          img(src="@/assets/curso/temas/t5/img5.svg", alt="alt", style="max-width: 1030px")


    p.mb-4 Los mapas o matrices de riesgos se pueden ejecutar dependiendo del tamaño de la organización (pequeña, mediana o grande). Dentro de los riesgos web se toma el OWASP (Open Web Application Security) TOP 10: 2021, el cual representa los riesgos y amenazas más peligrosas para las organizaciones con el impacto en 5 por las diferentes probabilidades que se establezcan.


    p.title-cus.py-2.pr-cus.pl-cus.my-4 #[strong Ejemplo práctico]

    p.mb-4 La siguiente herramienta matriz contiene un caso con valores de riesgos reales, con base en estos se puede decir:


    .tarjeta.bg-gradient-cus.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-4
            h4.mb-4 Las fallas de los equipos de cómputo en la organización son:

            ul.lista-ul--color.mb-4
              li.mb-4
                i.fas.fa-database
                | Muy bajos (1).
              li.mb-4
                i.fas.fa-database
                | Su impacto es menor (2).

            p.mb-4 Por lo que 1x2 sería 2.

            p.mb-4 Haciendo el análisis de fallas en el equipo de cómputo se tendría un valor de 2 (verde).

          .col-md-7
            figure
              img(src='@/assets/curso/temas/t5/img6.jpg', alt='')

        .row.justify-content-center
          .col-md-4
            h4.mb-4 Los fallos eléctricos:

            ul.lista-ul--color.mb-4
              li.mb-4
                i.fas.fa-database
                | La probabilidad podría ser remota (2).

              li.mb-4
                i.fas.fa-database
                | El impacto menor (2).

            p.mb-4 Donde 2x2 sería 4.

            p.mb-4 Se obtiene un valor de 4 (naranja).

          .col-md-7
            figure
              img(src='@/assets/curso/temas/t5/img7.jpg', alt='')

        .row.justify-content-center
          .col-md-4
            h4.mb-4 El impacto de los terremotos podría ser:

            ul.lista-ul--color.mb-4
              li.mb-4
                i.fas.fa-database
                | Catastrófico (5).

              li.mb-4
                i.fas.fa-database
                | La probabilidad de que esto ocurra es muy baja (1).

            p.mb-4 Por lo que el nivel de riesgo es de 5 (naranja).

            p.mb-4 Si la empresa cuenta con servicios en la nube o copias de respaldo de la información el riesgo pasaría a ser de impacto (bajo) * probabilidad (muy bajo), así el riesgo pasaría a ser 1.

            p.mb-4 #[strong Nota.] La interpretación del auditor está basada en la información inicial de la empresa.


          .col-md-7
            figure
              img(src='@/assets/curso/temas/t5/img8.jpg', alt='')


    p.mb-4 La identificación y tipificación de los riesgos descritos previamente se muestran en las siguientes tablas:

    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6
          span Matriz de riesgos 5x5

        figure.mb-4
          img(src="@/assets/curso/temas/t5/img9.svg", alt="alt")

    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7
          span Valores matriz de riesgos

        .tabla-b.color-acento-contenido

          table
            tr
              th(rowspan=6) Riesgos
              th Fallos de equipos computo
              th(style="width: 35px;").text-center 2
            tr
              th Fallas eléctricas
              th(style="width: 35px;").text-center 4
            tr
              th Caída de Internet
              td
            tr
              th Filtro de información
              td
            tr
              th Virus/ataques cibernéticos
              td
            tr
              th Terremotos
              td.text-center 5

    p.mb-4 Después de realizar y analizar los valores de impactos se procede a realizar un plan de mejora que puede ser a:

    .row.justify-content-center.mb-4
      .col-lg-8
        .row.justify-content-center
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Largo

          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Mediano
          .col
            .caja
              ul.lista-ul--color.m-0.p-0
                li.m-0
                  i.fas.fa-database
                  | Corto plazo

    p.mb-4 Esto dependerá del tamaño de la empresa y del presupuesto que disponga para el parque computacional y transformación digital.  En la siguiente tabla se muestra un posible escenario para dicho plan:

    .row(data-aos="zoom-in").my-5.justify-content-center
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8
          span Plan de mejoras

        .tabla-b.color-acento-contenido

          table
            tr
              th Fallos de equipos computo
              td Implementar un programa de mantenimiento preestablecido.
            tr
              th Fallas eléctricas
              td Chequear cada instalación y/o tomacorriente antes de usar y establecer un plan de mantenimiento eléctrico.

            tr
              th Caída de Internet
              td Tener el contacto del proveedor y/o el de soporte técnico.
            tr
              th Filtro de información
              td Implementar cifrado de datos y socializar con los trabajadores, las consecuencias y precauciones que se debe tener para no filtrar la información.
            tr
              th Virus/ataques cibernéticos
              td Instalar software antivirus en todos los equipos de la empresa.


    p.mb-4 Por otra parte, también es importante mencionar que para la valoración de riesgos existen plataformas pagas como:

    .row.justify-content-center
      .col-lg-5
        .tarjeta.bg-gradiente-2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3
              img(src="@/assets/curso/temas/t5/img11.svg", style="min-width: 118px; height: 52px;")
            .col-9
              .row.justify-content-between.align-items-center
                .col
                  .px-4
                    h4.texto-blanco Isotools
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.isotools.org/" target="_blank")
                    span Ir a sitio web
                    i.fas.fa-link

      .col-lg-5
        .tarjeta.bg-gradiente-2.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3
              img(src="@/assets/curso/temas/t5/img12.svg", style="min-width: 118px; height: 52px;")
            .col
              .row.justify-content-between.align-items-center
                .col
                  .px-4
                    h4.texto-blanco Enisa
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.enisa.europa.eu/topics/threat-risk-management/risk-management/current-risk/risk-management-inventory" target="_blank")
                    span Ir a sitio web
                    i.fas.fa-link

    p Finalmente, es importante indicar que es fundamental realizar el estudio del riesgo las veces que el auditor considere necesario, debido a que puede existir un gran número de preguntas frente a los diferentes ataques cibernéticos y vulnerabilidades informáticas identificadas en la empresa.

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
.caja
  display: block;
  background-color: rgba(116,51,238,.25);
  position: relative;
  padding: 20px;
  white-space: normal;
  text-align: left;
  border-radius: 10px;

.bg-gradiente-2
  background: linear-gradient(to bottom, #7433EE, #3C1B7B);
</style>
