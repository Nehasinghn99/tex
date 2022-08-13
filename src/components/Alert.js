import React from 'react'

function Alert(props) {
  // const capitalize = (word)=>{
  //   const lower = word.toLowerCase();
  //   return lower.chartAt(0).toUpperCase() + lower.slice(1);
  // }
  return (
    <div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>success</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
    
  )
}

export default Alert
