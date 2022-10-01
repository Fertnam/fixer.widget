<template>
    <v-card :class="$style.currencyExchangeRateItem">
        <div :class="$style.from">
            <span :class="$style.count">5</span>
            <span :class="$style.currency">EUR =</span>
        </div>

        <div :class="$style.to">
            <span :class="$style.count">409,37</span>
            <span :class="$style.currency">RUB</span>
        </div>
    </v-card>
</template>

<script setup>
import VCard from './ui/VCard.vue'
</script>

<style lang="scss" module>
.currencyExchangeRateItem {
    font-weight: 300;

    & > .from {
        margin-bottom: 1.5rem;
        font-size: var(--text-xl);

        & > .count {
            margin-right: 0.4rem;
        }

        & > .currency {
            color: var(--gray-200);
            user-select: none;
        }
    }

    & > .to {
        & > .count {
            margin-right: 0.4rem;
            font-size: var(--text-2xl);
        }

        & > .currency {
            vertical-align: baseline;
            font-size: var(--text-xl);

            user-select: none;
        }
    }
}
</style>
