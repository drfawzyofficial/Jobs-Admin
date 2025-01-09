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
                                    to="/students/contacts"><img src="../../../assets/img/icons/users1.svg"
                                        alt="img"><span>
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
                                <li class="breadcrumb-item active">مراجعات الفرص</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-6 mt-4" v-if="reviews.length > 0"
                        v-for="(review, index) in reviews" :key="index">
                        <div class="review bg-white position-relative p-3 rounded shadow-sm">
                            <p>{{ review.comment }}</p>
                            <div class="rating mt-2">
                                <span v-for="star in 5" :key="star"
                                    :class="['star', { gold: star <= review.stars }]">
                                    ★
                                </span>
                            </div>
                            <h6 class="fw-bold mt-2">{{  review._studentID.first_name + " " + review._studentID.last_name}}</h6>

                            <div class="btn-actions mt-3">
                                <button type="button" class="btn btn-store" @click="AcceptReview(review._id)">
                                    <span>موافقة</span>
                                    <span class="material-symbols-outlined align-middle">
                                        send
                                    </span>
                                </button>
                                <button type="button ms-1" class="btn btn-danger ms-2"
                                    @click="DeleteReview(review._id)">
                                    <span>حذف</span>
                                    <span class="material-symbols-outlined align-middle">
                                        delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-else class="col-12 mt-4">
                        <div class="alert alert-info">
                            <h5>لا يوجد تقييمات</h5>
                            <p>قم بزيارة الفرص وتصفحها <router-link class="btn btn-sm btn-primary"
                                    to="/chances/manage">زيارة الفرص</router-link></p>
                        </div>
                    </div>
                </div>
                <div class="mt-4 d-flex justify-content-center" v-if="reviewsCount > 1">
                        <paginate :page-count="reviewsCount" :click-handler="clickCallback" :prev-text="'السابق'"
                            :next-text="'التالي'" :container-class="'pagination'" :page-class="'page-item'">
                        </paginate>
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
import { useRoute } from 'vue-router'

import Paginate from 'vuejs-paginate-next';

export default {
    name: 'ChanceReviews',
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
        const route = useRoute()
        const user = computed(() => store.state.Auth.user);
        const reviews = computed(() => store.state.Admin_Store.reviews);
        const reviewsCount = computed(() => store.state.Admin_Store.reviewsCount);
        const loading_status = computed(() => store.state.Collection.loading_status);
        store.dispatch("Auth/GetProfile")
        store.dispatch("Admin_Store/ReviewsGet", { page_no: 1, chance_id: route.params.id });
        const chances = computed(() => store.state.Auth.chances);
        const chancesCount = computed(() => store.state.Auth.chancesCount);
        const clickCallback = (pageNum) => store.dispatch("Admin_Store/ReviewsGet", { page_no: pageNum, chance_id: route.params.id });
        const DeleteReview = (review_id) => {
            store.dispatch("Admin_Store/DeleteReview", { chance_id: route.params.id, review_id: review_id })
        }
        const AcceptReview = (review_id) => {
            store.dispatch("Admin_Store/AcceptReview", { chance_id: route.params.id, review_id: review_id })
        }
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }


        // Return
        return {
            loading_status,
            AdminLogout,
            user,
            clickCallback,
            reviews,
            reviewsCount,
            DeleteReview,
            AcceptReview
        }
    }
}
</script>
<!-- Script -->

<!-- Style -->
<style scoped>
.pagination {
    justify-content: center;
}

.pagination .page-item:last-child .page-link {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.rating {
    display: flex;
    align-items: center;
}

.star {
    font-size: 2rem;
    color: gray;
    /* Default color for stars */
    transition: color 0.3s;
}

.star.gold {
    color: gold;
}

</style>
<!-- Style -->