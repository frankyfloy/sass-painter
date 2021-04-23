Vue.config.devtools = true;

// single card
Vue.component("single-card", {

    props: {
        card: {
            type: Object,
            required: true,
        },
    },

    methods: {
    },

    template: `
    <div class="card myCard">

        <img class="card-img-top" :src="card.img">

        <div
            :class= "card.backgroundBody"
            class="myCard-body">

            <div class="card-body">
                <h5 class="card-title"> <strong>{{ card.title }}</strong> </h5>
                <p class="card-text"> {{ card.description }} </p>
                <a href="#" class="card-link">Learn more</a>
            </div>
        </div>
    </div>
    `
})


// Card-list super(single-card)
Vue.component("card-list", {
    props: {
        cards: {
            type: Array,
            required: true,
        },
    },

    template: `
    <div id="cardList" class="col-12">

        <single-card
            v-for="(card,index) in cards"
            :card ="card"
            :key= "index">

        </single-card>
    </div>
    `
})




Vue.component("list-group", {
    props: {
        list: {
            type: Object,
            required: true,
        },
    },

    template: `
    <ul class="list-group">
        <li
            class="list-group-item head">
            {{ list.name }}
        </li>
        <li
            v-for="(li,i) in list.items"
            :key= "i"
            :class="'li' + (i + 1)"
            class="list-group-item">

                <a href="li.link">
                    {{ li.text }}
                </a>
        </li>
    </ul>
    `
})


// ****** ROOT *********
var app = new Vue({

    el: '#root',
    data: {
        cards:[
            {
                img:'assets\\img\\ptr-module.jpg',
                title: 'Painter Essentials 8',
                description:'The best affordable painting software for beginners'
            },

            {
                img:'assets\\img\\particleshop-module.jpg',
                title: 'Particle Shop',
                description:'Powerful Adobe® Photoshop® brush plugin powered by Painter'
            },

            {
                img:'assets\\img\\brush-pack-module.jpg',
                title: 'Brush Packs',
                description:'Diverse add-on packs to embellish photo composites, graphic designs and paintings'
            }
        ],
        cards2:[
            {
                title: 'Wacom + Painter 2021',
                description:'Satisfy all your digital painting needs with the power and precision of these award-winning bundles.',
                background:'assets\\img\\wacom-painter.jpg',
                img:'assets\\img\\wacom.png',
                backgroundBody: 'purple'
            },

            {
                title: 'Painter Masters',
                description:'Gain inspiration and knowledge from professional artists who have mastered Painter, and excel in their craft.',
                img:'assets\\img\\painter-master.jpg',
                backgroundBody: 'grey'
            },

            {
                title: 'Business & Education',
                description:'Save money on our award-winning painting software thanks to affordable and flexible licensing options.',
                img:'assets\\img\\business-education.jpg',
                backgroundBody: 'blue'

            }
        ],
        lists: [
            {
                name:'products',
                items: [
                    {text:'Corel Painter', link:''},
                    {text:'ParticleShop', link:''},
                    {text:'Painter Essentials', link:''},
                    {text:'Special Offers', link:''},
                    {text:'Free Trials', link:''},
                    {text:'All products', link:''}
                ]
            },

            {
                name:'quick links',
                items: [
                    {text:'Licensing', link:''},
                    {text:'Tutorials & Tips', link:''},
                    {text:'Webinars', link:''},
                    {text:'The Painter Factory', link:''},
                    {text:'Discovery Center', link:''},
                    {text:'Beta Programs', link:''}
                ]
            },

            {
                name:'support',
                items: [
                    {text:'Register your product', link:''},
                    {text:'Patches & Updates', link:''},
                    {text:'Knowledgebase', link:''},
                    {text:'Uninstall instructions', link:''},
                    {text:'Free Trials', link:''},
                    {text:'Contact us', link:''}
                ]
            },

            {
                name:'about corel',
                items: [
                    {text:'Company information', link:''},
                    {text:'Newsroom', link:''},
                    {text:'Careers', link:''},
                    {text:'Partner Program', link:''},
                    {text:'Legal Information', link:''},
                    {text:'Legal Information', link:''},
                    {text:'EULA', link:''}
                ]
            },
        ]
    },
})
