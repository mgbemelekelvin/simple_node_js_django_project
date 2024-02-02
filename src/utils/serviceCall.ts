import axios from 'axios';
import { IService } from './types';

interface IServiceResponse {
  resStatus: number;
  resData: {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  } | any;
}

const callService = async ({
  url,
  method,
}: IService): Promise<IServiceResponse> => {
  let resStatus = 500;
  let resData = {
    success: false,
    message: 'Something went wrong',
  };
  const config = {
    method,
    url,
    headers: {},
  };
  return axios(config)
    .then(({ status, data }) => {
      resStatus = status;
      resData = data;
    })
    .catch(({ response }) => {
      if (response) {
        const { status, data } = response;
        resStatus = status;
        resData = data;
      }
    })
    .then(() => ({ resStatus, resData }));
};

export = callService;
