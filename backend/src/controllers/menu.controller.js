import Menu from "../models/menu.model.js";

export const getMenu = async (req, res) => {
    try {
        const items = await Menu.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addMenuItem = async (req, res) => {
    try {
        const item = await Menu.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateMenuItem = async (req, res) => {
    try {
        const item = await Menu.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMenuItem = async (req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.json({ message: "Item deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
