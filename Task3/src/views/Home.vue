<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
    <Card v-for="user in filteredUsers" :key="user.id">
      <template #header>
        <router-link :to="`/profile/${user.login}`">
          <img
            class="rounded-t-lg w-full md:h-56 object-cover"
            :src="user.avatar_url"
            alt="User avatar"
          />
        </router-link>
      </template>
      <template #title>
        <router-link
          :to="`/profile/${user.login}`"
          class="no-underline hover:underline"
          >{{ user.login }}</router-link
        ></template
      >
      <template #subtitle>ID: {{ user.id }}</template>
      <template #actions>
        <button
          type="button"
          class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="selectUser(user)"
        >
          Select
        </button>
      </template>
    </Card>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Card from "@/components/card/Card.vue";
import { useUserStore } from "@/store/user";
import { User } from "@/types";
export default defineComponent({
  name: "Home",
  components: { Card },
  setup() {
    const userStore = useUserStore();
    const users = userStore.getUsersList;
    const term = computed(() => userStore.getSearchTerm);
    const filteredUsers = computed(() => {
      return users.filter(
        (user: User) =>
          user.login.toLowerCase().includes(term.value.toLowerCase()) ||
          user.id.toString().includes(term.value)
      );
    });

    const selectUser = (user: User) => {
      userStore.selectUser(user);
    };

    return { users, selectUser, filteredUsers };
  },
});
</script>
