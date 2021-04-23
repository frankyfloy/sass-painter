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

        <div class="myCard-body">

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
        ]
    },
})
