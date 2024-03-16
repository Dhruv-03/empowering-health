export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlNmU1NzA5Ny01ZmQyLTQ2ZWEtYTVhZi04NjY3NDJhMWJlZjUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMDU1MTc0OCwiZXhwIjoxNzExMTU2NTQ4fQ.I9dhJeCcANxttadMohQmc70y_AsMrbGmrt-L9daeqUo";

export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  
  const { roomId } = await res.json();
  return roomId;
};