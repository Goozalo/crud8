import { userdb8 } from "../schema/user.schema.js";

export const readData = async (req, res) => {
  try {
    const users = await userdb8.find();
    res.send(users);
  } catch (error) {
    res.send("No se pudo leer usuarios");
  }
};
export const createData = async (req, res) => {
  const { name, lastname, email } = req.body;
  try {
    const user = new userdb8({ name, lastname, email });
    await user.save();
    res.send(user);
  } catch (error) {
    res.send("No se pudo crear el usuario");
  }
};
export const updateData = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, email } = req.body;
  try {
    const user = await userdb8.findById(id);
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    await user.save();
    res.send("Usuario editado");
  } catch (error) {
    res.send("No se pudo editar el usuario");
  }
};
export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userdb8.findById(id);
    await user.deleteOne();
    res.send("Usuario eliminar");
  } catch (error) {
    res.send("No se pudo eliminar el usuario");
  }
};
