<template>
    <component :is="props.as" :class="$style.currencyMenu">
        <div :class="$style.prev" @click="prev">
            <fa-icon icon="chevron-left" />
        </div>

        <div :class="$style.slider">
            <splide ref="slider" :options="sliderOptions">
                <splide-slide
                    v-for="currency in currencies"
                    :key="currency"
                    :class="[
                        $style.item,
                        { [$style.active]: currency === 'AED' },
                    ]"
                >
                    {{ currency }}
                </splide-slide>
            </splide>
        </div>

        <div :class="$style.next" @click="next">
            <fa-icon icon="chevron-right" />
        </div>
    </component>
</template>

<script setup>
import { defineProps, reactive, ref, onMounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import axios from 'axios'

const props = defineProps({
    as: {
        type: String,
        default: 'div',
    },
})

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

const prev = () => slider.value.go('<')
const next = () => slider.value.go('>')

const currencies = ref([])

onMounted(async () => {
    const {
        data: { symbols },
    } = await axios.get('https://api.apilayer.com/fixer/symbols', {
        headers: {
            apikey: 'pXvXQ6at6MRMLBdMGYOpXaWSqHNsHsYF',
        },
    })

    currencies.value = Object.keys(symbols)
})
</script>

<style lang="scss" module>
.currencyMenu {
    display: flex;
    color: var(--yellow-100);

    & > .slider {
        flex: 1 1 auto;
        overflow: hidden;

        .item {
            padding: 1rem 0;
            border-radius: var(--rounded) var(--rounded) 0 0;

            text-align: center;

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
