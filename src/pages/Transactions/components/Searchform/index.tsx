import { MagnifyingGlass } from "phosphor-react";
import { SearchformContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";

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
