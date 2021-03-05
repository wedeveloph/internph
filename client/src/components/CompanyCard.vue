<template>
<div>
    <v-card v-for="(company) in companyCards" :key="company.name">
        Name: {{company.name}}<br>
        Longbio: {{company.longbio}} <br>
        Shortbio: {{company.shortbio}} <br>
    </v-card>
</div>
</template>

<script>
  //  import StarSolid from './StarSolid.vue';
    export default {
        components: {
  //          StarSolid
        },
        name: 'CompanyCard',
        props: ["companyCards"]
    };
</script>