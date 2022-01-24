<template>
  <div class="bg-slate-100 min-h-screen flex flex-col" v-if="appReady">
    <Navbar />
    <div class="flex flex-col md:flex-row">
      <Sidebar />
      <main class="p-6 flex-1">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
    <Footer />
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/navigation/Navbar.vue";
import useInit from "@/Init";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Footer from "@/components/footer/Footer.vue";
export default defineComponent({
  name: "App",
  components: { Navbar, Sidebar, Footer },
  setup() {
    const { appReady } = useInit();
    return {
      appReady,
    };
  },
});
</script>
