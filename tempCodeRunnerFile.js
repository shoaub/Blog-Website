app.use(express.static(path.join(__dirname,'public')))
app.use('/articles',articleRouter)