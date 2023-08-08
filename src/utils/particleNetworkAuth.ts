import { ParticleNetwork } from '@particle-network/auth';

let pid = '';
let ckey = '';
let aid = '';

if (
  process.env.PARTICLE_APP_PROJECT_ID != undefined &&
  process.env.PARTICLE_APP_CLIENT_KEY != undefined &&
  process.env.PARTICLE_APP_APP_ID != undefined
) {
  pid = process.env.PARTICLE_APP_PROJECT_ID;
  ckey = process.env.PARTICLE_APP_CLIENT_KEY;
  aid = process.env.PARTICLE_APP_APP_ID;  
}else {
  throw new Error('Please set the environment variables, PARTICLE_APP_PROJECT_ID, PARTICLE_APP_CLIENT_KEY, PARTICLE_APP_APP_ID');
}

export const pn = new ParticleNetwork({
  projectId: pid,
  clientKey: ckey,
  appId: aid,
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
