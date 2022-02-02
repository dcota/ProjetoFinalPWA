<template>
<nav class="navbar navbar-expand-lg fixed-top">
  
  <section class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler cust-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon cust-toggler"></span>
    </button>
    <section class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/Enrollment" class="nb">INSCRIÇÕES</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nb">AVISOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nb">SOBRE O CLUBE</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Notif" class="nb">PROJETOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Admin" class="nb">CONTACTOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Login" class="nb">LOGIN</router-link>
        </li>
      </ul>
    </section>
  </section>
</nav>
</template>

<style scoped>
  .cust-toggler {
    border-color:white;
  }
  .cust-toggler .navbar-toggler-icon {
            background-image: url(
              "data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        }
  .navbar{
    position:relative;
    height: auto;
    background-color:#2b589f !important;
  }
  .nav{
    border-color:#2b589f !important;
    border-width: 2px !important;
    text-decoration: none !important;
    padding: 10px;  
  }
  .nav-item{
    text-decoration: none !important;
    padding-top: 20px;
    padding-bottom: 20px;
    
  }
  .nb{
    color:white !important;
    font-weight: bold;
    text-decoration: none !important;
    border-right: #2b589f;
    border-right-style: solid;
    border-right-width: 3px;
    padding-left: 20px;
    padding-right: 20px;
  }

  /*.nb-l{
    color: #2b589f !important;
    font-weight: bold;
    text-decoration: none !important;
    border-right: #2b589f;
    border-right-style: solid;
    border-right-width: 3px;
    padding-left: 20px;
    padding-right: 20px;
  }*/

  .nb:hover{
    color:#6a8ec8 !important
  }

  /*.nb1:hover{
    color:#6a8ec8 !important
  }*/

</style>


