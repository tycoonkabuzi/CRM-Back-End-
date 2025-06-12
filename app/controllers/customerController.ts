import { Request, Response } from "express";
const Customers = require("../models/customerModel");

module.exports = {
  addCustomer: async (req: Request, res: Response) => {
    try {
      const newCustomer = new Customers(req.body);
      newCustomer.save();
      res.status(200).json(newCustomer);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
};
