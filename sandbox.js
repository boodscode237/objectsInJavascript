let user = {
    name: "John",
    surname: "Doe",
    age: 24,
    email: "yggadaug@nail.rou",
    blog: ["why are you you?", "Algorithms are useful but difficult"],
    login: function() {
        console.log(this.email);
    },
    logout: function(name) {
        console.log(`${this.name} logged out`);
    },
    logBlogs: function() {
        this.blog.forEach(blog => {
            console.log(blog);
        })
    }
}

// console.log(`${user.name}, \n ${user.blog[1]}`)
// user['name'] = 'Johnny'
// console.log(` 1 ${user.name}, \n ${user.blog[1]}`)
// user.name = "Johnn"
// console.log(` 3 ${user.name}, \n ${user.blog[1]}`)

user.logBlogs()