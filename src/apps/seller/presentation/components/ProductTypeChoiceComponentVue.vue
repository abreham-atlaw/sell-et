


<script lang="ts">
import { defineComponent } from 'vue';
import { ProductType } from '../../data/models/productType';


export default defineComponent({

    props: {
        isSelected: {
            type: Boolean,
            default: false
        },
        onSelect: {
            type: Function,
            default: null
        },
        productType: {
            type: Number as () => ProductType,
            required: true
        }
    },
    data(){
        return {
            labels: new Map<ProductType, string>([
                [ProductType.digitalProducts, "Digital Product"],
                [ProductType.donation, "Donation"],
                [ProductType.onlineCourses, "Online Courses"],
                [ProductType.other, "Other"],
                [ProductType.physicalProduct, "Physical Product"],
                [ProductType.podcast, "Podcast"],
                [ProductType.subscription, "Subscription"],
                [ProductType.ticket, "Ticket"]
            ]),
            ProductType
        }
    }
})

</script>
<template>
    <div class="border-dark border flex p-5 py-6" :class="isSelected ? 'bg-primary text-light' : 'bg-white text-dark'" @click="() =>{onSelect(productType)}">

        <div class="my-auto mr-auto">
            {{ labels.get(productType) }}
        </div>

        <div v-if="isSelected" class="w-5 h-5 rounded-full border border light flex" :class="isSelected ? 'bg-light text-primary' : ''">

            <span class="fas fa-check m-auto text-sm"></span>

        </div>

    </div>
</template>