import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ActiveTrack {
  id: number;
  title: string;
  label: string;
  genre: string;
  spotifyEmbedId: string;
  spotifyUrl: string;
}

interface PlayerContextType {
  activeTrack: ActiveTrack | null;
  playTrack: (track: ActiveTrack) => void;
  closePlayer: () => void;
}

const PlayerContext = createContext<PlayerContextType>({
  activeTrack: null,
  playTrack: () => {},
  closePlayer: () => {},
});

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [activeTrack, setActiveTrack] = useState<ActiveTrack | null>(null);

  const playTrack = (track: ActiveTrack) => {
    setActiveTrack(track);
  };

  const closePlayer = () => {
    setActiveTrack(null);
  };

  return (
    <PlayerContext.Provider value={{ activeTrack, playTrack, closePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
