import e from "express";
import Express from "express";

const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];
App.get('/people/:person', (req,res) => {
    let person= req.params.person;
    if (people.includes(person)) {
        res.json ({ people: person});
    } else {
        res.json ({person: "Not found"}); 
    }
 });

App.get('/search/:names', (req,res)=> {
    const result = people.filter(str =>  str.include(req.params.person));
    if (result !=0) {
        res.json({ search: result});
    } else {
        res.json ({search: "Not found"});
    }
    })

App.listen (port, () => {

});

