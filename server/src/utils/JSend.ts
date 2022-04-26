const JSend = {
  success: (data: any, message?: any) => ({
    status: "success",
    data,
    message,
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
