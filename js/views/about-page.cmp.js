import { eventBus } from '../services/eventBus-service.js'

export default {
    template:`
        <section class="about-page app-main main-layout">
        <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo, similique reprehenderit non quas exercitationem praesentium asperiores rerum quia veritatis dolorum excepturi libero explicabo. Consectetur accusamus dolor sapiente vel suscipit!
            Nulla sunt sapiente velit. Eos inventore quis illum, dolorem obcaecati numquam aperiam dolor delectus, similique fuga ducimus soluta at maiores eum quia cumque porro possimus magnam dignissimos neque sunt. Consectetur.
            Quidem ducimus doloribus eaque voluptatem repudiandae fuga autem maiores ipsum. Deleniti, laboriosam at qui ipsa magni, sed accusamus veniam iste, beatae veritatis dolores atque expedita pariatur nobis unde aliquid officia.
            Nulla voluptates in quibusdam itaque necessitatibus, adipisci mollitia ut sequi totam tempora praesentium et reiciendis ducimus fugiat architecto excepturi odit ullam aliquid. Dignissimos possimus officia doloribus sed molestiae saepe obcaecati!
            Aliquid, cum nam doloribus quibusdam, nostrum perferendis eos sit maiores rem veritatis consectetur ab aut? Numquam quia asperiores nesciunt, aperiam adipisci fuga blanditiis ea ut nisi cumque dolore voluptates quas?
            </p>
            <img src="img/books.png" alt="">
<!-- 
            <h3>This is an about page</h3>
            <button @click="callBus">Call the bus</button> -->
        </section>
    `,
    created(){
        // var aboutInt = setInterval(() => console.log('Created...'), 1000)

    },
    methods:{
        callBus(){
            console.log('Calling bus!');
            eventBus.emit('test','test data')
        }
    },
    unmounted(){
        console.log('done...')
        // clearInterval(this.aboutInt)
    }
}