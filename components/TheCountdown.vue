<template>
    <div
        dir="ltr"
        class="relative z-[2] mb-14 grid w-full grid-cols-4 place-items-center gap-y-2 rounded-xl bg-white pt-6 pb-4 text-orange-500 shadow-xl shadow-black/25"
    >
        <!-- Counter -->
        <p class="text-4xl font-black text-orange-900">
            {{ displayDays }}
        </p>
        <p class="text-4xl font-black text-orange-900">
            {{ displayHours }}
        </p>
        <p class="text-4xl font-black text-orange-900">
            {{ displayMinutes }}
        </p>
        <p class="text-4xl font-black text-orange-900">
            {{ displaySeconds }}
        </p>
        <!--/ Counter -->
        <!-- Label -->
        <p class="text-base font-bold sm:text-lg">روز</p>
        <p class="text-base font-bold sm:text-lg">ساعت</p>
        <p class="text-base font-bold sm:text-lg">دقیقه</p>
        <p class="text-base font-bold sm:text-lg">ثانیه</p>
        <!--/ Label -->
    </div>
</template>

<script>
export default {
    props: [
        "year",
        "month",
        "date",
        "hour",
        "minute",
        "second",
        "millisecond",
        "class",
    ],
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
    }),
    computed: {
        _seconds() {
            return 1000;
        },
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month,
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        },
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum: (num) => (num < 10 ? "0" + num : num),
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    return "End";
                }
                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor(
                    (distance % this._hours) / this._minutes
                );
                const seconds = Math.floor(
                    (distance % this._minutes) / this._seconds
                );
                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
            }, 1000);
        },
    },
};
</script>

<style lang="scss" scoped></style>
