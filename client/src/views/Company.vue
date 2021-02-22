<template>
    <div>
      <CompanyCard v-bind:companyCards="companyCards"/>
    </div>
</template>

<script>
import CompanyCard from '../components/CompanyCard.vue';

export default {
  components: {
    CompanyCard
  },
  name: 'Company',
  data() {
    return {
      companyCards: [
        {
          id: 1,
          name: "Developh Philippines"
        },
        {
          id: 2,
          name: "Developh Vietnam"
        },
      ]
    }
  }
}
</script>