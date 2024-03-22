import { useStateAirdrop, useStateMessage } from '@/app/hooks/use-read-state'
import { Container } from '@/components'
import { useAccount } from '@gear-js/react-hooks'
import { Button } from '@gear-js/vara-ui'
import React from 'react'

export const Home = () => {
	const { account } = useAccount()
	const handleMessage = useStateMessage()
	const { claimers } = useStateAirdrop()
	const claimAccount = claimers?.Claimers.find((claimer: any) => claimer[0] === account?.decodedAddress)

	return (
		<Container>
			{claimAccount && <h1 style={{ marginBottom: 10 }}>Available balance: {claimAccount[1]}</h1>}
			{claimAccount ?
				<Button
					disabled={!claimAccount}
					text='Claim'
					onClick={() => handleMessage({
						payload: { Claim: null },
						onSuccess: () => {

						},
						onError: () => {

						}
					})}
				/> : <h1>Claim is not available</h1>
			}
		</Container>
	)
}
