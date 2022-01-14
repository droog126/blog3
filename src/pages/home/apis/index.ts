import { request } from "@/utils/request";
const req = request();
export const countPv = () => {
  req.give("/count/pv", { path: location.pathname, type: "page" });
};
