<template>
  <div class="list__add-container container-fluid bg-primary">
    <h2>Randomize a list!</h2>
    <form @submit="checkForm">
      <div id="app" class="row">
        <div class="col-xs-4 col-xs-offset-4" v-for="(item, index) in items">
          <div class="input-group list__add-inputs">
            <input type="text" class="form-control" placeholder="Enter item" v-model="item.value">
            <span class="input-group-btn">
              <button type="button" class="btn btn-danger" @click="removeItem(index)">Remove</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-default" type="button" @click="addItem">New Item</button>
      </div>
      <div class="row">
        <button class="btn btn-success">Submit</button>
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

.list__add-container {
  min-height: 100vh;
}

.list__add-inputs {
  margin: 2% 0%;
}

</style>
