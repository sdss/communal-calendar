const CALENDAR_ID = ""; //"andrew.casey@monash.edu"; 
const FORM_ID = ""; // Get this from the URL of the Google Form

function grantEditAccess(email) {
  return Calendar.Acl.insert(
    {
      'scope': {
        'type': 'user',
        'value': email,
      },
      'role': 'writer'
    },
    CALENDAR_ID
  );
}

function testEditAccess() {
  grandEditAccess("andrew.casey@monash.edu");
}

function onFormSubmit(e) {
  var email = e.response.getRespondentEmail();
  console.log(email);
  grantEditAccess(email);
}

function grantEditAccessToAllPreviousRespondents() {
  const form = FormApp.openById(FORM_ID);

  const formResponses = form.getResponses();
  
  for (const formResponse of formResponses) {
    console.log(`Respondent Email: ${formResponse.getRespondentEmail()}`);
    grantEditAccess(formResponse.getRespondentEmail());
  }  
}
