// class UserDbRepository {
//   constructor(mongoManager) {
//     this.dbManager = mongoManager;
//   }
  
//   create(user) {
//     return mongoManager.findOne({ username: user.username })
//     .then(() => this.dbManager.save(user))
//     .catch((err) => Promise.reject('Username "' + userParam.username + '" is already taken'))
//   }

//   findById(id) {
//     return this.dbManager.findById(id);
//   }

//   getAll() {
//     return this.dbManager.find();
//   }

//   delete(id) {
//     return this.dbManager.findByIdAndRemove(id);
//   }

//   update(id, userUpdates) {
//     return this.findById(user.id)
//     .then(user => Object.assign(user, userUpdates))
//     .then(user => user.save())
//     }
//   }

// module.exports = {
//   UserDbRepository
// }

