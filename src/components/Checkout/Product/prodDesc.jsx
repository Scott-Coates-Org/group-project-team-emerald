import styles from './styling/prod.module.css';
import { Typography, Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProdDesc() {
  const times = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
    '05:00 PM',
  ];

  return (
    <>
      <div className={styles.descContainer}>
        {times.map(item => (
          <Button key={item} className={styles.timeBtn} variant="contained">
            {item}
          </Button>
        ))}
      </div>

      <div className={styles.bottom}>
        <Typography>60 minutes</Typography>
        <Typography>$30</Typography>

        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <RemoveIcon className={styles.icon} />
          </Button>
          <Button disableRipple className={styles.count}>
            3
          </Button>
          <Button>
            <AddIcon className={styles.icon} />
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
