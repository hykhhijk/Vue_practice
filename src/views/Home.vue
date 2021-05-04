<template>
    <div>
        <h1> Hello World! {{ title2 }} </h1>
        <input type="text" v-model="input1"/>                <!-----input value대신 v-model 사용----->
        <button type="button" @click="getdata">GET</button>                   <!-----onclick대신 @click 사용----->
        <button type="button" @click="setdata">SET</button>                  
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{                 //위에 {{ title}}형식으로 data binding
            title:"뷰", 
            title2: "Sinchang",
            input1: "hkhhijk",         
        };
    },
    methods:{
        getdata(){
            alert(this.input1);
        } ,
        setdata(){
            this.input1 = "12345"; 
        },
    }
})
</script>