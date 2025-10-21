export type SuccessType<P = undefined> = P extends undefined
  ? { success: true }
  : { success: true; data: P };

export type ErrorType<T = Record<string, string>> = {
  success: false;
  error: {
    message?: string; description?: string;
    fieldErrors?: T;
  };
}
