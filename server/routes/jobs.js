const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getJob,
  createJob,
  updateJobs,
  deleteJobs,
  showStats,
} = require("../controller/jobs");

router.route('/stats').get(showStats);
router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).delete(deleteJobs).patch(updateJobs);

module.exports=router;
