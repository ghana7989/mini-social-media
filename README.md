You can click the link : https://inder-social-media.herokuapp.com/ (Alternate Link :https://ghana-social-media.herokuapp.com )  for deployed version

If deployed version is not working or setup locally, do the following steps:

 - `git clone https://github.com/ghana7989/mini-social-media.git` run this command in terminal
 - `cd mini-social-media`
 - Then run `npm install`
 - After all the pacakes are installed run `npm run dev` in the root folder.
 - Make sure you have a config.env file with these values set 
	 - MONGO_URI=YOUR_MONOGODB_URL
	 - jwtSecret=SOME_SECRET
	 - sendGrid_api=SENDGRID_API
