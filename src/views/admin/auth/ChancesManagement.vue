<!-- Admin Dashboard -->
<template>
      <!-- Main Wrapper -->
      <div class="main-wrapper">
        <div class="header">
            <div class="header-left active">
                <router-link to="/dashboard" class="logo">
                    <img src="../../../assets/img/logo.png" title="chances" alt="chances">
                </router-link>
                <router-link to="/dashboard" class="logo-small">
                    <img src="../../../assets/img/logo.png" title="chances" alt="chances">
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
                            <li class="breadcrumb-item active">إدارة الفرص</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="fw-bold">بحث كامل</h4>
                            <p class="mt-2">يهدف البحث الكامل إلى تصفية كافة الفرص بشكل شامل. يمكنك إدخال بعض أو جميع المدخلات أدناه، ثم الضغط على زر البحث لتصفية الفرص المتاحة.</p>
                            <div class="row my-3">
                                <div class="col-lg-3 col-md-6 mt-3 mt-md-0">
                                    <select class="form-select form-select-lg" v-model="filter.programStatus">
                                        <option value="none">حالة البرنامج</option>
                                        <option value="حضوري">حضوري</option>
                                        <option value="عن بُعد">عن بُعد</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                    <select class="form-select form-select-lg" v-model="filter.chanceCategory">
                                        <option value="none">التصنيف الرئيسي</option>
                                        <option v-for="(val, index) in helperObj.chanceCategories" :key="index" :value="val">{{ val }}</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                    <select class="form-select form-select-lg" v-model="filter.chanceSubcategory">
                                        <option value="none">التصنيف الفرعي</option>
                                        <option v-for="(val, index) in helperObj.chanceSubcategories" :key="index" :value="val">{{ val }}</option>
                                    </select>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <button type="button" class="btn btn-store" @click="search()">
                                        <span>بحث</span>
                                        <span class="material-symbols-outlined align-middle">
                                          search
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <h4 class="fw-bold">جميع الفرص</h4>
                            <p class="mt-2">جميع الفرص التي تم نشرها من قبل المسئول. يمكنك إدارتها بشكل كامل من حيث التعديل والحذف</p>
                            <div class="table-responsive mb-3 mt-3">
                                <table class="table text-center">
                                    <thead class="table-light">
                                        <tr>
                                            <th scope="col">اسم الفرصة</th>
                                            <th scope="col">رابط الفرصة</th>
                                            <th scope="col">سعر الفرصة</th>
                                            <th scope="col">جهة الفرصة</th>
                                            <th scope="col">أولولة الفرصة</th>
                                            <th scope="col">حالة البرنامج</th>
                                            <th scope="col">التصنيف الأساسي</th>
                                            <th scope="col">التصنيف الفرعي</th>
                                            <th scope="col">بداية التسجيل</th>
                                            <th scope="col">نهاية التسجيل</th>
                                            <th scope="col">بداية الفرصة</th>
                                            <th scope="col">نهاية الفرصة</th>
                                            <th scope="col">صورة الفرصة</th>
                                            <th scope="col">المستندات</th>
                                            <th scope="col">الملاحظات</th>
                                            <th scope="col">مستوى الإنجليزية</th>
                                            <th scope="col">مستوى العقلية</th>
                                            <th scope="col">مستوى المنهج</th>
                                            <th scope="col">العمليات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="chances.length === 0">
                                            <td colspan="18">لا يوجد بيانات</td>
                                        </tr>
                                        <tr v-else v-for="(chance, index) in chances" :key="index">
                                            <td>{{ chance.chanceName }}</td>
                                            <td>
                                                <a :href="chance.chanceLink" v-if="chance.chanceLink" target="_blank">{{ chance.chanceLink
                                                }}</a>
                                                <span v-else>لا يوجد</span>
                                            </td>
                                            <td>{{ chance.chancePrice ? chance.chancePrice + " ريال" : 'لا يوجد' }}</td>
                                            <td>{{ chance.provider }}</td>
                                            <td>
                                                {{ chance.chancePriority == "saudi"? "سعوي الجنسية" : "للجميع" }}
                                            </td>
                                            <td>
                                                {{ chance.programStatus }}
                                                <div v-if="chance.programStatus == 'حضوري'">
                                                    <span class="ms-1" v-for="(val, index) in chance.cities" :key="index"
                                                    :value="val"> {{ val }} </span> 
                                                </div>
                                            </td>
                                            <td>{{ chance.chanceCategory }}</td>
                                            <td>{{ chance.chanceSubcategory }}</td>
                                            <td>{{ chance.chanceRegStartDate }}</td>
                                            <td>{{ chance.chanceRegEndDate }}</td>
                                            <td>{{ chance.chanceStartDate }}</td>
                                            <td>{{ chance.chanceEndDate }}</td>
                                            <td><img class="border shadow-sm" :src="chance.chanceImage" /></td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-store"
                                                    @click="openModalBox('المستندات', chance.documentsContent, true)">
                                                    <span>فتح</span>
                                                    <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                        open_in_new
                                                    </span>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-store"
                                                    @click="openModalBox('الملاحظات', chance.notesContent, true)">
                                                    <span>فتح</span>
                                                    <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                        open_in_new
                                                    </span>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-store"
                                                    @click="openModalBox('مستوى المهارة الإنجليزية', chance.EnglishStandard, false)">
                                                    <span>فتح</span>
                                                    <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                        open_in_new
                                                    </span>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-store"
                                                    @click="openModalBox('مستوى القدرة العقلية', chance.BrainStandard, false)">
                                                    <span>فتح</span>
                                                    <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                        open_in_new
                                                    </span>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-store"
                                                    @click="openModalBox('مستوى المنهج', chance.CurStandard, false)">
                                                    <span>فتح</span>
                                                    <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                        open_in_new
                                                    </span>
                                                </button>
                                            </td>
                                            <td>
                                                <router-link type="button" class="btn btn-sm btn-store text-white" :to="'/chance/reviews/' + chance._id">
                                                    <span>التقييمات</span>
                                                    <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                        stars
                                                    </span>
                                                </router-link>
                                                <button type="button" class="btn btn-sm btn-store ms-1"
                                                    @click="openEditModal(chance)">
                                                    <span>تعديل</span>
                                                    <span class="material-symbols-outlined align-middle ms-1 fs-6">
                                                        open_in_new
                                                    </span>
                                                </button>
                                                <button type="button" class="btn btn-sm btn-danger ms-1"
                                                    @click="deletechance(chance._id)">
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
                            <div class="mt-4 d-flex justify-content-center" v-if="chancesCount > 1">
                                <paginate :page-count="chancesCount" :click-handler="clickCallback" :prev-text="'السابق'"
                                :next-text="'التالي'" :container-class="'pagination'" :page-class="'page-item'">
                            </paginate>                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Content -->
            <div class="modal fade" ref="modalContentRef">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title fw-bold">{{ modalTitle }}</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body special" v-html="modalContent"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-danger" @click="closeModal()">
                                <span>إغلاق</span>
                                <span class="material-symbols-outlined align-middle">
                                    close
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Content -->

            <!-- Modal Edit -->
            <div class="modal fade" ref="modalEditRef">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">تعديل الفرصة</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12">
                                    <form-wizard stepSize="sm" color="#FAA633" ref="wizard">
                                        <tab-content title="تفاصيل الفرصة">
                                            <div class="chance-details bg-white rounded p-4 rounded-12 shadow-sm border">
                                                <div class="mb-3">
                                                    <input class="form-control form-control-lg" type="text"
                                                        placeholder="اسم الفرصة" v-model="chancePayload.chanceName">
                                                </div>
                                                <div class="mb-3">
                                                    <input class="form-control form-control-lg" type="text"
                                                        placeholder="رابط الفرصة" v-model="chancePayload.chanceLink">
                                                </div>
                                                <div class="mb-3">
                                                    <input class="form-control form-control-lg" type="text"
                                                        placeholder="سعر الفرصة" v-model="chancePayload.chancePrice">
                                                </div>
                                                <div class="mb-3">
                                                    <input class="form-control form-control-lg" type="text" placeholder="جهة الفرصة"
                                                        v-model="chancePayload.provider">
                                                </div>
                                                <div class="mb-3">
                                        <label for="chancePriority" class="form-label">صلاحية الفرصة</label>
                                        <div>
                                            <div class="form-check d-flex align-items-center">
                                                <input class="form-check-input" type="radio" name="chancePriority"
                                                    v-model="chancePayload.chancePriority" value="saudi">
                                                <label class="form-check-label ms-2 fs-6" for="chancePriority-site">
                                                    سعودي الجنسية
                                                </label>
                                            </div>
                                            <div class="form-check  d-flex align-items-center">
                                                <input class="form-check-input" type="radio" name="chancePriority"
                                                    v-model="chancePayload.chancePriority" value="all">
                                                <label class="form-check-label ms-2 fs-6" for="chancePriority-remote">
                                                     الجميع
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                                <div class="mb-3">
                                        <label for="programStatus" class="form-label">حالة البرنامج</label>
                                        <div>
                                            <div class="form-check d-flex align-items-center">
                                                <input class="form-check-input" type="radio" name="programStatus"
                                                    v-model="chancePayload.programStatus" value="حضوري">
                                                <label class="form-check-label ms-2 fs-6" for="programStatus-site">
                                                     حضوري
                                                </label>
                                            </div>
                                            <div class="form-check  d-flex align-items-center">
                                                <input class="form-check-input" type="radio" name="programStatus"
                                                    v-model="chancePayload.programStatus" value="عن بعد">
                                                <label class="form-check-label ms-2 fs-6" for="programStatus-remote">
                                                    عن بعد
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3" v-if="chancePayload.programStatus == 'حضوري'">
                                        <label for="programStatusAtt" class="form-label">المدينة</label>
                                        <div class="choose-city">
                                            <button type="button" class="btn btn-special m-2"
                                                v-for="(city, index) in cities" :key="index"
                                                @click="selectCity(city)"
                                                :class="{ 'btn-selected': chancePayload.cities.includes(city) }">{{
                                                    city }}
                                            </button>
                                        </div>
                                        <div class="mt-2">
                                            <button type="button" class="btn btn-store" @click="resetCities()">
                                                <span class="word">تصحيح</span>
                                                <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                                <div class="mb-3">
                                                    <select class="form-select form-select-lg"
                                                        v-model="chancePayload.chanceCategory">
                                                        <option value="none">التصنيف الرئيسي</option>
                                                        <option v-for="(val, index) in helperObj.chanceCategories" :key="index" :value="val">{{ val }}</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <select class="form-select form-select-lg"
                                                        v-model="chancePayload.chanceSubcategory">
                                                        <option value="none">التصنيف الفرعي</option>
                                                        <option v-for="(val, index) in helperObj.chanceSubcategories" :key="index" :value="val">{{ val }}</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="chanceRegStartDate" class="form-label">تاريخ بداية التسجيل</label>
                                                    <input class="form-control form-control-lg" type="date"
                                                        placeholder="تاريخ بداية التسجيل" v-model="chancePayload.chanceRegStartDate">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="chanceRegEndDate" class="form-label">تاريخ نهاية التسجيل</label>
                                                    <input class="form-control form-control-lg" type="date"
                                                        placeholder="تاريخ نهاية التسجيل" v-model="chancePayload.chanceRegEndDate">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="chanceStartDate" class="form-label">تاريخ بداية الفرصة</label>
                                                    <input class="form-control form-control-lg" type="date"
                                                        placeholder="تاريخ بداية الفرصة" v-model="chancePayload.chanceStartDate">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="chanceEndDate" class="form-label">تاريخ نهاية الفرصة</label>
                                                    <input class="form-control form-control-lg" type="date"
                                                        placeholder="تاريخ نهاية الفرصة" v-model="chancePayload.chanceEndDate">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="marketingDesc" class="form-label">وصف تسويقي</label>
                                                    <input class="form-control form-control-lg" type="text"
                                                        v-model="chancePayload.marketingDesc">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="marketingDesc" class="form-label">وصف الفرصة</label>
                                                    <textarea class="form-control" rows="3" v-model="chancePayload.chanceDesc"></textarea>
                                                </div>
                                                <div class="form-check mb-3">
                                                    <input class="form-check-input" type="checkbox" v-model="chancePayload.specialConditions" id="specialConditions">
                                                    <label class="form-check-label ms-1" for="specialConditions">
                                                        متطلب شروط خاصة للفرصة 
                                                    </label>
                                                </div>
                                                <div class="mb-3">
                                                    <button type="button" class="btn btn-store" @click="nextTab()">
                                                        <span>التالي</span>
                                                        <span class="material-symbols-outlined align-middle">
                                                            chevron_left
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </tab-content>
                                        <tab-content title="صورة الفرصة">
                                            <div class="chance-image bg-white rounded p-4 rounded-12 shadow-sm border">
                                                <div class="upload-btn-wrapper">
                                                    <button
                                                        class="btnUpload d-flex align-items-center justify-content-center">
                                                        <span>إضافة صورة</span>
                                                        <img class="ms-2" src="../../../assets/img/icons/image.svg"
                                                            height="27" width="27" />
                                                    </button>
                                                    <input type="file" name="imgFile" @change="onFileChange" />
                                                </div>
                                                <div class="image-preview text-center mt-3" v-if="imagePreview">
                                                    <img class="shadow-sm rounded-12" :src="imagePreview" height="250"
                                                        width="250" title="imagePreview" alt="imagePreview" />
                                                </div>
                                                <div class="mt-3">
                                                    <button type="button" class="btn btn-store" @click="nextTab()">
                                                        <span>التالي</span>
                                                        <span class="material-symbols-outlined align-middle">
                                                            chevron_left
                                                        </span>
                                                    </button>
                                                    <button type="button" class="btn btn-danger ms-2" @click="prevTab()">
                                                        <span>السابق</span>
                                                        <span class="material-symbols-outlined align-middle">
                                                            chevron_left
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </tab-content>
                                        <tab-content title="شروط المتقدم">
                                            <div
                                                class="applicant-conditions bg-white rounded p-4 rounded-12 shadow-sm border">
                                                <div class="mb-3">
                                                    <input class="form-control form-control-lg" type="text"
                                                        placeholder="عمر المتقدم" v-model="chancePayload.applicantAge">
                                                </div>
                                                <!-- <div class="mb-3">
                                                    <select class="form-select form-select-lg" v-model="chancePayload.applicantNat">
                                                        <option v-for="(val, index) in applicantNats" :key="index"
                                                            :value="val">{{ val }}</option>
                                                    </select>
                                                </div> -->
                                                <div class="mb-3">
                                                    <select class="form-select form-select-lg" v-model="chancePayload.applicantGender">
                                                       <option value="none">الجنس</option>
                                                       <option value="ذكر">ذكر</option>
                                                       <option value="أنثى">أنثى</option>
                                                       <option value="كلاهما">كلاهما</option>
                                                    </select>
                                                </div>
                                                <div class="applicantedus mb-3">
                                                    <label class="form-label">المرحلة التعلييمة</label>
                                                    <div class="choose-edu">
                                                        <button type="button" class="btn btn-special m-2"
                                                            v-for="(edu, index) in helperObj.applicantEdus" :key="index"
                                                            @click="selectEdus(edu)"
                                                            :class="{ 'btn-selected': chancePayload.applicantEdus.includes(edu) }">{{
                                                                edu }}
                                                        </button>
                                                    </div>
                                                    <div class="mt-2">
                                                        <button type="button" class="btn btn-store" @click="resetApplicantEdus()">
                                                            <span class="word">تصحيح</span>
                                                            <span class="material-symbols-outlined align-middle ms-1">
                                                                check
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                        <label class="form-label">تحديد مستوى الإنجليزية</label>
                                        <ul class="nav nav-tabs mt-2" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" data-bs-toggle="tab"
                                                    data-bs-target="#IELTS" id="IELTS-tab" type="button" role="tab"
                                                    aria-controls="home" aria-selected="true">IELTS</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOFEL"
                                                    id="TOFEL-tab" type="button" role="tab" aria-controls="TOFEL"
                                                    aria-selected="false">TOFEL</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOEIC"
                                                    type="button" role="tab" aria-controls="TOEIC"
                                                    aria-selected="false">TOEIC</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#DUOLINGO"
                                                    type="button" role="tab" aria-controls="DUOLINGO"
                                                    aria-selected="false">DUOLINGO</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Step"
                                                    type="button" role="tab" aria-controls="Step"
                                                    aria-selected="false">Step</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#CEFR"
                                                    type="button" role="tab" aria-controls="CEFR"
                                                    aria-selected="false">CEFR</button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active p-3" id="IELTS" role="tabpanel"
                                                aria-labelledby="home-tab">
                                                <button type="button" class="btn btn-degree m-2"
                                                    v-for="(obj, index) in IELTSDegress" :key="index"
                                                    @click="selectIELTSDegree(obj.degree)"
                                                    :class="{ 'btn-degree-selected': obj.degree == chancePayload.EnglishStandard.IELTSDegree }">{{
                                                        obj.degree }}</button>
                                            </div>
                                            <div class="tab-pane fade p-3" id="TOFEL" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="120"
                                                    v-model="chancePayload.EnglishStandard.TOFELDegree">
                                                <h6 class="ms-2">{{ chancePayload.EnglishStandard.TOFELDegree }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="TOEIC" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="990"
                                                    v-model="chancePayload.EnglishStandard.TOEICDegree">
                                                <h6 class="ms-2">{{ chancePayload.EnglishStandard.TOEICDegree }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="DUOLINGO" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="160"
                                                    v-model="chancePayload.EnglishStandard.DUOLINGODegree">
                                                <h6 class="ms-2">{{ chancePayload.EnglishStandard.DUOLINGODegree }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="Step" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="100"
                                                    v-model="chancePayload.EnglishStandard.stepDegree">
                                                <h6 class="ms-2">{{ chancePayload.EnglishStandard.stepDegree }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="CEFR" role="tabpanel">
                                                <button type="button" class="btn btn-degree m-2"
                                                    v-for="(obj, index) in CEFRDegrees" :key="index"
                                                    @click="selectCEFRDegree(obj.degree)"
                                                    :class="{ 'btn-degree-selected': obj.degree == chancePayload.EnglishStandard.CEFRDegree }">{{
                                                        obj.degree }}</button>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-store" @click="resetEnglishStandard()">
                                                <span class="word">تصحيح</span>
                                                <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">تحديد مستوى القدرات العقلية</label>
                                        <ul class="nav nav-tabs mt-2" id="otherMyTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" data-bs-toggle="tab"
                                                    data-bs-target="#Sat" id="Sat-tab" type="button" role="tab"
                                                    aria-controls="Sat" aria-selected="true">SAT</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Qudrat"
                                                    id="Qudrat-tab" type="button" role="tab" aria-controls="Qudrat"
                                                    aria-selected="false">قدرات</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#GAT"
                                                    id="GAT-tab" type="button" role="tab" aria-controls="GAT"
                                                    aria-selected="false">GAT</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#act"
                                                    id="act-tab" type="button" role="tab" aria-controls="act"
                                                    aria-selected="false">ACT</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Talent"
                                                    id="Talent-tab" type="button" role="tab" aria-controls="Talent"
                                                    aria-selected="false">مقياس موهبة</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#AchievementTest"
                                                    id="AchievementTest-tab" type="button" role="tab" aria-controls="AchievementTest"
                                                    aria-selected="false">التحصيل المعرفي</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#SAAT"
                                                    id="SAAT-tab" type="button" role="tab" aria-controls="SAAT"
                                                    aria-selected="false">SAAT</button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myOtherTabContent">
                                            <div class="tab-pane fade show active p-3" id="Sat" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="1600"
                                                    v-model="chancePayload.BrainStandard.Sat">
                                                <h6 class="ms-2">{{ chancePayload.BrainStandard.Sat }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="Qudrat" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="100"
                                                    v-model="chancePayload.BrainStandard.Qudrat">
                                                <h6 class="ms-2">{{ chancePayload.BrainStandard.Qudrat }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="GAT" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="100"
                                                    v-model="chancePayload.BrainStandard.GAT">
                                                <h6 class="ms-2">{{ chancePayload.BrainStandard.GAT }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="act" role="tabpanel">
                                                <input type="range" class="form-range" min="1" max="36"
                                                    v-model="chancePayload.BrainStandard.act">
                                                <h6 class="ms-2">{{ chancePayload.BrainStandard.act }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="Talent" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="2000"
                                                    v-model="chancePayload.BrainStandard.Talent">
                                                <h6 class="ms-2">{{ chancePayload.BrainStandard.Talent }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="AchievementTest" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="100"
                                                    v-model="chancePayload.BrainStandard.AchievementTest">
                                                <h6 class="ms-2">{{ chancePayload.BrainStandard.AchievementTest }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="SAAT" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="100"
                                                    v-model="chancePayload.BrainStandard.SAAT">
                                                <h6 class="ms-2">{{ chancePayload.BrainStandard.SAAT }}</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-store" @click="resetBrainStandard()">
                                                <span class="word">تصحيح</span>
                                                <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">المعدل التراكمي المطلوب</label>
                                        <ul class="nav nav-tabs mt-2" id="otherMyTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" data-bs-toggle="tab"
                                                    data-bs-target="#SaudiCur" id="SaudiCur-tab" type="button"
                                                    role="tab" aria-controls="SaudiCur" aria-selected="true">المنهج
                                                    السعودي</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab"
                                                    data-bs-target="#BritishCur" id="BritishCur-tab" type="button"
                                                    role="tab" aria-controls="BritishCur" aria-selected="false">المنهج
                                                    البريطاني</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab"
                                                    data-bs-target="#AmericanDiploma" id="AmericanDiploma-tab" type="button"
                                                    role="tab" aria-controls="AmericanDiploma" aria-selected="false">الدبلومة الأمريكية
                                                    </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myOtherTabContent">
                                            <div class="tab-pane fade show active p-3" id="SaudiCur" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="100"
                                                    v-model="chancePayload.CurStandard.SaudiCur">
                                                <h6 class="ms-2">{{ chancePayload.CurStandard.SaudiCur }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="BritishCur" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="100"
                                                    v-model="chancePayload.CurStandard.BritishCur">
                                                <h6 class="ms-2">{{ chancePayload.CurStandard.BritishCur }}</h6>
                                            </div>
                                            <div class="tab-pane fade p-3" id="AmericanDiploma" role="tabpanel">
                                                <input type="range" class="form-range" min="0" max="4"
                                                    v-model="chancePayload.CurStandard.AmericanDiploma">
                                                <h6 class="ms-2">{{ chancePayload.CurStandard.AmericanDiploma }}</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-store" @click="resetCurStandard()">
                                                <span class="word">تصحيح</span>
                                                <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                                <div>
                                                    <button type="button" class="btn btn-store" @click="nextTab()">
                                                        <span>التالي</span>
                                                        <span class="material-symbols-outlined align-middle">
                                                            chevron_left
                                                        </span>
                                                    </button>
                                                    <button type="button" class="btn btn-danger ms-2" @click="prevTab()">
                                                        <span>السابق</span>
                                                        <span class="material-symbols-outlined align-middle">
                                                            chevron_left
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </tab-content>
                                        <tab-content title="المستندات والملاحظات">
                                            <div class="chance-documents bg-white rounded p-4 rounded-12 shadow-sm border">
                                                <label for="chanceName" class="form-label fw-bold">المستندات والملاحظات</label>
                                                <div class="docs mt-2">
                                                    <QuillEditor placeholder="اكتب المستندات" toolbar='minimal' theme='snow'
                                                        ref="quillDocs" />
                                                </div>
                                                <div class="notes mt-4">
                                                    <QuillEditor placeholder="اكتب الملاحظات" toolbar='minimal' theme='snow'
                                                        ref="quillNotes" />
                                                </div>
                                                <div class="mt-3">
                                                    <button type="button" class="btn btn-store" @click="chanceEdit()">
                                                        <span>تعديل</span>
                                                        <span class="material-symbols-outlined align-middle">
                                                            edit
                                                        </span>
                                                    </button>
                                                    <button type="button" class="btn btn-danger ms-2" @click="prevTab()">
                                                        <span>السابق</span>
                                                        <span class="material-symbols-outlined align-middle">
                                                            chevron_left
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </tab-content>
                                    </form-wizard>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-danger" @click="closeEditModal()">
                                <span>إغلاق</span>
                                <span class="material-symbols-outlined align-middle">
                                    close
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Edit -->
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
import { Modal } from 'bootstrap';
import Paginate from 'vuejs-paginate-next';
import { FormWizard, TabContent } from "vue3-form-wizard";
import { QuillEditor } from '@vueup/vue-quill'
import 'vue3-form-wizard/dist/style.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { convertBase64 } from '../../../assets/utils/index'
export default {
    components: {
        FormWizard,
        TabContent,
        QuillEditor,
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
        const chancesCount = computed(() => store.state.Admin_Store.chancesCount);
        const chances = computed(() => store.state.Admin_Store.chances);
        // const applicantNats = ref([
        //     'الجنسية', 'أفغاني', 'ألباني', 'جزائري', 'أمريكي', 'أندوري', 'أنغولي', 'أنتيغوي', 'أرجنتيني',
        //     'أرميني', 'أسترالي', 'نمساوي', 'أذربيجاني', 'باهاماسي', 'بحريني', 'بنغلاديشي',
        //     'باربادوسي', 'بيلاروسي', 'بلجيكي', 'بليزي', 'بنين', 'بوتاني', 'بوليفي', 'بوسني',
        //     'برازيلي', 'بريطاني', 'بلغاري', 'بوركيني', 'بورمي', 'بوروندي', 'كمبودي', 'كاميروني',
        //     'كندي', 'كاب فيردي', 'تشادي', 'تشيلي', 'صيني', 'كولومبي', 'كوموري', 'كوستاريكي',
        //     'كرواتي', 'كوبي', 'قبرصي', 'تشيكي', 'كونغولي', 'دنماركي', 'جيبوتي', 'دومينيكي',
        //     'إكوادوري', 'مصري', 'إماراتي', 'غيني استوائي', 'إريتري', 'إستوني', 'إثيوبي', 'فنلندي',
        //     'فرنسي', 'غابوني', 'غامبي', 'جورجي', 'ألماني', 'غاني', 'يوناني', 'غرينادي', 'غواتيمالي',
        //     'غيني', 'غوياني', 'هايتي', 'هندوراسي', 'هنغاري', 'آيسلندي', 'هندي', 'إندونيسي', 'إيراني',
        //     'عراقي', 'إيرلندي', 'فلسطيني', 'إيطالي', 'جامايكي', 'ياباني', 'أردني', 'كازاخستاني',
        //     'كيني', 'كيريباتي', 'كوري', 'كويتي', 'قرغيزستاني', 'لاوسي', 'لاتفي', 'لبناني', 'ليبي',
        //     'ليتواني', 'لوكسمبورغي', 'مدغشقري', 'مالاوي', 'ماليزي', 'مالديفي', 'مالي', 'مالطي',
        //     'ماوريتاني', 'مكسيكي', 'مولدوفي', 'موناكوي', 'منغولي', 'مغربي', 'موزمبيقي', 'ناميبي',
        //     'نيبالي', 'هولندي', 'نيوزيلندي', 'نيجيري', 'نيكاراغوي', 'نيجيري', 'نرويجي', 'عماني',
        //     'باكستاني', 'بنمي', 'بابواني', 'باراغوي', 'بيروفي', 'فلبيني', 'بولندي', 'برتغالي',
        //     'قطري', 'روماني', 'روسي', 'رواندي', 'سانت لوسي', 'سلفادوري', 'ساموائي',
        //     'سنغالي', 'صربي', 'سيشلي', 'سنغافوري', 'سلوفاكي', 'سلوفيني', 'سومالي', 'جنوب أفريقي',
        //     'إسباني', 'سريلانكي', 'سوداني', 'سورينامي', 'سوازيلندي', 'سويدي', 'سويسري', 'سوري',
        //     'تايواني', 'طاجيكستاني', 'تنزاني', 'تايلاندي', 'توغولي', 'تونسي', 'تركي', 'تركماني',
        //     'توفالي', 'أوغندي', 'أوكراني', 'أوروغواي', 'أوزبكستاني', 'فانواتي', 'فنزويلي', 'فيتنامي',
        //     'يمني', 'زامبي', 'زيمبابوي'
        // ]);
        const cities = ref(["الرياض", "جدة", "مكة", "المدينة المنورة", "الدمام", "الخبر", "الطائف", "بريدة", "الجبيل", "حفر الباطن", "الظهران", "ينبع", "أبها", "خميس مشيط", "القصيم", "القطيف", "نجران", "تبوك", "جازان", "عرعر", "سكاكا", "الخرج", "الباحة", "بيشة", "القنفذة", "الدوادمي", "رجال ألمع", "محايل عسير", "شرورة", "رابغ", "المجمعة", "بدر", "الرس", "عنيزة", "حائل", "وادي الدواسر", "صبيا", "العيص", "ضباء", "تيماء", "بدر الجنوب", "طريف", "الأفلاج", "الحوطة", "مرات", "رنية", "ليلى", "السليل", "تنومة", "بلجرشي", "المندق", "قلوة", "العلا", "ساجر", "البكيرية", "الزلفي", "دومة الجندل", "عفيف", "الحريق", "الدوادمي", "القريات", "الطريف", "تربة", "رأس تنورة", "الساحل الشرقي", "سدير", "ثادق", "المدينة"]);
        const chancePayload = ref({
            _id: '',
            chanceName: '',
            chanceLink: '',
            chancePrice: '',
            provider: '',
            programStatus: '',
            chanceCategory: 'none',
            chanceSubcategory: "none",
            chanceRefStartDate: '',
            chanceRegEndDate: '',
            chanceStartDate: '',
            chanceEndDate: '',
            marketingDesc: '',
            chanceDesc: '',
            applicantGender: "none",
            specialConditions: false,
            chanceImage: '',
            cities: [],
            applicantAge: 'العمر',
            applicantNat: 'الجنسية',
            applicantEdus: [],
            EnglishStandard: {
                IELTSDegree: '',
                TOFELDegree: '',
                TOEICDegree: '',
                DUOLINGODegree: '',
                stepDegree: '',
                CEFRDegree: '',
            },
            BrainStandard: {
                Sat: '',
                Qudrat: '',
                GAT: '',
                act: '',
                Talent: '',
            },
            CurStandard: {
                SaudiCur: '',
                BritishCur: ''
            },
            documentsContent: '',
            notesContent: '',
        });
        const filter = ref({
            programStatus: "none",
            chanceCategory: "none",
            chanceSubcategory: "none"
        })
        const modalTitle = ref('');
        const modalContent = ref('');
        const wizard = ref('wizard');
        const quillDocs = ref('quillDocs');
        const quillNotes = ref('quillNotes');
        const modalContentRef = ref(null);
        const modalEditRef = ref(null);
        const imagePreview = ref('');
        const helperObj = computed(() => store.state.Collection.helperObj);
        const IELTSDegress = ref([
            {
                degree: "0"
            },
            {
                degree: "0.5"
            },
            {
                degree: "1"
            },
            {
                degree: "1.5"
            },
            {
                degree: "2"
            },
            {
                degree: "2.5"
            },
            {
                degree: "3"
            },
            {
                degree: "3.5"
            },
            {
                degree: "4"
            },
            {
                degree: "4.5"
            },
            {
                degree: "5"
            },
            {
                degree: "5.5"
            },
            {
                degree: "6"
            },
            {
                degree: "6.5"
            },
            {
                degree: "7"
            },
            {
                degree: "7.5"
            },
            {
                degree: "8"
            },
            {
                degree: "8.5"
            },
            {
                degree: "9"
            },


        ]);
        const CEFRDegrees = ref([
            {
                degree: "A1"
            },
            {
                degree: "A2"
            },
            {
                degree: "B1"
            },
            {
                degree: "B2"
            },
            {
                degree: "C1"
            },
            {
                degree: "C2"
            },
        ]);
        store.dispatch("Auth/GetProfile")
        store.dispatch("Admin_Store/chancesGet", { page_no: 1 });
        store.dispatch("Collection/GetHelper")
        const chanceEdit = () => {
            chancePayload.value.documentsContent = quillDocs.value.getHTML();
            chancePayload.value.notesContent = quillNotes.value.getHTML();
            store.dispatch("Admin_Store/chanceEdit", chancePayload.value)
        }
        const openModalBox = (modalTitleP, modalContentP, detection) => {
            new Modal(modalContentRef.value).show()
            modalTitle.value = modalTitleP;
            if (detection === true) {
                modalContent.value = modalContentP;
            } else {
                let ul = '<ul>';
                let li;
                for (const property in modalContentP) {
                    li = `<li>${property}: ${modalContentP[property]}</li>`;
                    ul += li;
                }
                ul += '</ul>'
                modalContent.value = ul;
            }
        }
        const openEditModal = (chance) => {
            chancePayload.value = chance;
            imagePreview.value = chance.chanceImage;
            chancePayload.value.chanceImage = "";
            quillDocs.value.setHTML(chance.documentsContent);
            quillNotes.value.setHTML(chance.notesContent);
            new Modal(modalEditRef.value).show();
        }
        const closeEditModal = () => Modal.getInstance(modalEditRef.value)?.hide();
        const closeModal = () => Modal.getInstance(modalContentRef.value)?.hide();
        const clickCallback = (pageNum) => store.dispatch("Admin_Store/chancesGet", { page_no: pageNum });
        const deletechance = (_id) => store.dispatch("Admin_Store/chanceDelete", { _id: _id });
        const nextTab = () => {
            wizard.value.nextTab();
        }
        const prevTab = () => {
            wizard.value.prevTab();
        }
        const onFileChange = async (e) => {
            imagePreview.value = URL.createObjectURL(e.target.files[0]);
            chancePayload.value.chanceImage = await convertBase64(e.target.files[0]);
        }
        const selectIELTSDegree = (degree) => {
            chancePayload.value.EnglishStandard.IELTSDegree = degree;
        }
        const selectCEFRDegree = (degree) => {
            chancePayload.value.EnglishStandard.CEFRDegree = degree;
        }
        const search = () => {
            store.dispatch("Admin_Store/chancesSearch", filter.value)
        }
        const AdminLogout = () => {
            store.dispatch("Auth/Logout", { data: null })
        }
        const selectEdus = (edu) => {
            if (chancePayload.value.applicantEdus.includes(edu)) {
                chancePayload.value.applicantEdus = chancePayload.value.applicantEdus.filter((item) => item !== edu);
            } else {
                chancePayload.value.applicantEdus.push(edu);
            }
        };
        const selectCity = (city) => {
            if (chancePayload.value.cities.includes(city)) {
                chancePayload.value.cities = chancePayload.value.cities.filter((item) => item !== city);
            } else {
                chancePayload.value.cities.push(city);
            }
        };
        const resetApplicantEdus = () => {
            chancePayload.value.applicantEdus = [];
        }
        const resetCities = () => {
            chancePayload.value.cities = [];
        }
        const resetEnglishStandard = () => {
            chancePayload.value.EnglishStandard = {
                IELTSDegree: '',
                TOFELDegree: '',
                TOEICDegree: '',
                DUOLINGODegree: '',
                stepDegree: '',
                CEFRDegree: '',
            }
        }
        const resetBrainStandard = () => {
            chancePayload.value.BrainStandard = {
                Sat: '',
                Qudrat: '',
                GAT: '',
                act: '',
                Talent: '',
                AchievementTest: '',
                SAAT: ''
            }
        }

        const resetCurStandard = () => {
            chancePayload.value.CurStandard = {
                SaudiCur: '',
                BritishCur: '',
                AmericanDiploma: ''
            }
        }

        // Return
        return {
            loading_status,
            chances,
            modalTitle,
            modalContent,
            modalContentRef,
            modalEditRef,
            openModalBox,
            openEditModal,
            closeModal,
            clickCallback,
            deletechance,
            nextTab,
            prevTab,
            wizard,
            chancePayload,
            cities,
            quillDocs,
            quillNotes,
            IELTSDegress,
            CEFRDegrees,
            closeEditModal,
            onFileChange,
            selectIELTSDegree,
            selectCEFRDegree,
            imagePreview,
            chanceEdit,
            chancesCount,
            filter,
            search,
            helperObj,
            AdminLogout,
            selectCity,
            selectEdus,
            resetApplicantEdus,
            resetCities,
            resetEnglishStandard,
            resetBrainStandard,
            resetCurStandard
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
.btn-special {
    background-color: #DEF2F1;
    border: 1px solid #3aafa9;
    transition: all 0.3s ease-in-out;
}
.btn-selected {
    background-color: #3B7A7B;
    color: #FFF;
}
</style>
<!-- Style -->