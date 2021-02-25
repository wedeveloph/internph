<template>
    <div>
      <CompanyCard v-bind:companyCards="companyCards"/>
    </div>
</template>

<script>
import CompanyCard from '../components/CompanyCard.vue';
import axios from 'axios';
const url = process.env.VUE_APP_API_URL || 'http://localhost:9000/api/companies';

export default {
  components: {
    CompanyCard
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
  }
  
}
</script>