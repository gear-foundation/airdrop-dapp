import { useAccount } from '@gear-js/react-hooks';
import { Button } from '@gear-js/vara-ui';

import { useModal } from '@/hooks/use-modal';

import { AccountButton } from '../account-button';
import { WalletModal } from '../wallet-modal';
import { useState, useStateAirdrop } from '@/app/hooks/use-read-state';

import style from './wallet.module.scss'
import { VaraBalance } from '../vara-balance';

function Wallet() {
  const { account, isAccountReady } = useAccount();
  const [isModalOpen, openModal, closeModal] = useModal();
  const { state } = useState();

  return isAccountReady ? (
    <>
      {account ? (
        <>
          <div className={style.token}>
            <h2>{state?.balances.find((balance: any) => balance[0] === account.decodedAddress)?.[1]}</h2>
            <h2>{state?.symbol}</h2>
          </div>
          <VaraBalance />
          <AccountButton color="dark" address={account.address} name={account.meta.name} onClick={openModal} />
        </>
      ) : (
        <Button text="Connect Wallet" onClick={openModal} />
      )}

      {isModalOpen && <WalletModal close={closeModal} />}
    </>
  ) : null;
}

export { Wallet };
