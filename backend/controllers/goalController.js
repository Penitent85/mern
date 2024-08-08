//  asyncHandler is a middleware that will wrap the async functions and catch the err ors
const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel.js");

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const  goals = await Goal.find()
  res.status(200).json(goals);
});

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400);
    throw new Error("Please add text field");
  }
  const goal =await Goal.create({
    text: req.body.text,
  });
  res.status(201 ).json(goal);

});

//@desc Update Goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  goal.text = req.body.text || goal.text;
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
  });
  res.status(202).json(updatedGoal);
});

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.deleteOne()
  res.status(200).json({ id: req.params.id});
  
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
