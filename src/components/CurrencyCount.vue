<template>
    <div :class="$style.currencyCount">
        <v-input v-model="count" :class="$style.input" />
        <div :class="$style.currency" v-text="currency" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import VInput from './ui/VInput.vue'

const props = defineProps({
    modelValue: {
        type: Number,
        default: 1,
    },
    currency: {
        type: String,
        required: true,
    },
})

const emit = defineEmits(['update:modelValue', 'update'])

const count = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
        emit('update')
    },
})
</script>

<style lang="scss" module>
.currencyCount {
    display: flex;
    align-items: center;

    & > .input {
        flex: 1 1 auto;

        margin-right: 0.5rem;
        text-align: right;
    }

    & > .currency {
        font-size: var(--text-lg);
        text-transform: uppercase;

        color: var(--gray-200);

        user-select: none;
    }
}
</style>
