<template>
    
    <div :class="`alert alert-${type} alert-dismissible shadow`" role="alert">
        <slot />
        <button type="button" @click="$emit('closeAlert')" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

</template>

<script>

export default {

    props:{
        type: String
    },

    emits:['closeAlert']

}
</script>

<style>

    .alert{
        top: -3px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        /* width: 90%; */
        z-index:9;
    }

    .alert-enter-active,
    .alert-leave-active {
        opacity: 1;
        transition: opacity 0.5s ease;
    }

    .alert-enter-from,
    .alert-leave-to {
        opacity: 0;
    }

</style>
