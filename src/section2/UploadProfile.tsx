import { Box, TextField, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function UploadProfile  () {
    const router = useRouter();
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
                    width: 382,
                    color: "white",
                }}
            >
                <Typography variant='h4'>Profile</Typography>
                <Box sx={{
                    display: "flex",
                    gap: "32px",
                    marginTop: "24px",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        backgroundColor: "#393B50",
                        width: "128px",
                        height: "128px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        position: "relative",
                        "& p":{
                            fontSize:"12px",
                            color:"#CCCCCC",
                        }
                    }} >
                        <Typography>Upload Photo</Typography>
                        <Box sx={{
                            backgroundColor: "#C398F9",
                            width: "32px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                        }}>
                            <Box component={"img"} src="/assets/images/upload.png" />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{
                            color: "#979797",
                            fontSize: "14px",
                            width: "160px",
                            textAlign: "left",
                        }}>Upload your profile image or use an avatar</Typography>
                        <Box component={"div"} sx={{
                            backgroundColor: "#393B50",
                            padding: "12px 16px 12px 12px",
                            borderRadius: "12px",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            gap: "6px",
                            mt: 2,
                            "& p": {
                                color: "#CCCCCC",
                                fontSize: "14px",
                            }
                        }}>
                            <Box component={"img"} src="/assets/images/smileface.png" />
                            <Typography>Use avatar</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    textAlign: "left",
                    mt: 4,
                }}>
                    <Typography>Username</Typography>
                    <TextField sx={{
                        border: "1px solid #393B50",
                        backgroundColor: "#393B50",
                        width: "100%",
                        borderRadius: "12px",
                        mt: 1,
                    }} />
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1,
                    gap: "8px",
                    "& p": {
                        color: "#979797",
                        fontSize: ""
                    }
                }}>
                    <Box component={"img"} src="/assets/images/caution.png" />
                    <Typography>You can always change your username later.</Typography>
                </Box>
                <Box sx={{
                    mt: 28,
                    display: "flex",
                    gap: "15px",
                }}>
                    <Button variant="outlined" sx={{
                        backgroundColor: "#2A274A",
                        border: "1px solid rgba(142, 73, 228, 0.4)",
                        color: "white",
                        textTransform: "none",
                        width: "49%",
                    }}>Back</Button>
                    <Button onClick={
                        ()=> router.push("/about")
                    } variant="outlined" sx={{
                        backgroundColor: "#782DC7",
                        border: "1px solid rgba(142, 73, 228, 0.4)",
                        textTransform: "none",
                        color: "white",
                        width: "49%",
                    }}>Next</Button>
                </Box>
            </Box>
        </Box>
    )
}
