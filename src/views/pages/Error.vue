<!-- Template -->
<template>
    <!-- Error Page -->
    <div class="error-page">
        <div class="main-wrapper">
            <div class="error-box">
                <h1>404</h1>
                <h3 class="h2 mb-3"><i class="fas fa-exclamation-circle"></i><span class="ms-2">خطأ404</span></h3>
                <p class="h4 font-weight-normal">هذه الصفحة غير صالحة</p>
                <router-link to="/" class="btn btn-store">
                    <span>الرئيسية</span>
                    <span class="material-symbols-outlined align-middle ms-1">
                        home
                    </span>
                </router-link>
            </div>
        </div>
        <!-- Error Page -->
    </div>
</template>
<!-- Template -->

<!-- Script -->
<script>
export default {
    setup() {
        // useStore Calling
        return {
        }
    },
}
</script>
<!-- Script -->