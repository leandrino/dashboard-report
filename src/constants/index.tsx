/* tslint:disable */
declare global {
  interface Window {
    baseURL: string;
  }
}
/* tslint:enable */

export const BASE_URL: string = window.baseURL || "http://localhost:3000";
