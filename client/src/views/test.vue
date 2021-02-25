<template>
    <div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&display=swap" rel="stylesheet" />

        <p class="foreword-layout">{{foreword}}</p>
        <p class="card-prototype-label">CARD PROTOTYPE</p>
        <div id="company-card">
            <div id="company-logo"></div>
            <hr id="star-line" />
            <img :src="starSolid" id="first-star" alt="Star Solid"/>
            <img :src="starSolid" id="second-star" alt="Star Solid"/>
            <img :src="starSolid" id="third-star" alt="Star Solid"/>
            <img :src="starSolid" id="fourth-star" alt="Star Solid"/>
            <img :src="starOutline" id="fifth-star" alt="Star Outline"/>

            <hr id="save-line" />
            <span id="save-label">SAVE</span>
            <img :src="saveIcon" id="save-vector" alt="Save Vector" />

            <span id="company-name">{{companyName}}</span>
            <span id="company-description">{{companyDescription}}</span>
            <div id="icons-container">
                <img :src="payVector" id="pay-vector" alt="Cash Icon" />
                <span id="pay-label">{{payValue}}</span>
                <img :src="timeVector" id="time-vector" alt="Time Icon" />
                <span id="time-label">{{timeValue}}</span>
                <img :src="mapVector" id="map-vector" alt="Map Icon" />
                <span id="map-label">{{mapValue}}</span>
            </div>

            <hr id="bottom-line" />
            <span v-on:click="seeReviewsEventHandler" id="see-reviews-text">SEE REVIEWS</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test",
        data () {
            return{
                foreword: "TESTING / LAYOUTING PROTOTYPES HERE",
                starSolid: require('../assets/Star.svg'),
                starOutline: require('../assets/star-outline.svg'),
                saveIcon: require('../assets/bookmark-solid.svg'),
                payVector: require('../assets/cash.svg'),
                payValue: "PAYS SALARY",
                timeVector: require('../assets/time.svg'),
                timeValue: "FLEXITIME",
                mapVector: require('../assets/map.svg'),
                mapValue: "MAKATI, NCR",
                companyName: "EDUKASYON.PH",
                companyDescription: "Edtech social enterprise connecting students to education & career opportunities.",
            }
        },
        methods: {
            seeReviewsEventHandler: () => {
                alert("SEE REVIEWS CLICKED!"); 
            }
        }
    }
</script>

