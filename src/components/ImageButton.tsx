import React from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';


interface IProps {
  url: string;
  title: string;
  onClick?:()=> void
}

export default function ImageButton({ url, title,onClick }: IProps) {
  return (
    <Button
      fullWidth
      onClick={onClick}
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
