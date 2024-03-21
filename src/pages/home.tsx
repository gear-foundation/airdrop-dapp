import { useStateMessage } from '@/app/hooks/use-read-state'
import { Container } from '@/components'
import { Button } from '@gear-js/vara-ui'
import React from 'react'

export const Home = () => {
	const handleMessage = useStateMessage()

	return (
		<Container>
			<Button text='Claim' onClick={() => handleMessage({ payload: { Claim: null } })} />
		</Container>
	)
}
