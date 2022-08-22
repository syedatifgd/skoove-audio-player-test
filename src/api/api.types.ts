export interface ApiResponse<T> {
  data: T;
  status: 'Ok' | 'Fail';
  message: {
    code: string;
  };
}

export type ApiError = {
  message: {
    code: string;
    msg: string;
    stackTrace: string;
  };
};
