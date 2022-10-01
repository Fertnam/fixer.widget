<template>
    <div :class="$style.currencyExchangeRate">
        <div :class="$style.items">
            <currency-exchange-rate-item v-for="index in 24" :key="index" />
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
    </div>
</template>

<script setup>
import CurrencyExchangeRateItem from './CurrencyExchangeRateItem.vue'
import VButton from './ui/VButton.vue'
</script>

<style lang="scss" module>
.currencyExchangeRate {
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
