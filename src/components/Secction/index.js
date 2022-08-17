import React from "react";
import maid from "../../img/maid.jpg";
import netflixSymbol from "../../img/netflixSymbol.svg";
import maidText from "../../img/maidText.svg";
import playButtonIcon from "../../img/playButtonIcon.svg";
import { MainImage,  NetflixSymbol , Show, MaidText, PlayButton, PlayButtonText, PlayButtonIcon} from "./styles";

export default function Secction() {
  return (
    <div>
      <MainImage src={maid} alt="maid" />
      <NetflixSymbol src={netflixSymbol} alt="netflix-symbol"/>
      <Show>SHOW</Show>
      <MaidText src={maidText} alt="maid-text"/>
      <PlayButton>
        <PlayButtonIcon src={playButtonIcon} alt="play-button-icon"/>
        <PlayButtonText>Play</PlayButtonText>
      </PlayButton>
    </div>
  );
}