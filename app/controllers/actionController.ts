import { Request, Response } from "express";
const Actions = require("../models/actionModel");

module.exports = {
  getAllActions: async (req: Request, res: Response) => {
    try {
      const allActions = await Actions.find({}).populate("customer");
      res.status(200).json(allActions);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  addAction: (req: Request, res: Response) => {
    try {
      const newAction = new Actions(req.body);
      newAction.save();
      res.status(201).json(newAction);
    } catch (error) {
      res.status(400).json({ err: error });
    }
  },
};
