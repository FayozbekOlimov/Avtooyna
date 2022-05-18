// import { PER_PAGE } from "../constants";
import { request } from "./config";


const baseAPI = {
  find(id, url) {
    return request.get(`${url}/${id}`);
  },
  async fetchAll(url, data) {
    const res = await request.get(url, data,);
    return res;
  },
  async fetchWithParams(url, params) {
    const res = await request.get(url, { params },);
    return res;
  },
  async fetchWithPagination({
    url,
    page = 1,
    params = {},

  }) {
    const res = await request.get(url, {
      params: { ...params, page },
    });
    return res;
  },
  async create(url, data) {
    let res = await request.post(url, data);
    return res;
  },
  update: (id, url, data) => request({ method: "put", url: `${url}/${id}`, data }),

  remove: async (id, url) => {
    let res = await request.delete(`${url}/${id}`);
    return res.data.status;
  }
}

export default baseAPI;