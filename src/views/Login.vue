<template>
    <div class="container">
        
        <div class="wrapper">
            
            <form class="form-signin" v-on:submit.prevent="login">   
            <div id="box"></div>    
            <h2 class="form-signin-heading">Login</h2>
            <input type="text" v-model="form.username" class="form-control mt-4" id="username" placeholder="username" required="" autofocus="" />
            <input type="password" v-model="form.password" class="form-control mt-4" id="password" placeholder="password" required=""/>      
            <button class="btn btn-lg btn-primary btn-block mt-4" type="submit">Submeter</button>   
            </form>
        </div>
    </div> 
</template>

<style scoped>
.wrapper {	
	margin-top: 80px;
    margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1); 
  text-align: center;
}



</style>

<script>
import axios from 'axios'

export default {  
    name:'login',
    data () {
        return{
            form: {
                username:'',
                password:''
            }
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/auth',this.form)
            .then((response)=>{
                if(response.data.http==200){
                    localStorage.token = response.headers.authorization
                    localStorage.fname = response.data.body.firstname
                    localStorage.lname = response.data.body.lastname
                    localStorage.level = response.data.body.level
                    if(localStorage.level==='admin')
                        this.$router.push('/Admin')
                    else this.$router.push('/Home')
                } else {
                    console.log(response)
                }
            })
            .catch(()=> {
                const box = document.getElementById('box')
                    box.innerHTML += 
                    `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Dados incorretos!
                    <buttontype="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    `   
            })
        },
    }
}
</script>