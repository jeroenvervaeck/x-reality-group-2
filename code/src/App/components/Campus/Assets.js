import BruineZitbank from "../jeroen/BruineZitbank";
import ZwarteZitbank from "../jeroen/ZwarteZitbank";
import LavaboAndMirror from "../jeroen/LavaboAndMirror";
import Bookshelve from "../indy/bookshelves";
import StopcontactMediatheek from "../indy/stopcontactMediatheek";
import TafelMediatheek from "../indy/tafelmediatheek";
import Printer from "../indy/printer";

import Tafel_eetzaal from "../morgane/Tafels_eetzaal";

import Imac from "../indy/imac";
import Windows from "../indy/windows";
import Scanners from "../indy/scanners";
import Rondestoel from "../indy/rondestoel";
import Plant from "../ruben/plant";
import SeatGrid from "../jonas/SeatGrid";





export default (props) => {


  return (
    <group>
      <BruineZitbank />
      <ZwarteZitbank />
      <LavaboAndMirror />
      <StopcontactMediatheek />
      <TafelMediatheek />
      <Bookshelve />
      <Printer />
      <Imac />
      <Windows />
      <Scanners />
      <Rondestoel />
      <Plant />
      <SeatGrid />
      <Tafel_eetzaal/>

    </group>
  );
};
