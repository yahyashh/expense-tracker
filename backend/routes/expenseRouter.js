const express = require("express")
const { handlExpense, handleIncome, allExpenses, deleteExpense } = require("../controller/expenseController")

const router = express.Router()

router.route("/expense").post(handlExpense)
router.route("/income").post(handleIncome)
router.route("/allexpense").get(allExpenses)
router.route("/:id").delete(deleteExpense)


module.exports = router