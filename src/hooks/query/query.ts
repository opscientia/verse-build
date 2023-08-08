/* eslint-disable react-redux/useSelector-prefer-selectors */
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { queryKeys } from './queryContants';
import { useSelectWeb3 } from '../useSelectWeb3';

export const useQueryStreamsLiveDetails = () => {
  // const access_token = useSelector(state=>state.twitchUsers.accessToken)

  const { account, APP_CONTRACT } = useSelectWeb3();

  const getValues = useSelector((state) => state);

  
  const queryKey = [queryKeys.liveStreamersData];

  const queryFn = async () => {
    // return address;
  };

  return useQuery(queryKey, queryFn, {
    refetchOnWindowFocus: false,
    // enabled: !!access_token,
    onError: (error) => {
      console.log(error);
    },
  });
};
