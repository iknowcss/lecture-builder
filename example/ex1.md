<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

# Events

## Prevent default actions
### Input HTML
```html
xkcd - <a id="pbd" href="http://xkcd.com/375/">Pod Bay Doors</a>
```

### jQuery
```javascript
$('#pbd').bind('click', function (e) {
  
  if (e) e.preventDefault();

  alert('I\'m sorry Dave, I\'m afraid I can\'t do that.');

});
```

### Result
> xkcd - <a id="pbd" href="http://xkcd.com/375/">Pod Bay Doors</a>

```exec-javascript
$('#pbd').bind('click', function (e) {
  
  if (e) e.preventDefault();

  alert('I\'m sorry Dave, I\'m afraid I can\'t do that.');

});
```