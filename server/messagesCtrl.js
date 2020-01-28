let allMessages = []

module.exports = {
  getAllMessages: (req, res) => {
    res.status(200).send(allMessages)
  },
  createMessage: (req, res) => {
    const {username, message} = req.body
    const {history} = req.session
    const newMessage = {username, message}
    allMessages.push(newMessage)
    if(history){
      history.push(newMessage)
    }else {
      history = []
      history.push(newMessage)
    }
    res.status(200).send(allMessages)
  },
  history: (req, res) => {
    res.status(200).send(req.session.history)
  }
}