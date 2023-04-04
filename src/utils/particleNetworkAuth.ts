/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ParticleNetwork, WalletEntryPosition } from '@particle-network/auth';
import { ParticleProvider } from '@particle-network/provider';

 export const pn = new ParticleNetwork({
  projectId: process.env.PARTICLE_APP_PROJECT_ID,
  clientKey: process.env.PARTICLE_APP_CLIENT_KEY,
  appId: process.env.PARTICLE_APP_APP_ID,
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

