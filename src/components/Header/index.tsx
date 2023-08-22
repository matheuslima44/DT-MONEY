import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import LogoImg from "../../assets/Logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton> Novo Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}

//asChild = Vai mudar, para que o Dialog.Trigger, não crie um Botão e sim reaproveite o que ja tem dentro dele
//Dialog.Trigger = Auxilio da Biblioteca  Dialog, que faz abrir e fechar nosso modal !

//Portal = é uma funciolanlidade do react = rendereiza um elemento filho dentro de um outro lugar da DOM
//Dialog.Portal = Oque estiver dentro vai parar em outro lugar da dom

//A biblioteca Dialog, auxilia que o modal, fique extremamente acessivel, podendo se utilizar o teclado, para navegar entra seus campos
