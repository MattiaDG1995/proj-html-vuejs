<template>
    <div class="section">
        <div class="container">
        <div class="services">
            <h5>Our Businnes Areas</h5>
            <div>
                <div class="box1">
                    <h2>Logistics Services</h2>
                </div>

                <div class="box2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem asperiores officiis veniam iste maxime deserunt commodi.</p>
                </div>

                <div class="box3">
                    <span>Tradition</span>
                    <span>Quality</span>
                    <span>Security</span>
                </div>

                <div class="box4">
                    <button>READ MORE</button>
                </div>
            </div>         
        </div>

        <div class="technology">
            <div class="box5">
                <img src="../assets/img/gallery-3.jpg" alt="">
            </div>

            <div class="box6">
                <h3>Technology</h3>
            </div>

            <div class="box7">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta quos a doloremque saepe autem quod ad impedit cupiditate?</p>
            </div>
        </div>

        <div class="transport">
            <div class="box5">
                <img src="../assets/img/gallery-5.jpg" alt="">
            </div>

            <div class="box6">
                <h3>Transport</h3>
            </div>

            <div class="box7">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta quos a doloremque saepe autem quod ad impedit cupiditate?</p>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script>
    export default {
        name: 'Sect1Main'
    }
</script>

<style lang="scss" scoped>

.section{
    background: rgba(5, 130, 131, 0.1);
}
    .container{
        width: 80%;
        margin: 0 auto;
        padding: 80px 0px;
        display: flex;
        justify-content: space-between;
    }

    .services{
        width: 15%;

        h5{
            color: #058283;
        }
    }

    .box1, .box2, .box3, .box4{
        padding: 15px 0px;
    }

    .box1{
        font-size: 2rem;
    }

    .box3{
        span{
            background: rgba(5, 130, 131, 0.3);
            color: #058283;
            padding: 5px 8px;
            margin-right: 10px;  
        }
    }

    .box4{     
        button{
            background-color: #058283;
            padding: 10px 20px;
            color: white;
            border: none;
        }       
    }

    .technology{

        width: 15%;
        img{
            width: 220px;
        }
    }

    .box5, .box6, .box7{
        padding: 10px 0px;
    }

    .box7, .box2{
        color: grey;
    }

    .transport{
        width: 15%;
        img{
            width: 220px;
        }
    }
</style>