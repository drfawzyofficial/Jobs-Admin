<!-- Global Loader Template -->
<template>
    <div id="global-loader">
        <div class="whirly-loader"></div>
    </div>
</template>
<!-- Global Loader Template -->

<!-- Script -->
<script>
import { onMounted } from 'vue';
export default {
    setup() {
        onMounted(() => {
            setTimeout(function () {
                $('#global-loader');
                setTimeout(function () {
                    $("#global-loader").fadeOut("slow");
                }, 100);
            }, 500);
        })
    },
}
</script>
<!-- Script -->
