import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import { Paper } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function timeline(){
    return(
        <Timeline className="">
            <TimelineItem >
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" className="font-NotoSans">2024</Typography>
                    <Typography variant="h4" className="font-NotoSans">KC3Hack2025</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>2024</TimelineContent>
            </TimelineItem>
            <TimelineItem >
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>2024</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};