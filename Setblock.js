let blockplaced = "";

let choosedTeam = "";

const teamMenuTitle = "Setblock";
  const teamMenuText = "\n Choose a team \n";

  const teamMenuButtons = [
    ["[stat]", "[red]"],
    ["[#c34aff]", "[green]"],
    ["[blue]","[grey]"],
    ["[green] Close"],
  ];

  const setblockMain = (player, option) => {

    if (option === 0){
      const title = "Setblock Turrets";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockTurretsMenu, title, text, buttons);
      return;
    }

    if (option === 1){
      const title = "Setblock Drills";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockDrillsMenu, title, text, buttons);
      return;
      
    }

    if (option === 2){
      const title = "Setblock Items";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockItemsMenu, title, text, buttons);
      return;
    }

    if (option === 3){
      const title = "Setblock Liquids";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockLiquidsMenu, title, text, buttons);
      return;
      
    }

    if (option === 4){
      const title = "Setblock Power";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockPowerMenu, title, text, buttons);
      return;
    }

    if (option === 5){
      const title = "Setblock Walls";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","","",]);
      buttons.push(["","","","",""]);
      
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockWallsMenu, title, text, buttons);
      return;
    }
    
    if (option === 6){
      const title = "Setblock Factories";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockFactoriesMenu, title, text, buttons);
      return;
    }

    if (option === 7){
      const title = "Setblock Units";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockUnitsMenu, title, text, buttons);
      return;
    }

    if (option === 8){
      const title = "Setblock Misc";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockMiscMenu, title, text, buttons);
      return;
    }

    if (option === 9){
      const title = "Setblock Logic";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      
      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockLogicMenu, title, text, buttons);
      return;
    }

    if (option === 10){
      const title = "Setblock Sandbox";
      const text = "\n Choose a block to place \n";

      const buttons = [["","","","",""]];
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","",""]);
      buttons.push(["","","","","Air"]);

      buttons.push(["[green] Close","[sky] Back"]);

      Call.menu(player.con, setblockSandboxMenu, title, text, buttons);
      return;
  };
}




//TURRETS
  const setblockTurrets = (player, option) => {

    if (option === 0){
      blockplaced = "duo";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 1){
      blockplaced = "scatter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 2){
      blockplaced = "scorch";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 3){
      blockplaced = "hail";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 4){
      blockplaced = "wave";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 5){
      blockplaced = "lancer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 6){
      blockplaced = "arc";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 7){
      blockplaced = "swarmer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 8){
      blockplaced = "parallax";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 9){
      blockplaced = "salvo";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 10){
      blockplaced = "tsunami";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 11){
      blockplaced = "fuse";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 12){
      blockplaced = "ripple";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 13){
      blockplaced = "cyclone";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 14){
      blockplaced = "foreshadow";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 15){
      blockplaced = "spectre";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 16){
      blockplaced = "meltdown";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 17){
      blockplaced = "segment";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 18){
      blockplaced = "diffuse";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 19){
      blockplaced = "sublimate";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 20){
      blockplaced = "titan";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 21){
      blockplaced = "disperse";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 22){
      blockplaced = "afflict";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 23){
      blockplaced = "lustre";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 24){
      blockplaced = "scathe";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 25){
      blockplaced = "smite";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 26){
      blockplaced = "malign";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 27){
      blockplaced = "breach";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 31){
    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
      return;
    }
  }

//DRILLS
  const setblockDrills = (player, option) => {
    if (option === 0){
      blockplaced = "mechanicalDrill";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 1){
      blockplaced = "pneumaticDrill";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 2){
      blockplaced = "laserDrill";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 3){
      blockplaced = "airblastDrill";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 4){
      blockplaced = "waterExtractor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 5){
      blockplaced = "cultivator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 6){
      blockplaced = "oilExtractor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 7){
      blockplaced = "ventCondenser";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 8){
      blockplaced = "cliffCrusher";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 9){
      blockplaced = "plasmaBore";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 10){
      blockplaced = "largePlasmaBore";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 11){
      blockplaced = "impactDrill";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 12){
      blockplaced = "eruptionDrill";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 16){

      const p = players[player.uuid()];

    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return;
    }
  }

