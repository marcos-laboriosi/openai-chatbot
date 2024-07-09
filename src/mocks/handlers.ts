import { http, HttpResponse, delay } from 'msw';
import streamDataMock from './data/stream';

const encoder = new TextEncoder();
const OPENAI_API = import.meta.env.VITE_OPENAI_API;

export const handlers = [
  http.post(`${OPENAI_API}/chat/completions`, async () => {
    const stream = new ReadableStream({
      start(controller) {
        streamDataMock.forEach((data) =>
          controller.enqueue(encoder.encode(data))
        );
        controller.close();
      },
    });

    await delay();

    return new HttpResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
      },
    });
  }),
];
