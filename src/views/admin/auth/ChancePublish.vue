<!-- Admin Dashboard -->
<template>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left active">
                <router-link to="/dashboard" class="logo">
                    <img src="../../../assets/img/logo.png" title="chances" alt="chances" loading="lazy">
                </router-link>
                <router-link to="/dashboard" class="logo-small">
                    <img src="../../../assets/img/logo.png" title="chances" alt="chances" loading="lazy">
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
                        <div class="d-flex justify-content-center d-block d-lg-none">
                            <a class="mobile-btn-close" id="mobile_btn_close"><img
                                    src="../../../assets/img/icons/close-circle1.svg" alt="img" loading="lazy" height="35"
                                    width="35"></a>
                        </div>
                        <ul class="mt-3">
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminDashboard' }" to="/dashboard"><img
                                        src="../../../assets/img/icons/dashboard.svg" alt="img" loading="lazy"><span>
                                        لوحة التحكم</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'ChancePublish' }"
                                    to="/chance/publish"><img src="../../../assets/img/icons/transfer1.svg"
                                        alt="img" loading="lazy"><span>
                                        نشر فرصة</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'ChancesManagement' }"
                                    to="/chances/manage"><img src="../../../assets/img/icons/transcation.svg"
                                        alt="img" loading="lazy"><span>
                                        إدارة الفرص</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminManagement' }"
                                    to="/admin/manage"><img src="../../../assets/img/icons/time.svg" alt="img" loading="lazy"><span>
                                        إدارة المسؤول </span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'StudentsManagement' }"
                                    to="/students/manage"><img src="../../../assets/img/icons/edit-5.svg"
                                        alt="img" loading="lazy"><span>
                                        إدارة الطلاب</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'AdminsManagement' }"
                                    to="/admins/manage"><img src="../../../assets/img/icons/users1.svg" alt="img" loading="lazy"><span>
                                        إدارة المسؤولين</span> </router-link>
                            </li>
                            <li>
                                <router-link :class="{ 'active': currentPath == 'ContACTsManagement' }"
                                    to="/students/contACTs"><img src="../../../assets/img/icons/users1.svg"
                                        alt="img" loading="lazy"><span>
                                        إدارة التواصل</span> </router-link>
                            </li>
                            <li>
                                <a @click="AdminLogout"><img src="../../../assets/img/icons/log-out.svg"
                                        alt="img" loading="lazy"><span>
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
                                <li class="breadcrumb-item active">نشر فرصة</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <form-wizard stepSize="sm" color="#FAA633" ref="wizard">
                            <tab-content title="تفاصيل الفرصة">
                                <div class="chance-details bg-white rounded p-4 rounded-12 shadow-sm border">
                                    <div class="mb-3">
                                        <input class="form-control form-control-lg" type="text" placeholder="اسم الفرصة"
                                            v-model="chancePayload.chanceName">
                                    </div>
                                    <div class="mb-3">
                                        <input class="form-control form-control-lg" type="text"
                                            placeholder="رابط الفرصة" v-model="chancePayload.chanceLink">
                                    </div>
                                    <div class="mb-3">
                                        <input class="form-control form-control-lg" type="text" placeholder="سعر الفرصة"
                                            v-model="chancePayload.chancePrice">
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
                                                v-for="(city, index) in cities" :key="index" @click="selectCity(city)"
                                                :class="{ 'btn-selected': chancePayload.cities.includes(city) }">{{
                                                    city }}
                                            </button>
                                        </div>
                                        <div class="mt-2">
                                            <button type="button" class="btn btn-store" @click="resetCities()">
                                                <span class="word">إعادة التعيين</span>
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
                                            <option v-for="(val, index) in helperObj.chanceCategories" :key="index"
                                                :value="val">{{ val }}</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <select class="form-select form-select-lg"
                                            v-model="chancePayload.chanceSubcategory">
                                            <option value="none">التصنيف الفرعي</option>
                                            <option v-for="(val, index) in helperObj.chanceSubcategories" :key="index"
                                                :value="val">{{ val }}</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="chanceRegStartDate" class="form-label">تاريخ بداية التسجيل</label>
                                        <input class="form-control form-control-lg" type="date"
                                            v-model="chancePayload.chanceRegStartDate">
                                    </div>
                                    <div class="mb-3">
                                        <label for="chanceRegEndDate" class="form-label">تاريخ نهاية التسجيل</label>
                                        <input class="form-control form-control-lg" type="date"
                                            v-model="chancePayload.chanceRegEndDate">
                                    </div>
                                    <div class="mb-3">
                                        <label for="chanceStartDate" class="form-label">تاريخ بداية الفرصة</label>
                                        <input class="form-control form-control-lg" type="date"
                                            v-model="chancePayload.chanceStartDate">
                                    </div>
                                    <div class="mb-3">
                                        <label for="chanceEndDate" class="form-label">تاريخ نهاية الفرصة</label>
                                        <input class="form-control form-control-lg" type="date"
                                            v-model="chancePayload.chanceEndDate">
                                    </div>
                                    <div class="mb-3">
                                        <label for="marketingDesc" class="form-label">وصف تسويقي</label>
                                        <input class="form-control form-control-lg" type="text"
                                            v-model="chancePayload.marketingDesc">
                                    </div>
                                    <div class="mb-3">
                                        <label for="marketingDesc" class="form-label">وصف الفرصة</label>
                                        <QuillEditor placeholder="اكتب وصف الفرصة" toolbar='full' theme='snow'
                                            ref="quillChanceDesc" />
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox"
                                            v-model="chancePayload.specialConditions" id="specialConditions">
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
                                        <button class="btnUpload d-flex align-items-center justify-content-center">
                                            <span>إضافة صورة</span>
                                            <img class="ms-2" src="../../../assets/img/icons/image.svg" height="27"
                                                width="27" />
                                        </button>
                                        <input type="file" name="imgFile" @change="onFileChange" />
                                    </div>
                                    <div class="image-preview text-center mt-3" v-if="imagePreview">
                                        <img class="shadow-sm rounded-12" :src="imagePreview" height="250" width="250"
                                            title="imagePreview" alt="imagePreview" loading="lazy"/>
                                    </div>
                                    <div class="mt-3">
                                        <button type="button" class="btn btn-store" @click="prevTab()">
                                            <span class="material-symbols-outlined align-middle">
                                                chevron_right
                                            </span>
                                            <span>السابق</span>

                                        </button>
                                        <button type="button" class="btn btn-store ms-2" @click="nextTab()">
                                            <span>التالي</span>
                                            <span class="material-symbols-outlined align-middle">
                                                chevron_left
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </tab-content>
                            <tab-content title="شروط المتقدم">
                                <div class="applicant-conditions bg-white rounded p-4 rounded-12 shadow-sm border">
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
                                        <select class="form-select form-select-lg"
                                            v-model="chancePayload.applicantGender">
                                            <option v-for="(val, index) in applicantGenders" :key="index" :value="val">
                                                {{ val }}</option>
                                        </select>
                                    </div>
                                    <div class="applicantedus mb-3">
                                        <label class="form-label">المرحلة التعليمية</label>
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
                                                <span class="word">إعادة التعيين</span>
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
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOEFL"
                                                    id="TOEFL-tab" type="button" role="tab" aria-controls="TOEFL"
                                                    aria-selected="false">TOEFL</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#TOEIC"
                                                    type="button" role="tab" aria-controls="TOEIC"
                                                    aria-selected="false">TOEIC</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Duolingo"
                                                    type="button" role="tab" aria-controls="Duolingo"
                                                    aria-selected="false">Duolingo</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Step"
                                                    type="button" role="tab" aria-controls="Step"
                                                    aria-selected="false">STEP</button>
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
                                                    @click="selectIELTS(obj.degree)"
                                                    :class="{ 'btn-degree-selected': obj.degree == chancePayload.EnglishStandard.IELTS }">{{
                                                        obj.degree }}</button>
                                            </div>
                                            <div class="tab-pane fade p-3" id="TOEFL" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و120"
                                                    v-model="chancePayload.EnglishStandard.TOEFL">
                                            </div>
                                            <div class="tab-pane fade p-3" id="TOEIC" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و990"
                                                    v-model="chancePayload.EnglishStandard.TOEIC">
                                            </div>
                                            <div class="tab-pane fade p-3" id="Duolingo" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                     placeholder="الدرجة بين 0 و160"
                                                    v-model="chancePayload.EnglishStandard.Duolingo">
                                            </div>
                                            <div class="tab-pane fade p-3" id="Step" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                      placeholder="الدرجة بين 0 و100"
                                                    v-model="chancePayload.EnglishStandard.STEP">
                                            </div>
                                            <div class="tab-pane fade p-3" id="CEFR" role="tabpanel">
                                                <button type="button" class="btn btn-degree m-2"
                                                    v-for="(obj, index) in CEFRs" :key="index"
                                                    @click="selectCEFR(obj.degree)"
                                                    :class="{ 'btn-degree-selected': obj.degree == chancePayload.EnglishStandard.CEFR }">{{
                                                        obj.degree }}</button>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-store" @click="resetEnglishStandard()">
                                                <span class="word">إعادة التعيين</span>
                                                <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">تحديد اختبارات القدرات العقلية</label>
                                        <ul class="nav nav-tabs mt-2" id="otherMyTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" data-bs-toggle="tab"
                                                    data-bs-target="#SAT" id="SAT-tab" type="button" role="tab"
                                                    aria-controls="SAT" aria-selected="true">SAT</button>
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
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ACT"
                                                    id="ACT-tab" type="button" role="tab" aria-controls="ACT"
                                                    aria-selected="false">ACT</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#Talent"
                                                    id="Talent-tab" type="button" role="tab" aria-controls="Talent"
                                                    aria-selected="false">مقياس موهبة</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab"
                                                    data-bs-target="#AchivementTest" id="AchivementTest-tab"
                                                    type="button" role="tab" aria-controls="AchivementTest"
                                                    aria-selected="false">التحصيل المعرفي</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#SAAT"
                                                    id="SAAT-tab" type="button" role="tab" aria-controls="SAAT"
                                                    aria-selected="false">SAAT</button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myOtherTabContent">
                                            <div class="tab-pane fade show active p-3" id="SAT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و1600"
                                                    v-model="chancePayload.BrainStandard.SAT">
                                            </div>
                                            <div class="tab-pane fade p-3" id="Qudrat" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                     placeholder="الدرجة بين 0 و100"
                                                    v-model="chancePayload.BrainStandard.Qudrat">
                                            </div>
                                            <div class="tab-pane fade p-3" id="GAT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                   placeholder="الدرجة بين 0 و100 "
                                                    v-model="chancePayload.BrainStandard.GAT">
                                            </div>
                                            <div class="tab-pane fade p-3" id="ACT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                   placeholder="الدرجة بين 0 و36"
                                                    v-model="chancePayload.BrainStandard.ACT">
                                            </div>
                                            <div class="tab-pane fade p-3" id="Talent" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                     placeholder="الدرجة بين 0 و2000"
                                                    v-model="chancePayload.BrainStandard.Talent">
                                            </div>
                                            <div class="tab-pane fade p-3" id="AchivementTest" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                        placeholder="الدرجة بين 0 و100"
                                                    v-model="chancePayload.BrainStandard.AchivementTest">
                                            </div>
                                            <div class="tab-pane fade p-3" id="SAAT" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="chancePayload.BrainStandard.SAAT">
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-store" @click="resetBrainStandard()">
                                                <span class="word">إعادة التعيين</span>
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
                                                    data-bs-target="#AmericanDiploma" id="AmericanDiploma-tab"
                                                    type="button" role="tab" aria-controls="AmericanDiploma"
                                                    aria-selected="false">الدبلومة الأمريكية
                                                </button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myOtherTabContent">
                                            <div class="tab-pane fade show active p-3" id="SaudiCur" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="chancePayload.CurStandard.SaudiCur">
                                            </div>
                                            <div class="tab-pane fade p-3" id="BritishCur" role="tabpanel">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="الدرجة بين 0 و100"
                                                    v-model="chancePayload.CurStandard.BritishCur">
                                            </div>
                                            <div class="tab-pane fade p-3" id="AmericanDiploma" role="tabpanel"
                                                aria-labelledby="home-tab">
                                                <button type="button" class="btn btn-degree m-2"
                                                    v-for="(obj, index) in AmericanDiplomaDegrees" :key="index"
                                                    @click="selectAmericanDiploma(obj.degree)"
                                                    :class="{ 'btn-degree-selected': obj.degree == chancePayload.CurStandard.AmericanDiploma }">{{
                                                        obj.degree }}</button>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-store" @click="resetCurStandard()">
                                                <span class="word">إعادة التعيين</span>
                                                <span class="material-symbols-outlined align-middle ms-1">
                                                    check
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-store" @click="prevTab()">
                                            <span class="material-symbols-outlined align-middle">
                                                chevron_right
                                            </span>
                                            <span>السابق</span>

                                        </button>
                                        <button type="button" class="btn btn-store ms-2" @click="nextTab()">
                                            <span>التالي</span>
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
                                        <QuillEditor placeholder="اكتب المستندات" toolbar='full' theme='snow'
                                            ref="quillDocs" />
                                    </div>
                                    <div class="notes mt-4">
                                        <QuillEditor placeholder="اكتب الملاحظات" toolbar='full' theme='snow'
                                            ref="quillNotes" />
                                    </div>
                                    <div class="mt-3">
                                        <button type="button" class="btn btn-store" @click="prevTab()">
                                            <span class="material-symbols-outlined align-middle">
                                                chevron_right
                                            </span>
                                            <span>السابق</span>
                                        </button>
                                        <button type="button" class="btn btn-store ms-2" @click="publishCreate()">
                                            <span>نشر</span>
                                            <span class="material-symbols-outlined align-middle">
                                                publish
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </tab-content>
                        </form-wizard>
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
import { FormWizard, TabContent } from "vue3-form-wizard";
import { QuillEditor } from '@vueup/vue-quill'
import 'vue3-form-wizard/dist/style.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import { convertBase64 } from '../../../assets/utils/index'
export default {
    components: {
        FormWizard,
        TabContent,
        QuillEditor
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
            $(document).on('click', '#mobile_btn_close', () => {
                $("body").removeClass('slide-nav');
                $('.sidebar-overlay').removeClass('opened');
                return false;
            });
            // Mobile User Menu
            $(document).on('click', '.mobile-user-menu .nav-link', () => {
                $(".dropdown-menu ").toggleClass("show");
            });
        });
        // Calling, Declarations, Data
        const store = useStore()
        store.dispatch("Auth/GetProfile")
        store.dispatch("Collection/GetHelper")
        const loading_status = computed(() => store.state.Collection.loading_status);
        const helperObj = computed(() => store.state.Collection.helperObj);
        const wizard = ref('wizard');
        const quillDocs = ref('quillDocs');
        const quillChanceDesc = ref('quillChanceDesc');
        const quillNotes = ref('quillNotes');
        const imagePreview = ref('');

        const cities = ref([
            "الرياض",
            "مكة المكرمة",
            "جدة",
            "المدينة المنورة",
            "الدمام",
            "الأحساء",
            "القطيف",
            "الخبر",
            "الجبيل",
            "الطائف",
            "الدرعية",
            "بريدة",
            "عنيزة",
            "الرس",
            "الخرج",
            "الدوادمي",
            "المجمعة",
            "شقراء",
            "الأفلاج",
            "حوطة بني تميم",
            "الحريق",
            "المزاحمية",
            "ثادق",
            "حريملاء",
            "الدلم",
            "القنفذة",
            "رابغ",
            "تربة",
            "الخرمة",
            "ينبع",
            "العلا",
            "البكيرية",
            "البدائع",
            "الخفجي",
            "رأس تنورة",
            "بقيق",
            "أبها",
            "خميس مشيط",
            "تبوك",
            "حائل",
            "عرعر",
            "جازان",
            "الريث",
            "ضمد",
            "نجران",
            "الباحة",
            "بلجرشي",
            "سكاكا",
            "دومة الجندل"
        ]);
        const applicantGenders = ref([
            "الجنس",
            "ذكر",
            "أنثى",
            "كلاهما"
        ]);
        const chancePayload = ref({
            chanceName: '',
            chanceLink: '',
            chancePrice: '',
            provider: '',
            chancePriority: "saudi",
            programStatus: 'عن بعد',
            chanceCategory: 'none',
            chanceSubcategory: 'none',
            chanceRegStartDate: '',
            chanceRegEndDate: '',
            chanceStartDate: '',
            chanceEndDate: '',
            marketingDesc: '',
            chanceDesc: '',
            specialConditions: false,
            chanceImage: '',
            cities: [],
            applicantAge: '',
            applicantNat: 'الجنسية',
            applicantGender: 'الجنس',
            applicantEdus: [],
            EnglishStandard: {
                IELTS: '',
                TOEFL: '',
                TOEIC: '',
                Duolingo: '',
                STEP: '',
                CEFR: '',
            },
            BrainStandard: {
                SAT: '',
                Qudrat: '',
                GAT: '',
                ACT: '',
                Talent: '',
                AchivementTest: '',
                SAAT: ''
            },
            CurStandard: {
                SaudiCur: '',
                BritishCur: '',
                AmericanDiploma: ''
            },
            documentsContent: '',
            notesContent: '',
        });
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
        const AmericanDiplomaDegrees = ref([
            {
                degree: "0"
            },
            {
                degree: "0.25"
            },
            {
                degree: "0.5"
            },
            {
                degree: "0.75"
            },
            {
                degree: "1"
            },
            {
                degree: "1.25"
            },
            {
                degree: "1.5"
            },
            {
                degree: "1.75"
            },
            {
                degree: "2"
            },
            {
                degree: "2.25"
            },
            {
                degree: "2.5"
            },
            {
                degree: "2.75"
            },
            {
                degree: "3"
            },
            {
                degree: "3.25"
            },
            {
                degree: "3.5"
            },
            {
                degree: "3.75"
            },
            {
                degree: "4"
            },
        ]);

        const CEFRs = ref([
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
        const nextTab = () => {
            wizard.value.nextTab();
        }
        const prevTab = () => {
            wizard.value.prevTab();
        }
        const publishCreate = () => {
            chancePayload.value.chanceDesc = quillChanceDesc.value.getHTML();
            chancePayload.value.documentsContent = quillDocs.value.getHTML();
            chancePayload.value.notesContent = quillNotes.value.getHTML();
            store.dispatch("Admin_Store/chanceCreate", chancePayload.value)
        }
        const onFileChange = async (e) => {
            imagePreview.value = URL.createObjectURL(e.target.files[0]);
            chancePayload.value.chanceImage = await convertBase64(e.target.files[0]);
        }
        const selectIELTS = (degree) => {
            chancePayload.value.EnglishStandard.IELTS = degree;
        }
        const selectAmericanDiploma = (degree) => {
            chancePayload.value.CurStandard.AmericanDiploma = degree;
        }
        const selectCEFR = (degree) => {
            chancePayload.value.EnglishStandard.CEFR = degree;
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
                IELTS: '',
                TOEFL: '',
                TOEIC: '',
                Duolingo: '',
                STEP: '',
                CEFR: '',
            }
        }
        const resetBrainStandard = () => {
            chancePayload.value.BrainStandard = {
                SAT: '',
                Qudrat: '',
                GAT: '',
                ACT: '',
                Talent: '',
                AchivementTest: '',
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
            wizard,
            imagePreview,
            nextTab,
            prevTab,
            onFileChange,
            chancePayload,
            applicantGenders,
            cities,
            quillChanceDesc,
            quillDocs,
            quillNotes,
            publishCreate,
            IELTSDegress,
            AmericanDiplomaDegrees,
            CEFRs,
            selectIELTS,
            selectAmericanDiploma,
            selectCEFR,
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