const moongose = require('mongoose')

const Schema = moongose.Schema

const catogoriesSchema = new Schema({
    catogorie:{
        type :String,
        required : true
    },

    hard:{
        type :String,
        required : true
    },

    hardScore:{
        type :Number,
        required : true
    },

    medium:{
        type :String,
        required : true
    },

    mediumScore:{
        type :Number,
        required : true
    },
    easy:{
        type :String,
        required : true
    },
    easyScore:{
        type :Number,
        required : true
    },
    attempts:{
        type :Number,
        required : true
    },
    incorrect:{
        type :Number,
        required : true
    },
    correct:{
        type :Number,
        required : true
    },
    score:{
        type :Number,
        required : true
    },
})

const leaderboardSchema = new Schema({

    username:{
        type :String,
        required : true
    },

    Catogories:{
        type :[catogoriesSchema],
        required : true
    }


})




module.exports = moongose.model("QuizLeaderboard", leaderboardSchema)
