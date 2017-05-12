FlowRouter.route('/',
    //once we hit this path,
        {   
        name:'home',
              action() {
    BlazeLayout.render('home');
    //load this template              
}   
});

FlowRouter.route('/options',
    //once we hit this path,
    {
    name: 'options',
    action() {
        BlazeLayout.render('options');
    }
});

FlowRouter.route('/races',
    //once we hit this path,
    {
    name: 'races',
    action() {
        BlazeLayout.render('races');
    }
});

FlowRouter.route('/profile',
    //once we hit this path,
    {
    name: 'profile',
    action() {
        BlazeLayout.render('profile');
    }
});

FlowRouter.route('/signup',
    //once we hit this path,
    {
    name: 'signup',
    action() {
        BlazeLayout.render('signup');
    }
});

FlowRouter.route('/login',
    //once we hit this path,
    {
    name: 'login',
    action() {
        BlazeLayout.render('login');
    }
});

FlowRouter.route('/homesignout',
    //once we hit this path,
    {
    name: 'homesignout',
    action() {
        BlazeLayout.render('homesignout');
    }
});