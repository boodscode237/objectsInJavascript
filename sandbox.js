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


// math object

let area = 7.7;
console.log(Math.round(area)); // rounds the number to the nearest int
console.log(Math.floor(area)); //brings the number to the lowest int
// console.log(Math.ciel(area)); // brings the number to the upper int
console.log(Math.trunc(area)); //removes the decimal part

const random = Math.random() * 100; //give a random number between 0.0 and 0.9

console.log(random);