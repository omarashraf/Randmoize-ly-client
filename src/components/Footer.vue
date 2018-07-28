<template>
  <div class="container">
      <div class="row footer bg-info">
          <div class="footer__title">Randomize-ly</div>
          <div class="footer__content">*slogan for randomizing using available features*</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    height: 8em;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    color: #337ab7;
    margin: 0px;
}

.footer__title {
    padding: 25px 0px 0px 0px;
    font-size: 18px;
    line-height: 20px;
}

.footer__content {
    padding: 15px 0px 0px 0px;
    font-size: 14px;
    line-height: 16px;
}
</style>
