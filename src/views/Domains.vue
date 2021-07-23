<template>

    <main class="container">

        <div class="my-4 pb-3 border-bottom">

            <div class="row align-items-center">

                <div class="col-md-4">
                    <h1 class="h mb-0 lh-1">{{pageDetails.title}}</h1>
                    <small class="d-block mb-3 mb-md-0">{{pageDetails.description}}</small>
                </div>

            </div>

        </div>

        <DomainList />

    </main>


</template>

<script>

import { ref } from 'vue'
import DomainList from '@/components/DomainList'

export default {
    components:{
        DomainList
    },

    setup(){
        const pageDetails = ref({
            title: 'Domínios',
            description: 'Gerencie seus domínio'
        })

        return {
            pageDetails
        }
    }
}

</script>