


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
            icons: new Map<ProductType, string>([
                [ProductType.digitalProducts, "fas fa-download"],
                [ProductType.donation, "fas fa-hand-holding-heart"],
                [ProductType.onlineCourses, "fas fa-chalkboard-teacher"],
                [ProductType.other, "fas fa-ellipsis-h"],
                [ProductType.physicalProduct, "fas fa-box-open"],
                [ProductType.podcast, "fas fa-microphone"],
                [ProductType.subscription, "fas fa-receipt"],
                [ProductType.ticket, "fas fa-ticket-alt"]
            ]),
            // descriptions: new Map([
            //     [ProductType.digitalProducts, "Digital goods like software, images, or videos."],
            //     [ProductType.donation, "Support us with your donations."],
            //     [ProductType.onlineCourses, "Learn new skills with our courses."],
            //     [ProductType.other, "Various other products."],
            //     [ProductType.physicalProduct, "Tangible items shipped to you."],
            //     [ProductType.podcast, "Audio content for entertainment or learning."],
            //     [ProductType.subscription, "Access to content or services regularly."],
            //     [ProductType.ticket, "Tickets for events or access."],
            // ]),

            ProductType
        }
    }
})

</script>
<template>
    <div class="border-primary border-2 flex px-3 py-5" :class="isSelected ? 'bg-primary text-light' : 'bg-white text-dark'" @click="() =>{onSelect(productType)}">

        <div class="flex justify-center items-center mr-4 w-10 h-10 bg-primary rounded" :class="{'bg-blue-700': isSelected}">
            <i :class="[icons.get(productType), ' text-white text-sm']"></i>
        </div>

        <div class="text-xl my-auto">{{ labels.get(productType) }}</div>

        <div v-if="isSelected" class="w-5 h-5 my-auto ml-auto rounded-full border border light flex" :class="isSelected ? 'bg-light text-primary' : ''">
            <span class="fas fa-check m-auto text-sm"></span>
        </div>

    </div>
</template>