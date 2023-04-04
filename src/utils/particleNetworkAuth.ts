/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ParticleNetwork } from '@particle-network/auth';

if (
  process.env.PARTICLE_APP_PROJECT_ID === undefined &&
  process.env.PARTICLE_APP_CLIENT_KEY === undefined &&
  process.env.PARTICLE_APP_APP_ID === undefined
) {
  throw new Error('Please set the environment variables, PARTICLE_APP_PROJECT_ID, PARTICLE_APP_CLIENT_KEY, PARTICLE_APP_APP_ID');
}

export const pn = new ParticleNetwork({
  projectId: process.env.PARTICLE_APP_PROJECT_ID!,
  clientKey: process.env.PARTICLE_APP_CLIENT_KEY!,
  appId: process.env.PARTICLE_APP_APP_ID!,
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
