<template>
    <div>
      <CompanyCard/>
    </div>
</template>

<script>
import CompanyCard from '../components/CompanyCard.vue';

export default {
  components: {
    CompanyCard
  },
  name: 'Company',
  props: {
    msg: String
  }
}
</script>