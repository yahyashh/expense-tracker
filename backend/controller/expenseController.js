const asynchandler = require("express-async-handler")
const Expense = require("../model/expenseSchema")

const handlExpense = asynchandler(async (req, res)=>{
    const { name, expense } = req.body
    if(!name || !expense) {
        res.status(400)
        throw new Error("You must fill")
    }

    const expenses = await Expense.create({
       name,
       expense
    })

    if(expenses){
     const {_id, name, expense} = expenses
     res.status(200)
     res.json({_id, name, expense})
    }
    else{
        res.status(400)
        throw new Error("Invalid user data.")
    }
}) 
const handleIncome= asynchandler(async (req, res)=>{
    const { name, expense } = req.body
    if(!name || !expense) {
        res.status(400)
        throw new Error("You must fill")
    }

    const Income = await Expense.create({
       name,
       expense,
       income: true
    })

    if(Income){
     const {_id, name, expense, income} = Income
     res.status(200)
     res.json({_id, name, expense, income})
    }
    else{
        res.status(400)
        throw new Error("Invalid user data.")
    }
}) 

const allExpenses = asynchandler(async (req, res)=>{
    try {
        const expenses = await Expense.find()
        res.status(200)
        res.json(expenses)
        
    } catch (error) {
        console.log(error.messsage);
    }
})

const deleteExpense=async (req,res)=>{
    try {
        const {id}= req.params
        const task=await Expense.findByIdAndDelete(id)
        if (!task){
           return res.status(404).json(`Can't find the id : ${id}`)
        }
        res.status(200).send("Expense deleted")

    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
module.exports = {handlExpense, handleIncome, allExpenses, deleteExpense}