<template>
    <component :is="props.as" :class="$style.vCard">
        <slot />
    </component>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    as: {
        type: String,
        default: 'div',
    },
})
</script>

<style lang="scss" module>
.vCard {
    padding: 1.1rem 2rem;

    border-radius: var(--rounded);
    box-shadow: var(--shadow);
}
</style>
