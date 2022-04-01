import { NextApiRequest, NextApiResponse } from "next";

async function onGet(params: any, response: NextApiResponse, request: NextApiRequest) {
  response.status(404).end();
}

async function onPost(data: any, params: any, response: NextApiResponse, request: NextApiRequest) {
  response.status(404).end();
}

async function onPut(data: any, params: any, response: NextApiResponse, request: NextApiRequest) {
  response.status(404).end();
}

async function onDelete(params: any, response: NextApiResponse, request: NextApiRequest) {
  response.status(404).end();
}

export default async function api(request: NextApiRequest, response: NextApiResponse) {
  switch (request.method?.toLowerCase()) {
    case 'get':
      onGet(
        request.query,
        response,
        request);
      break;
    case 'post':
      onPost(
        request.body,
        request.query,
        response,
        request);
      break;
    case 'put':
      onPut(
        request.body,
        request.query,
        response,
        request);
      break;
    case 'delete':
      onDelete(
        request.query,
        response,
        request);
      break;
  }
}
