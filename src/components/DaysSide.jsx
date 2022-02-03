import React from 'react';

const DaysSide = ({guardarGasto, guardarCrearGasto}) => {

  return (
  <div>
<a class="btn btn-dark mb-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Days
</a>

<div class="offcanvas bg-dark offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="dropdown mt-3">
      
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
      Tooltip on top
    </button>
    
    </div>
  </div>
</div>
  </div>
);
};

export default DaysSide;
