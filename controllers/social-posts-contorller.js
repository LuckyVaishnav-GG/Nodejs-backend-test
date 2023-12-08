const axios = require('axios');

 async function getAllSocialPostsasync (req, res)  {
    const pagNumber = Number(req.params.pagNumber);
    const limit = 10;
    const getPostURL = process.env.URL?process.env.URL:'';
    if(!getPostURL){
         return res.status(404).send({error: 'get-post url not found'});
    }
    axios
      .get(getPostURL)
      .then((data) => {
  
        let offset = pagNumber == 1 ? 0 : (pagNumber - 1) * 10;
        let socialPosts = data.data.slice(offset ,offset+limit + 1);
        return res.status(200).json({ socialPosts: socialPosts });
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(500);
      });
  }

  module.exports.getAllSocialPostsasync = getAllSocialPostsasync;
