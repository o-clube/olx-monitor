<template>

    <Navigation />
    <router-view/>
    <Footer />

</template>

<script>

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default{
    components:{
        Navigation,
        Footer
    },
}

</script>

<style>

    body{
        background-color: #f8f9fa !important;
    }

    .nav-underline .nav-link {
        padding-top: .75rem;
        padding-bottom: .75rem;
        font-size: .875rem;
        color: #6c757d;
    }

    .nav-underline .active {
        font-weight: 500;
        color: #343a40;
    }

</style>
