class ResponseObj {
  constructor(status, data, error) {
    this.status = status;
    this.data = data;
    this.error = error;
  }
}

module.exports = ResponseObj;
