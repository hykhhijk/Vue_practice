<template>   
 
<!-- <main class="form-signin "> -->
  <form class=" text-center w-25 mx-auto">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button @click="test" class="w-100 btn btn-lg btn-primary" type="button">Sign in</button>       <!--type = "button" or "submit"를 번갈아가면 송신값 test-->
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

  </form>
<!-- </main> -->
<!--                                gogreen3에있는 Helloworld axios code적용해볼 것-------------------------->

</template>



<script>
  import axios from "axios" //vue에서 아래와 동일의미
  // const axios = require('axios');

export default {
  methods:{
test(){
// Make a request for a user with a given ID
axios.get('https://reqres.in/api/접속하고 싶은 URL적는 곳')
  .then(response => {   //respone대신 resm err 가능
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .then(()=> {              //function()하면 data()로 연동 불가
    // always executed
    console.log("test");
  });
},
posttest(){
  axios.post('https://reqres.in/api/register', {
    email: "eve.holt@reqres.in",
    password: "pistol"
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}

}}
</script>

<style>
/* @media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 940px;
  }
}

/*사실 이 블럭은 없어도 된다*/
/* @media (min-width: 1200px) {
  .container {
    width: 940px;
  }
} */

</style>