import { world, system } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui"
import { createCrate } from "./class.js"
import { getScore, sounds } from "./functions.js";

const uncommonCrate = new createCrate(`Uncommon Crate`, {x: 68, y: 1, z: 28}, `uncommonkey`);
const commonCrate = new createCrate(`Common Crate`, {x: 68, y: 1, z: 30}, `commonkey`);
const rareCrate = new createCrate(`Rare Crate`, {x: 68, y: 1, z: 32}, `rarekey`);
const epicCrate = new createCrate(`Epic Crate`, {x: 68, y: 1, z: 34}, `epickey`);
const legendaryCrate = new createCrate(`Legendary Crate`, {x: 68, y: 1, z: 36}, `legendarykey`);

world.beforeEvents.playerInteractWithBlock.subscribe(event => {
    const { player, block } = event
    if(block.typeId === "minecraft:ender_chest" && block.location.x === 68 && block.location.z === 30) {
        event.cancel = true;
        system.run(() => {
            viewCrates(player)
            sounds(player, `chime`)
        })
    }
});

function viewCrates(player) {
    new ModalFormData()
    .title(`Crates`)
    .dropdown("§g§lCRATE OPTIONS:§r\n§f----------------------------\n§eSelect a crate you would like to open:", [
        `§2Uncommon Crate §e[§g${getScore(player, `uncommonkey`)}§e]`, 
        `§aCommon Crate §e[§g${getScore(player, `commonkey`)}§e]`, 
        `§bRare Crate §e[§g${getScore(player, `rarekey`)}§e]`, 
        `§dEpic Crate §e[§g${getScore(player, `epickey`)}§e]`, 
        `§6Legendary Crate §e[§g${getScore(player, `legendarykey`)}§e]`
    ])
    .submitButton(`§aOpen Crate`)
    .show(player).then((r) => {
        if (r.canceled) return;
        
        const selectedIndex = r.formValues;
        const crateNames = [uncommonCrate, commonCrate, rareCrate, epicCrate, legendaryCrate];
        const selectedCrate = crateNames[selectedIndex];
        
        selectedCrate.openCrate(player);
    });
}