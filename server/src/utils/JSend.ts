const JSend = {
  success: (data: any) => ({
    status: "success",
    data,
  }),
  fail: (message: any, data?: any) => ({
    status: "fail",
    message,
    data,
  }),
  error: (message: any, data?: any) => ({
    status: "error",
    message,
    data,
  }),
};
export default JSend;
