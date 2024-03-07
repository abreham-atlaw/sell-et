<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
	props: {
		bg: {
			type: String,
			default: "primary"
		},
		outlineColor: {
			type: String,
			default: "primary"
		},
		textColor:{
			type: String,
			default: "light"
		},
		rounded: {
			type: String,
			default: "lg"
		}
	},
	computed: {
	},
	components: {
	}
});

</script>
<template>

	<button :class="`bg-${bg} text-${textColor} border-${outlineColor} rounded-${rounded}`" class="border py-3 px-5 text-sm">
		<slot></slot>
	</button>

</template>