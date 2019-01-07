module.exports = () => 'ok'


class Email {
  constructor() {
    this._connection = connection
  }

  send(data, callback) {
    console.log(data)
  }

}
