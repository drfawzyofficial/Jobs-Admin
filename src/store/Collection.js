// Import Methods, Packages, Files
import { Fetch } from "../assets/utils";
import swal from 'sweetalert2';
window.Swal = swal;

// Collection Export
export const Collection = {
    namespaced: true,
    state: {
        countries: [],
        cities: [],
        roles: [],
        branches: [],
        loading_status: false,
        helperObj: {}
    },
    actions: {
        loading({ commit }, loading_status) {
            commit('loading', loading_status);
        },
        async GetHelper({ dispatch, commit }) {
            try {
                const data = await Fetch("GET", `/helper/get`);
                if (data.statusCode === 200) {
                    commit("helperObj", data.result);
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'استرجاع بيانات المساعدة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
        async deletechanceCategory({ dispatch, commit }, payload) {
            try {
                const data = await Fetch("DELETE", `/helper/deleteChanceCategory`, payload);
                if (data.statusCode === 200) {
                    commit("deleteChanceCategory", data.result);
                    window.Swal.fire({ title: 'حذف تصنيف الفرصة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'حذف تصنيف الفرصة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
        async deletechanceSubcategory({ dispatch, commit }, payload) {
            try {
                const data = await Fetch("DELETE", `/helper/deleteChanceSubcategory`, payload);
                if (data.statusCode === 200) {
                    commit("deleteChanceSubcategory", data.result);
                    window.Swal.fire({ title: 'حذف تصنيف الفرصة الفرعي', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'حذف تصنيف الفرصة الفرعي', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
        async deleteApplicantEdu({ dispatch, commit }, payload) {
            try {
                const data = await Fetch("DELETE", `/helper/deleteApplicantEdu`, payload);
                if (data.statusCode === 200) {
                    commit("deleteApplicantEdu", data.result);
                    window.Swal.fire({ title: 'حذف المرحلة التعليمية', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
                } else if (data.statusCode === 401 || data.statusCode === 500) {
                    dispatch("Auth/Logout", {}, { root: true });
                } else {
                    window.Swal.fire({ title: 'حذف المرحلة التعليمية', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
                }
            } catch (err) {
                window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
            }
        },
    },
    mutations: {
        loading(state, loading_status) {
            state.loading_status = loading_status;
        },
        loading_get(state, loading_get) {
            state.loading_get = loading_get;
        },
        helperObj(state, data) {
            state.helperObj = data;
        },
        deleteChanceCategory(state, data) {
            let chanceCategories = state.helperObj.chanceCategories.filter((item) => item != data);
            state.helperObj.chanceCategories = chanceCategories;
        },
        deleteChanceSubcategory(state, data) {
            let chanceSubcategories = state.helperObj.chanceSubcategories.filter((item) => item != data);
            state.helperObj.chanceSubcategories = chanceSubcategories;
        },
        deleteApplicantEdu(state, data) {
            let applicantEdus = state.helperObj.applicantEdus.filter((item) => item != data);
            state.helperObj.applicantEdus = applicantEdus;
        }
    }
}
