const router = require("express").Router(); 
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//for creating new post

//when we are creatin then it should have "post" method. 
//for fetching the data we can use get 
router.post("/",async(req,res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost =await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});
// here status 500 means that something is wrong with the mongoDB

//req is what we are sending to the server, and res what we are getting from the server 
// while doing asynch operation use try and catch block 

//for Update new post
router.put("/:id",async(req,res) => {
        try {
            const post = await Post.findById(req.params.id);
            if(post.username === req.body.username){
                try {
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set: req.body
                    },{new : true}
                    )
                    res.status(200).json(updatedPost);
                } catch (err) {
                    res.status(500).json(err);  
                } 
            }
             else{
                res.status(401).json("you can update only your post....");
            }
        }  
    catch (error) {
        res.status(500).json(error)
    }
});


//for delete  post
router.delete("/:id",async(req,res) => {
        try {
            const post = await Post.findById(req.params.id);
            if(post.username === req.body.username){
                try {
                    await post.delete()
                    res.status(200).json("Post has been deleted");
                } catch (err) {
                    res.status(500).json(err);  
                } 
            }
             else{
                res.status(401).json("you can only delete your post....");
            }
        }  
    catch (error) {
        res.status(500).json(error)
    }
});


//get post by id

router.get("/:id",async(req,res) => {
    console.log(req.params.id);
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

//get all post 

router.get("/",async(req,res) => {    //in the website after '?' whatever will be there, it'll be query
    const username = req.query.user;
    const catName = req.query.cat;

    try {

        let posts ;  // here we are taking lest cz post can be changeable here 
        if(username){
            posts = await Post.find({username});
        }
        else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }});
        }
        else{
            posts =await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;













//for Deleting user 

module.exports = router;