/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/prefer-immediate-return */
/* eslint-disable sonarjs/no-identical-functions */
import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { ApiEndPoint, queryKeys } from './queryContants';

export const useMutationStakeNFt = () => {
  const queryClient = useQueryClient();

  const mutationFn = async () => {};

  return useMutation(mutationFn, {
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useMutationLinkToGoogle = () => {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    const options = {
      address: 'example12@gmail.com',
    };

    const tx = await axios.post(`${ApiEndPoint}/link-google`, options);

    console.log({
      tx,
    });

    return tx;
  };

  return useMutation(mutationFn, {
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useMutationLinkToGithub = () => {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    const options = {
      address: 'example12@gmail.com',
    };

    const tx = await axios.post(`${ApiEndPoint}/link-github`, options);

    console.log({
      tx,
    });

    return tx;
  };

  return useMutation(mutationFn, {
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useMutationLinkToOrcid = () => {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    const options = {
      address: 'example12@gmail.com',
    };

    const tx = await axios.post(`${ApiEndPoint}/link-orcid`, options);

    console.log({
      tx,
    });

    return tx;
  };

  return useMutation(mutationFn, {
    onError: (error) => {
      console.log(error);
    },
  });
};