//ITEMS
  const setblockItems = (player, option) => {
    if (option === 0){
      blockplaced = "conveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 1){
      blockplaced = "titaniumConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 2){
      blockplaced = "plastaniumConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 3){
      blockplaced = "armoredConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 4){
      blockplaced = "junction";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 5){
      blockplaced = "bridgeConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 6){
      blockplaced = "phaseConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 7){
      blockplaced = "sorter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 8){
      blockplaced = "invertedSorter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 9){
      blockplaced = "router";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 10){
      blockplaced = "distributor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 11){
      blockplaced = "overflowGate";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 12){
      blockplaced = "underflowGate";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 13){
      blockplaced = "massDriver";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 14){
      blockplaced = "duct";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 15){
      blockplaced = "armoredDuct";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 16){
      blockplaced = "ductRouter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 17){
      blockplaced = "overflowDuct";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 18){
      blockplaced = "underflowDuct";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 19){
      blockplaced = "ductBridge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 20){
      blockplaced = "ductUnloader";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 21){
      blockplaced = "surgeConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 22){
      blockplaced = "surgeRouter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 23){
      blockplaced = "unitCargoLoader";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 24){
      blockplaced = "unitCargoUnloadPoint";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 26){
    const p = players[player.uuid()];

    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return;
    }
  }

//LIQUIDS
  const setblockLiquids = (player, option) => {
    if (option === 0){
      blockplaced = "mechanicalPump";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 1){
      blockplaced = "rotaryPump";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 2){
      blockplaced = "impulsePump";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 3){
      blockplaced = "conduit";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 4){
      blockplaced = "pulseConduit";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 5){
      blockplaced = "platedConduit";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 6){
      blockplaced = "liquidRouter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 7){
      blockplaced = "liquidContainer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 8){
      blockplaced = "liquidTank";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 9){
      blockplaced = "liquidJunction";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 10){
      blockplaced = "bridgeConduit";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 11){
      blockplaced = "phaseConduit";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 12){
      blockplaced = "reinforcedPump";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 13){
      blockplaced = "reinforcedConduit";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 14){
      blockplaced = "reinforcedLiquidJunction";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 15){
      blockplaced = "reinforcedBridgeConduit";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 16){
      blockplaced = "reinforcedLiquidRouter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 17){
      blockplaced = "reinforcedLiquidContainer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 18){
      blockplaced = "reinforcedLiquidTank";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 21){
    const p = players[player.uuid()];

    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return;
    }
  }

//POWER
  const setblockPower = (player, option) => {
    if (option === 0){
      blockplaced = "powerNode";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 1){
      blockplaced = "largePowerNode";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 2){
      blockplaced = "surgeTower";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 3){
      blockplaced = "batteryDiode";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 4){
      blockplaced = "battery";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 5){
      blockplaced = "largeBattery";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 6){
      blockplaced = "combustionGenerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 7){
      blockplaced = "thermalGenerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 8){
      blockplaced = "steamGenerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 9){
      blockplaced = "differencialGenerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 10){
      blockplaced = "rtgGenerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 11){
      blockplaced = "solarPanel";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 12){
      blockplaced = "largeSolarPanel";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 13){
      blockplaced = "thoriumReactor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 14){
      blockplaced = "impactReactor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 15){
      blockplaced = "beamNode";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 16){
      blockplaced = "beamTower";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 17){
      blockplaced = "turbineCondenser";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 18){
      blockplaced = "chemicalCombustionChamber";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 19){
      blockplaced = "pyrolisisGenerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 20){
      blockplaced = "fluxReactor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 21){
      blockplaced = "neoplasiaReactor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return;
    }

    if (option === 26){
    const p = players[player.uuid()];

    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
      return;
    }
}
  
//WALLS  
  const setblockWalls = (player, option) => {
    if (option === 0){
      blockplaced = "copperWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 1){
      blockplaced = "copperWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 2){
      blockplaced = "titaniumWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 3){
      blockplaced = "titaniumWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 4){
      blockplaced = "plastaniumWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 5){
      blockplaced = "plastaniumWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 6){
      blockplaced = "thoriumWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 7){
      blockplaced = "thoriumWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 8){
      blockplaced = "phaseWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 9){
      blockplaced = "phaseWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 10){
      blockplaced = "surgeWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 11){
      blockplaced = "surgeWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 12){
      blockplaced = "door";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 13){
      blockplaced = "largeDoor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 14){
      blockplaced = "scrapWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 15){
      blockplaced = "scrapWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 16){
      blockplaced = "scrapWallHuge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 17){
      blockplaced = "scrapWallGigantic";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 18){
      blockplaced = "berylliumWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 19){
      blockplaced = "berylliumWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 20){
      blockplaced = "tungstenWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 21){
      blockplaced = "tungstenWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 22){
      blockplaced = "blastDoor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 23){
      blockplaced = "reinforcedSurgeWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 24){
      blockplaced = "reinforcedSurgeWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 25){
      blockplaced = "carbideWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 26){
      blockplaced = "carbideWallLarge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 27){
      blockplaced = "shieldedWall";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 31){
    const p = players[player.uuid()];

    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    
    return
    }
  }
  
