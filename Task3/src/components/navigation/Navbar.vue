<template>
  <header class="bg-white border-b">
    <nav
      class="relative w-full flex flex-wrap items-center justify-between py-1.5 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-sm"
    >
      <div
        class="container mx-auto px-2 lg:px-0 w-full flex flex-wrap items-center justify-between"
      >
        <ul class="navbar-nav flex flex-wrap pl-0 list-style-none mr-auto">
          <li class="nav-item p-2">
            <router-link
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              to="/"
            >
              GitHub Users
            </router-link>
          </li>
        </ul>
        <div class="flex items-center relative">
          <SearchInput @handleSearchField="handleSearchField" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from '@/store/user'
import SearchInput from "@/components/search/SearchInput.vue";
export default defineComponent({
  name: "Navbar",
  components: { SearchInput },
  setup() {
      const userStore = useUserStore();
      
     const handleSearchField = (searchValue: string) => {
          userStore.setSearch(searchValue);
      }

    return {handleSearchField}
  }
});
</script>

<style></style>
