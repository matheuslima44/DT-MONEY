import { MagnifyingGlass } from "phosphor-react";
import { SearchformContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";

// Porque um Componente Renderiza?

/* 
  Hooks changed
  Props changed
*/

//O que pe o memo:
//0.1: comparar a versao antiga dos hooks e props
//0.2: Se mudou algo, ele vai permitir a nova Renderização

const searchformScrema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchformScrema>;

export function Searchform() {
  const featchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.featchTransactions;
    }
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchformScrema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await featchTransactions(data.query);
  }

  return (
    <SearchformContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por Transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchformContainer>
  );
}
