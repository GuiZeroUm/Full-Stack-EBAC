<script setup>
  const nome = 'Guilherme'

  const meuObj = {
    nome: 'Guilherme',
    animeFavorito: 'berserk'
  }

  function dizOi() {
    return `${nome} diz oi`
  }

  const enderecoDaImagem = 'https://sm.ign.com/ign_br/screenshot/default/produtor-de-castlevania-quer-animar-berserk_tk9a.jpg'

  const botaoEstaDesabilitado = true
</script>

<template>
  <h1>Olá {{ dizOi() }}</h1>

  <button :disabled="botaoEstaDesabilitado">Teste</button>

  <h1>Eu gosto de {{ meuObj.animeFavorito }}</h1>
  <img :src="enderecoDaImagem" alt="">
</template>

<style scoped>

</style>
