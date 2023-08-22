import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Searchform } from "./Searchform";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <Searchform />
        <TransactionsTable>
          <table>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento De Site</td>
                <td>
                  <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                </td>
                <td>Venda</td>
                <td>22/08/2023</td>
              </tr>
              <tr>
                <td width="50%">Hamburguer</td>
                <td>
                  <PriceHighLight variant="outcome">- R$ 59,99</PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>21/08/2023</td>
              </tr>
            </tbody>
          </table>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
