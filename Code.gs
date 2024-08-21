const CALENDAR_ID = ""; // Get this from the settings in Google Calendar

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

function onFormSubmit(e) {
  var email = e.response.getRespondentEmail();
  console.log(email);
  grantEditAccess(email);
}

function testEditAccess() {
  // You can change this test email address 
  grantEditAccess("andrew.casey@monash.edu");
}

