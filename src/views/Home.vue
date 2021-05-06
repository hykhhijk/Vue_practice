<template>
    <div>
        <h1> Hello World! {{ title2 }} </h1>
        <input type="text" v-model="input1"/>                <!-----input value대신 v-model 사용----->
        <button type="button" @click="getdata">GET</button>                   <!-----onclick대신 @click 사용----->
        <button type="button" @click="setdata">SET</button> 

        <select class="form-control" v-model="region" @change="changeregion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{ d.t }}</option>
            <!-- attritube로 data접근시엔 :사용 -->
            <!-- html태그로 data접근시엔 {{ ~ }}사용 -->
        </select>   
        
        <table class="table table-bodered" v-show="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>

            </tr>
            </table>              
    </div>
</template>

<script lang="ts">
export default({
    data(){
        return{                 //위에 {{ title}}형식으로 data binding
            title:"뷰", 
            title2: "Sinchang",
            input1: "hkhhijk",   
            options:[
                {v:"S",t:"Suwon"},
                {v:"J",t:"Jeju",},
                {v:"B",t:"Busan",},

            ],
            region:"J",
            tableShow: true,      
        };
    },
    watch:{
        input1(){
            console.log(this.input1);
        }
    },

    methods:{
        getdata(){
            alert(this.input1);
        } ,
        setdata(){
            this.input1 = "12345"; 
        },
        changeregion(){
            alert(this.region); 
        },
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("Created")
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("beforeUpdate")

    },
    updated(){
        console.log("updated")

    },
    beforeDestroy(){
        console.log("beforeDestroy")

    },
    destroyed(){
        console.log("destroyed")

    }
})
</script>