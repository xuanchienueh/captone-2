import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "./trailer.scss";

export default function Trailer({ film }) {
  const [isOpen, setOpen] = useState(false);

  let keywordLinkYoutube = film?.trailer?.slice(film.trailer.length - 11);

  useEffect(() => {
    keywordLinkYoutube && setOpen(true);
  }, [film.randomNumber]);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={`${keywordLinkYoutube}`}
        onClose={() => {
          setOpen(false);
        }}
      />
    </React.Fragment>
  );
}
