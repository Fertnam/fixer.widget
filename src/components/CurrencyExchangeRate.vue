<template>
    <div :class="$style.currencyExchangeRate">
        <div :class="$style.loading" v-if="loading">Загрузка...</div>

        <template v-else>
            <div :class="$style.items">
                <currency-exchange-rate-item
                    v-for="rate in rates"
                    :from="from"
                    :to="rate"
                    :key="rate"
                />
            </div>

            <div :class="$style.pagination">
                <v-button disabled>
                    <fa-icon icon="chevron-left" />
                    Назад
                </v-button>

                <v-button>
                    Далее
                    <fa-icon icon="chevron-right" />
                </v-button>
            </div>
        </template>
    </div>
</template>

<script setup>
import { defineProps, toRef, computed } from 'vue'
import CurrencyExchangeRateItem from './CurrencyExchangeRateItem.vue'
import VButton from './ui/VButton.vue'
import { useCurrencyExchangeRate } from '../composables/use-currency-exchange-rate'

const props = defineProps({
    baseCurrency: {
        type: [String, null],
        required: true,
    },
    baseCurrencyCount: {
        type: Number,
        default: 1,
    },
})

// * Exchange Rate
const baseCurrencyRef = toRef(props, 'baseCurrency')
const { rates, loading } = useCurrencyExchangeRate(baseCurrencyRef)

const from = computed(() => ({
    currency: props.baseCurrency,
    count: props.baseCurrencyCount,
}))
</script>

<style lang="scss" module>
.currencyExchangeRate {
    & > .loading {
        text-align: center;
        font-size: var(--text-lg);
    }

    & > .items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

        gap: 1rem;

        margin-bottom: 3rem;
    }

    & > .pagination {
        display: flex;
        justify-content: center;

        gap: 1rem;
    }
}
</style>
