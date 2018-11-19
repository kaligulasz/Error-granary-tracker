const _reportAdress = Symbol('reportAdress');

class ErrorGranaryTracker {
  constructor(setup) {
    this[_reportAdress] = `${setup.reportAdress}/api/new-issue`;
  }

  postData(url = ``, data = {}) {
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
  }

  report(error) {
    const data = {
      name: error.message,
      message: error.stack,
      agent: navigator.userAgent
    }

    this.postData(this[_reportAdress], data);
  }
}

module.exports = ErrorGranaryTracker;

