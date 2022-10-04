<template>
    <v-card :class="$style.currencyExchangeRateItem">
        <div :class="$style.from">
            <span :class="$style.count" v-text="from.count" />
            <span :class="$style.currency" v-text="from.currency" />
        </div>

        <div :class="$style.to">
            <span :class="$style.rate" v-text="toRate" />
            <span :class="$style.currency" v-text="to.currency" />
        </div>
    </v-card>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import VCard from './ui/VCard.vue'

const props = defineProps({
    from: {
        type: Object,
        required: true,
    },
    to: {
        type: Object,
        required: true,
    },
})

const toRate = computed(() => (props.to.rate * props.from.count).toFixed(2))
</script>

<style lang="scss" module>
.currencyExchangeRateItem {
    font-weight: 300;
    overflow-x: auto;

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
        & > .rate {
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
