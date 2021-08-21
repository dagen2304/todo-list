const todoModel = require('../models/Todo.model')

const list = (req , res) => {
    todoModel.find()
    .then((Todos)  => {
        res.json({
            success: true ,
            message: "Liste des Todos",
            data: Todos
        })
    })
    .catch(err => {
        res.json({
            success: false ,
            message: err,
            data: null
        })
    })
}

const create = (req , res ) => {
    const { name , duration } = req.body 

    const newTodo = {
        name ,
        duration
    }
    const todo = new todoModel(newTodo)

    todo.save()
    .then((Todo)  => {
        res.json({
            success: true ,
            message: "Todos crée avec succès !!",
            data: Todo
        })
    })
    .catch(err => {
        res.json({
            success: false ,
            message: err,
            data: null
        })
    })

}

const remove = (req , res) => {
    const id = req.params.id

    todoModel.findByIdAndDelete(id)
    .then(todo => {
        res.json({
            success: true ,
            message: "Todos supprimé avec succès !!",
            data: todo
        })
    })
    .catch(err => {
        res.json({
            success: false ,
            message: err,
            data: null
        })
    })

} 

const update = (req , res ) => {
    const id = req.params.id
    const { name , duration } = req.body 

    const newTodo = {
        name,
        duration
    }

    todoModel.findOneAndUpdate(id , {$set: newTodo})
    .then(oldTodo => {
        res.json({
            success: true ,
            message: "Todos modifier avec succès !!",
            data: oldTodo
        })
    })
    .catch(err => {
        res.json({
            success: false ,
            message: err,
            data: null
        })
    })

}

const getOne = (req , res) => {
    const id = req.params.id

    todoModel.findById(id)
    .then(todo => {
        res.json({
            success: true ,
            message: "Un todo",
            data: todo
        })
    })
    .catch(err => res.json({
        success: false ,
        message: err,
        data: null
    }) )
} 

module.exports = {
    list,
    create,
    remove,
    update,
    getOne
}