<template>
  <section class="section">
    <!-- Overlay for darker background -->
    <div class="overlay"></div>

    <div class="section-content">
      <Heading class="heading1">
        Where Nature and Heritage Meet
      </Heading>
      <Heading class="heading3">
        Discover the Beauty. Experience the Culture. Cherish the Memories.
      </Heading>
    </div>
  </section>
</template>

<style scoped>
.section {
  position: relative; /* Needed for overlay */
  height: 400px;
  background: url("/images/pangasinan.jpg") center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust opacity here */
  z-index: 1;
}

/* Content on top of overlay */
.section-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 20px;
}

</style>