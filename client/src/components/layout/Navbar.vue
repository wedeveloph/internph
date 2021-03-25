<template>
    <v-row id="nav">
        <p>Intern.ph</p>
        <ul id="links">
            <li> Companies </li>
            <li> Saved </li>
            <li> Submit </li>
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
       margin-top: -42px;
       height: 80px;
       width: -webkit-fill-available;
       position: fixed;
       z-index: 1;
       p {
            margin-left: 5%;
            margin-top: 0.5rem;
            padding-right: 10px;
       }
   }
   #links {
       display: flex;
       margin-top: 0.5rem;
       margin-right: 5%;
       
       li {
           display: block;
           margin-right: 10px;
       }
   }
</style>