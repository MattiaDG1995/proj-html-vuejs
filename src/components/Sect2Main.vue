<template>
    <div class="section">
        <div class="company">
            <div class="boxcont">
                <div class="box1">
                    <h5>ABOUT THE NETWORK</h5>
                </div>

                <div class="box2">
                    <span>The</span>
                    <span>Company</span>
                </div>

                <div class="box3">
                    <p class="grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusantium, temporibus adipisci, voluptas accusamus</p>
                </div>

                <div class="contperc">
                    <div class="boxperc">
                        <div class="numb">
                            <h2 class="percent">0%</h2>
                        </div>
                        <div>
                            <h2 class="leader">Leadership</h2>
                            <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    
                    <div class="boxperc">
                        <div class="numb">
                            <h2 class="percent">0%</h2>
                        </div>
                        <div>
                            <h2 class="leader">Psychology</h2>
                            <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>   

                    <div class="boxperc">
                        <div class="numb">
                            <h2 class="percent">1%</h2>
                        </div>
                        <div>
                            <h2 class="leader">Flexibility</h2>
                            <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>   
                </div>

            </div>
        </div>

        <div class="contimg">
            <img src="../assets/img/about-5.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sect2Main'
    }
</script>

<style lang="scss" scoped>

    .section{
        display: flex;
    }
    .company{
        background-color: #111117;
        color: white;
        width: 50%;
    }

    .boxcont{
        width: 65%;
        margin: 0 auto;
        margin-top: 150px;
    }

    .box1, .box2, .box3{
        padding: 10px;
    }

    .box1{
        color: #058283;
    }

    .box2{
        font-size: 3rem;
        span:first-child{
            background: rgba(5, 130, 131, 0.3);
            padding: 5px 8px;
        }
    }

    .contperc{
        margin-top: 50px;
    }
    .boxperc{
        display: flex;
        padding: 30px 0px;
    }

    .percent{
        border: 8px solid grey;
        border-radius: 50%;
        padding: 15px;
    }

    .numb{
        margin-right: 15px;
    }

    .leader{
        margin-bottom: 20px;
    }
    .contimg{
        width: 50%;
        img{         
            width: 100%;
            display: block;
        }
    }

    .grey{
        color: grey;
    }
</style>