const member = require("./models/member");

module.exports = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "email is required" });
    }

    try {
        const newMember = new member({ email });
        await newMember.save();
        return res.status(200).json({ message: "success" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}