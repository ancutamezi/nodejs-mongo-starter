class UserService {
  constructor(mongoManager) {
    this.dbManager = mongoManager;
  }
  
  create(User) {
    const user = new this.dbManager(User);
    return this.dbManager.findOne({ username: user.username })
    .then(() => user.save(User))
    .catch(err => Promise.reject('Username "' + User.username + '" is already taken', err))
  }

  findById(id) {
    return this.dbManager.findById(id);
  }

  getAll() {
    return this.dbManager.find();
  }

  delete(id) {
    return this.dbManager.findByIdAndRemove(id);
  }

  update(id, userUpdates) {
    return this.findById(user.id)
    .then(user => Object.assign(user, userUpdates))
    .then(user => user.save())
    }
  }

module.exports = UserService;