// - - > FILE SASS LAYOUT FOR THE TEMPLATES
<style lang="scss">
    .foreword-layout{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 22px;
        font-weight: 700;
        color: black;
    }
    .card-prototype-label{
        position: absolute;
        top: 70px;
        left: 30px;

        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: 400;
        color: black;
    }
    #company-card{
        position: absolute;
        top: 100px;
        left: 20px;
        width: 500px;
        height: 264px;

        background: #231B3F;
        border-radius: 5px;
        box-shadow: 0px 4px 50px rgba(12, 9, 23, 0.5);

        // - - > COMPANY LOGO
        #company-logo{
            position: absolute;
            left: 196px;
            right: 196px;
            top: -55px;
            width: 108px;
            height: 108px;
            
            background-image: url('../assets/eduaksyon.png');
            background-size: cover;
            background-attachment: scroll;
            background-repeat: no-repeat;
            background-position: center center;
            border: 2px solid #231B3F;
            border-radius: 5px;
            transition: 0.35s ease-in-out;

            &:hover{
                top: -65px;
                cursor: pointer;
            }
        }

        // - - > STAR UNDER LINE (Section)
        #star-line{
            position: absolute;
            left: 0px;
            top: 51px;
            width: 143px;
            height: 1px;

            border-width: 0px;
            background-color: #5A5468;
        }
        #first-star{
            position: absolute;
            width: 23px;
            height: 23px;
            top: 15px;
            left: 6px;
        }
        #second-star{
            position: absolute;
            width: 23px;
            height: 23px;
            top: 15px;
            left: 35px;
        }
        #third-star{
            position: absolute;
            width: 23px;
            height: 23px;
            top: 15px;
            left: 63px;
        }
        #fourth-star{
            position: absolute;
            width: 23px;
            height: 23px;
            top: 15px;
            left: 90px;
        }
        #fifth-star{
            position: absolute;
            width: 23px;
            height: 23px;
            top: 15px;
            left: 117px;
        }

        // - - > SAVE UNDER LINE (Portion)
        #save-line{
            position: absolute;
            right: 0px;
            top: 51px;
            width: 143px;
            height: 1px;

            border-width: 0px;
            background-color: #5A5468;
        }
        #save-vector{
            position: absolute;
            width: 12px;
            height: 16px;
            top: 21px;
            right: 67px;

            filter: invert(14%) sepia(69%) saturate(1060%) hue-rotate(226deg) brightness(94%) contrast(91%);
            transition: 0.35s ease-in-out;

            &:hover{
                cursor: pointer;
            }
        }
        #save-label{
            position: absolute;
            width: 44px;
            height: 16px;
            top: 21px;
            right: 15px;

            font-family: 'Maven Pro', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            align-items: center;
            color: #FBE7D0;

            &:hover{
                cursor: pointer;
            }
        }

        // - - > COMPANY DETAILS
        #company-name{
            position: absolute;
            width: 317px;
            height: 29px;
            top: 73px;
            left: 145px;

            font-family: 'Maven Pro', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 28px;
            display: flex;
            text-align: center;
            align-items: center;
            color: #EAEAEA;
        }
        #company-description{
            position: absolute;
            width: 473px;
            height: 48px;
            top: 112px;
            left: 10px;

            font-family: 'Maven Pro', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 121%;
            letter-spacing: 0.01em;
            text-align: center;
            color: #C6C4CB;            
        }

        // - - > Icons / Widgets Thingy
        #icons-container{
            position: absolute;
            height: 16px;
            top: 173px;
            width: 400px;
            left: 38px;

            display: flex;
            align-items: center;
            background: transparent;

            // - - > ICONS ELEMENTS
            #pay-vector{
                position: absolute;
                left: 40px;
                top: 1px;
                width: 16px;
                height: 16px;
            }
            #pay-label{
                position: absolute;
                width: 90px;
                height: 12px;
                left: 55px;
                top: 3px;

                font-family: 'Maven Pro', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 12px;
                align-items: center;
                text-align: center;
                color: #C6C4CB;
            }
            #time-vector{
                position: absolute; 
                top: 1px; 
                width: 14px;
                height: 16px;
                left: 160px;
            }
            #time-label{
                position: absolute;
                width: 74px;
                height: 12px;
                left: 180px;
                top: 3px;

                font-family: 'Maven Pro', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 12px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #C6C4CB;
            }
            #map-vector{
                position: absolute; 
                left: 265px;
                top: 1px;
                width: 16px;
                height: 16px;
            }
            #map-label{
                position: absolute;
                width: 90px;
                height: 12px;
                left: 290px;
                top: 3px;

                font-family: 'Maven Pro', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 12px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #C6C4CB;
            }
        }

        // - - > BOTTOM DIVIDER
        #bottom-line{
            position: absolute;
            top: 215px;
            left: 0%;
            right: 0%;
            height: 1px;

            border-width: 0px;
            background-color: #5A5468;
        }
        #see-reviews-text{
            position: absolute;
            top: 230px;
            width: 120px;
            height: 16px;
            left: 187px;

            font-family: 'Maven Pro', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19px;
            line-height: 19px;
            text-align: center;
            color: #C6C4CB;

            &:after{ // child of the see-reviews-button
                background: none repeat scroll 0 0 transparent;
                bottom: -5px;
                content: "";
                display: block;
                height: 2px;
                left: 50%;
                position: absolute;
                background: #C6C4CB;
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 0;
            }
            &:hover{
                cursor: pointer;
            }
            &:hover:after{
                width: 100%;
                left: 0;
            }
        }
    }
</style>