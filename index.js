require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData= {
    "login": "Abhishekverma444",
    "id": 140168454,
    "node_id": "U_kgDOCFrNBg",
    "avatar_url": "https://avatars.githubusercontent.com/u/140168454?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Abhishekverma444",
    "html_url": "https://github.com/Abhishekverma444",
    "followers_url": "https://api.github.com/users/Abhishekverma444/followers",
    "following_url": "https://api.github.com/users/Abhishekverma444/following{/other_user}",
    "gists_url": "https://api.github.com/users/Abhishekverma444/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Abhishekverma444/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Abhishekverma444/subscriptions",
    "organizations_url": "https://api.github.com/users/Abhishekverma444/orgs",
    "repos_url": "https://api.github.com/users/Abhishekverma444/repos",
    "events_url": "https://api.github.com/users/Abhishekverma444/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Abhishekverma444/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abhishek Verma",
    "company": null,
    "blog": "",
    "location": "Bahraich",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-07-21T11:35:09Z",
    "updated_at": "2024-02-21T04:48:03Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("AbhishekVerma")
})

app.get('/login', (req,res) => {
    res.send("<h1>Please login at chai aur code</h1>");
})

app.get('/youtube', (req,res)=>{
    res.send("<h2> Chai aur code</h2>")
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})