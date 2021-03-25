<template>
    <form>
      <v-row>
        <v-col cols="12">
          <v-text-field
            id="companyName"
            v-model="company.name"
            label="Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-text-field
            id="companyShortBio"
            v-model="company.shortbio"
            label="Short Bio"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-text-field
            id="companyLongBio"
            v-model="company.longbio"
            label="Long Bio"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-text-field
            id="companyWebsite"
            v-model="company.website"
            label="Website"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            id="companySector"
            v-model="company.sector"
            label="companySector"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            id="companyType"
            v-model="company.type"
            :items="['Startup', 'Corporate']"
            label="Business Type"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-text-field
            id="companyLogo"
            v-model="company.logo"
            label="Logo URL"
          ></v-text-field>
        </v-col>
      </v-row>


    </form>
</template>

<script>

import axios from 'axios';
const url = process.env.VUE_APP_API_URL || 'http://localhost:9000/api/companies';

export default {
  components: {
    
  },
  name: 'CompanyForm',
  data: () => ({
    company: {
      name: '',
      shortbio: '',
      longbio: '',
      website: '',
      sector: '',
      type: '',
      logo: '',
    }
  }), 
  methods: {
      
  }
  
}
</script>