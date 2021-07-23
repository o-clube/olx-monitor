<template>
    <div class="col-md-6 col-lg-4 mb-4">

        <div class="card shadow-sm">

            <div class="card-body">
                
                <h2 class="card-title h3">
                    <!-- <router-link class="" to="'/domain/' + id">augustocarmo.com.br</router-link> -->
                    <router-link class="domain-card__title text-muted" to="/domain/augustocarmo/">{{domain.url}}</router-link>
                </h2>

                <span v-if="domain.active" class="badge rounded-pill bg-success">ativo</span>
                <span  v-else class="badge rounded-pill bg-secondary">inativo</span>
                
            </div>
            
            <div class="list-group list-group-flush">

                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div>
                        <font-awesome-icon icon="chart-bar"/>
                        Analytics
                    </div>

                </a>

                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div>
                        <font-awesome-icon icon="link" />
                        Websites
                    </div>
                    <span class="badge bg-secondary rounded-pill">{{domain.websites}}</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div>
                        <font-awesome-icon icon="link" />
                        Configurações
                    </div>
                </a>
                
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center disabled">
                    <div><font-awesome-icon icon="link" />
                        Segurança
                    </div>
                </a>

                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div><font-awesome-icon icon="link" />
                        Smart rules
                    </div>
                </a>
                
            </div>

            <div class="card-body">
                <a href="#" class="card-link btn btn-sm btn-secondary">Delete</a>
            </div>

        </div>

    </div>

    

</template>



<script>
    export default{

        props:{
            domain: Object
        },

        setup() {

            // console.log(props)

            // return {
            //     props
            // }
        }
    }

</script>
