<template>
    <section class="relative grid place-items-center">
        <header
            class="relative z-[2] mb-20 mt-8 grid w-full place-items-center gap-y-6 rounded-xl bg-white py-4 shadow-xl shadow-black/25 sm:mb-20"
        >
            <figure>
                <nuxt-img
                    src="/images/logo.png"
                    alt="روغنی کار"
                    preload
                    sizes="sm:300px md:424px"
                    quality="75"
                />
            </figure>
            <h1 class="text-base font-extrabold text-orange-500 sm:text-2xl">
                اولین فروشگاه اینترنتی روغن و فیلتر خودرو
            </h1>
        </header>
        <nuxt-img
            src="/images/brands/الف.png"
            alt="الف"
            preload
            sizes="100px sm:150px"
            quality="20"
            class="absolute top-0 right-0 z-[1]"
        />
        <nuxt-img
            src="/images/brands/سرکان.png"
            alt="سرکان"
            preload
            sizes="100px sm:150px"
            quality="20"
            class="absolute bottom-0 left-10 z-[1]"
        />
    </section>
</template>
