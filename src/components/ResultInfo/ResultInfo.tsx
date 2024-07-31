import { Typography } from '@mui/material';

interface ResultsInfoProps {
  currentCount: number;
  totalCount: number;
}

const ResultsInfo = ({ currentCount, totalCount }: ResultsInfoProps) => {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      {totalCount > currentCount && (
        <Typography variant="body1">{`Showing ${currentCount} of ${totalCount} results`}</Typography>
      )}
    </div>
  );
};

export default ResultsInfo;
