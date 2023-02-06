# Clickfunnels-Multi-Step-Form-with-required-fields-validation
This is how you convert clickfunnels form to a multi step form with required fields validation.


I have done this javascript jQuery code to create multistep form for some of my clients on clickfunnels.

And I thought other people would also need this. So I am sharing this here.

Process to implement this is simple.

1. Edit the page in clickfunnels classic 1.0 builder where you want to implement this.
2. Create form fields for each step in a row or a section.
3. Add button to go to next step. Set Action on the button to "Show/Hide Action"
4. Select the current row/section you would like to hide in "Hide These". (Pro tip here is give data titles to each section/row to make this easier for you e.g 'step 1', 'step 2' etc)
5. Select the next row/section you would like to show as next questions set in "Show These" option.
6. Copy the code from code.js to "Settings > Tracking Code > Footer Code"
7. Save the Page and you are done.


This code will check if there are required fields in each step and get user back to previous step if there are any un-filled/empty input fields in previous step.

Feel Free to contact me if you need any help or stuck any where in process. I would love to help out.
