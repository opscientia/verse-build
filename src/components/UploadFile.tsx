/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck

import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';

import { ApiEndPoint } from '@/hooks/query/queryContants';
import { userProfileData } from '@/redux/slice/profileTab';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

export default function UploadFile() {
  const [files, setFiles] = useState([]);
  const [inputFile, setInputFile] = useState([]);
  const dispatch = useDispatch();

  const selectedFile = files?.[0];

  const { getRootProps, getInputProps, } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: {
      map: (
        arg0: (
          file: Blob | MediaSource,
        ) => (Blob | MediaSource) & { preview: string },
      ) => React.SetStateAction<never[]>;
    }) => {
      setFiles(
        acceptedFiles.map((file: Blob | MediaSource) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    dispatch(userProfileData(selectedFile));
  }, [selectedFile]);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));

  }, []);

  const handleSubmit = async (event) => {
    // const formData = selectedFile;
    const formData = new FormData();
    formData.append('file', selectedFile);
    // formData.append('name', 'ahmad');

    // formData.append('selectedFile', selectedFile);

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

  return (
    <Box>
      {/* <button onClick={handleSubmit}>click to test</button> */}

      <div
        {...getRootProps({
          className: 'dropzone',
        })}
      >
        <input {...getInputProps()} />

        <Box
          sx={{
            backgroundColor: '#393B50',
            width: '128px',
            height: '128px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            '& p': {
              fontSize: '12px',
              color: '#CCCCCC',
            },
          }}
        >
          {files.length === 0 && <Typography>Upload Photo</Typography>}

          {files.map((file) => (
            <Box key={file.name}>
              <Box>
                <Box
                  component='img'
                  src={file.preview}
                  sx={{
                    width: '128px',
                    height: '128px',
                    borderRadius: '50%',
                  }}
                  // Revoke data uri after image is loaded
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              </Box>
            </Box>
          ))}

          <Box
            sx={{
              backgroundColor: '#C398F9',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          >
            <Box
              component='img'
              src='/assets/images/upload.png'
            />
          </Box>
        </Box>
      </div>

      {/* <aside style={thumbsContainer}>{thumbs}</aside> */}
    </Box>
  );
}

{
  /* ; */
}
