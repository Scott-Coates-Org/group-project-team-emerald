import { useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import SignatureCanvas from 'react-signature-canvas';
import styles from './SignatureBox.module.css';

export const SignatureBox = () => {
  // const [, setSignature] = useState(null);
  const [sigPad, setSignaturePad] = useState({});

  // const trim = () => {
  //   setSignature(sigPad.getTrimmedCanvas().toDataURL('image/png'));
  // };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
          canvasProps={{
            width: '500',
            height: '200',
            className: styles.signatureBox,
          }}
          className={styles.signatureBox}
          ref={ref => {
            setSignaturePad(ref);
          }}
        />
      </Box>
    </>
  );
};
