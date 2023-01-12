import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface IProps {
  src: string;
  sx: BoxProps;
}

//* NOTE: Try not use space in file svg name
export default function SvgIconStyle({ src, sx, }:IProps) {
  return (
    <Box
      component='span'
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url("${src}") no-repeat center / contain`,
        WebkitMask: `url("${src}") no-repeat center / contain`,
        ...sx,
      }}
    />
  );
}
