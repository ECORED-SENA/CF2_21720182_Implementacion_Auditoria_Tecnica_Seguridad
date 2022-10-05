<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ciclo PHVA

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El ciclo PHVA por sus siglas en español o ciclo PDCA por sus siglas en Inglés, fue creado por el estadístico W. Edwards Deming, es el primer mecanismo de implementación del SGSI basado en la Norma ISO 27001; es un instrumento que se puede aplicar fácilmente en la gestión de procesos y proyectos de auditorías y, puede ser aprovechado en todos los métodos.


    p.mb-5(data-aos="fade-right") Para comenzar se deben conocer casos reales, la normatividad y las pautas de la entidad frente al riesgo de información; es por eso que las vulnerabilidades o ataques informáticos pueden constituirse como falta disciplinaria y/o sanción penal, para realizar un breve análisis y evaluación de riesgos se tiene en cuenta factores que miden el impacto, la estimación y la retención. Ver figura.


    .row(data-aos="zoom-in").mb-5.justify-content-center
      .col-lg-6.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Ciclo PHVA

        figure.mb-4.px-lg-5.mx-lg-5
          img(src="@/assets/curso/temas/t1/2.png", alt="alt")



    p.mb-5(data-aos="fade-left") Mediante las fases del ciclo PHVA mostradas en la figura anterior se puede realizar un primer análisis de la siguiente forma, seleccionando un riesgo común de casi todas las empresas, en este caso el manejo adecuado de la información (esto sirve para la toma de decisiones que serán de forma inmediata y se mantendrán informados y actualizados en tiempo real), luego se describe cada paso del ciclo de la siguiente manera:


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Planear").justify-content-center.align-items-center
        .col-lg-7
          p.mb-4 Se define el alcance del SGSI, se crea el contexto, valoración del tipo de riesgo y proyección de una solución.

          p.mb-4 Para poder identificar los riesgos se debe:

          ul.lista-ul--color
            li.mb-4
              i.fas.fa-database
              | Controlar la integridad, confidencialidad y disponibilidad de todos los activos.
            li.mb-4
              i.fas.fa-database
              | Identificar los responsables directos de cada activo dentro de la organización.
            li.mb-4
              i.fas.fa-database
              | Conocer las amenazas en correlación con los activos de la organización.
            li.mb-4
              i.fas.fa-database
              | Determinar las posibles amenazas y vulnerabilidades del sistema.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t1/3.png', alt='Persona planeando')

      .row(titulo="Hacer").justify-content-center.align-items-center
        .col-lg-7
          p.mb-4 Se define un plan de tratamiento sobre los riesgos, también se puede concientizar y capacitar al personal de la organización en temas relacionados con la seguridad de la información.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t1/4.png', alt='Dos manos armando una pieza')

      .row(titulo="Verificar").justify-content-center.align-items-center
        .col-lg-7
          p.mb-4 La organización debe establecer procesos de monitorización y revisión sobre las alertas de los errores generados sobre los resultados obtenidos.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t1/5.png', alt='Persona chuleando casilla')
      .row(titulo="Actuar").justify-content-center.align-items-center
        .col-lg-7
          p.mb-4 La organización deberá, cada cierto tiempo, aplicar las mejoras en el SGSI y comunicar dichas actualizaciones a su personal.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t1/8.png', alt='Persona chuleando casilla')




    //.row(data-aos="zoom-in").mb-5.justify-content-center.align-items-center
      .col-lg-8.col-12
    p.mb-4 Se puede indicar que el ciclo PHVA se fundamenta en la primicia del auditor, por ello debe:

    ul.lista-ul--color
      li.mb-4
        i.fas.fa-database
        | Tener claro qué se va a hacer antes de hacerlo.
      li.mb-4
        i.fas.fa-database
        | Comparar los resultados con las acciones planificadas para tomar las acciones pertinentes en caso de que los resultados no sean los esperados.

    p.mb-5 Al analizar el manejo de los datos de la organización se obtienen los beneficios de la identificación oportuna de los posibles riesgos, la rápida valoración de un auditor permite detectar a tiempo los riesgos, identificando las consecuencias para la empresa y la probabilidad de la ocurrencia de estos, como se observa a continuación:

      //.col-lg-6.col-12
        figure.mb-4.px-lg-5.mx-lg-5
          img(src="@/assets/curso/temas/t1/6.svg", alt="alt")


    .row.d-flex.justify-content-center
      .col-sm-10.col-lg-4
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/7.svg', alt='Infografía Ciclo PHVA')

          .tarjeta.bg-img-infografica.p-3(x="15%" y="15%" numero="+")
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Crear el contexto.
              li.mb-4
                i.fas.fa-database
                | Valorar el riesgo.
              li.mb-4
                i.fas.fa-database
                | Proyectar la solución.



          .tarjeta.bg-img-infografica.p-3(x="85%" y="15%" numero="+")
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Plan de mejora-tratamiento del riesgo.

          .tarjeta.bg-img-infografica.p-3(x="15%" y="85%" numero="+")
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Monitorear los riesgos eventuales.

          .tarjeta.bg-img-infografica.p-3(x="85%" y="85%" numero="+")
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Conservar y optimizar el proceso de gestión del riesgo en la seguridad de la información.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
