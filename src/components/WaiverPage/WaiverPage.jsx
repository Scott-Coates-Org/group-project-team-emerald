import { Button, Checkbox, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';
import SignatureCanvas from 'react-signature-canvas';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import styles from './WaiverPage.module.css';


const WaiverPage = ({ details, btn }) => {
    const {content, extraDetails, toCheck, title} = details;
    return (
        <>
            <Box sx ={{margin: '0 auto', width:'50%'}}>
                <PageNumber />
                <Typography variant="h3" component="div" sx = {{margin:' 1.5rem 0'}}>
                    {title}
                </Typography>
                <Typography variant="p" component="div">
                    {content}
                </Typography>
                <Box sx={{display:'flex', 'align-items':'center'}}>
                <Checkbox />
                <Typography variant="p" component="div">
                    {toCheck}
                </Typography>
                </Box>
                <Typography variant ="p" component="div" sx={{marginBottom:'1.5rem'}}>
                    {extraDetails}
                </Typography>
                <SignatureBox btn={btn} />
            </Box>
        </>
    );
};

export default WaiverPage;

                    //default steps
const PageNumber = ({ currStep = 5, totalStep = 6 }) => {
    return (
        <>
            <Box sx={{width: '50%'}}>
            <Typography variant="h6" component="div">
                Step {currStep} out of {totalStep}
            </Typography>
                <LinearProgress variant="determinate" value={Math.round((100 / totalStep) * currStep)} />
            </Box>

        </>
    );
};

const SignatureBox = ({btn}) => {
    const [signature, setSignature] = useState(null);
    const [sigPad, setSignaturePad] = useState({});

    const trim = () => {
        //converts to base64
        setSignature(sigPad.getTrimmedCanvas().toDataURL('image/png'));
        console.log(signature);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    'flexDirection': 'column',
                    gap: '4px',
                    width: '80%',
                }}
            >
                <Button
                    endIcon={<CloseIcon />}
                    variant="outlined"
                    sx={{ alignSelf: 'flex-end' }}
                    onClick={() => sigPad.clear()}
                >
                    Clear
                </Button>
                <SignatureCanvas
                    penColor="black"
                    canvasProps={{width:'500', height:'200', className: styles.signatureBox}}
                    className= {styles.signatureBox}
                    ref={ref => {
                        console.log(ref);
                        setSignaturePad(ref);
                    }}
                />
                <Box >
                    <Button variant="outlined" sx= {{width:'50%'}}>{btn.first}</Button>
                    <Button variant="contained" sx={{width:'50%'}} onClick = {trim}>{btn.second}</Button>
                </Box>
            </Box>
        </>
    );
};
