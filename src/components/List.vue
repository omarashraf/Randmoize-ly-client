<template>
  <div class="list__add-container">
    <h2>Randomize a list!</h2>
    <form @submit="checkForm">
      <div id="app">
        <h1>Items</h1>
          <div v-for="(item, index) in items">
            <input v-model="item.value">
            <button type="button" @click="removeItem(index)">Remove Item</button>
          </div>
          <button type="button" @click="addItem">New Item</button>
          <button>Submit</button>
          <button type="button" @click="show">Show</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',
  data() {
    return {
      errors: [],
      items: [{ value: null }]
    }
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];

      if (this.items.some((x) => { return x.value == null; })) {
        console.log('SOME VALUES ARE EQUAL TO NULL');
        this.errors.push('Please make sure all fields are filled.');
      }

      if (!this.errors.length) {
        let itemsJoined = this.items.reduce(this.joinDashes, '');
        itemsJoined = itemsJoined.substring(0, (itemsJoined.length - 1))
        console.log('valid form');      
        this.submitForm(itemsJoined);
      }

      e.preventDefault();
    },
    addItem: function () {
      this.items.push({ value: null });
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
    },
    joinDashes: function (agg, el) {
      return agg + el.value + '-';
    },
    submitForm(items) {
      axios.get(`http://localhost:3000/randomizeList/${items}`).then(res => {
        // console.log('RES --> ', res.data.data);
      });
    },
    show() {
      for (let i = 0; i < this.items.length; i++) {
        console.log(this.items[i].value);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
