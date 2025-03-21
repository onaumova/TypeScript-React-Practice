import { ApiRequestConfig, ApiResponse } from "../types";

export const executeApiRequest = async (
  config: ApiRequestConfig
): Promise<ApiResponse> => {
  try {
    const headers = new Headers();
    Object.entries(config.headers || {}).forEach(([key, value]) => {
      headers.append(key, value);
    });

    const response = await fetch(config.url, {
      method: config.method,
      headers,
      body: config.method !== "GET" ? config.body : undefined,
    });

    const responseHeaders: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    return {
      status: response.status,
      statusText: response.statusText,
      data: await response.json().catch(() => null),
      headers: responseHeaders,
    };
  } catch (error: any) {
    throw new Error(`API Request Failed: ${error.message}`);
  }
};
