import { computed } from 'vue'
import axios from 'axios'

const API_URL = process.env.VUE_APP_API

export function useApi() {
    const api = computed(
        () =>
            new axios.create({
                baseURL: API_URL,
            })
    )

    return { api }
}
