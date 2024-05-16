import calculateStatistics from "./CalculateStatistics";
import fetchData from "./FetchData";
import parseTransaction from "./ParseTransaction";
import { showStatistics } from "./ShowStatistics";
import UnparsedTransaction from "./types/UnparsedTransaction";

const unparsedTransactions = await fetchData<UnparsedTransaction[]>(
  "https://api.origamid.dev/json/transacoes.json"
);

if (unparsedTransactions) {
  const transactions = unparsedTransactions.map((unparsedTransaction) => {
    return parseTransaction(unparsedTransaction);
  });
  const statistics = calculateStatistics(transactions);
  showStatistics(statistics);
}
