import { world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { getEmptySlotCount, getScore, removeScore, grabCrateItems, sounds } from "./functions"
export class createCrate {
    constructor(name, chestLocation, key,) {
        this.crateName = name;
        this.chestLocation = chestLocation;
        this.requiredKey = key;
    }

    async openCrate(player) {
        if (!this.hasKey(player)) {
            player.sendMessage(`§eCrate System §g>§e>§g> §cYou need 1 ${this.crateName} Key to open it!`);
            sounds(player, `bass`)
            return;
        }

        const emptySlots = getEmptySlotCount(player, 3)

        if(emptySlots < 3) {
            player.sendMessage(`§eCrate System §g>§e>§g> §cMake sure you have 3 empty slots before trying to opening this crate!`)
            sounds(player, `bass`)
            return
        }

        this.removeKey(player)

        this.giveRewards(player)
    }

    hasKey(player) {
        if(getScore(player, `${this.requiredKey}`) < 1) {
            return false
        }
        return true
    }

    removeKey(player) {
        removeScore(player, `${this.requiredKey}`, 1)
    }

    giveRewards(player) {
        const receivedItems = grabCrateItems(player, this.chestLocation);
    
        const itemsText = receivedItems
            .map(item => `§ex${item.amount} §g${item.name}`)
            .join("\n ");
    
        player.sendMessage(`§eCrate System §g>§e>§g> §aYou have opened 1 common crate and received:\n ${itemsText}`);
        sounds(player, `levelup`)
    }
}