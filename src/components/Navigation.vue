<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" aria-label="Main navigation">

        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">GoCache</router-link>

            <button class="navbar-toggler p-0 border-0" @click="toggleNavigation" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 
                    <li class="nav-item">
                        <router-link class="nav-link" to="/domains">Domínios</router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Sobre</router-link>
                    </li>

                </ul>
            
            </div>

        </div>

    </nav>

</template>

<script>

    export default {
        name: 'Navigation',

        data(){

            return{
                menuOpen: false,
            }
            
        },

        methods:{

            toggleNavigation(){
                this.menuOpen = !this.menuOpen;
            }

        }
    }

</script>