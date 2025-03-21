import { useState } from "react";
import { ApiRequestConfig, ApiResponse } from "../types";
import { executeApiRequest } from "../services/apiService";

export const useApiRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const execute = async (
    config: ApiRequestConfig
  ): Promise<ApiResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const result = await executeApiRequest(config);
      setResponse(result);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err);
      setLoading(false);
      return null;
    }
  };

  return { execute, loading, error, response };
};
