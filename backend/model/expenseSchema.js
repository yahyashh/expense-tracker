const mongoose = require("mongoose")

const ModalSchema=mongoose.Schema({
    name:{ type: String, required: true },
    expense:{ type: Number, required: true },
    income: { type: Boolean, default: false },

},
{
    timeStamp: true
})
const Expense =  mongoose.model("Expense", ModalSchema)

module.exports = Expense