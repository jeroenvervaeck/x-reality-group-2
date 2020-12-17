import BruineZitbank from "../jeroen/BruineZitbank";
import ZwarteZitbank from "../jeroen/ZwarteZitbank";
import LavaboAndMirror from "../jeroen/LavaboAndMirror";
import Bookshelve from "../indy/bookshelves";
import StopcontactMediatheek from "../indy/stopcontactMediatheek";
import TafelMediatheek from "../indy/tafelmediatheek";
import Printer from "../indy/printer";

import Tafel_eetzaal from "../morgane/Tafels_eetzaal";





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

      <Tafel_eetzaal/>

    </group>
  );
};
