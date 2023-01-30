const { json } = require("body-parser")
const {default:moongose} = require("mongoose")

const QuizLeaderboard = require("../models/LeaderboardModel")

async function getQuizLeaderboard(req,res){
    const leaderboard = await QuizLeaderboard.find({})

    if(!leaderboard){
        return res.status(404).json({error : "No such leaderboards"})
    }

    console.log(leaderboard)

    res.status(200).json(leaderboard)
}

async function getUserLeaderboard(req,res){
    const leaderboard = await QuizLeaderboard.find({})

    if(!leaderboard){
        return res.status(404).json({error : "No such leaderboards"})
    }

    res.status(200).json(leaderboard)
}

async function deleteUserLeadboard(req,res){
    const leaderboard = await QuizLeaderboard.find({})

    if(!leaderboard){
        return res.status(404).json({error : "No such leaderboards"})
    }

    res.status(200).json(leaderboard)
}

module.exports = {
    getQuizLeaderboard,
    getUserLeaderboard,
    deleteUserLeadboard
   
}