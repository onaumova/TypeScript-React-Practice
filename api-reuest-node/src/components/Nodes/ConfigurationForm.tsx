/* export interface ApiRequestConfig {
    url: string;
    method: HttpMethod;
    headers: Record<string, string>;
    body?: string;
  } */

export default function ConfigurationForm() {
  return (
    <form>
      <label htmlFor="url">Url: </label>
      <input type="url" id="url" name="url"></input>
      <label htmlFor="method">Method: </label>
      <select id="method" name="method">
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="put">PUT</option>
        <option value="patch">PATCH</option>
        <option value="delete">DELETE</option>
      </select>
      <label htmlFor=""></label>
      <input type="" id="" name=""></input>
      <label htmlFor="requestBody"></label>
      <input type="text" id="requestBody" name="requestBody"></input>
    </form>
  );
}
