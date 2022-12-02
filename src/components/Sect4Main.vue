<template>
    <div class="section">
        <div class="container">
            <div class="letter">
                <div class="box">
                    <h5>NEWSLETTER</h5>
                </div>
                <div class="box">
                    <span>Know</span>
                    <span>First</span>
                </div>
                <div class="box">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nobis a quos maiores labore, deleniti dolores soluta error.</p>
                </div>
            </div>

            <div class="input">
                <div class="box">
                    <h5>Name</h5>
                </div>
                <div class="box">
                    <h5>Email</h5>
                </div>
                <div class="box">
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sect4Main'
    }
</script>

<style lang="scss" scoped>
    .section{
        background-image: url('../assets/img/bg-1.jpg');
        background-repeat: no-repeat;   
       background-position: center;
        
    }

    .container{
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 130px;
    }

    .letter{
        width: 50%;
        h5{
            color: #058283;
        }

        span{
            color: white;
            font-size: 2.5rem;
        }

        span:first-child{
            background: rgba(5, 130, 131, 0.3);
            padding: 5px 10px;
        }

        p{
            color: lightgrey;
        }
    }

    .box{
        margin-bottom: 25px;
    }

    .input{
        width: 50%;

        h5{
            background-color: rgb(211, 211, 211, 0.5);
            color: grey;
            padding: 10px;
        }

        button{
            background-color: #058283;
            padding: 10px 20px;
            border: none;
            color: white;
        }
    }


</style>