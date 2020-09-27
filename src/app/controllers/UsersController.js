import { User } from "../models/User";

export class UsersController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  }

  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }
}
