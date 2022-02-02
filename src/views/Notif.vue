<template>
    <section class="scrolling-component"  ref="scrollcomponent">
        <section class="container my-body">
            <h1 class="text-center mt-5">CRIAR NOTIFICAÇÃO/AVISO</h1>
            <form action="">
               <section class="row mt-5">
                    <section class="col-md-6">
                        <label for="title" class="form-label">Título:</label>
                        <input type="text" class="form-control" id="title" placeholder="título...">
                    </section>
                </section>
                <section class="row mt-4">
                    <section class="col-md-12">
                        <label for="title" class="form-label">Resumo(100 caracteres):</label>
                        <textarea class="form-control" id="title" rows="5"></textarea>
                    </section>
                </section>
                <section class="row mt-4">
                    <section class="col-md-12">
                        <label for="text" class="form-label">Texto:</label>
                        <textarea class="form-control" id="text" rows="5"></textarea>
                    </section>
                </section>
                <section class="row mt-4">
                    <section>
                        <section class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="subscribe_news" checked>
                            <label class="form-check-label" for="subscribe_news"> Enviar notificação por email</label>
                        </section>
                        <section class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="subscribe_news">
                            <label class="form-check-label" for="subscribe_news"> Publicar na página Avisos</label>
                        </section>
                    </section>
                </section>
            </form>
            <section class="text-center">
				<button type="button" class="btn btn-outline-primary mt-4 me-4 my-button">CRIAR</button>
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