import * as React from 'react';

import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <LinearProgress
        sx={{
          background:
            'linear-gradient(90deg, rgba(255, 255, 255, 0) -10.17%, #FFFFFF -5.26%, rgba(255, 255, 255, 0) 0%)',
          filter: 'blur(1.5px)',
          p:0.4,
          borderRadius: '3.6px',
        }}
        variant='determinate'
        {...props}
      />
    </Box>
  );
}

interface IPropProgress {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export default function MProgressbar({ progress, setProgress, }: IPropProgress) {
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
