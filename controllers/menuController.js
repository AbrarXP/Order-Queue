import Menu from "../models/menuModel.js";

// Create Menu
export const createMenu = async(req, res) => {
    const { nama, resep } = req.body;

    try{
        // Simpan menu baru
        await Menu.create({
            nama,
            resep,
        });

        res.status(201).json({status: "Sukses", msg: "Tambah menu berhasil" });
    }catch(error){
        res.status(500).json({ msg: error.message });
    }
}

// GET semua menu
export const getMenu = async (req, res) => {
  try {
    const menus = await Menu.findAll({
      attributes: ["menuID", "nama", "resep"]
    });
    res.json(menus);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET menu by ID
export const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id, {
      attributes: ["menuID", "nama", "resep"]
    });
    if (!menu) return res.status(404).json({ msg: "Menu tidak ditemukan" });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// PUT update menu
export const updateMenu = async (req, res) => {
  const { nama, resep } = req.body;
  try {
    const menu = await Menu.findByPk(req.params.id);
    if (!menu) return res.status(404).json({ msg: "Menu tidak ditemukan" });

    menu.nama = nama || menu.nama;
    menu.resep = resep || menu.resep;

    await menu.save();
    res.json({ msg: "Menu berhasil diupdate", menu });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE menu
export const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    if (!menu) return res.status(404).json({ msg: "Menu tidak ditemukan" });

    await menu.destroy();
    res.json({ msg: "Menu berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};