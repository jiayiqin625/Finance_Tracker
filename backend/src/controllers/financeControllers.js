import Transaction from "../model/Transaction.js";

export const getBalance = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error in controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createTransaction = async (req, res) => {
  try {
    const { description, amount, category, payment } = req.body;
    const newTransaction = new Transaction({
      description,
      amount,
      category,
      payment,
    });

    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error("Error in controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { description, amount, category, payment } = req.body;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { description, amount, category, payment },
      { new: true },
    );
    if (!updatedTransaction) return res.json({ message: "Note not found" });
    res.status(200).json(updatedTransaction);
  } catch (error) {
    console.error("Error in controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedTransaction)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ Message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
