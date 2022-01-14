// import { createState } from '@hookstate/core';
import { encode } from "@msgpack/msgpack";

export const init = async () => {
  if (globalThis.req) {
    return globalThis.req;
  }
  return new Promise((rsv) => {
    const socket = new WebSocket("ws://localhost:9001");

    function give(path, data = {}) {
      const newData = { path, meth: "give", token: "tao", data };
      var buff = encode(newData);
      socket.send(buff);
    }
    socket.onmessage = (e) => {
      console.log(e);
    };
    socket.onopen = () => {
      const func = { give };
      globalThis.req = func as { give: any };
      rsv(func);
    };
  });
};

export default init();
type IReq = {
  give: (path: any, data: any) => {};
};
export const request = (): IReq => {
  return globalThis.req;
};
