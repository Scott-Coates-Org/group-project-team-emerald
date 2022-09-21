import { Button, Card, CardContent } from "@mui/material";
import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <Card sx={{ minWidth: 275, minHeight: 275 }}>
        <CardContent>Card Content</CardContent>
      </Card>

      <Button variant="contained" size="large">
        Buy Tickets
      </Button>
    </div>
  );
}
