import Order from "../models/orderModel.js";

// Create order
export const createOrder = async(req, res) => {
    const { userID, menuID, status } = req.body;

    try{
        // Simpan order baru
        await Order.create({
            userID,
            menuID,
            status
        });

        res.status(201).json({status: "Sukses", msg: "Tambah order berhasil" });
    }catch(error){
        res.status(500).json({ msg: error.message });
    }
}

// GET semua order
export const getOrder = async (req, res) => {
  try {
    const orders = await Order.findAll({
      attributes: ["orderID", "userID", "menuID", "status"]
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      attributes: ["orderID", "userID", "menuID", "status"]
    });
    if (!order) return res.status(404).json({ msg: "Order tidak ditemukan" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// PUT update menu
export const updateOrder = async (req, res) => {
  const { userID, menuID, status } = req.body;
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ msg: "Order tidak ditemukan" });

    order.userID = userID || order.userID;
    order.menuID = menuID || order.menuID;
    order.status = status || order.status;

    await order.save();
    res.json({ msg: "Order berhasil diupdate", order });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE Order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ msg: "Order tidak ditemukan" });

    await order.destroy();
    res.json({ msg: "Order berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};