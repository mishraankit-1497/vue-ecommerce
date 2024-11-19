# Main.js

# createApp(app)
1. renderer encounters app component
2. beforeCreate() - add external libraries here, pinia, vue router, antd etc. using app.use()
3. created() - implemented vue instance for component App, reactive data is also available.

# createPinia()
1. External data store
2. Defining multiple stores for product categories & products
3. defineStore(storeName, options) - options: setting initial state, actions & update state

# Routing
1. createRouter() - handles which component to be routed
2. createWebHistory()- path history
3. info: path, name, component to mount
4. pathMatch for redirection of invalid routes.

# axios
1. http: options - headers, params, authorization, scripts, body