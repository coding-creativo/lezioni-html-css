<template>
    <div>
        <nav>
            <ul>
                <li><router-link to="/" exact active-class="active">Home</router-link></li>
                <li><router-link to="/storia" active-class="active">About</router-link></li>
                <li><router-link to="/servizi" active-class="active">Servizi</router-link></li>
                <li><router-link to="/contatti" active-class="active">Contatti</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style scoped>
  /* Stili specifici per Header */
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    display: inline;
    margin-right: 20px;
  }
  
  ul li a {
    text-decoration: none;
    color: #333;
  }
  
  .active {
     text-decoration: underline;

  }
  </style>