//FACTORIES
  const setblockFactories = (player, option) => {
    if (option === 0){
      blockplaced = "graphitePress";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 1){
      blockplaced = "multiPress";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 2){
      blockplaced = "siliconSmelter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 3){
      blockplaced = "siliconCrucible";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 4){
      blockplaced = "kiln";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 5){
      blockplaced = "plastaniumCompressor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 6){
      blockplaced = "phaseWeaver";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 7){
      blockplaced = "surgeSmelter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 8){
      blockplaced = "cryofluidMixer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 9){
      blockplaced = "pyratiteMixer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 10){
      blockplaced = "blastMixer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 11){
      blockplaced = "melter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 12){
      blockplaced = "separator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 13){
      blockplaced = "disassembler";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 14){
      blockplaced = "sporePress";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 15){
      blockplaced = "pulverizer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 16){
      blockplaced = "coalCentrifuge";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 17){
      blockplaced = "incinerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 18){
      blockplaced = "siliconArcFurnace";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 19){
      blockplaced = "electrolyzer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 20){
      blockplaced = "atmosphericConcentrator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 21){
      blockplaced = "oxidationChamber";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 22){
      blockplaced = "electricHeater";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 23){
      blockplaced = "slagHeater";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 24){
      blockplaced = "phaseHeater";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 25){
      blockplaced = "heatRedirector";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 26){
      blockplaced = "heatRouter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 27){
      blockplaced = "slagIncinerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 28){
      blockplaced = "carbideCrucible";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 29){
      blockplaced = "surgeCrucible";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 30){
      blockplaced = "cyanogenSynthesizer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 31){
      blockplaced = "phaseSynthesizer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 36){
    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return
    }
  }
  
//UNITS
  const setblockUnits = (player, option) => {
    if (option === 0){
      blockplaced = "groundFactory";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 1){
      blockplaced = "airFactory";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 2){
      blockplaced = "navalFactory";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 3){
      blockplaced = "additiveReconstructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 4){
      blockplaced = "multiplicativeReconstructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 5){
      blockplaced = "exponentialReconstructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 6){
      blockplaced = "tetrativeReconstructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 7){
      blockplaced = "repairPoint";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 8){
      blockplaced = "repairTurret";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 9){
      blockplaced = "tankFabricator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 10){
      blockplaced = "shipFabricator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 11){
      blockplaced = "mechFabricator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 12){
      blockplaced = "tankRefabricator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 13){
      blockplaced = "shipRefabricator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 14){
      blockplaced = "mechRefabricator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 15){
      blockplaced = "primeRefabricator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 16){
      blockplaced = "tankAssembler";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 17){
      blockplaced = "shipAssembler";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 18){
      blockplaced = "mechAssembler";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 19){
      blockplaced = "basicAssemblerModule";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 20){
      blockplaced = "unitRepairTower";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 21){
      blockplaced = "payloadConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 22){
      blockplaced = "payloadRouter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 23){
      blockplaced = "reinforcedPayloadConveyor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 24){
      blockplaced = "reinforcedPayloadRouter";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 25){
      blockplaced = "payloadMassDriver";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 26){
      blockplaced = "largePayloadMassDriver";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 27){
      blockplaced = "smallDeconstructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 28){
      blockplaced = "deconstructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 29){
      blockplaced = "constructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 30){
      blockplaced = "largeConstructor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 31){
      blockplaced = "payloadLoader";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 32){
      blockplaced = "payloadUnloader";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 36){
    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return
    }
  }

//MISC
  const setblockMisc = (player, option) => {
    if (option === 0){
      blockplaced = "mender";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 1){
      blockplaced = "mendProjector";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 2){
      blockplaced = "overdriveProjector";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 3){
      blockplaced = "overdriveDome";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 4){
      blockplaced = "forcefieldProjector";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 5){
      blockplaced = "shockMine";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 6){
      blockplaced = "buildTower";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 7){
      blockplaced = "regenProjector";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 8){
      blockplaced = "shockwaveTower";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 9){
      blockplaced = "container";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 10){
      blockplaced = "vault";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 11){
      blockplaced = "unloader";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 12){
      blockplaced = "reinforcedContainer";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 13){
      blockplaced = "reinforcedVault";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 14){
      blockplaced = "illuminator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 15){
      blockplaced = "radar";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 21){
    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return
    }
  }

