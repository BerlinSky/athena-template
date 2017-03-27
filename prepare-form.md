# Form Validation 

### Add required form attributes

1. add "nonvalidate"
2. add "class="js-campaignForm" (This CSS class will be used by JS as "the form selector")
```
<form action="http://google.com" method="post" autocomplete="off" novalidate class="js-campaignForm">

```

### add "required-msg" attribute to the input element
```
<input id="entry-6133" name="firstName" type="text" value="" required="required" required-msg="Please enter a required value 6133" class="dataInput">
```

### add a "span" element as a sibling to the input label
1. ensure the ID of the span is the ID of the input with "-error" suffix.
2. add "class="inputError" attribute
```
<label for="firstName">First Name</label>
<span id="entry-6133-error" class="inputError"></span>
```
