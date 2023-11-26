const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/shorten", async (req, res) => {
	const link = req.body.inputURL
	const apiURL = "https://cleanuri.com/api/v1/shorten"
	try {
		const response = await axios.post(apiURL, { url: link })
		console.log(response.data.result_url)
		res.json(response.data)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: "An error orcurred" })
	}
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Running on ${port}`))
