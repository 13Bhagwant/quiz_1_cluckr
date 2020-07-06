const knex = require("./db/client");
module.exports = () => {
    let trends = [];
    knex("cluckrs")
        .then(data => {
            for (let cluck of data) {
                const words = cluck.content.split(" ");
                for (let word of words) {
                    if (word.startsWith("#")) {
                        console.log(word);
                        trends.push(word)
                        console.log(trends);
                    } 
                }
            }
            return trends;
        });
        
}
