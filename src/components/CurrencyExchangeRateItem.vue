<template>
    <v-card :class="$style.currencyExchangeRateItem">
        <div :class="$style.from">
            <span :class="$style.count" v-text="from.count" />
            <span :class="$style.currency" v-text="from.currency" />
        </div>

        <div :class="$style.to">
            <span :class="$style.count" v-text="to.count" />
            <span :class="$style.currency" v-text="to.currency" />
        </div>
    </v-card>
</template>

<script setup>
import { defineProps } from 'vue'
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
