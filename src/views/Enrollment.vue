<template>
    <section class="scrolling-component"  ref="scrollcomponent">
        <section class="container my-body">
            <h1 class="text-center mt-5">FICHA DE INSCRIÇÃO</h1>
            <form action="">
               <section class="row mt-5">
                    <section class="col-md-2">
                        <input type="text" class="form-control" id="firstname" placeholder="primeiro nome...">
                    </section>
                    <section class="col-md-2">
                        <input type="text" class="form-control" id="lastname" placeholder="último nome...">
                    </section>
                    <section class="col-md-8">
                        <input type="text" class="form-control" id="name" placeholder="nome completo...">
                    </section>
                </section>
                <section class="row mt-4">
                    <section class="col-md-8">
                        <input type="text" class="form-control" id="course" placeholder="curso...">
                    </section>
                    <section class="col-md-4">
                        <input type="text" class="form-control" id="class" placeholder="turma...">
                    </section>
                </section>
                <section class="row mt-4">
                    <section class="col-md-4">
                        <input type="text" class="form-control" id="email" placeholder="email...">
                    </section>
                    <section class="col-md-4">
                        <input type="text" class="form-control" id="mobile" placeholder="telemóvel...">
                    </section>
                    <section class="col-md-4">
                        <input placeholder = "Data de nascimento" class = "form-control textbox-n" type = "text" onfocus = "(this.type = 'date')"  id = "bdate">
                    </section>
                </section>
                <section class="row mt-4">
                    <section>
                        <section class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="subscribenews" checked>
                            <label class="form-check-label" for="subscribenews"> Subscrever notificações?</label>
                        </section>
                    </section>
                </section>
            </form>
            <section class="text-center">
				<button type="button" class="btn btn-outline-primary mt-4 me-4 my-button">SUBMETER</button>
				<button v-on:click="gotoMain" type="button" class="btn btn-outline-primary mt-4 my-button">LIMPAR</button>	
			</section>
            <section class="spacer"></section>
        </section>  
    </section>
</template>

<style scoped>
.my-button{
width: 120px;
}
select option[disabled]:first-child {
display: none;
}
.my-body{
margin-top: 0px;
}
.spacer{
		height: 200px;
}
.top-btn{
font-weight: bold;
width: 100px;
}
</style>

<script>
export default {
methods: {
gotoMain(){
this.$router.push('/MainSponsors');
}
}
}
</script>