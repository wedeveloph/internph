<template>
    <v-row id="nav">
        <p>Intern.ph</p>
        <ul id="links">
            <li> Link 1 </li>
            <li> Link 2 </li>
        </ul>
    </v-row>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
   #nav {
       display: flex;
       justify-content: space-between;
       background: linear-gradient(180deg, #171423 53.12%, rgba(23, 20, 35, 0) 100%);
       margin-top: -60px;
       height: 80px;
       p {
            margin-left: 5%;
            margin-top: 0.5rem;
            padding-right: 10px;
       }
   }
   #links {
       display: flex;
       margin-top: 0.5rem;
       li {
           display: block;
       }
   }
</style>