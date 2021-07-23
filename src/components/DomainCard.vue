<template>

    <div class="col-md-6 col-lg-4 mb-4">

        <router-link class="card shadow-sm domain-card__title text-muted" :to="`/domain/${domain.id}`">

            <div class="card-body">
                
                <h2 class="card-title h3">
                    {{domain.url}}
                </h2>

                <span v-if="domain.active" class="badge rounded-pill bg-success">ativo</span>
                <span  v-else class="badge rounded-pill bg-secondary">inativo</span>
                
            </div>

            <!-- <div class="card-body">
                <a href="#" class="card-link btn btn-sm btn-secondary">Delete</a>
            </div> -->

        </router-link>

    </div>

</template>

<script>

    export default{

        props:{
            domain: Object
        },
    }

</script>

<style>
    .card{
        transition-property: border;
        transition-duration: .3s;
    }

    .card:hover{
        border: 1px solid rgba(0, 0, 0, 0.3);

    }

    .domain-card__title{
        text-decoration: none;
    }
</style>