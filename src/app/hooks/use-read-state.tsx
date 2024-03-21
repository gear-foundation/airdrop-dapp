import meta from '@/assets/meta/fungible_token.meta.txt';
import metaAirdrop from '@/assets/meta/meme_drop.meta.txt';

import { useReadState } from '.';
import { ENV } from '../сonsts';
import { useProgramMetadata } from './api';
import { useSendMessageHandler } from '@gear-js/react-hooks';

export const programIdState = ENV.CONTRACT;
export const programIdAirdrop = ENV.AIRDROP;

export function useState() {
	const { state } = useReadState<any>({
		programId: programIdState,
		meta,
		payload: '0x',
	});

	return { state };
}

export function useStateMessage() {
	const metadata = useProgramMetadata(metaAirdrop);
	return useSendMessageHandler(programIdAirdrop, metadata, {
		disableAlerts: true,
		isMaxGasLimit: true,
	});
}
