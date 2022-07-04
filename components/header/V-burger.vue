<template>
  <div>
    <b-button v-b-toggle.sidebar-right variant="none">
      <svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="-8.74228e-08" y1="1" x2="38" y2="0.999997" stroke="white" stroke-width="2"/>
        <line x1="-8.74228e-08" y1="12" x2="38" y2="12" stroke="white" stroke-width="2"/>
        <line x1="-8.74228e-08" y1="22" x2="38" y2="22" stroke="white" stroke-width="2"/>
      </svg>
    </b-button>

    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>