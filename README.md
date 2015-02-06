# fixit

description coming

To include
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.fixit.min.js"></script>
```

To add elements
```javascript
$(document).fixit({
  t:20, // to set fixed area on top of page
  b:30, // to set fixed area on bottom of page
  f:[], // to add list of floating menus
  fx:[], //to add list of horizontal menu bars to fix on top while scrolling
  tL:$(selector) //to add list of elements whose position is to change when fx elements fixes on top and changes windows view area
});
```

To update
```javascript
$(document).fixit();
```

Sample
```html
```
