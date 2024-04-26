<template>
        <header>
            <a href="./">
                <img src="../assets/logo_Alltech_Bleu_PNG.png" alt="Logo Alltech" width="80" class="logo">
            </a>
            <a href="./">
                <div class="buton-container"><button class="btn_accueil">ACCUEIL</button></div>
            </a>
        </header>
</template>

<script>
export default {
  name: 'Header_Univers',
  props: {
    msg: String
  }
}
</script>