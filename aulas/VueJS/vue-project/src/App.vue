<script setup>
import { reactive } from 'vue';

  const nome = 'Guilherme'

  const meuObj = {
    nome: 'Guilherme',
    animeFavorito: 'berserk'
  }

  function dizOi() {
    return `${nome} diz oi`
  }

  const enderecoDaImagem = 'https://sm.ign.com/ign_br/screenshot/default/produtor-de-castlevania-quer-animar-berserk_tk9a.jpg'
  const imagemFrieren = 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/03/frieren-e-a-jornada-para-o-alem-qhvlvd2l8mr5.jpg'

  const botaoEstaDesabilitado = true

  const gostaDeBerser = false
  const gostaDaFrieren = true

  const estaAutorizado = true

  // let contador = 0
  const estado = reactive({
    contador: 0
  })

  const incrementar = () => {
    estado.contador++
  }

  const decrementar = () => {
    estado.contador--
  }

  const alteraEmail = evento => estado.email = evento.target.value
</script>

<template>
  <h1>Olá {{ dizOi() }}</h1>

  
  <h1>Eu gosto de {{ meuObj.animeFavorito }}</h1>
  <img v-if="gostaDeBerser" :src="enderecoDaImagem" alt="">
  <img :src="imagemFrieren" v-else-if="gostaDaFrieren" alt="">
  <h2 v-else>Não curte os foda</h2>
  
  <h1 v-if="estaAutorizado">Bem-Vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="botaoEstaDesabilitado">Teste</button>

  <br />
  <hr />

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">
</template>

<style scoped>
  img {
    max-width: 800px;
  }
</style>
