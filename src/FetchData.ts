async function fetchData<T>(): Promise<T> {
  const response = await fetch("https://api.origamid.dev/json/transacoes.json");
  const json = await response.json();
  return json;
}
