# Communal Calendar

Create a Google Calendar that (nearly) anyone can access, without all the human effort.

# How the fuck?

This sets up a Google Form that, when submitted, it triggers a Google Apps Script function that adds that person as an editor to an existing Google Calendar. Then you can just share the Google Form link within the SDSS collaboration, and anyone who needs edit access to the calendar can add themselves.

# Instructions

1. Create the Google Calendar. Go to the settings for the calendar and note down the "Calendar ID". The Calendar ID will be something like "lotsofjibberish@group.calendar.google.com".

2. Create a Google Form, with no questions. 

3. Check the Google Form settings and require it to collect verified user email addresses.

4. Check under Google Form Settings / Responses that you haven't got it restricted to a partcular organisation.

5. From the top right of Google Form, click the "..." button and navigate down to "Script editor".

6. In the new tab that has opened, navigate to 'editor' and copy the code from `Code.gs` in this repository.

7. Update the `CALENDAR_ID` variable with what you noted down from Step 1.

8. In the left hand side of Google Apps Script, select the "+" next to "Services". Add Google Calendar v3.

9. In Google Apps Script navigate to the Triggers button on the left (the icon which looks like an alarm clock), and create a trigger. You will need the following details:

 - Choose which function to run: onFormSubmit
 - Select event source: From form
 - Select event type: On form submit

10. In Google Apps Script editor, in the top menu select the drop down and select "testEditAccess" and then run the function. Doing this the first time will make sure that all the permissions are set up correctly. Google will ask you if it is OK to do certain things. You will only be asked this once.

11. Have someone try out the Google Form! When they fill it out they should get a notiication that they now have access to the calendar. They might also get an email receipt of their form submission, depending on whether you enabled that in Google Forms or not.

12. Advertise the link to the Google Form within the SDSS private space (e.g., Wiki, Slack, mailing list).

# Notes

This is definitely a hack. But probably a useful one. 'With great power', etc. 
