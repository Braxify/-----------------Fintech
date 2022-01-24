<template>
  <div
    class="flex flex-col md:flex-row md:pl-10 md:justify-between"
    v-if="user"
  >
    <div class="flex justify-center md:justify-start">
      <img
        class="h-48 w-48 rounded-full object-cover hover:scale-125 transition-all shadow-lg shadow-cyan-500/50"
        :src="user.avatar_url"
        :title="user.login"
        alt="User avatar"
      />
    </div>
    <div
      class="mt-3 md:mt-0 md:p-4 md:ml-10 md:pt-0 flex-1 flex-shrink-0 text-base font-semibold md:text-xl"
    >
      <div>
        ID:
        <span class="font-light">{{ user.id || '-' }}</span>
      </div>
      <div>
        Login:
        <span class="font-light">{{ user.login || '-' }}</span>
      </div>
      <div>
        Name:
        <span class="font-light">{{ user.name || '-' }}</span>
      </div>
      <div>
        Type:
        <span class="font-light">{{ user.type || '-' }}</span>
      </div>
      <div>
        Location:
        <span class="font-light">{{ user.location || '-' }}</span>
      </div>
      <div>
        Company:
        <span class="font-light">{{ user.company || '-' }}</span>
      </div>
      <div>
        Followers:
        <span class="font-light">{{ user.followers || '-' }}</span>
      </div>
      <div>
        Following:
        <span class="font-light">{{ user.following || '-' }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getUser } from '@/services/user'
import { useUserStore } from '@/store/user'
export default defineComponent({
  name: 'Profile',
  components: {},
  setup() {
    const route = useRoute()
    const user = ref(null)

    onMounted(async () => {
      const { username } = route.params
      const response = await getUser(username)
      user.value = response
    })

    return { user }
  },
})
</script>
