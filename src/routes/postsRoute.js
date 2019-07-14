import PostsModel from '../models/mongo/posts'

const postsRoute = (app) => {
    
    app.route('/posts/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                query._id = id
            }

            try {

                const posts = await PostsModel.find(query)
                res.send({ posts })
                
            } catch (error) {
                res.status(400).send({ error: 'Failed to find post' })
            }
        })
        .post(async (req, res) => {

            try {
                const post = new PostsModel(req.body)
                await post.save()

                res.status(201).send('OK')
            } catch (error) {
                res.send(error)   
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'Post ID is missing.' })
            }

            try {
                const updatedPost = await PostsModel.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                })

                if (updatedPost) {
                    return res.send('OK')
                }


                res.status(400).send({ error: 'Could not update the post' })

                
            } catch (error) {
                res.send(error)
            }
        })
        .delete(async (req, res) => {

            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'Post ID is missing.' })
            }

            try {
                const deletedPost = await PostsModel.deleteOne({ _id: id })

                if (deletedPost.deletedCount) {
                    return res.send('OK')
                }

                res.status(400).send({ error: 'Could not delete the post' })

            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = postsRoute