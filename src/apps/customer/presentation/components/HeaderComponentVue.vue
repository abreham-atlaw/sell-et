<template>
  <header>
    <nav class="flex pl-16 pr-10 py-5">
      <ul class="mr-auto my-auto">
        <li v-for="(link, index) in links" :key="index" class="dropdown mx-10 p-5">
          <a :href="link.link" class="dropbtn">{{ link.label }}<i v-if="link.children" class="fa-solid fa-chevron-down ml-5"></i></a>
          <div v-if="link.children" class="dropdown-content">
            <ul>
              <li class="bg-white hover:bg-light" v-for="(child, childIndex) in link.children" :key="`child-${childIndex}`">
                <a :href="child.link">{{ child.label }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <a href="/auth/signup/seller" class="my-auto">
        <BaseButton bg="dark">Start Shop</BaseButton>
      </a>
      <div class="text-2xl my-auto">
        <a href="#"><i class="fa-solid fa-search ml-10"></i></a>
        <a href="#"><i class="fa-solid fa-user-circle ml-10"></i></a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import BaseButton from '@/common/components/buttons/BaseButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      links: [
          {label: "Home", link: "/", children: null},
          {label: "Shop", link: "#", children: [
              {label: "Physical Products", link: "/customer/list?category=physical-product"},
              {label: "Digital Products", link: "/customer/list?category=digital-product"},
              {label: "Ticket", link: "/customer/list?category=ticket"},
              {label: "Donation", link: "/customer/list?category=donation"},
          ]},
          {label: "Learn", link:"#", children: null}
      ],
    };
  },
  components:{
    BaseButton
  }
});
</script>
<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>