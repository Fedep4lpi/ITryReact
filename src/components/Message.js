//Funzioni innestae

import React from 'react';

function Hi() {
  return (
    <div>Hi</div>
  );
}

function Message() {
  return (
    <div>
       <Hi></Hi> 
    </div>
  );
}

export {Message, Hi};