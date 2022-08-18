<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Etapas del proceso de gestión de riesgos de S.I.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 Para realizar un buen manejo de la información utilizando parte de los requisitos de la seguridad de la información aplicables de la Norma ISO/IEC27001, se asumen, se obtienen derivaciones de valoración y tratamiento de riesgos y, se deben recolectar evidencias documentales de los procedimientos desarrollados, así como las exploraciones asociadas.

        p.mb-4 #[br] #[br] Para el SGSI los eventos auténticos son tan importantes como los sucesos negativos y cuando la afectación es auténtica ese riesgo se llamará oportunidad.


    p.mb-4 Los sucesos de riesgo negativo se caracterizan por ser resultado de las amenazas que cumplen con sus objetivos y gracias a las vulnerabilidades de los sistemas los ciberdelincuentes alcanzan objetivos como:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/2.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h4.text-center Robo o divulgación de información.

      .col-md.tarjeta.color-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/3.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h4.text-center Borrado deliberado o accidental de datos.

      .col-md.tarjeta.color-3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/4.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h4.text-center Modificaciones no autorizadas de datos.

      .col-md.tarjeta.color-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/5.svg', alt='Robo o divulgación de información.', style='max-width: 184px;')

        h4.text-center Indisponibilidad de sistemas informáticos.


    .row(data-aos="zoom-in").mb-5.justify-content-center
      .col-lg-10
        p.text-center Tenga en cuenta que también existen amenazas externas que pueden causar pérdida de datos debido a fenómenos naturales.

    .row(data-aos="zoom-in").mb-5.justify-content-center.align-items-center
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/t2/6.svg", alt="alt")

      .col-lg-8
        p.mb-4 Las organizaciones deben reconocer que el mayor activo de una empresa es la información y con ella vienen los datos personales de los empleados y de los clientes; una empresa puede correr el riesgo de perder credibilidad si sus datos se ven comprometidos, debido a que los clientes y el personal se verían expuestos y vulnerados.

        p.mb-4 En Colombia la Ley 1581 de 2012 hace referencia a la protección de datos personales de la siguiente forma:


    .tarjeta.bg-gradient-cus.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-3
            h4.mb-4 Dato sensible

            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Origen racial.
              li.mb-4
                i.fas.fa-database
                | Credo político o religioso.
              li.mb-4
                i.fas.fa-database
                | Preferencias sexuales.
              li.mb-4
                i.fas.fa-database
                | Estado de salud.

              li.mb-4
                i.fas.fa-database
                | Biométrica.


          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/7.jpg', alt='Dato sensible')

        .row.justify-content-center
          .col-md-3
            h4.mb-4 Dato privado

            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Información que se consulta en Internet.
              li.mb-4
                i.fas.fa-database
                | Pasatiempos.
              li.mb-4
                i.fas.fa-database
                | Preferencias.
              li.mb-4
                i.fas.fa-database
                | Gustos.


          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/8.jpg', alt='Dato privado')

        .row.justify-content-center
          .col-md-3
            h4.mb-4 Dato semiprivado

            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Comportamiento crediticio.
              li.mb-4
                i.fas.fa-database
                | Fondo de pensión.
              li.mb-4
                i.fas.fa-database
                | EPS.
              li.mb-4
                i.fas.fa-database
                | Planes funerarios.


          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/9.jpg', alt='Dato semiprivado')


        .row.justify-content-center
          .col-md-3
            h4.mb-4 Dato público

            ul.lista-ul--color
              li.mb-4
                i.fas.fa-database
                | Currículo profesional.

          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/10.jpg', alt='Dato público')


    .row.justify-content-center.mb-5

      .col-md-6
        figure
          img(src='@/assets/curso/temas/t2/11.jpg')
      .col-md-6
        p.mb-4 Sobre la clasificación de los datos se puede decir que su seguridad se refiere a medidas de amparo de la reserva digital donde se emplean para impedir el acceso no autorizado a los sistemas de información, los cuales pueden encontrarse en:

        ul.lista-ul--color
          li.mb-4
            i.fas.fa-database
            | La nube.
          li.mb-4
            i.fas.fa-database
            | Computadores.
          li.mb-4
            i.fas.fa-database
            | Bases de datos.
          li.mb-4
            i.fas.fa-database
            | Sitios web.
          li.mb-4
            i.fas.fa-database
            | Redes sociales, etc.


    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-5.p-4
          p.text-center La seguridad de datos también protege los datos de una posible corrupción.

          p.text-center Para ampliar la información se invita  a consultar la norma #[b ISO 27001], que se encuentra en el material complementario.
</template>

<script>
export default {
  name: 'Tema2',
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
