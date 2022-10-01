<template>
    <button :class="$style.vButton">
        <slot />
    </button>
</template>

<script setup></script>

<style lang="scss" module>
.vButton {
    padding: 0.8rem 1.5rem;

    background-color: var(--white);

    text-transform: uppercase;
    font-weight: 300;

    border: none;
    outline: none;

    border-radius: var(--rounded);
    box-shadow: var(--shadow);

    cursor: pointer;
    user-select: none;

    &:disabled {
        color: var(--gray-300);
        background-color: var(--gray-50);
    }
}
</style>
