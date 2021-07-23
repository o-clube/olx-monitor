<template>

    <div class="nav-scroller bg-body shadow-sm">

        <nav class="nav nav-underline bg-secundary" aria-label="Secondary navigation">
            
            <a class="nav-link active" aria-current="page" href="#">Configurações</a>

            <a class="nav-link disabled" href="#">Analytics</a>

            <a class="nav-link disabled" href="#">
                Websites & DNS
                <span class="badge bg-secondary rounded-pill align-text-bottom">2</span>
            </a>

            <a class="nav-link disabled" href="#">Segurança</a>
            <a class="nav-link disabled" href="#">Smart Rules</a>

        </nav>

    </div>

    <main class="container">

        <div class="my-4 pb-3 border-bottom">

            <div class="row align-items-center">

                <div class="">
                    <h1 v-if="loading" class="h mb-0 lh-1">Carregando...</h1>
                    <h1 class="h mb-0 lh-1">{{domain.url}}</h1>
                    <small class="d-block mb-3 mb-md-0">Gerencie seu domínio</small>
                </div>

            </div>

        </div>


        <!-- GERAL -->

        <div class="my-3 p-3 bg-body rounded shadow-sm">

            <h5 class="border-bottom pb-2 mb-0">
                Modo CDN
            </h5>

            <div class="d-flex text-muted pt-3">

                <div class="pb-3 mb-0 small lh-sm w-100">

                    <div class="d-md-flex justify-content-between">

                        <strong class="text-gray-dark">Define o modo de utilização da CDN para seu domínio.</strong>

                        <div class="my-3 my-md-0">

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                <label class="form-check-label" for="exampleRadios1">Name Server</label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <label class="form-check-label" for="exampleRadios2">CNAME</label>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
    
        </div>


        <div class="my-3 p-3 bg-body rounded shadow-sm">
        
            <h5 class="border-bottom pb-2 mb-0">Tipos de dispositivo</h5>

            <div class="d-flex text-muted pt-3">

                <div class="pb-3 mb-0 small lh-sm  w-100">

                    <div class="d-md-flex justify-content-between">

                        <strong class="text-gray-dark">Adiciona na requisição informações relacionadas à geolocalização.</strong>

                        <div class="my-3 my-md-0">
                            <Switch label="" setting="deviceType" :domain=domain v-model:checked=domain.deviceType />
                        </div>
                    
                    </div>

                </div>
                
            </div>
    
        </div>

        <div class="my-3 p-3 bg-body rounded shadow-sm">
        
            <h5 class="border-bottom pb-2 mb-0">Geolocalização</h5>

            <div class="d-flex text-muted pt-3">

                <div class="pb-3 mb-0 small lh-sm border-bottom w-100">

                    <div class="d-flex justify-content-between">
                        <strong class="text-gray-dark">Define o modo de utilização da CDN para seu domínio.</strong>
                    </div>


                </div>
                
            </div>

            <div class="d-flex text-muted pt-3">

                <div class="pb-3 mb-0 small lh-sm w-100">

                    <div class="d-md-flex justify-content-between">

                        <p class="text-gray-dark">Inclui os cabeçalhos.</p>
                        
                        <div class="d-flex my-3 my-md-0">

                            <Switch label="País" setting="geoPais" :domain=domain v-model:checked=domain.geoPais />
                            <Switch label="Continente" setting="geoContinente" :domain=domain v-model:checked=domain.geoContinente />
                            <Switch label="Organização" setting="geoOrganizacao" :domain=domain v-model:checked=domain.geoOrganizacao />

                        </div>

                    </div>


                </div>
                
            </div>
    
        </div>

        <!-- END GERAL -->


        <!-- CACHE -->
        <!-- END CACHE -->

    </main>

</template>

<script>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import Switch from '@/components/Switch'

export default {

    components: {
        Switch
    },

    setup(){
        const loading = ref('')
        const route = useRoute()
        const domain = ref({})

        onMounted(() => {
            getDomain()
        })

        async function getDomain(){
            loading.value = true
        
            try{
                const result = await axios.get(`http://localhost:3000/domains/${route.params.id}`)
                domain.value = result.data
                loading.value = false
            }
            catch(error){
                console.log(error)
            }
        }

        return{
            route,
            loading,
            domain
        }

    },
  
}

</script>