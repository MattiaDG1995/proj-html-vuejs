<template>
    <div>
        <div class="container">
            <div class="boxcont">
            <div>
                <img src="../assets/img/logo-5.png" alt="">
            </div>
            <div>
                <img src="../assets/img/logo-1.png" alt="">
            </div>
            <div>
                <img src="../assets/img/logo-2.png" alt="">
            </div>
            <div>
                <img src="../assets/img/logo-3.png" alt="">
            </div>
            <div>
                <img src="../assets/img/logo-4.png" alt="">
            </div>
            <div>
                <img src="../assets/img/logo-5.png" alt="">
            </div>
        </div>

        </div>

        <div class="latest">
            <div class="textlatest">
                <div class="box">
                    <h5>OUR EDITIONAL CONTENT</h5>
                </div>
                <div class="box news">
                    <span>Latest</span>
                    <span>News</span>
                </div>
                <div class="box button">
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem.</span>
                    <button>SEE ALL</button>
                </div>
            </div>

            <div class="imglatest">
                <div class="card">
                    <img src="../assets/img/news-1.jpg" alt="">
                    <h3>Increasing creativity is possible for everyone</h3>
                </div>

                <div class="card">
                    <img src="../assets/img/news-2.jpg" alt="">
                    <h3>Increasing creativity is possible for everyone</h3>
                </div>

                <div class="card">
                    <img src="../assets/img/news-3.jpg" alt="">
                    <h3>Increasing creativity is possible for everyone</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sect3Main'
    }
</script>

<style lang="scss" scoped>
    .container{
        background: rgba(5, 130, 131, 0.1);
    }
    .boxcont{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 100px;
         img{
            filter: brightness(1)
         }
    }

    .latest{
        width: 80%;
        margin: 0 auto;
        padding: 100px 0px;
    }

    .box{
        margin-bottom: 30px;
        h5{
            color: #058283;
        }
    }

    .news{
        span{
            font-size: 2.5rem;
        }

        span:nth-child(2){
            background: rgba(5, 130, 131, 0.3);
            color: #058283;
            padding: 5px 10px;
        }
        
    }

    .button{
        display: flex;
        justify-content: space-between;

        button{
            background-color: #058283;
            padding: 10px 20px;
            border: none;
            color: white;
        }
    }

    .imglatest{
        display: flex;
        justify-content: space-between;
    }

    .card{
        width: 450px;
        position: relative;
        img{
            width: 100%;        
        }

        h3{
            position: absolute;
            bottom: 10px;
            color: white;
            width: 70%;
            right: 35px;
           bottom: 20px;
        }
    }
</style>