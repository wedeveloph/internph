<template>
    <div>
      <!-- Search Tool Here -->
      <div id="search-field">
        <input type="text" v-bind:value="targetText" v-on:input="targetText = $event.target.value" placeholder="Input Text" id="search-input-format" />
      </div>
      <button v-on:click="showText(targetText)" id="click-the-button">Click Me!</button>
      <p>VIEW COMPANIES</p>
      <h2>Startups</h2>
      <CompanyCard v-bind:companyCards="companyCards"/>
      <p class="field-test">{{greet}}</p>
      <br />
    </div>
</template>

<script>
import CompanyCard from '../components/CompanyCard.vue';

import axios from 'axios';
const url = process.env.VUE_APP_API_URL || 'http://localhost:9000/api/companies';

export default {
  components: {
    CompanyCard,
  },
  name: 'Company',
  data() {
    return {
      companyCards: []
    }
  }, 
  mounted(){
    axios.get(url).then(response => {
      this.companyCards = response.data;
    });
  },
  methods: {
      showText: (target) => {
        alert(target); // capture input
      } 
    }
  
}
</script>
<!--
<style scoped>

  export default {
    name: 'Company',
    data () {
      return {
        greet: "By: Kyle Degrano!",
        targetText: "", // - - > Null Text
        portal: "" // transfer text here (THIS IS INEFFCIENT CAN STILL BE IMPROVED)
      }
    },
    methods: {
      showText: (target) => {
        alert(target); // capture input
      } 
    }
  }
</script>
-->
<style lang="scss">
  .field-test{
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  #search-field{
    position: absolute;
    left: 440px;
    width: 600px;
    height: 30px;
    
    background: #231B3F;
    border-radius: 28px;
    box-shadow: 0px 4px 50px rgba(12, 9, 23, 0.5);

    #search-input-format{
      position: absolute;
      left: 10px;
      top: 3px;

      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 20px;
      color: #FBE7D0;
      width: 580px;
      border: none;
      border-color: transparent;
      outline: none;
    }
  }  
  ::placeholder{
    color: #FBE7D0;
    opacity: 0.5;
  }
  #click-the-button{
    position: absolute;
    top: 100px;
    left: 920px;
    width: 100px;
    height: 25px;

    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    box-sizing: border-box;
    outline: none;
    background: #231B3F;
    border-radius: 20px;
    color: #FBE7D0;
    transition: 0.35s ease-in-out;

    &:hover{ // childe
      background: #FBE7D0;
      color: #231B3F;
    }
  }
</style>