<template>
    <input v-model="value" :class="$style.vInput" />
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})
</script>

<style lang="scss" module>
.vInput {
    font-size: var(--text-lg);
    color: var(--black);

    border: none;
    outline: none;

    border-bottom: 1px solid var(--gray-100);
}
</style>
