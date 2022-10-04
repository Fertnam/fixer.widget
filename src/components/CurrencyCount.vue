<template>
    <div :class="$style.currencyCount">
        <v-input
            ref="input"
            v-model="count"
            type="number"
            :class="$style.input"
        />

        <div :class="$style.currency" v-text="currency" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue'
import VInput from './ui/VInput.vue'

const props = defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
    currency: {
        type: [String, null],
        required: true,
    },
})

const emit = defineEmits(['update:modelValue', 'update'])

const input = ref()

const count = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        const positiveNumber = /^[1-9]\d*$/

        // If it's not positive number then insert old value
        const newValue = positiveNumber.test(value) ? value : count.value

        input.value.$el.value = newValue

        emit('update:modelValue', newValue)
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
