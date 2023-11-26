const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())

app.get("/shorten", async (req, res) => {
	try {
		const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
			url: "https://google.com",
		})
		console.log(response.data.result_url)
		res.json(response.data)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: "An error orcurred" })
	}
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Running on ${port}`))
