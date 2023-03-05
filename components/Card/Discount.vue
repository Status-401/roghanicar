<template>
    <section class="relative grid place-items-center">
        <header
            class="relative z-[2] mb-14 mt-10 grid w-full place-items-center gap-y-6 rounded-xl bg-white/10 pb-4 pt-2 shadow-xl shadow-black/25 backdrop-blur-sm sm:mb-20 sm:mt-8"
        >
            <h2
                class="mx-auto w-fit text-lg font-extrabold leading-8 text-neutral-700 sm:text-2xl sm:leading-10"
            >
                ولی،<br />اگه الان
                <span class="text-orange-900">ثبت نام</span> کنی،<br />تا
                <span class="text-orange-900"> آخره فروردین </span> بهت تا
                <span class="text-orange-900">25% تخفیف</span>
                میدیم.
            </h2>
        </header>
        <nuxt-img
            src="/images/brands/کاسپین.png"
            alt="کاسپین"
            preload
            quality="20"
            sizes="125px sm:125px lg:200px"
            class="absolute -bottom-2 sm:-bottom-4 left-0 z-[1]"
        />
        <nuxt-img
            src="/images/brands/اسپیدی.png"
            alt="اسپیدی"
            preload
            quality="20"
            sizes="200px sm:200px"
            class="absolute top-0 right-40 z-[1] sm:-top-2 sm:right-52"
        />
    </section>
</template>
