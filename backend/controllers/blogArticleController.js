const db = require("../config/db");

exports.getAllBlogArticles = (req, res) => {
    const sql = "SELECT * FROM blog_articles";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(result);
    });
};