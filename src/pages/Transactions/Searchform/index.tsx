import { MagnifyingGlass } from "phosphor-react";
import { SearchformContainer } from "./styles";

export function Searchform() {
  return (
    <SearchformContainer>
      <input type="text" placeholder="Busque por Transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchformContainer>
  );
}
