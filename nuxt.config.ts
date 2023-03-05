// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
    app: {
        head: {
            htmlAttrs: {
                dir: "rtl",
                lang: "fa-IR",
            },
        },
    },
    tailwindcss: {
        config: {
            content: ["./app.vue"],
            theme: {
                fontFamily: {
                    sans: "YBakh",
                },
                extend: {
                    colors: {
                        orange: {
                            900: "#FF4800",
                        },
                    },
                },
            },
            plugins: [],
        },
    },
});
