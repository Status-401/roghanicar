<template>
    <section class="relative -mt-5 grid place-items-center">
        <the-countdown
            :year="2023"
            :month="2"
            :date="25"
            :hour="8"
            :minute="0"
            :second="0"
            :millisecond="0"
        ></the-countdown>
        <nuxt-img
            src="/images/brands/توتال.png"
            alt="توتال"
            preload
            sizes="sm:300px md:424px"
            quality="10"
            class="absolute bottom-0 right-0 z-[1]"
        />
        <nuxt-img
            src="/images/brands/کاسترول.png"
            alt="کاسترول"
            preload
            sizes="90px sm:100px"
            quality="10"
            class="absolute -top-8 right-10 left-10 z-[1] rotate-12"
        />
    </section>
</template>
