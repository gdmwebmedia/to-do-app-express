const TaskManager = (function() {

    let tasks = [
        {
            'id' : 1,
            'responsible': 'Mihai',
            'description': 'do the dishes',
            'status': 'pending'
        },
        {
            'id' : 2,
            'responsible': 'Elena',
            'description': 'do homework',
            'status': 'done'
        },
        {
            'id' : 3,
            'responsible': 'Cosmin',
            'description': 'buy Electric Castle tickets',
            'status': 'in progress'
        },
    ]

    return {
        getTasks: () => tasks 
    }
})();

module.exports=TaskManager