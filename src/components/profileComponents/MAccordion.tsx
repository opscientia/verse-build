/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import ProfileShareCard from './ProfileShareCard';

const DataBase = [
  {
    imgUrl: '/assets/images/ORCiD.png',
    title: 'ORCiD',
    decs: '0000-0002-2318-4477',
    cardDate: 'Last sync at 12/26/22',
  },
  {
    imgUrl: '/assets/images/github.png',
    title: 'Github',
    decs: 'seldamat',
    cardDate: 'Last sync at 12/26/22',
  },
  {
    imgUrl: '/assets/images/discord.png',
    title: 'Discord',
    decs: 'hebbianloop#5169',
    cardDate: 'Last sync at 12/26/22',
  },
  {
    imgUrl: '/assets/images/twitter.png',
    title: 'Twitter',
    decs: '@hebbianloop',
    cardDate: 'Last sync at 12/26/22',
  }
];

const AccrodionData = [
  {
    id: 1,
    title: 'Linked Accounts',
    num: '4',
  },
  {
    id: 2,
    title: 'Affiliation',
    num: '3',
  },
  {
    id: 3,
    title: 'Education and Qualifications',
    num: '2',
  },
  {
    id: 4,
    title: 'Works',
    num: '2',
  }
];

export default function MAccrodian() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        '& .MuiPaper-root': {
          background: 'transparent',
          color: '#fff',
        },
        my:1,
        '& .MuiAccordionSummary-content.Mui-expanded':{
          my:1
        },
       
        '& .MuiAccordion-root:before':{
          background: 'transparent',
          display:'none',
        },
      }}
    >
      {AccrodionData.map((item, idx) => (
        <Accordion
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
          key={item.id}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            sx={{
              mt: 3.4,
              backgroundColor: '#32344F',
              borderRadius:expanded === `panel${item.id}` ? '12px 12px 0px 0px' : '12px',
              padding: '16px 10px 16px 16px',
              color: '#fff',
              fontSize: 20,
            }}
          >
            <Typography
              sx={{
                flexShrink: 0,
              }}
            >
              {item.title}

              <Typography
                component='span'
                sx={{
                  background: '#696D9E',
                  fontSize: 14,
                  px: 1.1,
                  py: 0.7,
                  ml: 1,
                  borderRadius: 1,
                }}
              >
                {item.num}
              </Typography>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                rowGap: 1.5,
                columnGap: 1.5,
                mt: 3,
              }}
            >
              {DataBase.map((item, idx) => (
                <ProfileShareCard
                  key={idx}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  decs={item.decs}
                  cardDate={item.cardDate}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
