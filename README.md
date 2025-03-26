Minecraft Crate System

This project is a Crate System for Minecraft Bedrock Edition, allowing players to open crates and receive rewards using keys. The system utilizes the @minecraft/server and @minecraft/server-ui modules to handle crate interactions and UI elements.

Features

Multiple Crate Types: Common, Uncommon, Rare, Epic, and Legendary crates.

Key-Based Access: Players need specific keys to open crates.

UI Selection Menu: Players can choose which crate to open via a dropdown menu.

Inventory Check: Ensures players have at least three empty slots before opening a crate.

Custom Sound Effects: Plays sounds when interacting with crates.

Reward System: Players receive randomized rewards from the crate.

Setup & Installation

Ensure you have a Minecraft Bedrock world with scripting API enabled.

Install the required dependencies:

import { world, system } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

Add the provided scripts to your project.

Modify crate locations and key names as needed.

Usage

Right-click (interact) with an Ender Chest at the specified location (x: 68, y: 1, z: 30) to open the Crate Menu.

Select a crate from the dropdown.

If the player has the required key and enough empty inventory slots, they will receive rewards.

File Structure

/minecraft-crate-system
│── class.js         # Crate system logic
│── functions.js     # Utility functions (getScore, removeScore, grabCrateItems, sounds)
│── script.js        # Main interaction and event handling
│── README.md        # Documentation

Crate Configuration

Modify the crate setup in script.js:

const uncommonCrate = new createCrate(`Uncommon Crate`, {x: 68, y: 1, z: 28}, `uncommonkey`);
const commonCrate = new createCrate(`Common Crate`, {x: 68, y: 1, z: 30}, `commonkey`);
const rareCrate = new createCrate(`Rare Crate`, {x: 68, y: 1, z: 32}, `rarekey`);
const epicCrate = new createCrate(`Epic Crate`, {x: 68, y: 1, z: 34}, `epickey`);
const legendaryCrate = new createCrate(`Legendary Crate`, {x: 68, y: 1, z: 36}, `legendarykey`);

Adjust the coordinates and key names as needed.

Dependencies

Minecraft Bedrock Edition with scripting enabled

@minecraft/server

@minecraft/server-ui

License

This project is free to use and modify. Attribution is appreciated but not required.

Contact

For any issues or suggestions, feel free to open an Issue or create a Pull Request on GitHub!
