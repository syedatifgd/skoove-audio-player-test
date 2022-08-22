import axios, {AxiosResponse} from 'axios';
import {ApiError, ApiResponse} from './api.types';

class ApiClient {
  public token?: string;
  public uid?: string;

  public readonly api = axios.create({
    baseURL: '/api',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 4000,
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });

  async get<T>(path: string) {
    const res = await this.api.get<ApiResponse<T>>(path);

    try {
      return this.handleResponse(res);
    } catch (e: any) {
      const errorMessage = e.message;

      console.error(errorMessage);
    }
  }

  private handleResponse<T>(res: AxiosResponse<ApiResponse<T>>) {
    if (res?.statusText === 'OK' || res?.status === 200) return res.data;

    throw new Error(this.getErrorMessage(res));
  }

  private getErrorMessage(_err: AxiosResponse<ApiResponse<unknown>>) {
    console.log('err: ', JSON.stringify(_err));
    // TODO: get error message by code?
    const _error = _err as unknown as AxiosResponse<ApiError>;

    return _error?.data?.message?.msg ?? 'Something went wrong.';
  }
}

export const apiClient = new ApiClient();
