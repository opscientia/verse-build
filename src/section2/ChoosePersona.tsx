import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'
const Profile = [
    {
        id: "1",
        img: "/assets/images/public.png",
        title: "Public",
    }, {
        id: 2,
        img: "/assets/images/private.png",
        title: "Private",
    }
]
const ChoosePersona = () => {
    const router = useRouter();
    
    const [ profileType, setProfileType ] = useState('Public');

    const handleStates = () => {
       
    }

    return (
        <Box
            sx={{
                background: 'linear-gradient(351.79deg, rgba(54, 16, 61, 0.6) 6.31%, rgba(7, 10, 27, 0) 50%), #070A1B',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#24263E',
                    borderRadius: '15px',
                    p: 3,
                    maxWidth: 382,
                    color: "white",
                }}
            >
                <Box>
                    <h1>Choose your persona</h1>
                    <Box sx={{
                        marginTop: "24px",
                    }}>
                        {
                            Profile.map((items, idx) => {
                                return (
                                    <Box
                                    onClick={()=> setProfileType(items?.title)}
                                    sx={{
                                        padding: "48px",
                                        displa: "flex",
                                        fontSize: "18px",
                                        backgroundColor: "#393B50",
                                        borderRadius: "8px",
                                        mt: "16px",
                                        width: "auto",
                                    }}>
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "7px",
                                            "& img": {
                                                width: "18px",
                                                height: "18px",
                                            }
                                        }}>
                                            <Box component={"img"} src={items.img} />
                                            <Typography>{items.title}</Typography>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        <Box sx={{
                            mt: 29,
                        }}>
                            <Button onClick={
                                () => {
                                    if(profileType === 'Public'){
                                    router.push("/uploadPhoto")
                                }
                                if(profileType !== 'Public'){
                                    router.push("/uploadPhoto")
                                }
                            } 
                            } sx={{
                                backgroundColor: " #782DC7",
                                color: "white",
                                padding: "12px 20px",
                                width: "100%",
                                textTransform: "none",
                            }}>Next</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ChoosePersona
