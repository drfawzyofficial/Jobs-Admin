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
                            <li class="breadcrumb-item active">إدارة المسئول</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="p-3 bg-white rounded border shadow-sm">
                        <h4 class="fw-bold">إضافة بيانات</h4>
                        <p class="mt-2">أضف بيانات كاسم التصنيف وجنسية المتقدم والمرحلة التعليمية وعمر المتقدم</p>
                        <div class="row mt-3">
                            <div class="col-md-4">
                                <input class="form-control form-control-lg" type="text" placeholder="اسم التصنيف"
                                    v-model="payload.chanceCategory">
                            </div>
                            <div class="col-md-4 mt-3 mt-md-0">
                                <input class="form-control form-control-lg" type="text" placeholder="اسم التصنيف الفرعي"
                                    v-model="payload.chanceSubcategory">
                            </div>
                            <div class="col-md-4 mt-3 mt-md-0">
                                <input class="form-control form-control-lg" type="text" placeholder="المرحلة التعليمية"
                                    v-model="payload.applicantEdu">
                            </div>
                            <div class="col-12 mt-3">
                                <button type="button" class="btn btn-store" @click="addchanceCategory()">
                                    <span>إضافة</span>
                                    <span class="material-symbols-outlined align-middle fs-4 ms-1" v-if="!loading_status">
                                        add
                                    </span>
                                    <span v-else class="spinner-border spinner-border-sm ms-1" role="status"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="p-3 bg-white rounded border shadow-sm">
                        <h4 class="fw-bold">التصنيف الرئيسي</h4>
                        <div class="table-responsive mt-3">
                                <table class="table text-center">
                                    <thead class="table-light">
                                        <tr>
                                            <th scope="col">التسلسل</th>
                                            <th scope="col">اسم التصنيف</th>
                                            <th scope="col">حذف التصنيف</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(chanceCategory, index) in helperObj.chanceCategories" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ chanceCategory }}</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-danger"
                                                    @click="deletechanceCategory(chanceCategory)">
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
                <div class="col-md-4 mt-3 mt-md-0">
                    <div class="p-3 bg-white rounded border shadow-sm">
                        <h4 class="fw-bold">التصنيف الفرعي</h4>
                        <div class="table-responsive mt-3">
                                <table class="table text-center">
                                    <thead class="table-light">
                                        <tr>
                                            <th scope="col">التسلسل</th>
                                            <th scope="col">رقم الفرصة الفرعي</th>
                                            <th scope="col">حذف الفرصة</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(chanceSubcategory, index) in helperObj.chanceSubcategories" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ chanceSubcategory }}</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-danger"
                                                    @click="deletechanceSubcategory(chanceSubcategory)" :disabled="chanceSubcategory === 'التصنيف الفرعي'">
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
                <div class="col-md-4 mt-3 mt-md-0">
                    <div class="p-3 bg-white rounded border shadow-sm">
                        <h4 class="fw-bold">المرحلة التعليمية</h4>
                        <div class="table-responsive mt-3">
                                <table class="table text-center">
                                    <thead class="table-light">
                                        <tr>
                                            <th scope="col">التسلسل</th>
                                            <th scope="col">اسم المرحلة</th>
                                            <th scope="col">حذف المرحلة</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(applicantEdu, index) in helperObj.applicantEdus" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ applicantEdu }}</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-danger"
                                                    @click="deleteApplicantEdu(applicantEdu)" :disabled="applicantEdu === 'المرحلة'">
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
        const loading_status = computed(() => store.state.Collection.loading_status);
        const payload = ref({
            chanceCategory: "",
            chanceSubcategory: "",
            applicantEdu: "",
        });
        store.dispatch("Auth/GetProfile")
        store.dispatch("Collection/GetHelper")
        const helperObj = computed(() => store.state.Collection.helperObj);
        const addchanceCategory = () => {
            store.dispatch("Admin_Store/helperPost", payload.value)
        }
        const deletechanceCategory = (chanceCategory) => {
            store.dispatch("Collection/deletechanceCategory", { chanceCategory })
        }
        const deletechanceSubcategory = (chanceSubcategory) => {
            store.dispatch("Collection/deletechanceSubcategory", { chanceSubcategory })
        }
        const deleteApplicantEdu = (applicantEdu) => {
            store.dispatch("Collection/deleteApplicantEdu", { applicantEdu })
        }

        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }
        // Return
        return {
            loading_status,
            payload,
            addchanceCategory,
            helperObj,
            deletechanceCategory,
            deletechanceSubcategory,
            deleteApplicantEdu,
            AdminLogout
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