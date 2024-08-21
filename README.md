1. Create the Google Calendar. Go to the settings for the calendar and note down the "Calendar ID".

2. Create a Google Form, with no questions. 

3. Check the Google Form settings and require it to collect verified user email addresses.

4. Check under Google Form Settings / Responses that you haven't got it restricted to a partcular organisation.

5. From the top right of Google Form, click the "..." button and navigate down to "Script editor".

6. In the new tab that has opened, navigate to 'editor' and copy the code from `Code.gs` in this repository.

7. Update `CALENDAR_ID` and `FORM_ID` in your google form.

8. In the left hand side of Google Apps Script, select the "+" next to "Services". Add Google Calendar v3.

9. In Google Apps Script navigate to the Triggers button on the left, and create a trigger. The event type should be "from Form" and the function is "onFormSubmit".

10. In Google Apps Script editor, in the top menu select the drop down and select "testEditAccess" and then run the function. Doing this the first time will make sure that all the permissions are set up orrectly. Google will ask you if it is OK to do certain things. You will only be asked this once.

11. Have someone try out the Google Form! When they fill it out they should get two emails: one as a receipt of their form submission, and a notification that they now have access to the calendar.
