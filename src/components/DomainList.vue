<template>

    <transition name="alert">
        <Alert v-if=alert.visible :type=alert.type @close-alert="closeAlert"> 
            <strong>{{alert.title}}</strong> {{alert.message}}
        </Alert>
    </transition>

    <div class="d-md-flex justify-content-between align-items-center p-3 mb-3 rounded shadow-sm bg-body">

        <div class="mb-3 mb-md-0">
            <input v-model="domainFilter" type="text" class="form-control" id="filter" placeholder="Busque um domínio">
        </div>

        <form @submit.prevent="addDomain" class="d-md-flex">
            <input class="form-control me-0 me-md-3 mb-3 mb-md-0" v-model="newDomain" type="text" name="newDomain" id="newDomain" placeholder="Domínio">
            <input type="submit" value="Adicionar novo domínio" class="btn btn-success">
        </form>

    </div>

    <div class="my-4 py-4 border-top">

        <div class="row">

            <p v-if="loading">Carregando os seus domínios</p>
            <p v-if="filteredDomains.length == 0 && !loading">Nenhum domínio encontrado.</p>

            <DomainCard v-for="domain in filteredDomains" :domain=domain :key=domain.id />

        </div> 

    </div> 
    
</template>
   
<script>

    import { onMounted, ref, computed } from 'vue'
    import axios from 'axios'
    import DomainCard from '@/components/DomainCard'
    import Alert from '@/components/Alert'

    export default {

        components: {
            DomainCard,
            Alert
        },

        setup(){

            const loading = ref('')

            const alert = ref({
                type: 'success',
                visible: false,
                title: '',
                message: '', 
            })

            const newDomain = ref('')
            const domainFilter = ref('')
            const domains = ref([])

            onMounted(() => {
                getDomains()
            })

            const filteredDomains = computed( ()=>{
                return domains.value.filter( (domain) => {
                    return domain.url.toLowerCase().indexOf( domainFilter.value.toLowerCase() ) >= 0 
                })
            })

            async function addDomain(){

                if( newDomain.value ){

                    const tempDomain = {
                        websites: 0,
                        active: Math.floor(Math.random() * 2) % 2 ? true: false,
                        url: newDomain.value
                    }

                    try{
                        const result = await axios.post(`http://localhost:3000/domains/`, tempDomain)
                        domains.value.push(result.data)

                        setAlert('success', `${tempDomain.url} foi adicionado com sucesso.`, 'Você pode encontrá-lo na lista abaixo.')
                    }
                    catch(error){
                        console.log(error)
                    }
                }
                else{

                    setAlert('danger', 'Tente novamente.', 'O domínio que você tentou incluir não é válido')

                }
            }
        
            // https://vuedose.tips/use-composition-api-to-easily-handle-api-requests-in-vue-js
            async function getDomains(){

                loading.value = true
            
                try{
                    const result = await axios.get(`http://localhost:3000/domains/`)
                    domains.value = result.data
                    loading.value = false
                }
                catch(error){
                    console.log(error)
                }
            }

            function setAlert(type, title, message){

                alert.value.visible = true
                alert.value.type = type
                alert.value.title = title
                alert.value.message = message

                setTimeout(() => {
                    alert.value.visible = false 
                }, 5000);

            }

            function closeAlert(){
                alert.value.visible = false;
            }

            return {
                loading,
                alert,
                closeAlert,
                domainFilter,
                filteredDomains,
                newDomain,
                addDomain,
            }
        },
    }
</script>