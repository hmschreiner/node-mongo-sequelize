import { User } from '../models/sequelize'

const usersRoute = (app) => {
    
    app.route('/users/:id?')
        .get(async (req, res) => {
            const { id } = req.params

            if (id) {
                const user = await User.findByPk(id)
                return res.send(user)
            }

            const users = await User.findAll()

            res.send({ users })
        })
        .post(async (req, res) => {
            const user = await User.create(req.body)
            res.send({ user })
        })
        .put(async (req, res) => {
            const { id } = req.params

            await User.update(req.body, {
                where: { id }
            })

            res.send()
        })
        .delete(async (req, res) => {
            const { id } = req.params

            await User.destroy({
                where: { id }
            })

            res.send()
        })
}

module.exports = usersRoute