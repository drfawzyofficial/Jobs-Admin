<!-- Template -->
<template>
    <!-- Account Page -->
    <div class="account-page">
        <div class="main-wrapper">
            <div class="account-content">
                <div class="login-wrapper">
                    <div class="login-content">
                        <div class="login-userset">
                            <div class="login-logo">
                                <img class="khattit-image rounded-circle" src="../../../assets/img/logo.png" alt="img">
                            </div>
                            <div class="login-userheading">
                                <h3>تسجيل الدخول</h3>
                            </div>
                            <form class="login" @submit.prevent="onLogin">
                                <div class="form-login">
                                    <input type="text" class="form-control form-control-lg" placeholder="البريد الإلكتروني"
                                        v-model="payload.email" />
                                </div>
                                <div class="form-login">
                                    <input type="password" class="form-control form-control-lg" placeholder="الرقم السري"
                                        v-model="payload.password" />
                                </div>
                                <div class="form-login">
                                    <button type="submit" class="btn btn-login">
                                        <span>تسجيل الدخول</span>
                                        <span class="material-symbols-outlined align-middle ms-1" v-if="!loading_status">
                                            login
                                        </span>
                                        <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="login-img">
                        <img src="../../../assets/img/jobs.png" alt="Light Image" title="Light Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Account Page -->
</template>
<!-- Template -->

<!-- Script -->
<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex';
import { reactive, computed } from 'vue';
export default {
    setup() {
        // Calling, Declarations, Data
        const store = useStore()
        const payload = reactive({
            fullname: "Turkey Admin",
            email: "",
            password: "",
            password_confirmation: ""
        })
        const loading_status = computed(() => store.state.Collection.loading_status);

        // Methods
        const onLogin = () => {
            store.dispatch("Auth/Login", payload)
        }
               
        // Return
        return {
            payload,
            loading_status,
            onLogin,
        }
    },
}
</script>
<!-- Script -->

<!-- Style -->
<style scoped>
.khattit-image {
    width: 150px;
}

.login-img {
    background-color: #ffebf6;
}
</style>
<!-- Style -->