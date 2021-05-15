<template>
  <table>
    <tbody>
      <tr>
        <td>ㄱ</td><td>ㄴ</td><td>ㄷ</td><td>ㄹ</td><td>ㅁ</td><td>ㅂ</td><td>ㅅ</td>
      </tr>
      <tr>
        <td>ㅇ</td><td>ㅈ</td><td>ㅊ</td><td>ㅋ</td><td>ㅌ</td><td>ㅍ</td><td>ㅎ</td>
      </tr>
    </tbody>
   </table>
 
  

</template>

<script>
  export default {
    data () {
      return {
        toggle_exclusive: undefined,
      }
    },
  }
</script>

<style>
/* *{
    margin: 0; padding: 0;
    font-family:'맑은 고딕', 'Malgun Gothic', Gothic, sans-serif;
} */
  table{
    margin: 3% auto;
    width: 80%;
    height: 100px;
    background-color: lightgray;
    margin-bottom: 50px;
}
  table td{
    text-align: center;
    border-collapse: collapse;
    border: 1px solid black;
  }
</style>


<v-btn
  color="primary"
  outlined
  plain
  raised
></v-btn>