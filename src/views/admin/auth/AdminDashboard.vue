<!-- Admin Dashboard -->
<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left active">
                <router-link to="/dashboard" class="logo">
                    <img src="../../../assets/img/logo.png" title="Chances" alt="Chances">
                </router-link>
                <router-link to="/dashboard" class="logo-small">
                    <img src="../../../assets/img/logo.png" title="Chances" alt="Chances">
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
                                        src="../../../assets/img/icons/dashboard.svg" alt="img"><span>
                                        لوحة التحكم</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'ChancePublish' }"
                                    to="/chance/publish"><img src="../../../assets/img/icons/transfer1.svg"
                                        alt="img"><span>
                                        نشر فرصة</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'ChancesManagement' }"
                                    to="/chances/manage"><img src="../../../assets/img/icons/transcation.svg"
                                        alt="img"><span>
                                        إدارة الفرص</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminManagement' }"
                                    to="/admin/manage"><img src="../../../assets/img/icons/time.svg" alt="img"><span>
                                        إدارة المسئول</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'StudentsManagement' }"
                                    to="/students/manage"><img src="../../../assets/img/icons/edit-5.svg"
                                        alt="img"><span>
                                        إدارة الطلاب</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminsManagement' }"
                                    to="/admins/manage"><img src="../../../assets/img/icons/users1.svg" alt="img"><span>
                                        إدارة المسئولين</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'ContactsManagement' }"
                                    to="/students/contacts"><img src="../../../assets/img/icons/users1.svg" alt="img"><span>
                                        إدارة التواصل</span> </router-link>
                            </li>
                            <li>
                                <a @click="AdminLogout"><img src="../../../assets/img/icons/log-out.svg"
                                        alt="img"><span>
                                        تسجيل الخروج</span> </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </perfect-scrollbar>
        </div>
        <div class="page-wrapper">
            <div class="content">
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">لوحة التحكم</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/dashboard">لوحة التحكم</router-link></li>
                                <li class="breadcrumb-item active">الرئيسية</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 col-12">
                        <div class="dash-widget">
                            <div class="dash-widgetimg">
                                <span><img src="../../../assets/img/icons/airplay.svg" alt="img"></span>
                            </div>
                            <div class="dash-widgetcontent">
                                <h5><span class="counters" data-count="{{ statistics.admins_count }}">{{
                                    statistics.admins_count }}</span></h5>
                                <h6>عدد المسئولين</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-12">
                        <div class="dash-widget dash1">
                            <div class="dash-widgetimg">
                                <span><img src="../../../assets/img/icons/transcation.svg" alt="img"></span>
                            </div>
                            <div class="dash-widgetcontent">
                                <h5><span class="counters" data-count="{{ statistics.students_count }}">{{
                                    statistics.students_count }}</span></h5>
                                <h6>عدد الطلبة</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-12">
                        <div class="dash-widget dash2">
                            <div class="dash-widgetimg">
                                <span><img src="../../../assets/img/icons/scan.svg" alt="img"></span>
                            </div>
                            <div class="dash-widgetcontent">
                                <h5><span class="counters" data-count="{{ statistics.chances_count }}">{{
                                    statistics.chances_count }}</span></h5>
                                <h6>عدد الوظائف</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Main Wrapper -->
</template>
<!-- Admin Dashboard -->

<!-- Script -->
<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
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
        const user = computed(() => store.state.Auth.user);
        const statistics = computed(() => store.state.Auth.statistics);
        const loading_status = computed(() => store.state.Collection.loading_status);
        store.dispatch("Auth/GetProfile")
        store.dispatch("Auth/GetStatistics")
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }

        // Return
        return {
            loading_status,
            AdminLogout,
            statistics,
            user
        }
    }
}
</script>
<!-- Script -->

<!-- Style -->
<style scoped>
.adminDashboard_himg {
    height: 350px;
}
</style>
<!-- Style -->