import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterTimeLine = () => {

  return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="imvijaydevkate" // change to your username
        options={{height: 250}}
        />
  );
}

export default TwitterTimeLine;