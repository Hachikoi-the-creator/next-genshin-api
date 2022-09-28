## Routes
### link/api/allChara
- Get all Available characters

### link/api/charaName/:Name
- Get a sigle character, by name **Pascal Case**
- example : `/Diluc`


### link/api/charaElement/:Element
- get all characters from a certain element **Pascal Case**
- Valid options :
  - `/Anemo`
  - `/Geo`
  - `/Pyro`
  - `/Hydro`
  - `/Electro`
  - `/Dendro`


### link/api/charaNation/:Nation
- get all characters from a certain nation **Pascal Case**
- valid options
  - `/Sumeru`
  - `/Mondstadt`
  - `/Liyue`
  - `/Inazuma`


### link/api/charaWeapon/:Weapon
- get all characters from a certain nation **Pascal Case**
- valid options
  - `/Catalyst`
  - `/Sword`
  - `/Bow`
  - `/Sword`
  - `/Greatsword`
  - `/Polearn`


### link/api/charaNationElement/:Nation/:Element
- get all characters from a certain nation **Pascal Case**
- valid combinations **Order Matters**
  - `/Sumeru/Sword`
  - `/Mondstadt/Catalyst`
  - `/Liyue/Greatsword`
  - `/Inazuma/Polearn`


## Lore src
[Wiki](https://genshin-impact.fandom.com/wiki/Collei/Lore)
[FCC API Tutorial](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/)

**Dev note**
- the lore option is in reality the personality section, discovered that after finishing Mondo & Liyu, thus I'll personaly never change it, sounds cooler too!

