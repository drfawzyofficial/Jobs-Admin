// Import Methods, Packages, Files
import { Fetch } from "../assets/utils";
import { router } from "../router";

// Declarations
import swal from 'sweetalert2';
window.Swal = swal;

// Auth Export
export const Auth = {
  namespaced: true,
  state: {
    user: null,
    statistics: null,
    chances: [],
    chancesCount: []

  },
  actions: {
    async Login({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("POST", "/admin/login", payload);
        if (data.statusCode === 200) {
          localStorage.setItem("token", data.result.token);
          router.push("/dashboard")
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'أتفهم الأمر' })
        }
        dispatch("Collection/loading", false, { root: true });
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: err.message, icon: 'error', confirmButtonText: 'أتفهم الأمر' })
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async GetProfile({ dispatch, commit }, payload) {
      try {
        const data = await Fetch("GET", "/admin/getprofile");
        if (data.statusCode === 200) {
          commit("setUser", data.result);
        } else if (data.statusCode === 401) {
          dispatch("Auth/AdminLogout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'أتفهم' })
        }
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
      }
    },
    async GetStatistics({ dispatch, commit }, payload) {
      try {
        const data = await Fetch("GET", "/admin/statistics/get");
        if (data.statusCode === 200) {
          commit("setStatistics", data.result);
        } else if (data.statusCode === 401) {
          dispatch("Auth/AdminLogout", {}, { root: true });
        } else {
          window.Swal.fire({ title: 'خطأ!', icon: "error", text: data.message, confirmButtonText: 'أتفهم' })
        }
      } catch (err) {
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' })
      }
    },
    async ChancesGet({ dispatch, commit }, payload) {
      try {
        dispatch("Collection/loading", true, { root: true });
        const data = await Fetch("GET", `/admin/chances/get/?page_no=${payload.page_no}`);
        console.log(data);
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
        console.log(err.message);
        window.Swal.fire({ title: 'خطأ!', text: "خطأ برمجي", icon: 'error', confirmButtonText: 'أتفهم' });
        dispatch("Collection/loading", false, { root: true });
      }
    },
    async Logout({ dispatch, commit }) {
      localStorage.removeItem("token");
      commit("unSetUser");
      router.push("/");
    },
  },
  mutations: {
    setStatistics(state, statistics) {
      state.statistics = statistics;
    },
    setUser(state, user) {
      state.user = user;
    },
    unSetUser(state) {
      state.user = null;
    },
    chancesGet(state, data) {
      state.chances = data.chances;
      state.chancesCount = data.chancesCount;
    },
  },
};
