import { ref, watchEffect } from 'vue'
import { useApi } from './use-api'

export function useCurrencyExchangeRate(baseCurrency) {
    const { api } = useApi()

    const rates = ref([])
    const loading = ref(false)

    const fetch = async () => {
        try {
            loading.value = true

            const {
                data: { rates: remoteRates = [] },
            } = await api.value.get('/latest')

            rates.value = Object.keys(remoteRates).map((abb) => ({
                currency: abb,
                rate: remoteRates[abb],
            }))
        } finally {
            loading.value = false
        }
    }

    watchEffect(async () => {
        try {
            if (baseCurrency.value) {
                await fetch()
            }
        } catch (e) {
            console.error(e)
        }
    })

    return { rates, loading, fetch }
}
