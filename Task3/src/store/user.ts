import { defineStore } from "pinia";
import { getUsers } from "@/services/user";
import { UserStore, User } from "@/types";

export const useUserStore = defineStore({
  id: "user",
  state: (): UserStore => ({
    users: [],
    selectedUsers: [],
    search: "",
  }),
  getters: {
    getUsersList: (state) => state.users,
    getSearchTerm: (state) => state.search,
  },
  actions: {
    setSearch(search: string) {
      this.search = search;
    },
    async setUsers() {
      try {
        const response = await getUsers();
        this.users = response;
      } catch (error) {
        console.log("Error setting user", error);
      }
    },
    selectUser(user: User) {
      const foundUser = this.selectedUsers.find(
        (selectedUser) => selectedUser.id === user.id
      );
      if (!foundUser) {
        this.selectedUsers.push(user);
      }
    },
    removeUser(id: Number) {
      this.selectedUsers = this.selectedUsers.filter((user) => user.id !== id);
    },
    removeAllUsers() {
      this.selectedUsers = [];
    },
  },
  persist: {
    key: "user",
    storage: window.sessionStorage,
    paths: ["selectedUsers"],
  },
});
