// Import Methods, Packages, Files
import { Fetch } from "../assets/utils";

// Declarations
import swal from 'sweetalert2';
window.Swal = swal;

// Admin_Store Export
export const Admin_Store = {
  namespaced: true,
  state: {
    chances: [],
    chancesCount: 0,
    students: [],
    contacts: [],
    admins: [],
    studentsCount: 0,
    contactsCount: 0,
    reviews: [],
    reviewsCount: []
  },
  actions: {
    async chanceCreate({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", '/admin/chance/create', payload);
        if (data.statusCode === 201) {
          commit("chanceCreate", data.result);
          window.Swal.fire({ title: 'إنشاء الفرصة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async helperPost({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", '/helper/post', payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'إضافة المساعد', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async chancesGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", `/admin/chances/get/?page_no=${payload.page_no}`);
        if (data.statusCode === 200) {
          commit("chancesGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async ReviewsGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", `/admin/chance/reviews/get/?page_no=${payload.page_no}`, payload);
        if (data.statusCode === 200) {
          commit("reviewsGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'أتفهم' });
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async DeleteReview({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("DELETE", `/admin/chance/review/delete`, payload);
        if (data.statusCode === 200) {
          dispatch("ReviewsGet", {page_no: 1, chance_id: payload.chance_id});
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async AcceptReview({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", `/admin/chance/review/accept`, payload);
        if (data.statusCode === 200) {
          dispatch("ReviewsGet", {page_no: 1, chance_id: payload.chance_id});
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async chancesSearch({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", `/admin/chance/searchchances`, payload);
        if (data.statusCode === 200) {
          commit("chancesGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async chanceDelete({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("DELETE", `/admin/chance/remove`, { _id: payload._id });
        if (data.statusCode === 200) {
          commit("chanceDelete", data.result);
          window.Swal.fire({ title: 'حذف الوظيفة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'حذف الوظيفة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async chanceEdit({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("PUT", '/admin/chance/update', payload);
        if (data.statusCode === 200) {
          commit("chanceEdit", data.result);
          window.Swal.fire({ title: 'تعديل الوظيفة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          var errors = ``;
          for (const property in data.result.errors) {
            data.result.errors[property].forEach((ele) => {
              errors += `<li>${ele}</li>`
            })
          }
          window.Swal.fire({ title: 'خطأ!', icon: "error", html: `<ul>${errors}</ul>`, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async studentsGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", `/admin/getstudents/?page_no=${payload.page_no}`);
        if (data.statusCode === 200) {
          commit("studentsGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async contactsGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", `/admin/getcontacts/?page_no=${payload.page_no}`);
        if (data.statusCode === 200) {
          commit("contactsGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async Signup({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", '/admin/signup', payload);
        if (data.statusCode === 201) {
          commit("adminAdd", data.result);
          window.Swal.fire({ title: 'إنشاء مسئول', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async adminsGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", "/admin/getadmins");
        if (data.statusCode === 200) {
          commit("AdminsGet", data.result);
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
       } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async deleteStudent({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("DELETE", `/admin/student/remove`, { _id: payload._id });
        if (data.statusCode === 200) {
          commit("deleteStudent", data.result);
          window.Swal.fire({ title: 'حذف الطالب', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'حذف الطالب', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async deleteContact({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("DELETE", `/admin/student/contact/remove`, { _id: payload._id });
        if (data.statusCode === 200) {
          commit("deleteContact", data.result);
          window.Swal.fire({ title: 'حذف التواصل', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'حذف التواصل', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async deleteAdmin({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("DELETE", `/admin/admin/remove`, { _id: payload._id });
        if (data.statusCode === 200) {
          commit("deleteAdmin", data.result);
          window.Swal.fire({ title: 'حذف المسئول', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'حذف المسئول', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async sendMessage({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", `/admin/student/message`, payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'إرسال الرسالة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'إرسال الرسالة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async sendMessageContact({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", `/admin/student/contact/message`, payload);
        if (data.statusCode === 200) {
          window.Swal.fire({ title: 'إرسال الرسالة', text: data.message, icon: 'success', confirmButtonText: 'أتفهم' })
        } else if (data.statusCode === 401 || data.statusCode === 500) {
          dispatch("Auth/Logout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'إرسال الرسالة', text: data.message, icon: 'error', confirmButtonText: 'أتفهم' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
  },
  mutations: {
    chanceCreate(state, data) {
      state.chances.push(data)
    },
    chancesGet(state, data) {
      state.chances = data.chances;
      state.chancesCount = data.chancesCount;
    },
    reviewsGet(state, data) {
      state.reviews = data.reviews;
      state.reviewsCount = data.reviewsCount;
    },
    chanceDelete(state, data) {
      const newchances = state.chances.filter((item) => item._id !== data._id);
      state.chances = newchances;
    },
    chanceUpdate(state, data) {
      const ObjIndex = state.chances.findIndex((item) => item._id == data._id);
      state.chances[ObjIndex] = data;
    },
    chancesSearch(state, data) {
      state.chances = data.chances;
      state.chancesCount = data.chancesCount;
    },
    studentsGet(state, data) {
      state.students = data.students;
      state.studentsCount = data.studentsCount;
    },
    contactsGet(state, data) {
      state.contacts = data.contacts;
      state.contactsCount = data.contactsCount;
    },
    adminAdd(state, data) {
      state.admins.push(data);
    },
    AdminsGet(state, admins) {
      state.admins = admins;
    },
    deleteStudent(state, data) {
      const newStudents = state.students.filter((item) => item._id !== data._id);
      state.students = newStudents;
    },
    deleteContact(state, data) {
      const newContacts = state.contacts.filter((item) => item._id !== data._id);
      state.contacts = newContacts;
    },
    deleteAdmin(state, data) {
      const newAdmins = state.admins.filter((item) => item._id !== data._id);
      state.admins = newAdmins;
    },
  }
}
