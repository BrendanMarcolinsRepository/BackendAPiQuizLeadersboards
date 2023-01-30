const express = require('express')

const {
    getQuizLeaderboard,
    getUserLeaderboard,
    deleteUserLeadboard

}  = require("../controllers/QuizLeaderboardController") // add more to later

const router = express.Router()

router.get("/", getQuizLeaderboard)

router.get("/:id", getUserLeaderboard)

router.delete("/:id",deleteUserLeadboard)

module.exports = router;