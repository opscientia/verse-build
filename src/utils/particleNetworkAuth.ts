/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ParticleNetwork, WalletEntryPosition } from '@particle-network/auth';
import { ParticleProvider } from '@particle-network/provider';

 export const pn = new ParticleNetwork({
  projectId: '7bfbaa10-0242-454a-8e0f-787e53fcee26',
  clientKey: 'cli4JLsB0wYShGdcqyQwKPgFcHSgaqxRK3PwLXKr',
  appId: '9255d061-5e64-49c5-b19d-464ff72823b6',
  chainName: 'Ethereum', //optional: current chain name, default Ethereum.
  chainId: 1, //optional: current chain id, default 1.

});

pn.auth.accountSecurity().catch((error) => {
    if (error.code === 4011) {
        console.log('ignore window close');
    } else if (error.code === 10005) {
        console.log('Invalid Token');
    } else if (error.code === 8005) {
        console.log('User not logged in');
    }
});

