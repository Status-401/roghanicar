<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { string } from "yup";

const SUBMITTED = useCookie("SUBMITTED");

const VALID_PHONE = string()
    .min(11, "خطا: شماره وارد شده اشتباه است")
    .max(11, "خطا: شماره وارد شده اشتباه است.")
    .matches(/^\d+$/, "خطا: شماره وارد شده اشتباه است.")
    .required("خطا: لطفا شماره تلفن خود را وارد کنید.");

// Handler
const areYouSure = ref(false);
const userPhone = ref("");
function yesImSure({ user_phone }) {
    areYouSure.value = true;
    userPhone.value = user_phone;
}
async function SUBMIT_PHONE(user_phone) {
    try {
        await $fetch("/api", {
            method: "POST",
            body: {
                user_phone,
            },
        });
        SUBMITTED.value = true;
    } catch (err) {
        console.error(err);
    }
}
</script>

<template>
    <section v-if="!SUBMITTED" class="relative w-full">
        <Form
            @submit="yesImSure"
            v-slot="{ meta }"
            class="mt-5 mb-16 grid grid-cols-[25%_75%] items-stretch justify-items-stretch sm:mb-20"
        >
            <button
                type="submit"
                :disabled="!(meta.dirty && meta.valid)"
                class="z-10 h-full rounded-r-lg bg-gradient-to-tl from-orange-900 to-orange-500 text-sm font-bold text-white shadow-xl shadow-orange-900/50 disabled:from-neutral-400 disabled:to-neutral-200 disabled:text-neutral-500 disabled:shadow-neutral-400"
            >
                ثبت نام
            </button>
            <Field
                name="user_phone"
                type="number"
                placeholder="مثلا: 6789 345 0912"
                autocomplete="off"
                dir="ltr"
                @focus="(e) => e.target.select()"
                :rules="VALID_PHONE"
                class="z-10 rounded-l-lg bg-white pt-3 pb-2 text-center text-base font-bold tracking-widest text-neutral-700 shadow-xl shadow-black/25 outline-none placeholder:tracking-normal placeholder:text-neutral-500 placeholder:duration-200 focus:placeholder:text-transparent"
            />
            <ErrorMessage
                name="user_phone"
                class="col-span-2 mt-5 mb-8 w-full text-center font-bold text-red-500"
            />
        </Form>
        <nuxt-img
            src="/images/brands/بهران.png"
            alt="بهران"
            preload
            quality="20"
            sizes="150px sm:150px lg:200px"
            class="absolute bottom-0 right-20 z-[1] sm:right-40"
        />
        <teleport to="body">
            <Transition>
                <div
                    v-if="areYouSure"
                    @click.self="areYouSure = false"
                    class="fixed top-0 right-0 z-[200] grid h-full min-h-screen w-full place-items-center bg-black/70 px-4 sm:px-0"
                >
                    <div
                        class="w-full max-w-md overflow-hidden rounded-xl bg-white pt-4"
                    >
                        <div class="flex w-full flex-col px-4">
                            <p class="font-bold text-neutral-700">
                                شماره وارد شده:
                            </p>
                            <p
                                class="mt-4 w-full rounded-lg bg-neutral-200 pt-2 pb-1 text-center text-base font-bold tracking-widest text-neutral-600"
                            >
                                {{ userPhone }}
                            </p>
                        </div>
                        <button
                            @click="SUBMIT_PHONE(userPhone)"
                            class="mt-6 w-full bg-gradient-to-l from-orange-900 to-orange-500 pt-2 pb-1 text-center text-base font-medium text-white"
                        >
                            شمارم رو تایید می‌کنم
                        </button>
                    </div>
                </div>
            </Transition>
        </teleport>
    </section>
    <div
        v-if="SUBMITTED"
        class="mt-5 w-full rounded-lg bg-gradient-to-l from-orange-900 to-orange-500 pt-3 pb-2 text-center text-base font-bold text-white shadow-xl shadow-orange-900/50"
    >
        <span class="text-lg">✅</span>ثبت نام شدید
    </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 500ms ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
