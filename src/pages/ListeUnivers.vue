<template>
    <h1>Liste des univers</h1>
    <ListeSujets v-if="afficherSujets" :sujets="sujetsAffiches" />
    <div class="presentation">
        <div class="cadre">
            <p>Voici la liste des univers.</p>
            <p>Cliquez sur un univers pour voir les sujets qu'il contient.</p>
        </div>
    </div>
    <div>
        <div class="buttons_univers">
            <button :class="buttons_univers" v-for="univers in universList" :key="univers.id"
                @click="afficherListeSujets(univers)" class="btn_univers">
                <h2>{{ univers.libelle }}</h2>
            </button>
        </div>
    </div>
</template>

<script>
import ListeSujets from './ListeSujets.vue';

export default {
    name: 'ListeUnivers',
    data() {
        return {
            // Initialise les propriétés des données du composant ListeUnivers
            universList: [],
            afficherSujets: false,
            sujetsAffiches: [],
        }
    },
    components: {
        // Enregistre le composant ListeSujets comme composant enfant dans le template
        ListeSujets,
    },
    methods: {
        // Méthode appelée lorsqu'un utilisateur clique sur un univers et prend l'objet univers sélectionné comme argument.
        afficherListeSujets(univers) {
            // Envoie une requête GET au point de terminaison
            fetch(`sujets/univers/${univers.id}`)
                // Gère la réponse réussie de l'API.
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur réseau');
                    }
                    return response.json();
                })
                // Gère les données JSON analysées
                .then(data => {
                    this.sujetsAffiches = data;
                    // Définis l'indicateur afficherSujets à true pour indiquer que la liste des sujets doit être affichée.
                    this.afficherSujets = true;
                })
                // Gère les erreurs qui se produisent pendant la requête fetch.
                .catch(error => {
                    console.error('Erreur lors de la récupération des univers:', error);
                });
        },
    },
    // Ce hook est appelé lorsque le composant est monté pour la première fois et inséré dans le DOM.
    mounted() {
        fetch('/univers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                return response.json();
            })
            .then(data => {
                // Met à jour la propriété de données universList avec la liste des univers.
                this.universList = data;
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des univers:', error);
            });
    },

};
</script>