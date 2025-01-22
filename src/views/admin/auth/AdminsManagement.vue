<!-- Admin Dashboard -->
<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left active">
                <router-link to="/dashboard" class="logo">
                    <img src="../../../assets/img/logo.png" title="Jobs" alt="Jobs">
                </router-link>
                <router-link to="/dashboard" class="logo-small">
                    <img src="../../../assets/img/logo.png" title="Jobs" alt="Jobs">
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
                                <router-link :class="{ 'active': currentPath == 'ChancePublish' }" to="/chance/publish"><img
                                        src="../../../assets/img/icons/transfer1.svg" alt="img"><span>
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
                                <li class="breadcrumb-item active">إضافة مسئولين</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="fw-bold">إضافة مسئول</h4>
                                <p class="mt-2">يمكنك إضافة الكثير من المسئولين</p>
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <input class="form-control form-control-lg" type="text" placeholder="الاسم"
                                            v-model="payload.fullname">
                                    </div>
                                    <div class="col-md-4 mt-3 mt-md-0">
                                        <input class="form-control form-control-lg" type="text"
                                            placeholder="البريد الإلكتروني" v-model="payload.email">
                                    </div>
                                    <div class="col-md-4 mt-3 mt-md-0">
                                        <input class="form-control form-control-lg" type="password"
                                            placeholder="كلمة السر" v-model="payload.password">
                                    </div>
                                    <div class="col-12 mt-3">
                                        <button type="button" class="btn btn-store" @click="addAdmin()"><span
                                               >إنشاء</span><span
                                                class="material-symbols-outlined align-middle fs-4 ms-1"> add_circle
                                            </span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="fw-bold">جميع المسئولين</h4>
                                <p class="mt-2">الحذف المسؤولين ماعدا أنتَ. يمكنك إدارتها بشكل كامل من حيث الحذف </p>
                                <div class="table-responsive mt-3">
                                    <table class="table text-center">
                                        <thead class="table-light">
                                            <tr>
                                                <th scope="col">اسم المسئول</th>
                                                <th scope="col">البريد الإلكتروني</th>
                                                <th scope="col">حذف المسئول</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="admins.length === 0">
                                                <td colspan="4">لا يوجد بيانات</td>
                                            </tr>
                                            <tr v-else v-for="(admin, index) in admins" :key="index">
                                                <td>{{ admin.fullname }}</td>
                                                <td>{{ admin.email }} </td>
                                                <td>
                                                    <button type="button" class="btn btn-sm btn-danger"
                                                        @click="deleteAdmin(admin._id)">
                                                        <span>حذف</span>
                                                        <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                            delete
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
import { computed, onMounted, ref } from 'vue'
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
        const loading_status = computed(() => store.state.Collection.loading_status);
        const payload = ref({
            fullname: "",
            email: "",
            password: "",
        });
        const admins = computed(() => store.state.Admin_Store.admins);
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }
        const addAdmin = () => {
            store.dispatch("Admin_Store/Signup", payload.value)
        }
        const deleteAdmin = (_id) => store.dispatch("Admin_Store/deleteAdmin", { _id: _id });
        store.dispatch("Admin_Store/adminsGet");

        // Return
        return {
            loading_status,
            user,
            payload,
            AdminLogout,
            addAdmin,
            admins,
            deleteAdmin
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