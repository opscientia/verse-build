/* eslint-disable react-redux/useSelector-prefer-selectors */
import { useSelector } from 'react-redux';

export const useSelectWeb3 = () => useSelector((state:any) => state.web3Slice);
