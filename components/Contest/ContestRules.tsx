import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const ContestRules = () => {
  return (
    <>
      <Box>
        <Text fontSize="lg">
          Here are the rules for the Best Artists of the Month (B.A.M) contest:
        </Text>
        <UnorderedList pt="5">
          {[
            "The song should be released on at least one major platform like Spotify, YouTube, or SoundCloud.",
            "If any remixes are submitted, they will be considered ineligible and will be automatically disqualified during the judging round.",
            "Only one entry per contestant.",
            "Odds of winning depend on the number of entries received and artistic merit of the entry judged by subjective criteria.",
            "Only Original Songs are considered eligible for this contest.",
            "The Contest Submission period begins at 11:00 AM Pacific on June 9 and ends at 11:59 PM PST on July 7, 2023.",
            "The winners will be selected by Loyauxx A&R's including members of their team, during the judging period (07/08/23-07/17/23) based on the artistic merit of each submission.",
          ].map((i) => (
            <ListItem py="1">{i}</ListItem>
          ))}
        </UnorderedList>
        <Text pt="5">
          By participating in the B.A.M contest, you agree to comply with these
          rules and acknowledge that the judges' decisions are final. Good luck
          to all the talented artists taking part in this exciting competition!
        </Text>
      </Box>
    </>
  );
};


export default ContestRules;