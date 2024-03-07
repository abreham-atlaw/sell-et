


<script lang="ts">
import Field from '@/common/forms/fields';
import { defineComponent } from 'vue';
import { TicketPackage } from '../../data/models/ticket';
import BaseButton from '@/common/components/buttons/BaseButton.vue';


export default defineComponent({

    props: {
        field: {
            type: Field<TicketPackage[]>,
            required: true
        }
    },

    data(){
        let packages: TicketPackage[] = []
        return {
            packages
        }
    },
    watch: {
        packages: {
            deep: true,
            handler(newValue: TicketPackage[]){
                this.field.setValue(newValue);
            }
        }
    },
    methods: {
        addPackage(){
            this.packages.push(new TicketPackage("", 0.0));
        }
    },
    components: {
        BaseButton
    }


})

</script>
<template>

    <div class="flex flex-wrap">

        <div v-for="pkg,idx in packages" class="mr-10" :key="pkg.title">
            Package {{ idx }}
            <input class="mt-5 block border border-1 border-dark text-dark rounded-lg focus:outline-none font-medium leading-none py-3 w-full pl-3" v-model="pkg.title" type="text" placeholder="Package Title">
            <input class="mt-5 block border border-1 border-dark text-dark rounded-lg focus:outline-none font-medium leading-none py-3 w-full pl-3" v-model="pkg.price" type="number" placeholder="Package Price"/>
        </div>
        <div class="my-auto ml-10">
            <BaseButton @click.prevent="addPackage">
                <i class="fa-solid fa-plus"></i>
            </BaseButton>
        </div>

    </div>

</template>