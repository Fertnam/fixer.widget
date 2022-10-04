<template>
    <component :is="props.as" :class="$style.currencyMenu">
        <div :class="$style.prev" @click="prev">
            <fa-icon icon="chevron-left" />
        </div>

        <div :class="$style.slider">
            <div v-if="loading" :class="$style.loading">Загрузка...</div>

            <splide v-else ref="slider" :options="sliderOptions">
                <splide-slide
                    v-for="(currency, abb) in currencies"
                    :key="abb"
                    :title="currency"
                    :class="[
                        $style.item,
                        { [$style.active]: activeCurrency === abb },
                    ]"
                    @click="activeCurrency = abb"
                >
                    {{ abb }}
                </splide-slide>
            </splide>
        </div>

        <div :class="$style.next" @click="next">
            <fa-icon icon="chevron-right" />
        </div>
    </component>
</template>

<script setup>
import {
    defineProps,
    defineEmits,
    reactive,
    ref,
    onMounted,
    computed,
} from 'vue'

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { useCurrencies } from '../composables/use-currencies'

const props = defineProps({
    modelValue: {
        type: [String, null],
        required: true,
    },
    as: {
        type: String,
        default: 'nav',
    },
})

const emit = defineEmits(['update:modelValue'])

// * Slider
const sliderOptions = reactive({
    perPage: 7,
    rewind: true,
    pagination: false,
    arrows: false,
    breakpoints: {
        650: {
            perPage: 3,
        },
    },
})

const slider = ref()

const prev = () => slider.value?.go('<')
const next = () => slider.value?.go('>')

// * Currency
const { currencies, loading, fetch } = useCurrencies()

const activeCurrency = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

const initActiveCurrency = () => {
    activeCurrency.value = Object.keys(currencies.value)[0]
}

onMounted(async () => {
    try {
        await fetch()
        initActiveCurrency()
    } catch (e) {
        console.error(e)
    }
})
</script>

<style lang="scss" module>
.currencyMenu {
    display: flex;
    color: var(--yellow-100);

    & > .slider {
        flex: 1 1 auto;
        overflow: hidden;

        .loading,
        .item {
            padding: 1rem 0;
            text-align: center;
        }

        .loading {
            user-select: none;
        }

        .item {
            border-radius: var(--rounded) var(--rounded) 0 0;
            cursor: pointer;

            &.active {
                color: var(--black);
                background-color: var(--white);
            }
        }
    }

    & > .prev,
    & > .next {
        display: flex;
        align-items: center;

        padding: 0 1rem;

        cursor: pointer;
    }
}
</style>
