/* eslint-disable sonarjs/no-duplicate-string */
import { Box, Button, Divider, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import {
  useMutationLinkToGithub,
  useMutationLinkToGoogle,
  useMutationLinkToOrcid
} from '@/hooks/query/mutation';
import { pn } from '@/utils/particleNetworkAuth';

import ImageButton from './ImageButton';
import PageGradient from './PageGradient';
import { colorGradients } from './Style';
import WalletConnectBtn from './WalletConnectBtn';

export default function SignInFarm() {
  const router = useRouter();
  // const wallet = useWallet

  const { mutate: signInWithGoogle, } = useMutationLinkToGoogle();
  const { mutate: signInWithGithub, } = useMutationLinkToGithub();
  const { mutate: signInWithOrcid, } = useMutationLinkToOrcid();

  return (
    <PageGradient>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Box
          component='img'
          src='/assets/images/verseLogo.png'
        />

        <Button
          onClick={() => {
            pn.auth.login({
              // when set social login auth type, will open thirdparty auth page directly.
              preferredAuthType: 'google',
              // when set email/phone account and preferredAuthType is email or phone,
              // Particle Auth will enter directly input verification code page.
              // when set JWT value and preferredAuthType is jwt, Particle Auth will auto login.
              loginFormMode: true, // login form mode will hide others ui except login form. only support supportAuthTypes equals email or phone.
              socialLoginPrompt: 'select_account', //social login prompt.  none | consent | select_account
            });
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              color: '#957C9D',
              mt: 4,
            }}
          >
            Connect Wallet with PN
          </Typography>
        </Button>

        <Typography
          variant='h4'
          sx={{
            mt: 1,
            fontWeight: 600,
          }}
        >
          Welcome to Verse
        </Typography>

        <Typography
          sx={{
            fontSize: 18,
            color: '#CEC5D1',
            mt: 1,
          }}
        >
          Jump into the multiverse of <br /> decentralized science!
        </Typography>

        {/* <WalletConnectBtn titleConnect={'Connect Wallet'} /> */}

        {/* <Divider
          sx={{
            background: 'linear-gradient(90deg, rgba(149, 124, 157, 0) 0%, #957C9D 100%)',
            backgroundSize: '100%',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#957C9D',
              fontSize: 12,
              mt: -1,
              background: 'linear-gradient(156.94deg, #24263E 0%, #1E191F 100%)',
              width: 28,
            }}
          >
            OR
          </Typography>
        </Box> */}

        <Box
          sx={{
            mt: 6,
          }}
        >
          <ImageButton
            url='/assets/svg/googleIcon.svg'
            title='Continue with Google'
            onClick={() => {
              router.push('/selectProfile');
              signInWithGoogle();
            }}
            // onClick={signInWithGoogle}
          />

          <ImageButton
            url='/assets/svg/orcid.svg'
            title='Continue with ORCiD'
            onClick={() => {
              router.push('/selectProfile');
              signInWithOrcid();
            }}
            // onClick={signInWithOrcid}
          />

          <ImageButton
            url='/assets/svg/gitHubIcon.svg'
            title='Continue with Github'
            onClick={() => {
              router.push('/selectProfile');
              signInWithGithub();
            }}
            // onClick={signInWithGithub}
          />

          <Typography
            sx={{
              fontSize: 12,
              color: '#957C9D',
              mt: 4,
            }}
          >
            By singing up, you agree to the{' '}

            <Typography
              component='span'
              sx={{
                textDecoration: 'underline',
                fontSize: 12,
                color: '#957C9D',
                mt: 4,
              }}
            >
              terms of services{' '}
            </Typography>{' '}

            <br />

            and{' '}

            <Typography
              component='span'
              sx={{
                textDecoration: 'underline',
                fontSize: 12,
                color: '#957C9D',
                mt: 4,
              }}
            >
              privacy policy
            </Typography>{' '}
          </Typography>
        </Box>
      </Box>
    </PageGradient>
  );
}
