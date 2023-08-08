/* eslint-disable react-redux/useSelector-prefer-selectors */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme, }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background:
      'linear-gradient(90.03deg, rgba(142, 73, 228, 0.4) 0%, rgba(230, 160, 248, 0.4) 99.26%)',
    animationDuration: '8s',

  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'linear-gradient(91.13deg, #8E49E4 0%, #D9C9DA 100%)',
  },
}));

interface IProps {
  progress: number;
  setProgress: (value: any) => void;
}

export default function StaticProgressBar({ setProgress, progress, }: IProps) {
  console.log({
    progress,
  });

  return (
    <Box
      sx={{
        width: '300px',
      }}
    >

      <BorderLinearProgress
        variant='determinate'
        value={progress}
      />
    </Box>
  );
}