import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from './styling/prod.module.css';

export default function ProdSelector() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === 'panel1'}
      elevation={0}
      onChange={handleChange('panel1')}
      className={styles.accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className={styles.summary}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/team-emerald.appspot.com/o/images%2Fd09e386b-6a51-4716-918c-abd8e0351fb4?alt=media&token=eec8015d-041f-4a2d-8224-6f09f5900a27"
          alt="product"
          className={styles.prodImg}
        />

        <Typography
          className={styles.prodName}
          sx={{ color: 'text.secondary' }}
        >
          Product Name
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
