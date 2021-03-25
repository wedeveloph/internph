<template>
    <form>
      <v-row>
        <v-col cols="12">
          <v-text-field
            id="reviewRole"
            v-model="review.role"
            label="Position"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-select
            id="reviewCategory"
            v-model="review.category"
            :items="['Design','Tech','Marketing','Product','Writing','Operations']"
            label="Category"
            required
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            id="reviewYear"
            v-model="review.year"
            label="Year"
          ></v-text-field>
        </v-col>
         <v-col cols="12" sm="6">
          <v-text-field
            id="reviewDuration"
            v-model="review.duration"
            :items="['Part-time','Full-time']"
            label="Duration"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <star-rating
            id="reviewLearning"
            v-model="review.learning"
            :active-color="['white','black']"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <star-rating
            id="reviewLearning"
            v-model="review.learning"
            :active-color="['white','black']"
            required
          />
        </v-col>
      </v-row>

      


    </form>
</template>

<script>
import StarRating from 'vue-star-rating'
import axios from 'axios';
const url = process.env.VUE_APP_API_URL || 'http://localhost:9000/api/companies';

export default {
  components: {
    StarRating
  },
  name: 'CompanyForm',
  data: () => ({
    review: {
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