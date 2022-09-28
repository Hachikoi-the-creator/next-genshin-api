import express from "express";
import Character from "../model/Character.js";
// import * as dotenv from "dotenv";
// dotenv.config();

const router = express.Router();

// ? Get all chara
router.get("/allChara", async (req, res) => {
  try {
    const data = await Character.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get by chara NAME
router.get("/charaName/:name", async (req, res) => {
  try {
    const data = await Character.find({ name: req.params.name });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get all chara by ELEMENT
router.get("/charaElement/:element", async (req, res) => {
  try {
    const data = await Character.find({ element: req.params.element });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get all chara by NATION
router.get("/charaNation/:nation", async (req, res) => {
  try {
    const data = await Character.find({ nation: req.params.nation });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get all chara by WEAPON
router.get("/charaWeapon/:weapon", async (req, res) => {
  try {
    const data = await Character.find({ weapon: req.params.weapon });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Get all chara by NATION && ELEMENT
router.get("/charaNationElement/:nation/:element", async (req, res) => {
  try {
    const data = await Character.find({
      nation: req.params.nation,
      element: req.params.element,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ? Post Method
router.post("/post", async (req, res) => {
  const check = process.env.POST_PASSWORD === req.headers.psw;
  //?only thing that returns me something
  // console.log(req.headers);
  // console.log("headers \n", req.headers.head);

  if (check) {
    res.status(200).send("WRONG PASSWORD");
    // add stuff to the db
  } else {
    res.status(301).send("WRONG PASSWORD");
  }
  // ? postman stuff = POST method, send data within headers, grab it whit dot notation

  // console.log(req.body);
  //?only thing that returns me something
  // console.log(req.headers);
  // console.log("headers \n", req.headers.head);

  // const check = process.env.POST_PASSWORD === req.headers.psw;
  res.status(200).send("check");
  // const data = new Character({
  //   name: req.body.name,
  //   sizeCm: req.body.sizeCm,
  // });

  // try {
  //   const dataToSave = await data.save();
  //   res.status(200).json(dataToSave);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
});

// ? Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Character.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ? Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  const check = "1237" === req.headers.psw;
  // const check = process.env.POST_PASSWORD === req.headers.psw;
  //?only thing that returns me something
  // console.log(req.headers);
  // console.log("headers \n", req.headers.head);

  if (check) {
    res.status(200).send("WRONG PASSWORD");
    // remove item from the db
  } else {
    res.status(301).send("WRONG PASSWORD");
  }
});

export default router;
