<template>
    <div :class="$style.app">
        <header :class="$style.header">
            <h1 :class="$style.title">Курс EUR на 2020.01.19</h1>

            <nav :class="$style.menu">
                <button :class="$style.prev">&lt;</button>

                <div :class="$style.splide">
                    <splide :options="sliderOptions">
                        <splide-slide>
                            <div :class="$style.item">USD</div>
                        </splide-slide>

                        <splide-slide>
                            <div :class="$style.item">RUB</div>
                        </splide-slide>

                        <splide-slide>
                            <div :class="$style.item">HRK</div>
                        </splide-slide>

                        <splide-slide>
                            <div :class="$style.item">NOK</div>
                        </splide-slide>

                        <splide-slide>
                            <div :class="$style.item">JPY</div>
                        </splide-slide>

                        <splide-slide>
                            <div :class="[$style.item, $style.active]">EUR</div>
                        </splide-slide>

                        <splide-slide>
                            <div :class="$style.item">CAD</div>
                        </splide-slide>
                    </splide>
                </div>

                <button :class="$style.next">&gt;</button>
            </nav>
        </header>

        <main :class="$style.main">
            <div :class="$style.amount">
                <input v-model="amount" :class="$style.input" />
                <div :class="$style.val">EUR</div>
            </div>

            <div :class="$style.cards">
                <div :class="$style.item">
                    <div :class="$style.title">
                        <span :class="$style.amount">5</span>
                        <span :class="$style.val">EUR =</span>
                    </div>

                    <div :class="$style.result">
                        <span :class="$style.value">409,37</span>
                        <span :class="$style.val">RUB</span>
                    </div>
                </div>

                <div :class="$style.item">
                    <div :class="$style.title">
                        <span :class="$style.amount">5</span>
                        <span :class="$style.val">EUR =</span>
                    </div>

                    <div :class="$style.result">
                        <span :class="$style.value">409,37</span>
                        <span :class="$style.val">RUB</span>
                    </div>
                </div>

                <div :class="$style.item">
                    <div :class="$style.title">
                        <span :class="$style.amount">5</span>
                        <span :class="$style.val">EUR =</span>
                    </div>

                    <div :class="$style.result">
                        <span :class="$style.value">409,37</span>
                        <span :class="$style.val">RUB</span>
                    </div>
                </div>

                <div :class="$style.item">
                    <div :class="$style.title">
                        <span :class="$style.amount">5</span>
                        <span :class="$style.val">EUR =</span>
                    </div>

                    <div :class="$style.result">
                        <span :class="$style.value">409,37</span>
                        <span :class="$style.val">RUB</span>
                    </div>
                </div>
            </div>

            <div :class="$style.buttons">
                <button :class="$style.item" disabled>Назад</button>
                <button :class="$style.item">Далее</button>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const amount = ref(1)

const sliderOptions = reactive({
    type: 'slide',
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
</script>

<style lang="scss" module>
.app {
    & > .header {
        padding: 2rem 1.8rem 0;
        background-color: var(--yellow-50);

        & > .title {
            margin-bottom: 0.5rem;

            font-size: 21px;
            font-weight: 400;
        }

        & > .menu {
            display: flex;

            .splide {
                flex: 1 1 auto;
                overflow: hidden;
            }

            .item {
                padding: 1rem 0;
                border-radius: 12px 12px 0 0;

                text-align: center;

                color: var(--yellow-100);

                &.active {
                    color: var(--black);
                    background-color: var(--white);
                }
            }

            & > .prev,
            & > .next {
                background-color: transparent;
                border: none;
                outline: none;

                padding: 0 22px;

                color: var(--yellow-100);
            }
        }
    }

    & > .main {
        padding: 2rem 1.8rem;

        & > .amount {
            display: flex;
            align-items: center;

            width: fit-content;

            margin-bottom: 24px;
            margin-left: auto;

            & > .input {
                margin-right: 0.5rem;
                text-align: right;

                font-size: 1.2rem;
                color: var(--black);

                border: none;
                outline: none;

                border-bottom: 1px solid var(--gray-100);
                width: 120px;
            }

            & > .val {
                font-size: 1.2rem;
                text-transform: uppercase;

                color: var(--gray-200);
            }
        }

        & > .cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

            gap: 1.1rem;

            margin-bottom: 40px;

            & > .item {
                padding: 1.1rem 2rem;
                box-shadow: 0px 3px 6px 0px #9d9d9d29;

                border-radius: 12px;

                font-weight: 300;

                & > .title {
                    margin-bottom: 19px;
                    font-size: 24px;

                    & > .amount {
                        margin-right: 0.4rem;
                    }

                    & > .val {
                        color: var(--gray-200);
                    }
                }

                & > .result {
                    & > .value {
                        margin-right: 0.4rem;
                        font-size: 48px;
                    }

                    & > .val {
                        vertical-align: baseline;
                        font-size: 24px;
                    }
                }
            }
        }

        & > .buttons {
            display: flex;
            justify-content: center;

            gap: 1.1rem;

            & > .item {
                padding: 10px 24px;

                text-transform: uppercase;
                font-weight: 300;

                background-color: var(--white);

                border: none;
                outline: none;

                box-shadow: 0px 3px 6px 0px #9d9d9d29;

                border-radius: 12px;

                &:disabled {
                    background-color: var(--gray-50);
                    color: var(--gray-300);
                }
            }
        }
    }
}
</style>
