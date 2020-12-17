import BruineZitbank from "../jeroen/BruineZitbank";
import ZwarteZitbank from "../jeroen/ZwarteZitbank";
import LavaboAndMirror from "../jeroen/LavaboAndMirror";

import Bookshelve from "../indy/bookshelves";
import StopcontactMediatheek from "../indy/stopcontactMediatheek";
import TafelMediatheek from "../indy/tafelmediatheek";
import Printer from "../indy/printer";
import Imac from "../indy/imac";
import Windows from "../indy/windows";
import Scanners from "../indy/scanners";
import Rondestoel from "../indy/rondestoel";
import MetalKast from "../indy/kabinetKast";



import Tafel_eetzaal from "../morgane/Tafels_eetzaal";


import Plant from "../ruben/plant";
import SeatGrid from "../jonas/SeatGrid";
import OvaleTafels from "../jonas/OvaleTafels";
import GroteTafel from "../jonas/GroteTafel";





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
      <MetalKast />
      <OvaleTafels />
      <GroteTafel />

    </group>
  );
};
