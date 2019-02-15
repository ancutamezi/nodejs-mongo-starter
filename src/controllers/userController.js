const userController = (userService) => {
  const getAll = (req, res, next) => {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

 const getById = (req, res, next) => {
    userService.findById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

const save = (req, res, next) => {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

const update = (req, res, next) => {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

const deleteUser = (req, res, next) => {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

return {
    getAll: getAll,
    getById: getById,
    save: save,
    update: update,
    deleteUser: deleteUser
}
};

module.exports = userController;
