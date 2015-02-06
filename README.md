# fixit

fixit makes elements fix or snap to particular position while scrolling
* less than 1.6kB
* it takes into account the scroll direction and hence fix bottom of menu while scrolling down, and top of menu while scrolling up
* it changes margin-top of already fixed elements when horizontal menu comes and fixes on top
* [Live Demo](http://code.mgvz.com/fixit/)

To include
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.fixit.min.js"></script>
```

To add elements (can also add elements one-by-one)
```javascript
$(document).fixit({ // options
  t:20, // to set fixed area on top of page
  b:30, // to set fixed area on bottom of page
  f:[], // to add list of floating menus
  fx:[], //to add list of horizontal menu bars to fix on top while scrolling
  tL:$(selector) //to add list of elements whose position is to change when fx elements fixes on top and changes windows view area
});

$(document).fixit({ // adding elements to float while scrolling
  f:[
    {
      e:$(selector), // element to float within Parent, parent should have greater height than element
      t:5, // set margin-top of element while floating
      b:10, // set margin-bottom of element while floating
      P:30 // adjust for padding-top of parent while floating
    },
    ...
  ]
});

$(document).fixit({ // adding elements to fix on top
  fx:[
    {
      e:$(selector), // element to fix on top while scrolling
      t:5, // set margin-top of element to fix at
      P:30 // adjust for padding-top of parent while floating
    },
    ...
  ]
});
```

To update
```javascript
$(document).fixit();
```
