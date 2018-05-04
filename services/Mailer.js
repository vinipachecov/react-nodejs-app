

//File for handling Mailer methods and functionalities

const sendgrid = require('sendgrid');
// we use help insted of { mail } to follow the sendgrid documentation
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    console.log('sendgrid api = ' + keys.sendGridKey);    
    this.from_email = new helper.Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

//   return our list of arrays formated - remember map returns an array
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
        return new helper.Email(email);
    });
  }

  addClickTracking() {
      const trackingSettings = new helper.TrackingSettings();
      const clickTracking = new helper.ClickTracking(true, true);

      trackingSettings.setClickTracking(clickTracking);
      this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
       const personalize = new helper.Personalization();
       this.recipients.forEach(recipient => {
           personalize.addTo(recipient);
       });
       this.addPersonalization(personalize);
  }

  async send(){
      const request = this.sgApi.emptyRequest({
          method:'POST',
          path:'/v3/mail/send',
          body: this.toJSON()
      });

      const response = this.sgApi.API(request);
      return response;
  }
}

module.exports = Mailer;
