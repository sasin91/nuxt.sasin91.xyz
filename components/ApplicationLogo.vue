<template>
    <CldImage
        src="Emne_amvmxw"
        alt="Image of me"
        responsive
        placeholder
        lazyload
        :width="width"
        :height="height"
        :radius="radius"
    />
</template>

<script setup lang="ts">
const { width, height, radius } = defineProps({
    width: {
        type: Number,
        default: 64,
    },
    height: {
        type: Number,
        default: 64,
    },
    radius: {
        type: Number,
        default: 25,
    },
});
</script>