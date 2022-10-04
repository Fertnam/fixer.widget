<template>
    <div :class="$style.app">
        <header :class="$style.header">
            <h1 :class="$style.title" v-text="title" />
            <currency-menu v-model="baseCurrency" />
        </header>

        <main :class="$style.main">
            <div :class="$style.controls">
                <v-input v-model="exchangeRateDate" type="date" required />

                <currency-count
                    v-model="baseCurrencyCount"
                    :currency="baseCurrency"
                />
            </div>

            <currency-exchange-rate
                :base-currency="baseCurrency"
                :base-currency-count="baseCurrencyCount"
            />
        </main>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VInput from './components/ui/VInput.vue'
import CurrencyMenu from './components/CurrencyMenu.vue'
import CurrencyCount from './components/CurrencyCount.vue'
import CurrencyExchangeRate from './components/CurrencyExchangeRate.vue'

const baseCurrency = ref(null)
const baseCurrencyCount = ref(1)
const exchangeRateDate = ref(new Date().toISOString().slice(0, 10))

const title = computed(() => {
    if (baseCurrency.value) {
        return `Курс ${baseCurrency.value} на ${exchangeRateDate.value}`
    }

    return 'Выберите валюту'
})
</script>

<style lang="scss" module>
.app {
    & > .header,
    & > .main {
        padding: 2rem 1.8rem;
    }

    & > .header {
        padding-bottom: 0;
        background-color: var(--yellow-50);

        & > .title {
            margin-bottom: 0.5rem;

            font-size: var(--text-xl);
            font-weight: 400;

            user-select: none;
        }
    }

    & > .main {
        & > .controls {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            gap: 1rem;

            margin-bottom: 1.5rem;
        }
    }
}
</style>
