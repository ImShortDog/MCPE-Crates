**Crate System for Minecraft Bedrock**

This is a Crate System for Minecraft Bedrock, written in JavaScript using the @minecraft/server and @minecraft/server-ui APIs. Players can open different types of crates using specific keys and receive rewards.
Features

   + Crate Selection UI: Players interact with an Ender Chest to open a crate selection menu.

   + Custom Crate Classes: Each crate has its own name, location, and required key.

   + Key Checking: Players must have the required key to open a crate.

   + Inventory Slot Requirement: Requires at least 3 empty slots to prevent overflow.

   + Custom Sounds & Messages: Audio and text feedback enhance the player experience.

   + Reward Distribution: Players receive randomized rewards from the crate.

**This system includes five types of crates:**

   + 🟢 Uncommon Crate (uncommonkey)

   + 🟡 Common Crate (commonkey)

   + 🔵 Rare Crate (rarekey)

   + 🟣 Epic Crate (epickey)

   + 🟠 Legendary Crate (legendarykey)

Setup & Usage

   + Install & Configure

        Ensure your Minecraft Bedrock world has scripting enabled.

        Place this script inside your server's add-ons folder.

   + Interacting with the Crate System

        Players interact with an Ender Chest (x: 68, y: 1, z: 30).

        A UI menu appears, displaying available crates and key counts.

        Players can select a crate and attempt to open it.

   + How Rewards Work

        If the player has a key and at least 3 empty inventory slots:

            The key is removed.

            Rewards are given from the crate’s loot pool.

        Otherwise, an error message is displayed.

**Code Overview**
createCrate Class

Handles crate interactions:

   + openCrate(player): Checks conditions and gives rewards.

   + hasKey(player): Verifies if the player has the required key.

   + removeKey(player): Deducts a key upon opening a crate.

   + giveRewards(player): Distributes rewards based on crate type.

UI System

   + viewCrates(player): Displays the crate selection menu using ModalFormData.

   + Dropdown Options: Shows crate names along with the number of keys the player owns.

Dependencies

   + @minecraft/server

   + @minecraft/server-ui
