<script setup>
useHead({
    title: "🧡روغنی کار🧡",
});
</script>

<template>
    <main class="mx-auto flex min-h-screen max-w-md flex-col px-4 pb-20 sm:max-w-lg">
        <card-logo></card-logo>
        <card-timer></card-timer>
        <card-discount></card-discount>
        <the-form></the-form>
        <section class="mx-auto mt-16 flex w-fit flex-col items-start">
            <h6 class="text-xl font-extrabold text-neutral-500 sm:text-4xl">
                جهت همکاری با ما:
            </h6>
            <p
                dir="ltr"
                class="mt-2 bg-gradient-to-l from-neutral-700 to-neutral-600 bg-clip-text text-5xl font-black text-transparent sm:mt-5 sm:text-6xl"
            >
                0920 287 0073
            </p>
        </section>
    </main>
</template>
