/* eslint-disable react-redux/useSelector-prefer-selectors */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';

import axios from 'axios';
import { useSelector } from 'react-redux';

import { ApiEndPoint } from '@/hooks/query/queryContants';
import About from '@/section/About';
import AccountLink from '@/section/AccountLink';
import BrowseSocietiesList from '@/section/BrowseSocietiesList';
import PreviewSection from '@/section/PreviewSection';
import ChoosePersona from '@/section2/ChoosePersona';
import UploadProfile from '@/section2/UploadProfile';

export interface UserInfoDetails {
  aboutYou: string,
  currentStatus: string,
  scienceDo: string,
  yourRole: string
}

export default function selectProfile() {

  const activeTab = useSelector((state: any) => state.profileTabs.currentTab);
  const [profileType, setProfileType] = useState('Public');
  const [userName, setUserName] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfoDetails>();

  const profileFile = useSelector((state: any) => state.profileTabs.profileData);

  // const DataStepToSave = {
  //   userName: userName,
  //   profileType: profileType,
  //   scienceDo: userInfo?.scienceDo,
  //   yourRole: userInfo?.yourRole,
  //   currentStatus: userInfo?.currentStatus,
  //   aboutYou: userInfo?.aboutYou,
  //   importAccount: '',
  //   file: profileFile,
  // };
  const scienceDo = userInfo?.scienceDo ?? '';
  const yourRole = userInfo?.yourRole ?? '';
  const currentStatus = userInfo?.currentStatus ?? '';
  const aboutYou = userInfo?.aboutYou ?? '';

  const handleSubmit = async () => {

    const formData = new FormData();

    console.log({
      formData,
    });

    formData.append('file', profileFile);
    formData.append('userName', userName);
    formData.append('profileType', profileType);
    formData.append('scienceDo', scienceDo);
    formData.append('aboutYou', aboutYou);
    formData.append('yourRole', currentStatus);
    formData.append('yourRole', yourRole);

    try {
      const response = await axios({
        method: 'post',
        url: `${ApiEndPoint}/uploadFile`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data; boundary=MyBoundary',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const STEPS_OF_PROFILE: any = {
    selectProfile: <ChoosePersona
      setProfileType={setProfileType}
      profileType={profileType}
    />,
    uploadPhoto: <UploadProfile
      setUserName={setUserName}
      userName={userName}
    />,
    about: <About
      setUserInfo={setUserInfo}
    />,
    accountLink: <AccountLink />,
    preview: <PreviewSection handleSubmit={handleSubmit} />,
    browseList: <BrowseSocietiesList />,
  };

  return (
    <div>
      {STEPS_OF_PROFILE?.[activeTab]}
    </div>
  );
}
