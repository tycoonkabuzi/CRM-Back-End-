import { Request, Response } from "express";
const Customers = require("../models/customerModel");

module.exports = {
  index: async (req: Request, res: Response) => {
    try {
      const aCustomer = await Customers.find({}).populate("actions");
      res.status(201).json(aCustomer);
    } catch (error) {}
  },
  addCustomer: async (req: Request, res: Response) => {
    try {
      const newCustomer = new Customers(req.body);
      newCustomer.save();
      res.status(200).json(newCustomer);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
  getSingleCustomer: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const singleCustomer = await Customers.findById(id);

      res.status(200).json(singleCustomer);
    } catch (error) {
      res.status(400).json({ err: error });
    }
  },

  deleteCustomer: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const toBeDeleted = await Customers.findByIdAndDelete(id);
      res.status(202).json(toBeDeleted);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  },
  updateCustomer: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const toBeUpdated = await Customers.findByIdAndUpdate(id, req.body);
      res.status(201).json(toBeUpdated);
    } catch (error) {
      res.status(400).json({ err: error });
    }
  },
};
