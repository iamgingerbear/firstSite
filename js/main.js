// the component template, insert what you want to be rendered
// between the div tags
// render the component in the main app using:
// <myFirstComponent></<myFirstComponent>

Vue.component('myFirstComponent', {
    template: `
    <div>
        <h1>Welcome To My First Site</h1>
        <img src="../img/hi.jpg">
    </div>
    `,
    data: function(){
        return {

        }
    }
})


// the main vue component that will order the other components
var app = new Vue({
    template: `
    <div class="container">
        <myFirstComponent></<myFirstComponent>
    </div>    
    `,
    el: '#app',
    data: {
        
    },
    methods: {

    }
})