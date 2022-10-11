import { Checkbox, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SignatureBox } from './SignatureBox';

const organization = 'Trampoline Park';
const typeOfActivity = 'Trampoline-Jumping';
const listRisks = 'Running, Jumping, Sliding, etc';
const participationInActivity = 'VIP Points';

export default function Waiver() {
  return (
    <>
      <Typography variant="h3">
        Sign Waiver
      </Typography>

      <Typography variant="p" component="div" sx={{ pt: '10px' }}>
        This agreement releases {organization} from all liability relating to
        injuries that may occur during any activity, on premises. By signing
        this agreement, I agree to hold {organization} entirely free from any
        liability, including financial responsibility for injuries incurred,
        regardless of whether injuries are caused by negligence.
      </Typography>

      <Typography variant="p" component="div" sx={{ pt: '10px' }}>
        I also acknowledge the risks involved in {typeOfActivity}. These include
        but are not limited to {listRisks}. I swear that I am participating
        voluntarily, and that all risks have been made clear to me.
        Additionally, I do not have any conditions that will increase my
        likelihood of experiencing injuries while engaging in this activity.
      </Typography>

      <Typography variant="p" component="div" sx={{ pt: '10px' }}>
        By signing below I forfeit all right to bring a suit against{' '}
        {organization} for any reason. In return, I will receive{' '}
        {participationInActivity}. I will also make every effort to obey safety
        precautions as listed in writing and as explained to me verbally. I will
        ask for clarification when needed.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', pt: '10px' }}>
        <Checkbox />

        <Typography variant="p" component="div">
          I have read and agree to the terms and conditions
        </Typography>
      </Box>

      <SignatureBox />
    </>
  );
}
