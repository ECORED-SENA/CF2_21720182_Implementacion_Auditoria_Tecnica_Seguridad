<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Desarrollar y aplicar criterios de valoración de riesgos de seguridad en el contexto del negocio

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 La organización deberá seleccionar los roles pertinentes para la seguridad de la información, en este caso el rol principal es el del auditor del SGSI, seguido de su equipo de trabajo, igualmente, la empresa con base en la planeación estratégica debe tener liderazgo y compromiso con respecto al sistema de gestión de seguridad de la información.

        p.mb-4 #[br] #[br] En la actualidad toda organización cuenta con parques computacionales que incorporan nuevas tecnologías a sus procesos, con el fin de optimizarlos, por ende, la seguridad de la información cobra más vigencia en los temas organizacionales y de calidad, haciendo parte de la transformación digital.


    p.mb-4 En lo contemplado en  la Norma ISO/IEC 27001, un SGSI es un camino sistemático que permite que el activo más valioso (seguridad de la información de la organización) sea:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.bg-gradiente.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/img2.svg' alt='AvatarTop')
        h4.text-center Instaurado

      .tarjeta.bg-gradiente.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/img3.svg' alt='AvatarTop')
        h4.text-center Realizado


      .tarjeta.bg-gradiente.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/img4.svg' alt='AvatarTop')
        h4.text-center Operado

      .tarjeta.bg-gradiente.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/img5.svg' alt='AvatarTop')
        h4.text-center Monitoriado

      .tarjeta.bg-gradiente.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/img6.svg' alt='AvatarTop')
        h4.text-center Revisado

      .tarjeta.bg-gradiente.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/img7.svg' alt='AvatarTop')
        h4.text-center Mantenido

      .tarjeta.bg-gradiente.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t3/img8.svg' alt='AvatarTop')
        h4.text-center Mejorado



    //.row.mb-5.justify-content-center
      .col-lg-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img2.svg' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/bg.svg')})`}")
            .p-3.text-center
              p #[strong  Instaurado]
      .col-lg-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img3.svg' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/bg.svg')})`}")
            .p-3.text-center
              p #[strong Realizado]
      .col-lg-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img4.svg' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/bg.svg')})`}")
            .p-3.text-center
              p #[strong Operado]
      .col-lg-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img5.svg' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/bg.svg')})`}")
            .p-3.text-center
              p #[strong Monitoreado]


    //.row.mb-5.justify-content-center
      .col-lg-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img6.svg' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/bg.svg')})`}")
            .p-3.text-center
              p #[strong  Revisado]
      .col-lg-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img7.svg' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/bg.svg')})`}")
            .p-3.text-center
              p #[strong Mantenido]
      .col-lg-3.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img8.svg' alt='AvatarTop')
          .tarjeta.border-img-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/bg.svg')})`}")
            .p-3.text-center
              p #[strong Mejorado]


    .bg_img_01.my-5

      p.mb-4 También permite lograr todos los objetivos empresariales usando soluciones pertinentes para la organización de acuerdo con los niveles de riesgos detectados.

      .row.justify-content-center.mb-4
        .col-lg-3
          figure
            img(src="@/assets/curso/temas/t3/img9.svg", alt="alt")

        .col-lg-7
          p.mb-4 Contar con protocolos para salvaguardar la información de los posibles ataques cibernéticos es responsabilidad de las empresas, y respondiendo a la facilidad con la que hoy en día se realizan dichos ataques, no contar con estos protocolos llevaría a la empresa, entidad u organización a pérdidas millonarias y de credibilidad, de las cuales tardarían en recuperarse, además se haría necesario la implementación las políticas de seguridad de la información.

          p.mb-4 En toda gestión del riesgo es fundamental identificar la mayor cantidad de riesgos posibles.

          p.mb-4 El proceso que se lleva a cabo para realizar dicha gestión es:


      .row(data-aos="zoom-in").mb-5.justify-content-center
        .col-lg-6.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            span Proceso de gestión de riesgo

          figure.mb-4.px-lg-5.mx-lg-5
            img(src="@/assets/curso/temas/t3/img10.svg", alt="alt")


    p.mb-4 En el establecimiento del contexto se encuentran los elementos que definen la identidad de la organización, los cuales son:

    .row.justify-content-center.my-5

      .col-md-4
        figure
          img(src='@/assets/curso/temas/t3/img11.svg')
      .col-md-3
        ul.lista-ul--color
          li.mb-4
            i.fas.fa-database
            | Planeación estratégica.
          li.mb-4
            i.fas.fa-database
            | Políticas.
          li.mb-4
            i.fas.fa-database
            | Requisitos.
          li.mb-4
            i.fas.fa-database
            | Estructura.
          li.mb-4
            i.fas.fa-database
            | Procesos.
          li.mb-4
            i.fas.fa-database
            | Entorno.
          li.mb-4
            i.fas.fa-database
            | Restricciones.


    p.mb-4 Allí se definen los parámetros externos e internos a tener en cuenta al gestionar el riesgo, también los criterios para la gestión, donde finalmente se define la organización del proceso de gestión de riesgos. Para que el contexto pueda ser interno o externo hay que reconocer el impacto y la aceptación del tipo de riesgo. La eficacia del tratamiento del riesgo depende de los resultados de la evaluación de riesgos.

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-10
        .bg-color-5.p-4
          p.text-center La Norma ISO 27005 proporciona las directrices sobre la gestión de riesgos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    indicadorTarjetaSlide: true,
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
