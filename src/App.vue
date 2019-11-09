<template>
  <v-app>
    <v-container>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.container {
    max-width: 2000px;
    padding: 0;
    margin: 0;
    background-image: url('./assets/wave.svg');
    background-repeat: no-repeat;
    background-size: contain;
}

#app {
    background-image: url('./assets/pattern.png');
    background-repeat: repeat; 
    background-attachment: fixed;
}
</style>