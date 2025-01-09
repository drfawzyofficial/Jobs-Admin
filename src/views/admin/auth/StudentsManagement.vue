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
                                <li class="breadcrumb-item active">إدارة الطلاب</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="fw-bold">جميع الطلاب</h4>
                                <div class="table-responsive mb-3 mt-3">
                                    <table class="table text-center">
                                        <thead class="table-light">
                                            <tr>
                                                <th scope="col">اسم الطالب</th>
                                                <th scope="col">البريد الإلكتروني</th>
                                                <th scope="col">الصورة الشخصية</th>
                                                <th scope="col">حالة الدخول</th>
                                                <th scope="col">حالة التفعيل</th>
                                                <th scope="col">تاريخ الميلاد</th>
                                                <th scope="col">الجنس</th>
                                                <th scope="col">العمر</th>
                                                <th scope="col">المرحلة</th>
                                                <th scope="col">إرسال رسالة</th>
                                                <th scope="col">حذف الطالب</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="students.length === 0">
                                                <td colspan="12">لا يوجد بيانات</td>
                                            </tr>
                                            <tr v-else v-for="(student, index) in students" :key="index">
                                                <td>{{ student.first_name + " " + student.last_name }}</td>
                                                <td>{{ student.email }} </td>
                                                <td><img height="50" width="50" class="border shadow-sm rounded-circle"
                                                        :src="student.avatar" /></td>
                                                <td>{{ student.online === true ? "أونلاين" : "أوفلاين" }}</td>
                                                <td>{{ student.is_verified === true ? "مفعل" : "غير مفعل" }}</td>
                                                <td>{{ student.dOB ? student.dOB : "لا يوجد" }}</td>
                                                <td>{{ student.gender ? student.gender : "لا يوجد" }}</td>
                                                <td>{{ student.applicantAge ? student.applicantAge : "لا يوجد" }}</td>
                                                <td>{{ student.applicantEdu ? student.applicantEdu : "لا يوجد" }}</td>
                                                <td>
                                                    <button type="button" class="btn btn-sm btn-store ms-1"
                                                        @click="openMessageModal(student._id)">
                                                        <span>فتح</span>
                                                        <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                            mail
                                                        </span>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-sm btn-danger"
                                                        @click="deleteStudent(student._id)">
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
                                <div class="mt-4 d-flex justify-content-center" v-if="studentsCount > 1">
                                <paginate :page-count="studentsCount" :click-handler="clickCallback"
                                    :prev-text="'السابق'" :next-text="'التالي'" :container-class="'pagination'"
                                    :page-class="'page-item'">
                                </paginate>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Message Modal -->
                <div class="modal fade" ref="modalMessage">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="messageTitle">إرسال رسالة</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="message-form">
                                    <div class="mb-3">
                                        <textarea class="form-control" v-model="messagePayload.message" rows="5"
                                            placeholder="اكتب الرسالة التي تريد إرسالها إلى الطالب..."></textarea>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-store" @click="onSendMessage()">
                                            <span v-if="!loading_status"
                                                class="material-symbols-outlined align-middle ms-1 fs-6">
                                                send
                                            </span>
                                            <span v-else class="spinner-border spinner-border-sm ms-1"
                                                role="status"></span>
                                            إرسال
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Message Modal -->
            </div>
        </div>
    </div>
</template>
<!-- Admin Dashboard -->

<!-- Script -->
<script>
// Import Methods, Packages, Files
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import Paginate from 'vuejs-paginate-next';
import { Modal } from 'bootstrap';

export default {
    components: {
        Paginate
    },
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
        const studentsCount = computed(() => store.state.Admin_Store.studentsCount);
        const students = computed(() => store.state.Admin_Store.students);
        const messagePayload = ref({
            _id: "",
            message: ""
        });
        const modalMessage = ref(null);
        store.dispatch("Auth/GetProfile")
        store.dispatch("Admin_Store/studentsGet", { page_no: 1 });

        // Methods
        const clickCallback = (pageNum) => store.dispatch("Admin_Store/studentsGet", { page_no: pageNum });
        const deleteStudent = (_id) => store.dispatch("Admin_Store/deleteStudent", { _id: _id });
        const openMessageModal = (_id) => {
            messagePayload.value._id = _id;
            new Modal(modalMessage.value).show();
        }
        const closeMessageModal = () => Modal.getInstance(modalMessage.value)?.hide();
        const onSendMessage = (_id) => {
            store.dispatch("Admin_Store/sendMessage", messagePayload.value);
        }
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }

        // Return
        return {
            loading_status,
            studentsCount,
            messagePayload,
            modalMessage,
            students,
            clickCallback,
            deleteStudent,
            openMessageModal,
            closeMessageModal,
            onSendMessage,
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