//LOGIC
  const setblockLogic = (player, option) => {
    if (option === 0){
      blockplaced = "message";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 1){
      blockplaced = "switch";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 2){
      blockplaced = "microProcessor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 3){
      blockplaced = "logicProcessor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 4){
      blockplaced = "hyperProcessor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 5){
      blockplaced = "memoryCell";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 6){
      blockplaced = "memoryBank";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 7){
      blockplaced = "logicDisplay";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 8){
      blockplaced = "largeLogicDisplay";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 9){
      blockplaced = "canvas";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 10){
      blockplaced = "reinforcedMessage";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 16){
    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return
    }
  }

//SANDBOX
  const setblockSandbox = (player, option) => {
    if (option === 0){
      blockplaced = "itemSource";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 1){
      blockplaced = "itemVoid";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 2){
      blockplaced = "liquidSource";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 3){
      blockplaced = "liquidVoid";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 4){
      blockplaced = "powerSource";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 5){
      blockplaced = "powerVoid";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 6){
      blockplaced = "heatSource";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 7){
      blockplaced = "thruster";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 8){
      blockplaced = "payloadSource";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 9){
      blockplaced = "payloadVoid";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 10){
      blockplaced = "shieldProjector";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 11){
      blockplaced = "largeShieldProjector";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 12){
      blockplaced = "coreShard";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 13){
      blockplaced = "coreFoundation";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 14){
      blockplaced = "coreNucleus";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 15){
      blockplaced = "coreBastion";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 16){
      blockplaced = "coreCitadel";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 17){
      blockplaced = "coreAcropolis";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 18){
      blockplaced = "worldProcessor";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 19){
      blockplaced = "worldCell";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 20){
      blockplaced = "worldMessage";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 21){
      blockplaced = "interplanetaryAccelerator";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 22){
      blockplaced = "beamLink";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 23){
      blockplaced = "coreZone";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 24){
      blockplaced = "air";
      Call.menu(player.con, setblockTeamsMenu, teamMenuTitle, teamMenuText, teamMenuButtons);
      return
    }

    if (option === 26){
    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
      
    return
    }
  }
  
  
  
  
  
  //TEAMS-----------------------------------------
  const setblockTeams = (player, option) => {

    const p = players[player.uuid()];

    if (option === 0){
      choosedTeam = "sharded";
      p.setblock = true;
      return;
    }
    if (option === 1){
      choosedTeam = "crux";
      p.setblock = true;
      return;
    }
    if (option === 2){
      choosedTeam = "malis";
      p.setblock = true;
      return;
    }
    if (option === 3){
      choosedTeam = "green";
      p.setblock = true;
      return;
    }
    if (option === 4){
      choosedTeam = "blue";
      p.setblock = true;
      return;
    }
    
    if (option === 5){
      choosedTeam = "derelict";
      p.setblock = true;
      return;
    }
  }






//SETBLOCK MENUS
const setblockMainMenu = Menus.registerMenu(setblockMain);

const setblockTurretsMenu = Menus.registerMenu(setblockTurrets);
const setblockDrillsMenu = Menus.registerMenu(setblockDrills);
const setblockItemsMenu = Menus.registerMenu(setblockItems);
const setblockLiquidsMenu = Menus.registerMenu(setblockLiquids);
const setblockPowerMenu = Menus.registerMenu(setblockPower);
const setblockWallsMenu = Menus.registerMenu(setblockWalls);
const setblockFactoriesMenu = Menus.registerMenu(setblockFactories);
const setblockUnitsMenu = Menus.registerMenu(setblockUnits);
const setblockMiscMenu = Menus.registerMenu(setblockMisc);
const setblockLogicMenu = Menus.registerMenu(setblockLogic);
const setblockSandboxMenu = Menus.registerMenu(setblockSandbox);

const setblockTeamsMenu = Menus.registerMenu(setblockTeams);


clientCommands.register(
  'setblock',
  'places any block',

  runner((args, player) => {

    if (player.admin){

    const p = players[player.uuid()];

    const title = "Setblock";

    const text = ("\n" + "Choose a block category" + "\n");
    
    const buttons = [["",""]];
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);
    buttons.push(["",""]);  
    buttons.push(["[stat]Sandbox Blocks"]);
    buttons.push(["[green] Close"]);
    Call.menu(player.con, setblockMainMenu, title, text, buttons);
    return;
    }

    else{
      player.sendMessage("[red]You dont have access to this command");
      return;
    }

  })
)




// CLICK EVENT-------------------------------------------------------------------------------------------

Events.on(TapEvent, (e) => {
    
  if (players[e.player.uuid()].setblock){
      e.tile.setNet(Blocks[blockplaced],Team[choosedTeam], 0);
      e.player.sendMessage("[stat]Block [cyan]" + blockplaced + "[stat] Has been placed in team [cyan]" + choosedTeam);
      players[e.player.uuid()].setblock = false;
      return;
    }
})

// CLICK EVENT-------------------------------------------------------------------------------------------
