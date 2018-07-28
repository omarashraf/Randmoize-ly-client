<template>
  <div class="container-fluid bg-primary">
    <div class="landing__container">
      <div class="landing__sub-container">
        <div class="landing__title">Randomzing lists and knockout draws has never been easier</div>
        <div class="landing__buttons-container">
          <button class="btn btn-success landing__buttons landing__lists-btn">Lists</button>
          <button class="btn btn-success landing__buttons landing__draws-btn">Draws</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing__container {
  min-height: 100vh;
  position: relative;
  width: 100%;
}

.landing__sub-container {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
}

.landing__title {
  font-size: 30px;
  margin-bottom: 1em;
}

.landing__buttons {
    color: #fff;
    padding: 1.8em;
    min-width: 7em;
    margin-right: 1em;
    margin: 0em 1em 2em 0em;
    font-size: 24px;
}

@media screen and (max-width: 500px) {
    .landing__title {
      font-size: 14px;
    }

    .landing__buttons {
      font-size: 12px;
      min-width: 3em;
      padding: 0.6em;
    }
}
</style>
