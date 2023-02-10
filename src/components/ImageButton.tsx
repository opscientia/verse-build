import React from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';


interface IProps {
  url: string;
  title: string;
}

export default function ImageButton({ url, title, }: IProps) {
  return (
    <Button
      fullWidth
      variant='contained'
      sx={{
        background: '#393B50',
        borderRadius: '12px',
        fontSize: 16,
        color: '#EAE3F2',
        fontWeight: 'normal',
        mt: '16px',
        p: '13px',
        '& img': {
          width: 28,
          height: 28,
          mr: '9px',
        },
      }}
    >
      <Image
        width={100}
        height={100}
        // layout='responsive'
        src={url}
        alt={title}
      />

      {title}
    </Button>
  );
}
