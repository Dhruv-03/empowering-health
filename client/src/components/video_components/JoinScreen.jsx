import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import { authToken, createMeeting } from "../../API.js";

function JoinScreen({getMeetingAndToken}) {
    const [meetingId, setMeetingId] = useState(null);
    const onClick = async () => {
      await getMeetingAndToken(meetingId);
    };
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Meeting Id"
          onChange={(e) => {
            setMeetingId(e.target.value);
          }}
        />
        <button onClick={onClick}>Join</button>
        {" or "}
        <button onClick={onClick}>Create Meeting</button>
      </div>
    );
}

export default JoinScreen
