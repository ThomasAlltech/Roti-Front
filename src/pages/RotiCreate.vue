<template>
    <h1>Création d'un nouveau roti</h1>
    <div class="presentation">
        <div class="cadre">
            <p>Vous êtes sur la page de création de votre nouveau roti.</p>
            <p>Veuillez remplir les informations.</p>
        </div>
    </div>
    <section class="formulaire_roti">
        <div class="nom_roti">
            <label for="nom">Nom du roti :</label>
            <input type="text" id="nom" placeholder="Roti n°1">
        </div>
        <div class="question">
            <label for="question">Première question :</label>
            <textarea class="question" id="question"
                placeholder="Qu'avez-vous aimé lors de cette formation ?"></textarea>
        </div>
        <div class="new_question">
            <label for="ajout_question">Cliquez ici pour ajouter une nouvelle question :</label>
            <section class="buttons">
                <button class="btn_new_question" id="ajout_question">Ajouter une nouvelle question</button>
            </section>
        </div>
        <div class="avis">
            <div class="avis_formation">
                <p>Laissez un avis sur la formation :</p>
                <label>
                    <input type="checkbox" name="interet" value="tres" checked> Très intéressante
                </label><br>
                <label>
                    <input type="checkbox" name="interet" value="interessante"> Intéressante
                </label><br>
                <label>
                    <input type="checkbox" name="interet" value="peu"> Peu intéressante
                </label><br>
                <label>
                    <input type="checkbox" name="interet" value="pas"> Pas du tout intéressante
                </label><br>
            </div>
            <div class="avis_formateur">
                <p>Laissez un avis sur le formateur :</p>
                <label>
                    <input type="checkbox" name="interet" value="tres" checked> Très intéressant
                </label><br>
                <label>
                    <input type="checkbox" name="interet" value="interessante"> Intéressant
                </label><br>
                <label>
                    <input type="checkbox" name="interet" value="peu"> Peu intéressant
                </label><br>
                <label>
                    <input type="checkbox" name="interet" value="pas"> Pas du tout intéressant
                </label><br>
            </div>
        </div>
        <div class="commentaire">
            <p>Laissez un commentaire ci-dessous :</p>
            <textarea class="comment" name="comment" id="comment"
                placeholder="Je suis très content d'avoir suivi cette formation"></textarea>
        </div>
    </section>
    <section class="buttons">
        <div class="btn_valid">
            <a href="">
                <h2>Créer le roti</h2>
            </a>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Create_Roti',
  props: {
    msg: String
  }
}
</script>