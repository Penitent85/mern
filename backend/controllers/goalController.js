//  asyncHandler is a middleware that will wrap the async functions and catch the errors
const asyncHandler = require("express-async-handler");

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error("Please provide a goal");
  }
  res.status(201).json({ message: "Set Goals" });
});

//@desc Update Goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(202).json({ message: `Update Goals ${req.params.id}` });
});

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(203).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
