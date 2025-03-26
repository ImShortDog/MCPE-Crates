import { system, world } from "@minecraft/server"
export function grabCrateItems(player, location) {
    const totalSlots = 27;
    const randomSlots = new Set();
    const receivedItems = [];

    for (let i = 0; randomSlots.size < 3; i++) {
        const randomSlot = Math.floor(Math.random() * totalSlots);
        randomSlots.add(randomSlot);
    }

    if (location) {
        randomSlots.forEach(slot => {
            const item = SlotGrab(slot, location.x, location.y, location.z);

            if (item) {
                player.getComponent('inventory').container.addItem(item);

                receivedItems.push({
                    name: item.typeId || "Unknown Item",
                    amount: item.amount || 1,
                });
            }
        });
    }

    return receivedItems;
}

export function SlotGrab(slot, x, y, z) {
    const chest = world.getDimension('overworld').getBlock({ x, y, z }).getComponent("minecraft:inventory").container;
    return chest.getItem(slot);
}

export function getEmptySlotCount(player, requiredEmptySlots) {
    const container = player.getComponent('minecraft:inventory').container;
    let emptySlotsCount = 0;

    for (let i = 0; i < container.size; i++) {
        const item = container.getItem(i);
        if (!item) {
            emptySlotsCount++;
        }
    }

    return emptySlotsCount >= requiredEmptySlots ? emptySlotsCount : 0;
}

export function getScore(target, objective) {
    try {
        return world.scoreboard.getObjective(objective).getScore(target) ?? 0;
    } catch {
        return 0;
    }
}

export function sounds(player, sound) {
    system.run(() => {
        switch (sound) {
            case 'chime':
                player.playSound('note.chime', { pitch: 1 });
                break;
            case 'bass':
                player.playSound('note.bass', { pitch: 1 });
                break;
            case 'pling':
                player.playSound('note.pling', { pitch: 1 });
                break;
            case 'bubblepop':
                player.playSound('bubble.pop', { pitch: 1 });
                break;
            case 'beacon':
                player.playSound('beacon.activate', { pitch: 1 });
                break;
            case 'levelup':
                player.playSound('random.levelup', { pitch: 1 });
                break;
            default:
                console.warn(`Sound ${sound} not recognized`);
                break;
        }
    });
}

export function removeScore(player, objective, amount) {
    try {
        return world.scoreboard.getObjective(objective).addScore(player, -amount);
    }
    catch (error) {
        return 0;
    }
}