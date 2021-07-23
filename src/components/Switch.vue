<template>

    <transition name="alert">
        <Alert v-if=alert.visible :type=alert.type @close-alert="closeAlert"> 
            <strong>{{alert.title}}</strong> {{alert.message}}
        </Alert>
    </transition>

    <div class="form-check form-switch me-3">

        <label
            class="form-check-label"
            :for="setting">{{label}}
        </label>

        <input
            @input="(event) => $emit('update:checked', event.target.checked)"
            :id="setting"
            :checked="checked"
            @click=updateSetting()
            class="form-check-input"
            type="checkbox">
        
    </div>

</template>

<script>

import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import Alert from '@/components/Alert'

export default {

    components:{
        Alert
    },

    props:{
        label:String,
        setting:String,
        checked:Boolean,
        domain:Object
    },

    setup(props){

        const alert = ref({
            type: 'success',
            visible: false,
            title: '',
            message: '', 
        })

        async function updateSetting(){

            const tempDomain = props.domain
            tempDomain[props.setting] = !props.checked   

            try{
                const result = await axios.put(`http://localhost:3000/domains/${tempDomain.id}`, tempDomain)
                setAlert('success', `Alteração salva com sucesso!`, '')
            }

            catch(error){
                console.log(error)
                setAlert('danger', `Houve erro ao salvar a configuração.`, 'Tente novamente mais tarde.')
            }
        }

        function closeAlert(){
            alert.value.visible = false;
        }

        function setAlert(type, title, message){

            alert.value.visible = true
            alert.value.type = type
            alert.value.title = title
            alert.value.message = message

            setTimeout(() => {
                alert.value.visible = false 
            }, 3000);
        }

        return{
            updateSetting,
            alert,
            closeAlert
        }
    },
}

</script>