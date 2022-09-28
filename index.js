import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import CharacterModel from "./model/Character.js";
import InazumaCharacters from "./characters/Inazuma.js";
import LiyueCharacters from "./characters/Liyue.js";
import MondstadtCharacters from "./characters/Mondstadt.js";
import SumeruCharacters from "./characters/Sumeru.js";

// Mango acc vip.hd
mongoose.connect(process.env.MANGO_CONNECTION_STRING);

// String.prototype.capitalize = function () {
//   return this.split` `.map((e) => e[0].toUpperCase() + e.slice(1)).join` `;
// };

// ! Add items
// ? Create entry & update DB
// const character = await  CharacterModel.create({
//   name: "diluc",
//   weapon: "sword",
//   element: "pyro",
//   nation: "Mondstand",
//   archon: "venti",
//   lore: "hot daddy",
// releaseDate: new Date("11-nov-2020"),
// });

// ? Log added item whit _id
// console.log(character);

// ??? mapping to add multiple entries
//@type [[{}],[{}]]
const allCharactersTodo = [
  InazumaCharacters,
  // LiyueCharacters,
  // MondstadtCharacters,
  // SumeruCharacters,
];

InazumaCharacters.forEach(async (e) => {
  //@type {}
  const ch = await CharacterModel.create(e);
  console.log(ch);
});

// ! Query data
// const oneChara = await CharacterModel.findOne({ name: "diluc" });
// console.log(oneChara);
// ? only Specific data from a query
// const char = await CharacterModel.findById("62472b6ce09e8b77266d6b1b", "title slug content").exec();

// ! Update data & query
//* Get the item you want to change, change whit dt notation then .save()
//* Find a single chara
// const oneChara = await CharacterModel.findOne({ name: "diluc" });
// oneChara.lore = "lore update, hottest big daddy";
// await oneChara.save();
// console.log(oneChara);

// ??? Mapping to update all data in DB to Capitalize thing, expect the lore thingy, 'cuz I can't read anyways
// const allCharas = await CharacterModel.find();
// allCharas.forEach(async (e, i) => {
//   e.name = e.name.capitalize();
//   e.weapon = e.weapon.capitalize();
//   e.element = e.element.capitalize();
//   e.nation = e.nation.capitalize();
//   e.archon = e.archon.capitalize();

//   await e.save();
//   console.log("updated chara n.", i, "\n", e);
// });

// ! Deleting data
// const chara = await CharacterModel.deleteOne({ _id: "63323e8c9ee15ffafc1f3e9f" });
// console.log(chara);

// mongoose.disconnect();

// !---------------------- D I V -----------------
const LAZY_CAST = [
  {
    name: "Dori",
    weapon: "Greatsword",
    element: "Electro",
    nation: "Sumeru",
    archon: "Lesser Lord Kusanali",
    lore: "aa",
    releaseDate: new Date("24-august-2022"),
    releaseVersion: "3.0",
  },
  // !-----
];

// ?------- ex ---------
const example = {
  name: "Diluc",
  weapon: ["Sword", "Catalyst", "Bow", "Polearn", "Greatsword"],
  element: ["Pyro", "Hydro", "Anemo", "Geo", "Dendro", "Cryo", "Electro"],
  nation: ["Mondstadt", "Liyue", "Sumeru", "Inazuma"],
  archon: [
    "Barbatos",
    "Morax/Rex Lapis",
    "Raiden Shogun",
    "Lesser Lord Kusanali",
  ],
  lore: "I aint updating this haha",
  releaseDate: new Date("11-nov-2020"),
  releaseVersion: "0.0",
};
