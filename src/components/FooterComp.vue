<template>
    <footer>
        <div class="section">
            <div class="container">
                <div class="box">
                    <div class="box2">
                        <span class="nex">NEX</span>
                        <span class="gen white">GEN</span>
                    </div>

                    <div class="box2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div class="box2">
                        <font-awesome-icon icon="fa-solid fa-phone"  class="icons white"/>
                        <span class="green">+1 (305) 1234-5678</span>
                    </div>

                    <div class="box2">
                        <font-awesome-icon icon="fa-solid fa-envelope" class="icons white" />
                        <span class="green">hello@example.com</span>
                    </div>

                    <div class="box2">
                        <font-awesome-icon icon="fa-solid fa-location-dot" class="icons white" />
                        <span class="green">Main Avenue, 987</span>
                    </div>

                    <button class="white">GET IN TOUCH</button>
                </div>
                    
                <div class="card">
                    <h3 class="white">About</h3>
                    <ul>
                        <li v-for="(elem, index) in about" :key="index"><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{elem}}</li>
                    </ul>
                </div>

                <div class="card">
                    <h3 class="white">Transport</h3>
                    <ul>
                        <li v-for="(elem, index) in transport" :key="index"><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{elem}}</li>
                    </ul>
                </div>

                <div class="card">
                    <h3 class="white">Support</h3>
                    <ul>
                        <li v-for="(elem, index) in support" :key="index"><font-awesome-icon icon="fa-solid fa-chevron-right" /> {{elem}}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="sect2foot">
            <div class="cont2">
                <div>
                    <p>Enjoy the òow price. We are tracking any intention of piracy</p>
                </div>

                <div>
                    <span>2020 NEXGEN is proudly powered by</span>
                    <span class="green"> Codings.</span>
                </div>

                <div>
                    <font-awesome-icon icon="fa-solid fa-arrow-up" class="arrow" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name :'FooterComp',
        props:{
            about: Array,
            transport: Array,
            support: Array
        }
    }
</script>

<style lang="scss" scoped>
    .section{
        background-image: url('../assets/img/bg-10.jpg');
        background-repeat: no-repeat;   
        background-position: center;
    }

    .container{
        width: 80%;
        margin: 0 auto;
        color: grey;
        display: flex;        
        justify-content: space-between;
        padding: 90px 0px;
    }

    .box{
        width: 25%;
    }

    .white{
        color: white;
    }
    .nex{
        background: rgba(5, 130, 131, 0.2);
        color: #058283;
        padding: 5px;
        padding-left: 20px;
        border-radius: 50px 5px 5px 50px;
    }

    button{
            border: 1px solid #058283;
            padding: 10px 20px;          
            color: white; 
            background-color: transparent;         
        }

    .box2{
        margin-bottom: 30px;
    }


    .icons{
        margin-right: 10px;
    }

    .card{
        background-color: rgb(128, 128, 128, 0.1);
        border-radius: 15px;
        padding-left: 50px;
        padding-top: 30px;
        width: 20%;
              
            h3{
                margin-bottom: 30px;
            }

            li{
                margin-bottom: 15px;
            }
    }

    .sect2foot{
        background-color: #0D0D11;
    }

    .cont2{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        color: grey;
        padding: 20px 0px;
        position: relative;

        .green{
            color: #058283;
        }

        .arrow{
            color: #0D0D11;
            background-color: rgb(128, 128, 128, 0.1);
            padding: 20px;
            border-radius: 50%;
            position: absolute;
            bottom:20px;
        }
    }

</style>