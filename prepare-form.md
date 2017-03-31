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

### add "pattern" and "pattern-msg" attributes to the target input elements
```
input(id='entry-6141' name="favNumber" type="date" required="required" value="" required-msg="Please enter a required value 6141" pattern="^\d{2}\/\d{2}\/\d{4}$" pattern-msg="The date value is invalid.").dataInput
```

### add "number-msg" to each number input element:
```
input(id='entry-6141' name="favNumber" type="number" number-msg="Only numberic value is allowed.").dataInput
```

### add "email-msg" to each number input element:
```
input(id='entry-6132' name="email" type="email" value="" required="required" required-msg="Please enter a required value 6132", email-msg="Only valid email address is allowed.").dataInput
```

### add "partner-id" and "equality-msg" for any matching inputs.
```
input(id='entry-6138' name="mobileVerify" type="text" required="required" partner-id="entry-6136" equality-msg="Do not match!!!" value="" required-msg="Please enter a required value 6138").dataInput
```

### add class="js-fileUploader" to the file upload input:
```
<input id="upload" name="upload" type="file" multiple="" class="js-fileUploader">
```

### add class="js-fileUploaded to the text input that houses the file name(s):
```
<input id="entry-8727" name="upload" type="text" value="" required="required" required-msg="Please enter a required value 8727" class="js-fileUploaded">
```

### remove all inline form validation JavaScripts

### Localization Process

#### Step 1. Each name/value pair is stored a language-specific ".po" file, for example, "Module/Application/language/fr_FR.po", for French translation.

#### Step 2. A comiler, poedit, is then used to compile the ".po" file.

#### Step 3. The output of poedit results a ".mo" file, form example, "Module/Application/language/fr_FR.mo"

#### Step 4. How is the translate method defined?  (Get the details from Charles)

#### Step 5. In our php programe, we invoke the "translate" method:  (Where is the translatte method defiend?)

```
$this->getView()->translate("Terms and Conditions")
```
