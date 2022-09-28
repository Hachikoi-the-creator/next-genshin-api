## Routes
### link/api/allChara
- Get all Available characters

### link/api/charaName/:Name
- Get a sigle character, by name **Pascal Case**
- examples:
- `api/charaName/Hu Tao`
- `api/charaName/Jean`
- `api/charaName/Raiden Shogun`


### link/api/charaElement/:Element
- get all characters from a certain element **Pascal Case**
- Valid options :
  - `api/charaElement/Anemo`
  - `api/charaElement/Geo`
  - `api/charaElement/Pyro`
  - `api/charaElement/Hydro`
  - `api/charaElement/Electro`
  - `api/charaElement/Dendro`


### link/api/charaNation/:Nation
- get all characters from a certain nation **Pascal Case**
- valid options
  - `api/charaNation/Sumeru`
  - `api/charaNation/Mondstadt`
  - `api/charaNation/Liyue`
  - `api/charaNation/Inazuma`


### link/api/charaWeapon/:Weapon
- get all characters from a certain nation **Pascal Case**
- valid options
  - `api/charaWeapon/Catalyst`
  - `api/charaWeapon/Sword`
  - `api/charaWeapon/Bow`
  - `api/charaWeapon/Sword`
  - `api/charaWeapon/Greatsword`
  - `api/charaWeapon/Polearn`


### link/api/charaNationElement/:Nation/:Element
- get all characters from a certain nation **Pascal Case**
- valid combinations **Order Matters**
  - `api/charaNationElement/Sumeru/Sword`
  - `api/charaNationElement/Mondstadt/Catalyst`
  - `api/charaNationElement/Liyue/Greatsword`
  - `api/charaNationElement/Inazuma/Polearn`


## Lore src
[Wiki](https://genshin-impact.fandom.com/wiki/Collei/Lore)
[FCC API Tutorial](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/)

**Dev note**
- the lore option is in reality the personality section, discovered that after finishing Mondo & Liyu, thus I'll personaly never change it, sounds cooler too!

