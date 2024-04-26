<template>
  <!-- Importe le composant Header_Univers qui gère l'en-tête de l'application. -->
  <Header_Univers />
  <main>
    <div class="separateur">
    </div>
    <!-- Défini la zone réservée où les différents composants routés par Vue Router -->
    <router-view />
  </main>
  <!-- Importe le composant Header_Univers qui gère le pied de page de l'application. -->
  <Footer_Univers />
</template>

<script>
import Header_Univers from './components/Header.vue';
import Footer_Univers from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    // Enregistre les composants suivants comme composants enfants dans le template
    Header_Univers,
    Footer_Univers,
  }
}
</script>

<style>
:root {
  --white-color: #ffffff;
  --black-color: #000000;
  --blue-color: #1D435B;
  --sable-color: #BC944A;
  --grey-color: #c7c7c7;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Quicksand";
  background: hsl(0, 0%, 95%);
}

body a {
  text-decoration: none;
  color: var(--blue-color);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  margin-left: 10px;
}

header .buton-container {
  justify-content: center;
  align-items: center;
  margin: 1.5vw;
}

header .buton-container .btn_accueil {
  width: 9vw;
  height: 7vh;
  font-size: 1.5vw;
  font-weight: bold;
  margin-right: 100px;
  color: var(--blue-color);
  border: 2px solid;
  border-color: var(--sable-color);
  border-radius: 8px;
  box-shadow: 2px 3px 1px 1px #000000;
}

header .buton-container .btn_accueil:hover {
  background-color: var(--sable-color);
  border-color: var(--black-color);
}

main .separateur {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 0.5vh;
  width: 90vw;
  background-color: var(--black-color);
}

main h1 {
  text-align: center;
  font-size: 2.5vw;
  text-decoration: underline;
  color: var(--blue-color);
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

main .presentation {
  text-align: center;
  font-size: 1.2vw;
  font-weight: bold;
  padding-bottom: 4.5vh;
  color: var(--blue-color);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

main .presentation .cadre {
  background-color: var(--grey-color);
  padding: 8px;
  display: inline-block;
  margin: 0 auto;
  border-radius: 8px;
}

main .presentation p {
  margin: 0;
}

main .buttons_univers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

main .buttons_univers .btn_univers {
  width: 11vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--grey-color);
  margin: 4vh 4.5vw;
  border: 2px solid;
  border-color: var(--sable-color);
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  color: var(--blue-color);
  box-shadow: 2px 3px 1px 1px #000000;
  padding: 0.4rem;
}

main .buttons_univers .btn_univers:hover {
  background-color: var(--sable-color);
  border-color: var(--black-color);
}

main .buttons_univers .btn_univers h2 {
  font-size: 20px;
  text-align: left;
}

main .buttons {
  display: flex;
  justify-content: center;
  margin: 3vh;
}

main .buttons .btn_valid,
main .buttons .btn_new_question {
  width: 11vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--grey-color);
  margin: 3.8vh 4.5vw;
  border: 2px solid;
  border-color: var(--sable-color);
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  color: var(--blue-color);
  box-shadow: 2px 3px 1px 1px #000000;
  padding: 0.4rem;
}

main .buttons .btn_valid:hover,
main .buttons .btn_new_question:hover {
  background-color: var(--sable-color);
  border-color: var(--black-color);
}

main .buttons .btn_valid h2,
main .buttons .btn_new_question h2 {
  font-size: 18px;
  text-align: center;
}

main .buttons .btn_new_question {
  margin: 0;
  width: 25vw;
}

main .formulaire_roti {
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  margin: 5vh 1vh;
  font-size: 1.1vw;
}

main .formulaire_roti .nom_roti {
  margin: 2vh 3vh;
}

main .formulaire_roti .nom_roti #nom {
  width: 20vw;
}

main .formulaire_roti .question {
  margin: 2vh 3vh;
}

main .formulaire_roti .question #question {
  margin: -1vh auto;
  margin: 0 2vh;
  width: 50%;
  height: 10%;
}

main .formulaire_roti .new_question {
  margin: 2vh 3vh;
}

main .formulaire_roti .avis {
  margin: 2vh 3vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

main .formulaire_roti .commentaire {
  margin: 2vh 3vh;
}

main .formulaire_roti .commentaire .comment {
  width: 80vw;
  height: 20vh;
}

footer {
  background-color: #000000;
  color: #ffffff;
  font-size: 13px;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

footer p {
  margin: 0;
}

footer a {
  color: var(--sable-color);
}

/*# sourceMappingURL=style.css.map */
</style>
