<template>
  <div class="wrapper">
    <div class="board">
      <div @click="selectTile(1)" class="tile1 tile">{{tiles[0].value}}</div>
      <div @click="selectTile(2)" class="tile2 tile">{{tiles[1].value}}</div>
      <div @click="selectTile(3)" class="tile3 tile">{{tiles[2].value}}</div>
      <div @click="selectTile(4)" class="tile4 tile">{{tiles[3].value}}</div>
      <div @click="selectTile(5)" class="tile5 tile">{{tiles[4].value}}</div>
      <div @click="selectTile(6)" class="tile6 tile">{{tiles[5].value}}</div>
      <div @click="selectTile(7)" class="tile7 tile">{{tiles[6].value}}</div>
      <div @click="selectTile(8)" class="tile8 tile">{{tiles[7].value}}</div>
      <div @click="selectTile(9)" class="tile9 tile">{{tiles[8].value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      playerNr: 0,
      tiles:[
        {
          nr: 1,
          value: '',
          active: false,
        },
        {
          nr: 2,
          value: '',
          active: false,
        },
        {
          nr: 3,
          value: '',
          active: false,
        },
        {
          nr: 4,
          value: '',
          active: false,
        },
        {
          nr: 5,
          value: '',
          active: false,
        },
        {
          nr: 6,
          value: '',
          active: false,
        },
        {
          nr: 7,
          value: '',
          active: false,
        },
        {
          nr: 8,
          value: '',
          active: false,
        },
        {
          nr: 9,
          value: '',
          active: false,
        },
      ]
    }
  },
  mounted(){
    this.socket = window.socket

    this.socket.on('playerNr', (nr) => {
      this.playerNr = nr
    })
  },
  methods:{
    selectTile(tileNum){
      if(this.playerNr > 2){

      }
      if(this.playerNr == 1){
        // this.tiles[tileNum - 1].value = 'O';
        this.socket.emit('select1', (tileNum))
      }
      if(this.playerNr == 2){
        // this.tiles[tileNum - 1].value = 'X';
        this.socket.emit('select2', (tileNum))
      }
    }
  }
}
</script>
<style scoped>
@import 'assets/styles/indexStyles.css';
</style>