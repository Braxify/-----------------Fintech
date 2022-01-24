import { ref } from 'vue'
import { useUserStore } from '@/store/user'

export default function () {
  const appReady = ref(false)
  const userStore = useUserStore()

  userStore
    .setUsers()
    // Other store init code here
    .then(() => (appReady.value = true))
    .catch((e: Error) => {
      appReady.value = false
      console.log('Error initializing app ', e)
      // Call notification store and inform user about the error
    })

  return { appReady }
}
