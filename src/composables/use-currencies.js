import { ref } from 'vue'
import { useApi } from './use-api'

export function useCurrencies() {
    const { api } = useApi()

    const currencies = ref([])
    const loading = ref(false)

    const fetch = async () => {
        try {
            loading.value = true

            const { data } = await api.value.get('/symbols')

            currencies.value = data
        } finally {
            loading.value = false
        }
    }

    return { currencies, loading, fetch }
}
