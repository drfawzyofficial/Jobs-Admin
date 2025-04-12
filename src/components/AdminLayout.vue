
<!-- Admin Template -->
<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left active">
                <router-link to="/dashboard" class="logo">
                    <img src="../assets/img/logo.png" title="khattit" alt="khattit">
                </router-link>
                <router-link to="/dashboard" class="logo-small">
                    <img src="../assets/img/logo.png" title="khattit" alt="khattit">
                </router-link>
            </div>
            <a id="mobile_btn" class="mobile_btn" href="#sidebar">
                <span class="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </div>
        <div class="sidebar" id="sidebar">
            <perfect-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
                <div class="sidebar-inner slimscroll">

                    <div id="sidebar-menu" class="sidebar-menu">
                        <ul>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminDashboard' }" to="/dashboard"><img
                                        src="../assets/img/icons/dashboard.svg" alt="img"><span>
                                        لوحة التحكم</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'jobPublish' }" to="/job/publish"><img
                                        src="../assets/img/icons/transfer1.svg" alt="img"><span>
                                        نشر فرصة</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'JobsManagement' }"
                                    to="/jobs/manage"><img src="../assets/img/icons/transcation.svg" alt="img"><span>
                                        إدارة الوظائف</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminManagement' }"
                                    to="/admin/manage"><img src="../assets/img/icons/time.svg" alt="img"><span>
                                        إدارة المسؤول </span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'StudentsManagement' }"
                                    to="/students/manage"><img src="../assets/img/icons/edit-5.svg" alt="img"><span>
                                        إدارة الطلاب</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminsManagement' }"
                                    to="/admins/manage"><img src="../assets/img/icons/users1.svg" alt="img"><span>
                                        إدارة المسؤولين</span> </router-link>
                            </li>
                            <li>
                                <a @click="AdminLogout"><img src="../assets/img/icons/log-out.svg" alt="img"><span>
                                         تسجيل الخروج</span> </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </perfect-scrollbar>
        </div>
        <div class="page-wrapper">
            <slot></slot>
        </div>
    </div>
    <!-- Main Wrapper -->
</template>
<!-- Admin Template  -->

<!-- Script -->
<script>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { onMounted } from 'vue';
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    components: {
        PerfectScrollbar,
    },
    components: {},
    setup() {
        // onMounted
        onMounted(() => {
            // Window Resize
            $(window).resize(function () {
                if ($('.page-wrapper').length > 0) {
                    var height = $(window).height();
                    $(".page-wrapper").css("min-height", height);
                }
            });
            // Mobile menu sidebar overlay
            if (!$(".sidebar-overlay")[0]) {
                $('body').append('<div class="sidebar-overlay"></div>');
            }
            $("body").removeClass('slide-nav');
            $('.sidebar-overlay').removeClass('opened');
            $(document).on('click', '#mobile_btn', () => {
                $("body").addClass('slide-nav');
                $('.sidebar-overlay').addClass('opened');
                return false;
            });
            // Mobile User Menu
            $(document).on('click', '.mobile-user-menu .nav-link', () => {
                $(".dropdown-menu ").toggleClass("show");
            });
        });

        // Calling, Declarations, Data
        const store = useStore()
        const route = useRoute()
        const selectedLanguage = localStorage.getItem('lang');
        const isDropdownOpened = ref(false)
        const settings = reactive({
            suppressScrollX: true,
        })
        const activeClass = ref('active');
        const user = computed(() => store.state.Auth.user);

        // Methods
        const toggleDropdown = () => {
            isDropdownOpened.value = !isDropdownOpened.value
        }
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }
        const changeLanguage = (locale) => {
            localStorage.setItem('lang', locale);
            window.location.reload()
        }
        const currentPath = computed(() => {
            return route.name
        })

        // Return
        return {
            selectedLanguage,
            isDropdownOpened,
            settings,
            activeClass,
            currentPath,
            user,
            changeLanguage,
            toggleDropdown,
            AdminLogout,
            toggleDropdown,
        }
    }
}
</script>
<!-- Script -->

<!-- Style -->
<style scoped>
.scroll-area {
    position: relative;
    margin: auto;
    height: calc(100vh - 30px);
}
</style>
<!-- Style -->

