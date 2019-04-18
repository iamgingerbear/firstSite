// the component template, insert what you want to be rendered
// between the div tags
// render the component in the main app using:
// <myFirstComponent></<myFirstComponent>

Vue.component('banner', {
    template: `
    <header>
        <h1>This is my Title</h1>
        <img src="https://data.whicdn.com/images/252588371/original.gif">
    </header>        
    `,
    data: function(){
        return {
        
        }
    }
})

Vue.component('boxes', {
    template: `
    <div>
        <h2>Portfolio</h2>
        <div v-for="item in items">
            <h3>{{item.name}}</h3>
            <img :src="item.img">
            <p>{{item.text}}</p>
        </div>
    </div>
    `,
    data: function(){
        return {
            items: {
                'first item':{
                    img: "https://media3.giphy.com/media/VS2BAGAeti2qI/source.gif",
                    name: "first item",
                    text: "This is some stuff about this image, isn't it",
                },
            }
    }
}})

Vue.component('list', {
    template: `
    <div>
        <h2>Skills</h2>
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
    </div>
    `,
    data: function(){
        return {
            items: ['stuff', 'things', 'more things', 'stuff and things']
        }
    }
})

// the main vue component that will order the other components
var app = new Vue({
    template: `
    <div class="container">
        <banner></banner>
        <list></list>
        <boxes></boxes>
    </div>
    `,
    el: '#app',
    data: {
        
    },
    methods: {

    }
})