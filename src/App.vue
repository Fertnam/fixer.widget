<template>
    <div :class="$style.app">
        <header :class="$style.header">
            <h1 :class="$style.title">Курс EUR на 2020.01.19</h1>
            <currency-menu as="nav" />
        </header>

        <main :class="$style.main">
            <div :class="$style.controls">
                <v-input type="date" />
                <currency-count currency="EUR" />
            </div>

            <currency-exchange-rate />
        </main>
    </div>
</template>

<script setup>
import VInput from './components/ui/VInput.vue'
import CurrencyMenu from './components/CurrencyMenu.vue'
import CurrencyCount from './components/CurrencyCount.vue'
import CurrencyExchangeRate from './components/CurrencyExchangeRate.vue'
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
