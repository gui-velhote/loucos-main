<template>
  <section>
    <span>Teste de Criação</span>
    {{ teste }}
  </section>
</template>

<script lang="js">
  import DocumentsService from '../domain/DocumentsService.js'

  let api = new DocumentsService();

  export default {
    name: 'TesteView',

    data() {
      return {
        teste: {},
      }
    },

    mounted() {
      this.listarTipdoc();
    },

    methods: {
      listarTipdoc() {
        api.listarTipdoc()
        .then((resp) => {
          console.log(resp);
          this.teste = resp;
        })
        .catch((error) => {
          console.log(error)
        });
      }
    }


  }

</script>
