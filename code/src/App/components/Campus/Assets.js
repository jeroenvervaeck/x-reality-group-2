import BruineZitbank from "../vervaeck-jeroen/BruineZitbank";
import ZwarteZitbank from "../vervaeck-jeroen/ZwarteZitbank";
import LavaboAndMirror from "../vervaeck-jeroen/LavaboAndMirror";
import Whiteboard from "../vervaeck-jeroen/Whiteboard";
import Beamer from "../vervaeck-jeroen/Beamer";
import StopcontactLokaal from "../vervaeck-jeroen/StopcontactLokaal";
import Tafeldocent from "../vervaeck-jeroen/TafelDocent";

import Bookshelve from "../meermans-indy/bookshelves";
import StopcontactMediatheek from "../meermans-indy/stopcontactMediatheek";
import TafelMediatheek from "../meermans-indy/tafelmediatheek";
import Printer from "../meermans-indy/printer";
import Imac from "../meermans-indy/imac";
import Windows from "../meermans-indy/windows";
import Scanners from "../meermans-indy/scanners";
import Rondestoel from "../meermans-indy/rondestoel";
import MetalKast from "../meermans-indy/kabinetKast";

import Button from "../maesfranckx-ruben/button";
import Plant from "../maesfranckx-ruben/plant";

import SeatGrid from "../stasseyns-jonas/SeatGrid";
import OvaleTafels from "../stasseyns-jonas/OvaleTafels";
import GroteTafel from "../stasseyns-jonas/GroteTafel";

import Tafel_eetzaal from "../bekaert-morgane/Tafels_eetzaal";
import Kickertafel from "../bekaert-morgane/Kickertafel_eetzaal";
import Snackautomaat from "../bekaert-morgane/Snackautomaat_eetzaal";
import Koffieautomaat from "../bekaert-morgane/Koffieautomaat_eetzaal";
import Brandslang from "../bekaert-morgane/Brandslang_eetzaal";
import Vuilbakken from "../bekaert-morgane/Vuilbakken_eetzaal";
import Stoelen from "../bekaert-morgane/Stoel_eetzaal";

import Papierdispenser from "../de-hauwere-yentel/papierdispenser";
import Radiator from "../de-hauwere-yentel/radiator";
import Urinoir from "../de-hauwere-yentel/urinoir";
import VuilbakToilet from "../de-hauwere-yentel/vuilbakToilet";

import Tentoonstelling from "../maesfranckx-ruben/tentoonstelling"
import ToiletStall from "../stasseyns-jonas/ToiletStall";

export default (props) => {

  return (
    <group>
      <Button />
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
      <Whiteboard />
      <Tafel_eetzaal/>
      <Beamer />
      <Tafeldocent />

      <SeatGrid />
      <Tafel_eetzaal/>
      <ToiletStall/>

      <Kickertafel/>
      <Snackautomaat/>
      <Koffieautomaat/>
      <Brandslang/>
      <Vuilbakken/>
      <Stoelen/>

      <MetalKast />
      <OvaleTafels />
      <GroteTafel />

  	  <Papierdispenser />
  	  <Radiator />
  	  <Urinoir />
  	  <VuilbakToilet />
      <StopcontactLokaal />
      <Tentoonstelling />
    </group>
  );
};
