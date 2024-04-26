<template>
    <div class="presentation">
        <div div class="cadre">
            <p>Voici la liste des sujets</p>
        </div>
    </div>
    <div>
        <div v-for="sujet in sujets" :key="sujet.id">
            <h3>Le {{ sujet.libelle }} fait partie de l'{{ sujet.univers }}</h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Liste_Sujets',
    props: {
        sujets: Array,
    },
}
</script>
