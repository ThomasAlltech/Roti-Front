<template>
  <h1>Bienvenue</h1>
  <div class="presentation">
    <div class="cadre">
      <p>Bienvenue sur la page d'accueil du ROTI.</p>
      <p>Vous pouvez choisir d'afficher la liste des univers</p>
      <p>ou</p>
      <p>de créer un nouveau ROTI</p>
    </div>
  </div>
  
  <section class="buttons">
    <div class="btn_valid">
      <router-link to="/liste-univers" :class="btnUniversClass"><h2>Liste des Univers</h2></router-link>
    </div>
    <div class="btn_valid">
      <router-link to="/create-roti" :class="btnUniversClass"><h2>Création d'un roti</h2></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Accueil_Univers',
  props: {
    msg: String
  }
}
</script>