<template>
  <div class="flex flex-col">
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold">Selected Users</h1>
      <button
        type="button"
        class="inline-block px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        :disabled="!filteredUsers.length"
        @click="removeAllUsers"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
    <div class="mt-4">
      <div class="flex flex-col" v-if="filteredUsers.length">
        <div class="overflow-x-auto">
          <div class="py-2 inline-block min-w-full">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No.
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Login
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b"
                    v-for="(user, idx) in filteredUsers"
                    :key="user.id"
                  >
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      {{ idx + 1 }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ user.id }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ user.login }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <button
                        type="button"
                        class="inline-block px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click="removeUser(user.id)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h1
        v-else
        class="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700"
      >
        No users selected!
      </h1>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Card from "@/components/card/Card.vue";
import { useUserStore } from "@/store/user";
import { User } from "@/types";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "Users",
  components: { Card },
  setup() {
    const userStore = useUserStore();
    const { selectedUsers } = storeToRefs(userStore);
    const term = computed(() => userStore.getSearchTerm);
    const filteredUsers = computed(() => {
      return selectedUsers.value.filter(
        (user: User) =>
          user.login.toLowerCase().includes(term.value.toLowerCase()) ||
          user.id.toString().includes(term.value)
      );
    });

    const removeUser = (id: Number) => {
      userStore.removeUser(id);
    };

    const removeAllUsers = () => {
      userStore.removeAllUsers();
    };

    return { filteredUsers, removeUser, removeAllUsers };
  },
});
</script>
