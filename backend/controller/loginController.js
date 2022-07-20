import User from "../models/user.js";

export const loginController = {
  login: [
    async (req, res) => {
      try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });

        if ((user !== null) & (await bcrypt.compare(password, user.password))) {
          const token = await jwt.sign(
            {
              username: username,
            },
            process.env.JWT,
            { algorithm: "HS256", expiresIn: "2h" }
          );
          res.cookie("access_token", token, {
            secure: true,
          });
          res.status(200).json({ message: "Logged in" });
        }
      } catch (error) {
        console.log(error.message);
        res.status(404).json({
          message: `Invalid username or password`,
        });
      }
    },
  ],
};
