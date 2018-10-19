class Job {
  jobId = null;

  run(jobFn, delay) {
    this.reset();
    this.jobId = setTimeout(jobFn, delay);
  }

  reset() {
    if (this.jobId) {
      clearTimeout(this.jobId);
    }
  }
}

export default Job;
