<template>
    <div>
        <div class="container">
        <div class="box">
            <div class="clock">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <span>Open Hours:Mon-Sat-9:00-18:00</span>
            </div>

            <div class="icons">
                <div class="numb">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                    <span>+1 (305) 1234-5678</span>
                </div>

                <div class="mail">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    <span>hello@example.com</span>
                </div>

                <div class="social">
                    <font-awesome-icon class="icona" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon class="icona" icon="fa-brands fa-twitter" />
                    <font-awesome-icon class="icona" icon="fa-brands fa-linkedin-in" />
                </div>
            </div>
        </div>

        <div class="jumbo">
            <div class="boxJumbo">
                <div class="logoNext">
                    <span class="nex">NEX</span>
                    <span class="gen">GEN</span>
                </div>

                <div class="boxNav">
                    <span class="nav" v-for="(elem, index) in navBar" :key="index">{{elem}}</span>
                </div>
            </div>
            
            <div class="logistics">
                <div class="boxLog">
                    <div class="box1">
                        <h2>Logistics</h2>
                        <h2>thath goes</h2>
                        <h2>furter.</h2>
                    </div>

                    <div class="box2">
                        <p>For 20 years working with the most innovative in the field of transport.</p>
                    </div>

                    <div class="box3">
                        <h5>GET IN TOUCH</h5>
                        <h5>READ MORE</h5>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>
    export default {
        name: 'HeaderComp',
        props:{
            navBar: Array,          
        },
    }
</script>

<style lang="scss" scoped>
    .container{
        background-color: #21333e;
    }
    .box{
        color: lightgray;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }

    .icons{
        display: flex;
        justify-content: space-between;
    }

    .numb, .mail, .social{
        padding-inline: 20px;
    }

    .icona{
        padding-inline: 10px;
    }

    .jumbo{
        background-image: url('../assets/img/jumbo.jpg');
        width: 100%;
        height: 800px;
        opacity: 0.5;
    }

    .boxJumbo{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }   
    .nav{
        padding: 15px;
        color: white;
        cursor: pointer;
    }

    .boxNav{
        span:last-child{
        background-color: #058283;           
    }
    }


    .gen{
        color: white;
    }
    .nex{
        background: rgba(5, 130, 131, 0.5);
        color: #058283;
        padding: 5px;
        padding-left: 20px;
        border-radius: 50px 5px 5px 50px;
    }

    .logistics{
        width: 80%;
        margin: 0 auto;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-top: 110px;
        margin-left: 50px;
    }

    .boxLog{
        width: 20%;
    }

    .box1, .box2, .box3{
        padding: 15px;
    }

    .box1{
        font-size: 2.2rem;
    }

    .box3{
        display: flex;
        h5:first-child{
            background-color: #058283;
            padding: 5px 10px
        }
        h5:last-child{
            margin-left: 15px;
            border: 1px solid #058283;
            padding: 5px 10px;
        }
    }

</style>