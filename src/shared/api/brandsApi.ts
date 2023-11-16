import axiosClient from "./axiosClient";

const brandsApi = {
  getBrands() {
    const url = "get-brands";
    return axiosClient.get(url);
  },
};

export default brandsApi;
