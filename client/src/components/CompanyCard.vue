<template>
<div>
    <div v-for="company in companyCards" v-bind:key="company.id">
        <h3>{{company.name}}</h3>
        
    </div>
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