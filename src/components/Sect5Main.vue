<template>
    <div class="section">
        <div class="container">
            <div class="boxtouch">
                <div class="touch">
                    <div class="box">
                        <h5>SEND A MESSAGE</h5>
                    </div>
                    <div class="box">
                        <span>Get in</span>
                        <span>Touch</span>
                    </div>
                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>  
                </div>

                <div class="input">
                    <div>
                        <div class="text">
                            <input type="text" placeholder="Name">
                            <input type="text" placeholder="Email">
                        </div>

                        <div class="text">
                            <input type="text" placeholder="phone">
                            <input type="text" placeholder="More info">
                        </div>    
                        <textarea name="" id="" cols="30" rows="10">Message</textarea> 
                        <button>SEND</button>                                  
                    </div> 
                </div>
            </div>
           

            <div class="example">
                <h3 class="box2">Example inc.</h3>
                <p class="box2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p class="box2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="box2">
                    <font-awesome-icon icon="fa-solid fa-phone"  class="green icons"/>
                    <span class="green">+1 (305) 1234-5678</span>
                </div>

                <div class="box2">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="green icons" />
                    <span class="green">hello@example.com</span>
                </div>

                <div class="box2">
                    <font-awesome-icon icon="fa-solid fa-location-dot" class="green icons" />
                    <span class="green">Main Avenue, 987</span>
                </div>

                <button class="box2">VIEW MAP</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sect5Main'
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        padding: 100px 0px;
    }

    .boxtouch{
        width: 50%;
    }

    .touch{

        h5:first-child{
            color: #058283;
        }

        span{
            font-size: 2.5rem;
        }

        span:nth-child(2){
            background: rgba(5, 130, 131, 0.3);
            padding: 5px 10px;
            color: #058283;
        }
    }

    .box{
        margin-bottom: 20px;
    }

    .input{
        width: 100%;

        button{
            background-color: #058283;
            padding: 10px 20px;
            border: none;
            color: white;
            margin-top: 20px;
        }
    }

    .text{
        display: flex;
        justify-content: space-between;

        input{
            padding: 10px;
            width: 100%;
            margin: 10px 10px 10px 0px;
        }

    }

    textarea{
            width: 98.5%;
            padding: 10px;
            margin-top: 10px;
        }

        

    .example{
       /*  width: 30%; */
       margin-left: 40px;
    }

    .box2{
        margin-bottom: 40px;
        .green{
            color: #058283;
        }
        .icons{
            background: rgba(5, 130, 131, 0.3);
            padding: 10px;
            border-radius: 50%;
        }

        span{
            margin-top: 10px;
        }
    }

    button{
            border: 1px solid #058283;
            padding: 10px 20px;
            
            color: #058283;
            
        }
</style>