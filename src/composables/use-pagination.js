import { ref, computed } from 'vue'

export function usePagination(items, perPage) {
    const page = ref(1)

    const totalPages = computed(() => Math.ceil(items.value.length / perPage))

    const inStart = computed(() => page.value === 1)
    const inEnd = computed(() => page.value === totalPages.value)

    const itemsFragment = computed(() => {
        const end = page.value * perPage
        const begin = end - perPage

        return items.value.slice(begin, end)
    })

    const prev = () => page.value--
    const next = () => page.value++

    return { page, totalPages, inStart, inEnd, itemsFragment, prev, next }
}
